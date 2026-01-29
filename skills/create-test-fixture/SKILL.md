---
name: create-test-fixture
description: Captures reproducible fixtures for tests (API responses, JSON payloads, etc.).
---

# Skill: Create Test Fixture

## Purpose
Create deterministic test fixtures so QA and tests can reproduce bugs and validate behavior without relying on live services.

## Inputs
- Test plan / checklist (e.g., `docs/QA-Plan.md` in a generated project)
- The failing scenario description (steps + inputs)

## Outputs
- Fixture files under `tests/fixtures/` (or a project-defined fixtures folder)
- A short README note describing how to replay the fixture

## Steps
1. Identify the smallest request/response (or input/output) that reproduces the behavior.
2. Save the payload(s) as JSON files:
   - `tests/fixtures/<name>.request.json`
   - `tests/fixtures/<name>.response.json`
3. Remove secrets and unstable fields (tokens, timestamps, request ids) or normalize them.
4. Update or add a test that uses the fixture.
5. Verify the test passes offline (no external dependencies).

## Done when
- The test can replay the scenario using only local fixture files.
- No secrets are stored in the fixture.

