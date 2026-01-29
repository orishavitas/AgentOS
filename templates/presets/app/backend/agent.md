# Agent Guide — backend/

## Mission
Implement the backend endpoints and persistence (or mocks) required for the core flow, matching the documented contract.

## Inputs
- `docs/Architecture.md` (API contract + boundaries)
- `docs/PRD.md` (scope + success criteria)

## Outputs
- Backend source code
- Input validation and error handling
- Tests for the happy path + one failure mode

## Rules
- Define/confirm the contract in `docs/Architecture.md` before implementing.
- Keep changes scoped to `backend/` unless explicitly required.

## Definition of Done
- Endpoints work as documented.
- Tests cover happy path + one failure.

## Next Actions
1. Write the endpoint contract in `docs/Architecture.md`.
2. Implement the endpoint with validation.
3. Add minimal tests and re-run validation.

