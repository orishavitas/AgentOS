#!/usr/bin/env bash
set -euo pipefail

# One-shot installer for the recommended skill set.
# Note: uses npx, so Node.js + npm required.

install () {
  echo "==> Installing: $*"
  npx skills add "$@"
}

# --- routing / planning (agent-playbook)
install "https://github.com/charon-fan/agent-playbook" --skill "skill-router"
install "https://github.com/charon-fan/agent-playbook" --skill "planning-with-files"
install "https://github.com/charon-fan/agent-playbook" --skill "prd-planner"
install "https://github.com/charon-fan/agent-playbook" --skill "documentation-engineer"
install "https://github.com/charon-fan/agent-playbook" --skill "performance-engineer"

# --- UI / UX
install "https://github.com/nextlevelbuilder/ui-ux-pro-max-skill" --skill "ui-ux-pro-max"
install "https://github.com/gracehunter/design-system-skills" --skill "design-system-patterns"
install "https://github.com/youmeyou/skills" --skill "flex-grid-flow"
install "https://github.com/patricio0312rev/Skills" --skill "accessibility-auditor"
install "https://github.com/borghei/claude-skills" --skill "product-designer"
install "https://github.com/aj-geddes/claude-code-bmad-skills" --skill "ux-designer"
install "https://github.com/simota/agent-skills" --skill "researcher"
install "https://github.com/404kidwiz/claude-supercode-skills" --skill "ux-researcher"

# --- docs / writing / diagrams
install "https://github.com/softaworks/agent-toolkit" --skill "writing-clearly-and-concisely"
install "https://github.com/softaworks/agent-toolkit" --skill "crafting-effective-readmes"
install "https://github.com/softaworks/agent-toolkit" --skill "mermaid-diagrams"
install "https://github.com/softaworks/agent-toolkit" --skill "requirements-clarity"
install "https://github.com/softaworks/agent-toolkit" --skill "agent-md-refactor"
install "https://github.com/softaworks/agent-toolkit" --skill "session-handoff"

# --- office/PDF outputs
install "https://github.com/anthropics/skills" --skill "pdf"
install "https://github.com/anthropics/skills" --skill "docx"
install "https://github.com/anthropics/skills" --skill "pptx"
install "https://github.com/anthropics/skills" --skill "xlsx"
install "https://github.com/anthropics/skills" --skill "theme-factory"

# --- web performance / prompt patterns
install "https://github.com/addyosmani/web-quality-skills" --skill "performance"
install "https://github.com/wshobson/agents" --skill "prompt-engineering-patterns"
install "https://github.com/wshobson/agents" --skill "interaction-design"

echo "Done."
