
# Playbook — Discovery (Limited)

**Goal:** Make only the minimum decisions needed to implement the **next thin slice** of AgentOS without scope creep.

---

## Inputs
- `docs/internal/PRD_AgentOS.md` (requirements SSOT)
- `docs/agent-os/03_repo-architecture.md` (doc layers + conventions)
- `knowledge/internal/agent-os-manual.md` (how AgentOS is intended to be used)
- `03_backlog.md` (where we park the next slice)
- `references.md` (only if external validation is needed)

## Outputs
- A short delta list: what is missing vs v1 acceptance criteria
- A prioritized next slice (1–3 concrete tasks)

---

## Steps
1. **Restate the current “must ship”**
   - Copy/paste the v1 Acceptance Criteria bullets from `docs/internal/PRD_AgentOS.md` into your working notes (keep it short).

2. **Gap scan (fast, repo-local)**
   - Confirm these are present and non-empty:
     - CLI: `scripts/new-project.js`, `scripts/validate-scaffold.js`, `scripts/lib/*`
     - Templates: `templates/common/agentos.json`, `templates/presets/app/**`
     - Skills: `skills/scaffold-project/`, `skills/validate-scaffold-output/`, plus extension skills (`skills/add-*`)
   - If something is missing, write a one-line delta item with an exact file path.

3. **Choose the thinnest slice**
   - Prefer slices that end in a runnable command with a pass/fail signal, e.g.:
     - “Scaffold demo output → validate output”
     - “Fix one validator failure class (missing file / placeholder / overwrite behavior)”
   - Avoid expanding scope (new presets/roles) unless the slice requires it.

4. **Turn the slice into 1–3 executable tasks**
   - Put the tasks in `03_backlog.md` (P0/P1), each with:
     - goal (1 sentence)
     - file paths to touch
     - “Done when” (verifiable)
   - If you prefer full task specs, use `workflows/03_generate_tasks.md`.

5. **Record only material decisions**
   - If you changed a convention (required files, placeholder format, preset shape), add an ADR under `adr/`.

---

## Done when
- There is a crisp list of 1–3 next tasks, each with file paths and a success condition.

