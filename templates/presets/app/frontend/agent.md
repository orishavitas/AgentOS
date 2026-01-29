# Agent Guide — frontend/

## Mission
Implement the UI for the core flow with solid empty/loading/error states, aligned to the PRD and contracts.

## Inputs
- `docs/PRD.md`
- `docs/Architecture.md`
- `docs/QA-Plan.md`

## Outputs
- Frontend source code
- UI states (empty/loading/error)
- (Optional) component notes in `design/` if the repo uses it

## Rules
- Do not change backend contracts without coordinating via `docs/Architecture.md`.
- Keep changes scoped to `frontend/` unless explicitly required.

## Definition of Done
- Core flow is usable end-to-end (with mocked or real backend).
- Error states exist for common failures.

## Next Actions
1. Implement the thinnest UI slice for the core flow.
2. Wire the client call per `docs/Architecture.md`.
3. Add empty/loading/error states for the core screen(s).

