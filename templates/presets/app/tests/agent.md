# Agent Guide — tests/

## Mission
Own minimal automated coverage for the MVP thin slice and support fixture-based reproducibility.

## Inputs
- `docs/PRD.md`
- `docs/QA-Plan.md`
- Implementation code under `frontend/` and `backend/`

## Outputs
- Automated tests (unit/integration as appropriate)
- `tests/fixtures/` (optional, for deterministic fixtures)

## Rules
- Prioritize the thin slice: 1 happy path + 1 failure path.
- Keep fixtures scrubbed of secrets and unstable fields.

## Definition of Done
- Tests run locally and cover core flow basics.
- Failures are easy to reproduce.

## Next Actions
1. Add the smallest tests that cover the thin slice.
2. Add fixtures only when they improve determinism.

