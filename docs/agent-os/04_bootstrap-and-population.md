# Bootstrap and population (v1)

This doc explains how AgentOS turns **templates** into a **generated project** repo.

## Inputs
- Requirements SSOT: `docs/internal/PRD_AgentOS.md`
- Preset templates: `templates/presets/<preset>/...`
- Shared config template: `templates/common/agentos.json`
- CLI scaffolder: `scripts/new-project.js`

## Output (generated project)
For v1 `app`, the generated repo must include:
- `README.md`
- `agentos.json` (rendered)
- `docs/PRD.md`, `docs/Roadmap.md`, `docs/Architecture.md`, `docs/QA-Plan.md`
- Per-directory `agent.md` for:
  - `docs/`, `frontend/`, `backend/`, `shared/`, `design/`, `tests/`, `scripts/`

## How population works
1. The CLI selects a preset template folder:
   - `templates/presets/<preset>/`
2. It copies the template tree into the destination directory.
3. It renders placeholders in text files:
   - `{{PROJECT_NAME}}`, `{{PROJECT_GOAL}}`, `{{PRESET}}`, `{{STACK}}`, `{{AGENTS}}`, `{{DATE}}`, etc.
4. It writes a rendered `agentos.json` at the generated repo root.

## Safety (overwrite behavior)
- Default: **non-destructive**. If the destination directory exists and is not empty, the scaffolder must fail.
- Use `--force` only when you explicitly want to overwrite existing files.

## Recommended dev loop (AgentOS repo)
Use a local fixture under `tmp/`:

```bash
node scripts/new-project.js demo-app --preset app --agents sw,design,pm,qa --dest .\tmp\demo-app
node scripts/validate-scaffold.js .\tmp\demo-app
```