
# Playbook — Validate (AgentOS scaffolds)

**Goal:** Verify scaffold output meets v1 acceptance criteria and contains no placeholders or empty guidance files.

---

## Inputs
- `docs/internal/PRD_AgentOS.md` (acceptance criteria)
- `scripts/new-project.js`
- `scripts/validate-scaffold.js`
- `skills/validate-scaffold-output/SKILL.md`

## Outputs
- A passing validation result for a demo output (or for a real scaffold target)

---

## Steps
1. **Scaffold a demo project**
   - Pick a destination under `tmp/` that does not already exist:
     - macOS/Linux: `./tmp/demo-app`
     - Windows: `.\\tmp\\demo-app`
   - Run:
     - `npm run new-project -- demo-app --preset app --agents sw,design,pm,qa --dest ./tmp/demo-app`

2. **Validate the scaffold output**
   - Run:
     - `npm run validate-scaffold -- ./tmp/demo-app`
   - If running in a restricted environment that cannot spawn subprocesses, you can skip the overwrite check:
     - `npm run validate-scaffold -- ./tmp/demo-app --skip-overwrite-check`

3. **Interpret failures by category**
   - Missing required file / empty file:
     - Fix templates under `templates/presets/app/` (docs + per-directory `agent.md`)
   - Unresolved placeholders (`{{...}}`):
     - Fix the template content or supported placeholder keys (see `scripts/new-project.js`)
   - Overwrite behavior violation/unclear:
     - The validator re-runs the scaffolder **without** `--force` and expects a clear refusal message.
     - Fix error behavior in `scripts/new-project.js` until the message is explicit.

4. **Re-run until clean**
   - Re-run steps 1–2 after each fix.

---

## Done when
- Validator passes for the scaffold output.

