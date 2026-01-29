const path = require("path");
const { pathExists } = require("./fs");

const PRESETS_DIR = path.resolve(__dirname, "..", "..", "templates", "presets");

function getPresetTemplateDir(preset) {
  const dir = path.join(PRESETS_DIR, preset);
  if (!pathExists(dir)) {
    const hint = `Unknown preset "${preset}". Expected a folder at templates/presets/${preset}/`;
    const err = new Error(hint);
    err.code = "UNKNOWN_PRESET";
    throw err;
  }
  return dir;
}

module.exports = {
  getPresetTemplateDir,
};

