---
name: validate-scaffold-output
description: Validates a scaffolded project for completeness and placeholder rendering.
---

# Skill: Validate Scaffold Output

## Purpose
Quickly verify that a scaffolded repo is complete, deterministic, and agent-ready.

## Inputs
- `docs/internal/PRD_AgentOS.md` (acceptance criteria)
- `scripts/validate-scaffold.js` (validator; added in v1)

## Outputs
- A pass/fail validation result
- Actionable error messages (paths + what to fix)

## Steps
1. Run validation against the scaffold output folder:
   - `npm run validate-scaffold -- <scaffolded-project-path>`
   - (Alternative) `node scripts/validate-scaffold.js <scaffolded-project-path>`
2. If it fails, fix the first error category:
   - missing required file(s)
   - empty `agent.md`
   - unresolved `{{...}}` placeholders
   - overwrite behavior violation
3. Re-run validation until it passes.

## Done when
- Validator returns success.
- Output contains the required docs and non-empty per-directory `agent.md`.
- No unresolved placeholders remain.

