
# AgentOS repo architecture (SSOT + layers)

This repo contains **two distinct “documentation layers”**:

## 1) AgentOS-internal (this repo)

These files describe **AgentOS itself** (the scaffolder + templates), and are the source of truth for developing AgentOS:

- **Primary SSOT**: `docs/internal/PRD_AgentOS.md`
- **Supporting**:
  - `knowledge/internal/agent-os-manual.md` (how to use AgentOS)
  - `references.md` (external sources)
  - `state.md` (project status)
  - `runbook.md` (how to run/debug once implemented)

> Note: the numbered root docs (`00_context.md`, `01_mrd.md`, `02_prd.md`, `03_backlog.md`) currently exist as **templates / placeholders** and are **not** the SSOT for AgentOS as a product. They can be kept as reusable templates, but they should not be referenced as the “truth” for AgentOS requirements.

> Clarification: those numbered root docs can still be used as **repo-level operating docs** (context/backlog/state) while building AgentOS. The product requirements SSOT remains `docs/internal/PRD_AgentOS.md`.

## 2) Generated project (output of the scaffolder)

When the Node scaffolder runs (e.g. `node scripts/new-project.js ...`), it produces a **new project repo** with agent-ready structure.

For generated projects, the source of truth lives in the generated project’s `docs/` folder:

- `docs/PRD.md` (scope + success criteria)
- `docs/Roadmap.md` (prioritization)
- `docs/Architecture.md` (contracts + system boundaries)
- `docs/QA-Plan.md` (Definition of Done, checklists)

Those paths are what `knowledge/roles/*.md` and `workflows/*.md` refer to.

## Template and config location

- Templates live in `templates/` (including `templates/common/agentos.json`).
- Preset-specific templates live under `templates/presets/<preset>/...` (added in v1).
- Generated projects should include a rendered `agentos.json` capturing the scaffold configuration (name, goal, preset, agents, generator command, etc.).

