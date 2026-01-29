#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const { listFilesRecursive, pathExists } = require("./lib/fs");
const { findUnresolvedPlaceholders } = require("./lib/render");

function usage() {
  return [
    "Usage:",
    "  node scripts/validate-scaffold.js <scaffolded-project-path>",
    "",
    "Example:",
    "  node scripts/validate-scaffold.js ./tmp/demo-app",
  ].join("\n");
}

function isTextFile(filePath) {
  const lower = filePath.toLowerCase();
  if (lower.endsWith(".env.example")) return true;
  const ext = path.extname(lower);
  return [".md", ".txt", ".json", ".yml", ".yaml", ".env"].includes(ext);
}

async function readNonEmpty(filePath) {
  const text = await fs.promises.readFile(filePath, "utf8");
  return text.trim().length > 0;
}

function fail(messages) {
  for (const m of messages) console.error(m);
  process.exit(1);
}

async function validateRequiredFiles(rootDir, requiredRelPaths) {
  const errors = [];
  for (const rel of requiredRelPaths) {
    const abs = path.join(rootDir, rel);
    if (!pathExists(abs)) {
      errors.push(`Missing required file: ${rel}`);
      continue;
    }
    const nonEmpty = await readNonEmpty(abs);
    if (!nonEmpty) errors.push(`File is empty: ${rel}`);
  }
  return errors;
}

async function validateNoUnresolvedPlaceholders(rootDir) {
  const files = await listFilesRecursive(rootDir);
  const errors = [];

  for (const abs of files) {
    if (!isTextFile(abs)) continue;
    const text = await fs.promises.readFile(abs, "utf8");
    const unresolved = findUnresolvedPlaceholders(text);
    if (unresolved.length > 0) {
      const rel = path.relative(rootDir, abs);
      errors.push(`Unresolved placeholders in ${rel}: ${unresolved.join(", ")}`);
    }
  }

  return errors;
}

async function detectPreset(rootDir) {
  const agentosPath = path.join(rootDir, "agentos.json");
  if (!pathExists(agentosPath)) return null;

  try {
    const json = JSON.parse(await fs.promises.readFile(agentosPath, "utf8"));
    return json?.project?.preset ?? null;
  } catch {
    return null;
  }
}

function requiredPathsForPreset(preset) {
  // v1: only "app" is fully specified; expand as new presets ship.
  if (!preset || preset === "app") {
    return [
      "README.md",
      "agentos.json",
      path.join("docs", "PRD.md"),
      path.join("docs", "Roadmap.md"),
      path.join("docs", "Architecture.md"),
      path.join("docs", "QA-Plan.md"),
      path.join("docs", "agent.md"),
      path.join("frontend", "agent.md"),
      path.join("backend", "agent.md"),
      path.join("shared", "agent.md"),
      path.join("design", "agent.md"),
      path.join("tests", "agent.md"),
      path.join("scripts", "agent.md"),
    ];
  }

  const err = new Error(`No validator rules for preset "${preset}" yet.`);
  err.code = "UNKNOWN_PRESET_RULES";
  throw err;
}

async function main() {
  const target = process.argv.slice(2)[0];
  if (!target) throw new Error(`Missing <scaffolded-project-path>\n\n${usage()}`);

  const rootDir = path.resolve(process.cwd(), target);
  if (!pathExists(rootDir)) throw new Error(`Path does not exist: ${rootDir}`);

  const stat = await fs.promises.stat(rootDir);
  if (!stat.isDirectory()) throw new Error(`Not a directory: ${rootDir}`);

  const preset = await detectPreset(rootDir);
  const required = requiredPathsForPreset(preset);

  const errors = [];
  errors.push(...(await validateRequiredFiles(rootDir, required)));
  errors.push(...(await validateNoUnresolvedPlaceholders(rootDir)));

  if (errors.length > 0) fail(errors);
  console.log(`Validation passed for: ${rootDir}${preset ? ` (preset: ${preset})` : ""}`);
}

main().catch((err) => {
  console.error(err && err.stack ? err.stack : String(err));
  process.exit(1);
});

