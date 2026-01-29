const ALLOWED_AGENTS = new Set(["sw", "design", "pm", "qa"]);

function parseAgentsFlag(value) {
  if (!value) return [];
  return value
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}

function validateAgents(agents) {
  for (const a of agents) {
    if (!ALLOWED_AGENTS.has(a)) {
      const err = new Error(
        `Unknown agent role "${a}". Allowed: ${Array.from(ALLOWED_AGENTS).join(", ")}`
      );
      err.code = "UNKNOWN_AGENT";
      throw err;
    }
  }
}

module.exports = {
  parseAgentsFlag,
  validateAgents,
  ALLOWED_AGENTS,
};

