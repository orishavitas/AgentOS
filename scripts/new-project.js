#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const {
  ensureDir,
  isDirectory,
  isDirectoryEmpty,
  isFile,
  listFilesRecursive,
  pathExists,
} = require("./lib/fs");
const { findUnresolvedPlaceholders, renderString } = require("./lib/render");
const { getPresetTemplateDir } = require("./lib/presets");
const { parseAgentsFlag, validateAgents } = require("./lib/roles");

function todayISO() {
  // YYYY-MM-DD (local time)
  const d = new Date();
  const yyyy = String(d.getFullYear());
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

function usage() {
  return [
    "Usage:",
    "  node scripts/new-project.js <project-name> --preset <preset> --agents <comma-list> [--goal <text>] [--stack <text>] [--dest <path>] [--in-place] [--force]",
    "",
    "Examples:",
    "  node scripts/new-project.js my-app --preset app --agents sw,design,pm,qa",
    "  # v1 ships with the 'app' preset fully wired; add more presets under templates/presets/",
  ].join("\n");
}

function parseArgs(argv) {
  const out = {
    projectName: null,
    preset: null,
    agentsRaw: null,
    goal: "",
    stack: "",
    dest: null,
    inPlace: false,
    force: false,
    help: false,
  };

  const args = [...argv];
  while (args.length > 0) {
    const a = args.shift();
    if (!a) continue;

    if (!a.startsWith("-") && !out.projectName) {
      out.projectName = a;
      continue;
    }

    if (a === "--help" || a === "-h") {
      out.help = true;
      continue;
    }

    if (a === "--force") {
      out.force = true;
      continue;
    }

    if (a === "--in-place") {
      out.inPlace = true;
      continue;
    }

    const needsValue = new Set(["--preset", "--agents", "--goal", "--stack", "--dest"]);
    if (needsValue.has(a)) {
      const v = args.shift();
      if (!v) throw new Error(`Missing value for ${a}\n\n${usage()}`);
      if (a === "--preset") out.preset = v;
      if (a === "--agents") out.agentsRaw = v;
      if (a === "--goal") out.goal = v;
      if (a === "--stack") out.stack = v;
      if (a === "--dest") out.dest = v;
      continue;
    }

    throw new Error(`Unknown argument: ${a}\n\n${usage()}`);
  }

  return out;
}

function isTextTemplate(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const textExts = new Set([
    ".md",
    ".txt",
    ".json",
    ".yml",
    ".yaml",
    ".env",
    ".example",
    ".env.example",
  ]);
  if (textExts.has(ext)) return true;
  // special-cases for multi-ext
  if (filePath.toLowerCase().endsWith(".env.example")) return true;
  return false;
}

async function writeFileFromTemplate({ srcFile, destFile, data, force }) {
  if (pathExists(destFile) && !force) {
    const err = new Error(`Refusing to overwrite existing file: ${destFile}`);
    err.code = "WOULD_OVERWRITE";
    throw err;
  }

  await ensureDir(path.dirname(destFile));

  const buf = await fs.promises.readFile(srcFile);
  if (!isTextTemplate(srcFile)) {
    await fs.promises.writeFile(destFile, buf);
    return;
  }

  const rendered = renderString(buf.toString("utf8"), data);
  const unresolved = findUnresolvedPlaceholders(rendered);
  if (unresolved.length > 0) {
    const err = new Error(
      [
        `Unresolved placeholders in output file: ${destFile}`,
        `Placeholders: ${unresolved.join(", ")}`,
      ].join("\n")
    );
    err.code = "UNRESOLVED_PLACEHOLDERS";
    throw err;
  }
  await fs.promises.writeFile(destFile, rendered, "utf8");
}

async function copyTemplateTree({ templateRoot, destRoot, data, force }) {
  const files = await listFilesRecursive(templateRoot);
  for (const absSrc of files) {
    const rel = path.relative(templateRoot, absSrc);
    const absDest = path.join(destRoot, rel);
    await writeFileFromTemplate({ srcFile: absSrc, destFile: absDest, data, force });
  }
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) {
    console.log(usage());
    process.exit(0);
  }

  if (!args.projectName) throw new Error(`Missing <project-name>\n\n${usage()}`);
  if (!args.preset) throw new Error(`Missing --preset\n\n${usage()}`);
  if (!args.agentsRaw) throw new Error(`Missing --agents\n\n${usage()}`);

  const agents = parseAgentsFlag(args.agentsRaw);
  validateAgents(agents);

  const repoRoot = path.resolve(__dirname, "..");
  const defaultDest = path.resolve(repoRoot, "..", args.projectName);
  const destRoot = args.inPlace
    ? process.cwd()
    : args.dest
      ? path.resolve(process.cwd(), args.dest)
      : defaultDest;

  if (pathExists(destRoot)) {
    if (await isFile(destRoot)) {
      throw new Error(`Destination exists and is a file: ${destRoot}`);
    }
    if (!(await isDirectory(destRoot))) {
      throw new Error(`Destination exists but is not a directory: ${destRoot}`);
    }

    const empty = await isDirectoryEmpty(destRoot);
    if (!empty && !args.force) {
      throw new Error(
        `Destination is not empty: ${destRoot}\nRefusing to overwrite without --force.`
      );
    }
  } else {
    await ensureDir(destRoot);
  }

  const presetTemplateDir = getPresetTemplateDir(args.preset);

  const generatorCommand = ["node", "scripts/new-project.js", ...process.argv.slice(2)].join(" ");

  const data = {
    PROJECT_NAME: args.projectName,
    PROJECT_GOAL: args.goal || "(fill in project goal)",
    PRESET: args.preset,
    STACK: args.stack || "(fill in stack)",
    AGENTS: agents.join(","),
    DATE: todayISO(),
    REPO_NAME: args.projectName,
    TEMPLATE_VERSION: "0.1",
    GENERATOR_COMMAND: generatorCommand,
  };

  await copyTemplateTree({
    templateRoot: presetTemplateDir,
    destRoot,
    data,
    force: args.force,
  });

  // Always include agentos.json at the repo root.
  const commonAgentosJson = path.resolve(repoRoot, "templates", "common", "agentos.json");
  const destAgentosJson = path.join(destRoot, "agentos.json");
  await writeFileFromTemplate({
    srcFile: commonAgentosJson,
    destFile: destAgentosJson,
    data,
    force: args.force,
  });

  console.log(`Scaffolded "${args.projectName}" at:\n${destRoot}`);
}

main().catch((err) => {
  console.error(err && err.stack ? err.stack : String(err));
  process.exit(1);
});

