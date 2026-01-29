# Populate (deterministic) — generated project output

This doc describes how AgentOS “population” works in v1: **copy templates + render placeholders** to produce an agent-ready repo.

## Inputs
- Requirements SSOT (AgentOS repo): `docs/internal/PRD_AgentOS.md`
- Preset templates: `templates/presets/<preset>/...`
- Shared config template: `templates/common/agentos.json`
- CLI: `scripts/new-project.js`

## Rendering rules (v1)
- Placeholders use double braces: `{{PLACEHOLDER}}`
- Render in text files: `.md`, `.txt`, `.json`, `.yml`, `.yaml`, `.env`, `.env.example`
- Validation must fail if any `{{...}}` remain in the output

## Output requirements (v1 `app`)
Generated project must include:
- Core docs (non-empty):
  - `docs/PRD.md`, `docs/Roadmap.md`, `docs/Architecture.md`, `docs/QA-Plan.md`
- Per-directory `agent.md` (non-empty):
  - `docs/agent.md`, `frontend/agent.md`, `backend/agent.md`, `shared/agent.md`, `design/agent.md`, `tests/agent.md`, `scripts/agent.md`
- Config:
  - `agentos.json` capturing scaffold configuration

## Recommended check

```bash
node scripts/new-project.js demo-app --preset app --agents sw,design,pm,qa --dest .\tmp\demo-app
node scripts/validate-scaffold.js .\tmp\demo-app
```
