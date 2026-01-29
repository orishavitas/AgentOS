---
name: scaffold-project
description: Generates the folder structure and agent.md files for a new project.
---
# Skill: Scaffold Project

## Purpose
Create a new project repo from a preset with **non-empty docs** and **per-directory `agent.md`** so agents can start work immediately.

## Inputs
- `docs/internal/PRD_AgentOS.md` (v1 acceptance criteria)
- `templates/presets/<preset>/...` (template tree)
- `templates/common/agentos.json` (rendered into generated repo root)
- `scripts/new-project.js` (CLI scaffolder)

## Outputs
- A generated project directory containing:
  - `docs/PRD.md`, `docs/Roadmap.md`, `docs/Architecture.md`, `docs/QA-Plan.md`
  - Per-directory `agent.md` files (preset-defined)
  - `agentos.json` capturing the scaffold config

## Steps
1. Scaffold the project:
   - `node scripts/new-project.js <project-name> --preset <preset> --agents <comma-list> --dest <path>`
2. Verify overwrite safety:
   - Re-run the same command **without** `--force` and confirm it refuses to overwrite existing files.
3. Validate scaffold output:
   - `node scripts/validate-scaffold.js <path>`
4. If validation fails:
   - Fix templates under `templates/presets/<preset>/...` or rendering under `scripts/lib/`
   - Re-run steps 1–3

## Done when
- The CLI generates the expected tree for the preset.
- Required docs and `agent.md` files are **present and non-empty**.
- No `{{...}}` placeholders remain in generated text files.
- Re-running without `--force` refuses to overwrite.
