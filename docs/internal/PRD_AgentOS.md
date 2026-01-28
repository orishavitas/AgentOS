# PRD — AgentOS Project Scaffolder (Auto-folder + Auto-populated agent.md)

**Document status:** Draft v1.0  
**Owner:** Ori  
**Last updated:** 2026-01-28  
**Repo:** `AgentOS` (this project lives inside it)

---

## 1) Overview

### 1.1 Problem
When starting a new repo, AI coding agents (Cursor/Claude/Codex) waste time figuring out structure, responsibilities, and “what to do next.” Today we can generate folder shells, but the guiding files (especially per-directory `agent.md`) are empty, so agents still lack direction and create loops, fluff, and inconsistent architecture.

### 1.2 Solution
Build an **AgentOS Project Scaffolder** that generates a new project skeleton **and populates it** with:
- `agent.md` **per directory** (role-specific instructions, scope, inputs/outputs, definition of done)
- core docs (PRD/MRD/roadmap/architecture/testing plan)
- template-based content with placeholder replacement (project name, goal, stack, constraints, chosen roles)
- preset structures (e.g., `app`, `automation`, `library`, `research-bot`)

### 1.3 Outcome
**One command** produces a ready-to-run repo where agents can start work immediately, consistently, and with minimal prompting.

---

## 2) Goals and Non-goals

### 2.1 Goals (v1)
1. **One-command scaffold** of a new project structure.
2. **Populate** every directory’s `agent.md` from templates (no empty shells).
3. **Cross-platform** (Windows/macOS/Linux).
4. **Template system** with placeholder replacement.
5. **Presets** that select directory tree + docs bundle.
6. **Role bundles** (SW/Design/PM/QA) that generate aligned `agent.md` files.
7. **Token-efficient guidance**: short, directive, low-ambiguity instructions for agents.

### 2.2 Non-goals (v1)
- Running or orchestrating agents (this tool scaffolds docs and structure, not agent execution).
- Deep integrations with Cursor APIs or proprietary tools.
- Generating a full application codebase end-to-end automatically.

---

## 3) Users and Use Cases

### 3.1 Target users
- **Primary:** Ori (solo builder) creating many repos quickly with Cursor/Claude/Codex.
- **Secondary:** collaborators who clone a project and immediately understand scope + next steps.

### 3.2 Primary use cases
- Create a new project from a preset, instantly ready for agents to work.
- Standardize documentation and directory ownership across projects.
- Reduce “what should I do next?” loops by embedding “next actions” per directory.

---

## 4) User Stories

1. **As a builder**, I run one command and get a populated project skeleton so agents can begin immediately.
2. **As an agent**, I open a directory and read `agent.md` to know mission, constraints, inputs/outputs, and how to finish.
3. **As a maintainer**, I update templates in AgentOS once and reuse them across future projects.
4. **As a power user**, I pick a preset + roles + stack and the scaffold matches that configuration.

---

## 5) Requirements

### 5.1 CLI scaffolder
**Commands (examples):**
- `node scripts/new-project.js my-app --preset app --agents sw,design,pm,qa`
- `node scripts/new-project.js my-automation --preset automation --agents sw,qa`
- Optional later: `--interactive` to ask questions.

**Behavior:**
- Creates target directory (default: sibling folder named after project).
- Writes directory tree per preset.
- Copies template files into destination.
- Replaces placeholders in files.
- Generates `agent.md` per directory per preset/role mapping.
- Default: **no overwrite** of existing files; require `--force` to overwrite.

### 5.2 Template system
**Inputs:**
- Template folders in `AgentOS/templates/**`

**Output:**
- Fully populated files in new project repo.

**Placeholder format (v1):**
- `{{PROJECT_NAME}}`
- `{{PROJECT_GOAL}}`
- `{{PRESET}}`
- `{{STACK}}`
- `{{AGENTS}}`
- `{{DATE}}`
- `{{REPO_NAME}}` (optional)

**Rendering rules:**
- Replace all placeholders in text files (`.md`, `.txt`, `.json`, `.yml`, `.yaml`, `.env.example`).
- Preserve binary files (if any) without modification.

### 5.3 `agent.md` file spec (must exist per relevant directory)
Each `agent.md` must include:
- **Mission / Ownership:** what the directory owns.
- **Inputs:** files and folders it reads from.
- **Outputs:** files it must create/update.
- **Rules / Boundaries:** what not to change; allowed tools; token discipline notes.
- **Definition of Done:** concrete acceptance conditions.
- **Next Actions:** 3–7 bullets.

