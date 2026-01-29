
# Playbook — Bootstrap AgentOS (repo)

**Goal:** Get AgentOS into a runnable state (CLI + templates + validator) and produce a **passing** scaffold validation for the v1 `app` preset.

---

## When to use
- After pulling the repo fresh.
- After changing any of: `scripts/`, `templates/`, `knowledge/roles/`, or `skills/`.

---

## Inputs (AgentOS-internal)
- `docs/internal/PRD_AgentOS.md` (requirements SSOT)
- `docs/agent-os/03_repo-architecture.md` (doc layers + conventions)
- `package.json` (script entrypoints)
- `scripts/new-project.js` (scaffolder)
- `scripts/validate-scaffold.js` (validator)
- `templates/presets/app/` (v1 required preset)
- Skills:
  - `skills/scaffold-project/SKILL.md`
  - `skills/validate-scaffold-output/SKILL.md`

## Outputs
- A passing demo scaffold output under `tmp/` (local verification fixture)
- A runnable baseline command pair:
  - `npm run new-project -- ...`
  - `npm run validate-scaffold -- ...`

---

## Steps
1. **Confirm v1 acceptance criteria**
   - Read `docs/internal/PRD_AgentOS.md` sections “Acceptance Criteria (v1)” and “File outputs (v1)”.

2. **Confirm the repo has the expected entrypoints**
   - `npm run new-project -- --help`
   - `npm run validate-scaffold -- --help`

3. **Create a demo scaffold output**
   - Pick a destination under `tmp/` that does not already exist.
   - Cross-platform examples:
     - macOS/Linux: `./tmp/demo-app`
     - Windows: `.\\tmp\\demo-app`
   - Run:
     - `npm run new-project -- demo-app --preset app --agents sw,design,pm,qa --dest ./tmp/demo-app`

4. **Validate the scaffold output**
   - Run:
     - `npm run validate-scaffold -- ./tmp/demo-app`

5. **Iterate on the first failing category**
   - Missing/empty required files → fix under `templates/presets/app/`
   - Unresolved placeholders (`{{...}}`) → fix templates or renderer (`scripts/lib/render.js`)
   - Overwrite-safety check unclear → fix `scripts/new-project.js` error behavior
   - Re-run steps 3–4 after each fix.

6. **(Optional) Record a decision**
   - If you changed a convention (placeholder naming, required files, output tree), capture a short ADR under `adr/`.

---

## Done when
- `npm run new-project -- demo-app --preset app --agents sw,design,pm,qa --dest ./tmp/demo-app` succeeds.
- `npm run validate-scaffold -- ./tmp/demo-app` passes.

