# Skills.sh Pack for UI/UX + Docs + Optimization (Claude Code / Codex)

This pack is a **curated set of Skills.sh skills** + a lightweight **routing playbook** so an agent (Claude Code / Codex CLI / Cursor) can pick the right skill(s) quickly and produce consistent outputs.

> **Note:** This directory (`knowledge/skills-sh/`) contains documentation for external Skills.sh skills. It is distinct from the internal `skills/` directory which contains AgentOS's own repeatable playbooks.

## What "skills" are (operationally)

Skills are **procedural playbooks** (usually a `SKILL.md`) that an agent loads before acting. They're installed via the Skills CLI and then used as "expert modules" for tasks (UI, UX, docs, performance, planning, etc.).

Install via:

```bash
npx skills add <owner/repo>
# or, for a specific skill in a repo:
npx skills add https://github.com/<owner/repo> --skill <skill-name>
```

Reference: Skills CLI + FAQ:
- https://skills.sh/docs/cli
- https://skills.sh/docs/faq

## Quick Install

Use the cross-platform installer:

```bash
# Install all recommended skills
node scripts/install-skills.js --all

# Or install by category
node scripts/install-skills.js --ui --ux
node scripts/install-skills.js --docs
node scripts/install-skills.js --perf

# Preview what would be installed
node scripts/install-skills.js --all --dry-run
```

## Recommended Baseline

These give you a strong default workflow across UI/UX + docs + performance:

- **Routing / planning**
  - `skill-router` (charon-fan/agent-playbook)
  - `planning-with-files` (charon-fan/agent-playbook)
- **UI/UX**
  - `ui-ux-pro-max` (nextlevelbuilder/ui-ux-pro-max-skill)
  - `design-system-patterns` (gracehunter/design-system-skills)
  - `flex-grid-flow` (youmeyou/skills)
  - `accessibility-auditor` (patricio0312rev/Skills)
- **Docs**
  - `writing-clearly-and-concisely` (softaworks/agent-toolkit)
  - `documentation-engineer` (charon-fan/agent-playbook)
  - `pdf`, `docx`, `pptx`, `xlsx` (anthropics/skills)
- **Optimization**
  - `performance-engineer` (charon-fan/agent-playbook)
  - `performance` (addyosmani/web-quality-skills)

## Files in This Pack

| File | Description |
|------|-------------|
| `ui.md` | UI-focused skills + when/how to combine |
| `ux.md` | UX research + UX design workflow skills |
| `document-production.md` | PRDs, docs, slide decks, docx/pdf/xlsx pipelines |
| `optimization-efficiency.md` | Performance + planning + routing + token/time efficiency |
| `routing-playbook.md` | Decision table + combo recipes for the orchestrator agent |

## How to Use This Pack with an Agent

1. **Install** skills (use `scripts/install-skills.js`).
2. **Orchestrator rule:** before executing a task, the agent MUST:
   - run routing (use `skill-router` if available; otherwise follow `routing-playbook.md`),
   - load relevant `SKILL.md` files,
   - produce outputs into stable folders (e.g., `docs/`, `design/`, `artifacts/`),
   - log progress if task is multi-step (planning-with-files).

3. **Human-in-the-loop checkpoints** (recommended):
   - UI/UX: validate IA + primary flows before hi-fi components.
   - Docs: validate outline + audiences before full writeup.
   - Performance: set measurable budgets (CWV targets, response time, bundle size) before tuning.

---

> You can reference these files from your `AGENTS.md` / `CLAUDE.md` as "approved skills + routing rules".
