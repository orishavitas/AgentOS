---
name: add-preset
description: Adds a new scaffold preset (tree + templates) and registers it in the CLI.
---

# Skill: Add Preset

## Purpose
Add a new preset (e.g., `app`, `automation`, `library`) to the scaffolder in a way that is deterministic and validateable.

## Inputs
- `docs/internal/PRD_AgentOS.md` (required preset behavior)
- `templates/common/agentos.json` (shared generated config)
- `scripts/lib/presets.js` (preset discovery + errors)
- `scripts/validate-scaffold.js` (preset-specific required paths)

## Outputs
- `templates/presets/<preset>/...` (the template tree)
- Updates to `scripts/validate-scaffold.js` (so the validator knows the preset’s required files)
- (Optional) preset-specific docs in `docs/agent-os/` if behavior differs from other presets

## Steps
1. Create `templates/presets/<preset>/` and add the full directory tree for the preset.
2. Add the required docs templates under `templates/presets/<preset>/docs/`:
   - `PRD.md`, `Roadmap.md`, `Architecture.md`, `QA-Plan.md` (unless the preset intentionally omits some).
3. Add per-directory `agent.md` templates (for every directory the preset creates).
4. Update `scripts/validate-scaffold.js`:
   - Add preset rules in `requiredPathsForPreset(<preset>)` so validation covers the new tree.
5. Validate by running the CLI for the new preset and then running the validator on the output.

## Done when
- `node scripts/new-project.js <name> --preset <preset> --agents ...` creates the expected tree.
- Validation passes: required files exist, `agent.md` are non-empty, and no `{{...}}` placeholders remain.

