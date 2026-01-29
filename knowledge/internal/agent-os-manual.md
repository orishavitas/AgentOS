# AgentOS — Project Scaffolder & Agent-Ready Repo Templates

AgentOS is a **starter system** for spinning up new projects fast using AI coding agents (Cursor / Claude / Codex).  
It generates a project folder structure **and populates it** with opinionated docs + per-directory `agent.md` guides so agents know **what to do, where to do it, and what “done” means**.

---

## What this repo contains

### 1) The scaffolder (CLI)
A script that:
- creates a new project directory tree based on a **preset**
- copies templates into the new project
- replaces placeholders like `{{PROJECT_NAME}}`
- creates **non-empty** `agent.md` files per directory

### 2) Templates
A curated library of:
- presets (folder structures)
- docs (PRD, roadmap, architecture, QA plan)
- directory-level `agent.md` files tuned to specific responsibilities

---

## Quick start

### Requirements
- Node.js (recommended: LTS)

### Create a new project
From inside this AgentOS repo:

```bash
node scripts/new-project.js my-app --preset app --agents sw,design,pm,qa
```

This creates a new folder (by default) next to AgentOS:
```
../my-app/
```

> If you add an `--in-place` option later, it would scaffold into the current directory instead.

### What you get (example: `app` preset)
- `docs/` with PRD + roadmap + architecture + QA plan
- `frontend/`, `backend/`, `shared/`, `design/`, `tests/`, `scripts/`
- `agent.md` inside each directory

---

## How to work with it (agent-first workflow)

1. Create project with the scaffolder.
2. Open the generated repo in Cursor/IDE.
3. Start in `docs/PRD.md` for the product intent.
4. Each directory has an `agent.md` telling the agent:
   - mission / ownership
   - inputs to read
   - outputs to create
   - rules / boundaries
   - definition of done
   - next actions (3–7 bullets)

This is designed to reduce:
- “what next?” loops
- architecture drift
- token waste / fluff

---

## Repo layout

```
AgentOS/
  scripts/
    new-project.js
    lib/
      render.js        # placeholder rendering
      fs.js            # safe file ops
      presets.js       # preset definitions
      roles.js         # role mapping + validation
  templates/
    common/
      README.md
      agent.md
    presets/
      app/
        docs/
          PRD.md
          Roadmap.md
          Architecture.md
          QA-Plan.md
        frontend/agent.md
        backend/agent.md
        design/agent.md
        shared/agent.md
        tests/agent.md
      automation/
      library/
  README.md
```

---

## Presets

Presets define the **directory tree** + which docs and `agent.md` files get generated.

### `app`
For web apps (and optional mobile):
- `frontend/`, `backend/`, `shared/`, `design/`, `tests/`, `docs/`, `scripts/`

### `automation`
For workflow-heavy builds:
- `workflows/`, `integrations/`, `tests/`, `docs/`, `scripts/`

### `library`
For reusable packages:
- `src/`, `examples/`, `tests/`, `docs/`, `scripts/`

> v1 ships with `app` fully wired end-to-end; others can be added/expanded once templates + validation rules exist.

---

## Roles

Roles control which guidance templates are used and which docs are included.

Supported roles (v1):
- `sw` — software engineering
- `design` — UX/UI
- `pm` — product management
- `qa` — testing/validation

Example:
```bash
node scripts/new-project.js my-tool --preset automation --agents sw,qa
```

---

## Template placeholders

Common placeholders (v1):
- `{{PROJECT_NAME}}`
- `{{PROJECT_GOAL}}`
- `{{PRESET}}`
- `{{STACK}}`
- `{{AGENTS}}`
- `{{DATE}}`
- `{{REPO_NAME}}` (optional)
- `{{TEMPLATE_VERSION}}`
- `{{GENERATOR_COMMAND}}`

---

## Safety / overwrite behavior

- Default behavior: **do not overwrite** files if the destination exists.
- Use `--force` to overwrite existing files.

---

## Adding a new preset

1. Create a folder:
   ```
   templates/presets/<preset-name>/
   ```
2. Add directories and template files inside it (including `agent.md` where needed).
3. Update validation rules in `scripts/validate-scaffold.js` so required files are enforced for the new preset.

---

## Adding or editing `agent.md` templates

- Keep them **short and directive**
- Include: Mission, Inputs, Outputs, Rules, Definition of Done, Next Actions
- Avoid long prose; prefer bullets and checklists

---

## Versioning

Recommended practice:
- Add a header inside templates (optional):
  - `Template version: x.y`
  - `Last updated: YYYY-MM-DD`

So generated projects can trace template provenance.

---

## FAQ

### Why `agent.md` per directory?
Because agents operate best when scope is narrow and local:
- “what to change” is obvious
- boundaries prevent collateral damage
- outputs are concrete and verifiable

### Is this tied to Cursor?
No. It’s just files + templates + a generator script. Any coding agent can use it.

---

## Project docs
- PRD for the **AgentOS scaffolder**: `docs/internal/PRD_AgentOS.md`
