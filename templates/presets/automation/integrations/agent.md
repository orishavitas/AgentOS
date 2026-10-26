# Agent Guide — integrations/

## Mission
Implement adapters and clients for external services.

## Inputs
- `docs/Architecture.md` (API contracts)

## Outputs
- Integration clients (e.g., API wrappers)
- Authentication/Connection handling

## Rules
- Isolate external dependencies here.
- Handle rate limits and connection errors.

## Definition of Done
- Integrations successfully connect to external services.
- Mock implementations available for testing.

## Next Actions
1. Identify external services in `docs/Architecture.md`.
2. Implement client/adapter.
3. Verify connection.
