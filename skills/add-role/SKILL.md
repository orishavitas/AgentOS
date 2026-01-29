---
name: add-role
description: Adds a new role bundle and updates template/validation mappings accordingly.
---

# Skill: Add Role

## Purpose
Introduce a new role (e.g., `security`, `data`, `devops`) so scaffolds can generate role-aligned `agent.md` guidance and (optionally) role-specific docs.

## Inputs
- `docs/internal/PRD_AgentOS.md` (supported roles + behavior)
- `scripts/lib/roles.js` (role registry + validation)
- Existing role guidance in `knowledge/roles/*.md`

## Outputs
- Updates to `scripts/lib/roles.js`
- New templates under `templates/presets/<preset>/...` as needed (role-specific `agent.md` variants or docs)
- (Optional) new role guide under `knowledge/roles/<role>.md`

## Steps
1. Define the new role id and display name (keep ids short and CLI-friendly).
2. Update `scripts/lib/roles.js` to:
   - validate the role id
   - map role ids to any required template variants
3. Add or update `agent.md` templates so the generated project includes:
   - Mission / Ownership
   - Inputs / Outputs
   - Rules / Boundaries
   - Definition of Done
   - Next Actions (3–7 bullets)
4. If the role requires additional docs (e.g., `docs/Security-Review.md`), add them to templates and preset registry.
5. Validate by running a scaffold with the new role included and ensuring it affects output as expected.

## Done when
- CLI accepts `--agents ...,<new-role>` and produces deterministic output.
- Any required role-specific files are created and non-empty.
- Validator passes for the scaffolded output.

