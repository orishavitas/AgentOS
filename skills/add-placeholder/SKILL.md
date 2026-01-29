---
name: add-placeholder
description: Adds a new template placeholder and updates rendering + docs accordingly.
---

# Skill: Add Placeholder

## Purpose
Add a new placeholder (e.g., `{{REPO_NAME}}`, `{{TEMPLATE_VERSION}}`) and ensure it is rendered consistently across all templates.

## Inputs
- `docs/internal/PRD_AgentOS.md` (placeholder list + rendering rules)
- `scripts/lib/render.js` (renderer implementation)
- `templates/common/agentos.json` (common placeholder usage)

## Outputs
- Updates to `scripts/lib/render.js`
- Updates to templates that should consume the placeholder
- Updates to any docs that list supported placeholders

## Steps
1. Define the placeholder name in `{{UPPER_SNAKE_CASE}}`.
2. Update the renderer to:
   - provide a value for the placeholder from CLI args, config, or derived data
   - replace occurrences in all text template files
3. Add the placeholder to any templates that should include it (only where useful).
4. Add a validation check that fails if unresolved placeholders remain after rendering.
5. Run a scaffold and confirm the placeholder renders correctly.

## Done when
- Placeholder is documented and used consistently.
- Rendering replaces it across templates and leaves no unresolved `{{...}}`.
- Validator catches missing placeholder values when required.

