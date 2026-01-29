# Validation (v1)

Validation ensures scaffold outputs are **complete**, **agent-ready**, and **fully rendered**.

## Validator command

```bash
node scripts/validate-scaffold.js <scaffolded-project-path>
```

## What we validate (v1)
- **Required files exist and are non-empty**
  - `README.md`
  - `agentos.json`
  - `docs/PRD.md`, `docs/Roadmap.md`, `docs/Architecture.md`, `docs/QA-Plan.md`
  - Per-directory `agent.md` for the preset (v1 `app`)
- **No unresolved placeholders**
  - No leftover `{{...}}` tokens in generated text files
- **Overwrite safety**
  - Re-running the scaffolder without `--force` must not overwrite existing content
  - Note: some restricted environments may prevent subprocess checks; in that case the validator may warn and skip this check.

## Failure categories (how to fix)
1. **Missing required file**
   - Add or fix the corresponding template under `templates/presets/<preset>/...`
2. **Empty file**
   - Ensure templates are non-empty and meaningful (especially `agent.md`)
3. **Unresolved placeholders**
   - Either provide the placeholder value from the CLI (`scripts/new-project.js`) or remove the placeholder from templates