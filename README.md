# AgentOS

AgentOS is a **project scaffolder + template system** that generates an agent-ready repo:

- A preset directory tree (v1: `app`)
- Non-empty core docs (`docs/PRD.md`, `docs/Roadmap.md`, `docs/Architecture.md`, `docs/QA-Plan.md`)
- Per-directory `agent.md` guides (mission, inputs/outputs, rules, DoD, next actions)
- A rendered `agentos.json` capturing the scaffold configuration

## Quick start

### Requirements
- Node.js (LTS recommended)

### Create a new project

From inside this repo:

```bash
node scripts/new-project.js my-app --preset app --agents sw,design,pm,qa
```

Validate the output (example path):

```bash
node scripts/validate-scaffold.js .\tmp\my-app
```

## Repo layout (high level)
- `scripts/`: CLI scaffolder + validator
- `templates/`: preset templates copied into generated projects
- `skills/`: repeatable playbooks for extending AgentOS (skills-first)
- `docs/agent-os/`: repo-only operating model and documentation-layer guidance

## Docs
- **AgentOS requirements SSOT**: `docs/internal/PRD_AgentOS.md`
- **Doc-layer split**: `docs/agent-os/03_repo-architecture.md`