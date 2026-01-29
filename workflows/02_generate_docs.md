
# Playbook — Generate Docs (Templates)

**Goal:** Produce **non-empty**, deterministic doc templates for scaffolded projects (v1: the `app` preset).

---

## Inputs
- `docs/internal/PRD_AgentOS.md` (required generated files + `agent.md` spec)
- `docs/agent-os/03_repo-architecture.md` (generated-project SSOT paths)
- `scripts/new-project.js` (what placeholders are supported)
- `templates/presets/<preset>/docs/` (where generated docs come from)
- `workflows/build-mvp.md` (shape of doc set expected by generated projects)

## Outputs
- Non-empty doc templates under `templates/presets/<preset>/docs/` (v1: `app`):
  - `PRD.md`
  - `Roadmap.md`
  - `Architecture.md`
  - `QA-Plan.md`
  - `agent.md` (required by the current validator)

---

## Steps
1. **Select target preset**
   - For v1, target `templates/presets/app/docs/`.

2. **Write/update the templates**
   - Keep headings stable; prefer short, directive sections over prose.
   - Use only supported placeholders (see `scripts/new-project.js` data map):
     - `{{PROJECT_NAME}}`, `{{PROJECT_GOAL}}`, `{{PRESET}}`, `{{STACK}}`, `{{AGENTS}}`, `{{DATE}}`, `{{TEMPLATE_VERSION}}`, `{{GENERATOR_COMMAND}}`
   - Avoid introducing new placeholder keys unless you also update the renderer inputs.

3. **Ensure “generated project SSOT” paths match**
   - Generated projects should treat these as SSOT:
     - `docs/PRD.md`, `docs/Roadmap.md`, `docs/Architecture.md`, `docs/QA-Plan.md`
   - Don’t reference AgentOS-internal paths inside generated docs.

4. **Sanity check via scaffold + validator**
   - Pick a destination under `tmp/` that does not already exist (or use a new name each run).
   - Scaffold:
     - `npm run new-project -- demo-app --preset app --agents sw,design,pm,qa --dest ./tmp/demo-app`
   - Validate:
     - `npm run validate-scaffold -- ./tmp/demo-app`
   - Fix failures by editing templates (first) before touching scripts.

---

## Done when
- Docs templates exist, are non-empty, and render cleanly in a scaffold output.

