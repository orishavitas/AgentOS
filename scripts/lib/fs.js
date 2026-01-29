const fs = require("fs");
const path = require("path");

async function statSafe(p) {
  try {
    return await fs.promises.stat(p);
  } catch (err) {
    if (err && (err.code === "ENOENT" || err.code === "ENOTDIR")) return null;
    throw err;
  }
}

async function ensureDir(dirPath, dryRun = false) {
  if (dryRun) {
    console.log(`[DRY RUN] Would create directory: ${dirPath}`);
    return;
  }
  await fs.promises.mkdir(dirPath, { recursive: true });
}

async function writeFile(filePath, content, dryRun = false) {
  if (dryRun) {
    console.log(`[DRY RUN] Would write file: ${filePath}`);
    return;
  }
  await fs.promises.writeFile(filePath, content, "utf8");
}

async function listFilesRecursive(rootDir) {
  const out = [];

  async function walk(currentDir) {
    const entries = await fs.promises.readdir(currentDir, { withFileTypes: true });
    for (const entry of entries) {
      const abs = path.join(currentDir, entry.name);
      if (entry.isDirectory()) {
        await walk(abs);
      } else if (entry.isFile()) {
        out.push(abs);
      }
    }
  }

  await walk(rootDir);
  return out;
}

function pathExists(p) {
  try {
    fs.accessSync(p);
    return true;
  } catch {
    return false;
  }
}

async function isDirectory(p) {
  const st = await statSafe(p);
  return Boolean(st && st.isDirectory());
}

async function isFile(p) {
  const st = await statSafe(p);
  return Boolean(st && st.isFile());
}

async function isDirectoryEmpty(dirPath) {
  const entries = await fs.promises.readdir(dirPath);
  return entries.length === 0;
}

module.exports = {
  statSafe,
  ensureDir,
  listFilesRecursive,
  pathExists,
  isDirectory,
  isFile,
  isDirectoryEmpty,
  writeFile,
};