### 5.4 Presets (v1)
Implement at least:

#### Preset: `app`
Intended for web + optional mobile.
Required directories:
- `docs/` (PRD, Roadmap, Architecture, QA Plan)
- `frontend/`
- `backend/`
- `shared/`
- `design/`
- `scripts/`
- `tests/` (or `qa/`)

#### Preset: `automation`
- `docs/`
- `workflows/`
- `integrations/`
- `scripts/`
- `tests/`

#### Preset: `library`
- `docs/`
- `src/`
- `examples/`
- `tests/`
- `scripts/`

> v1 must ship with at least the `app` preset fully wired and tested.

### 5.5 Roles (v1)
At minimum support roles:
- `sw` (software engineering)
- `design` (UX/UI)
- `pm` (product management)
- `qa` (testing/validation)

Role selection changes:
- Which `agent.md` templates are used.
- Which docs are generated (e.g., PM adds MRD; QA adds QA plan).

### 5.6 File outputs (v1)
For `app` preset, generate at minimum:
- `README.md` (project intro + how to use)
- `docs/PRD.md`
- `docs/Roadmap.md`
- `docs/Architecture.md`
- `docs/QA-Plan.md`
- Per-directory `agent.md` in:
  - `frontend/agent.md`
  - `backend/agent.md`
  - `design/agent.md`
  - `docs/agent.md` (optional but recommended)
  - `tests/agent.md` (or `qa/agent.md`)
  - `shared/agent.md`

---

## 6) Non-functional Requirements
- **Cross-platform:** Must work on Windows/macOS/Linux.
- **Deterministic output:** Same config produces same tree and file contents (except timestamps).
- **Fast execution:** completes in seconds.
- **Safe overwrites:** default is non-destructive; `--force` required to overwrite.
- **Clear errors:** missing preset, invalid agents list, destination exists, template missing.

---

## 7) Information Architecture

### 7.1 AgentOS repo layout (proposed)
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
        frontend/
          agent.md
        backend/
          agent.md
        design/
          agent.md
        shared/
          agent.md
        tests/
          agent.md
      automation/
      library/
  README.md
```

---

## 8) Acceptance Criteria (v1)
1. Running `node scripts/new-project.js demo-app --preset app --agents sw,design,pm,qa` creates `demo-app/` with the expected tree.
2. All required docs exist and are **non-empty**, with placeholders replaced:
   - `docs/PRD.md`, `docs/Roadmap.md`, `docs/Architecture.md`, `docs/QA-Plan.md`.
3. Every required directory has an `agent.md` that contains:
   - Mission, Inputs, Outputs, Rules, DoD, Next Actions.
4. Re-running without `--force` does not overwrite existing files and exits with a clear message.
5. Script works on Windows and macOS paths (validated by using Node `path` and `fs` APIs).

---

## 9) Metrics
- **Time-to-first-meaningful-agent-action:** < 2 minutes from scaffold.
- **Reduction in clarification loops:** fewer “what next?” prompts required after scaffold.
- **Template reuse:** number of projects created using scaffolder.

---

## 10) Risks and Mitigations
- **Templates become stale or inconsistent**
  - Mitigation: centralized templates; include version header in generated docs.
- **`agent.md` becomes verbose and wastes tokens**
  - Mitigation: enforce concise format; cap “Next Actions” to max 7 bullets.
- **Windows newline/path pitfalls**
  - Mitigation: Node path normalization; avoid symlinks in v1.

---

## 11) Roadmap

### v1 (ship)
- `app` preset end-to-end
- Template rendering + safe overwrite behavior
- Roles: sw/design/pm/qa
- Non-empty docs + agent.md per directory

### v1.1
- `--interactive` mode
- `--dry-run` to preview output
- Add `automation` and `library` presets fully

### v2
- Optional “update existing project from templates” (migration)
- Optional shared AgentOS via submodule strategy + helper script

---

## 12) Open Questions
- Do we want scaffolding into **current directory** vs creating a new folder (add `--in-place`)?
- Should we store config in the generated repo (e.g., `agentos.json`) for later regeneration?
- Should PM docs include MRD by default for `app`, or keep MRD optional?

---

## Appendix A — `agent.md` Minimal Template (example)
```md
# Agent Guide — {{DIR_NAME}}

## Mission
...

## Inputs
- ...

## Outputs
- ...

## Rules
- ...

## Definition of Done
- ...

## Next Actions
1. ...
2. ...
```
