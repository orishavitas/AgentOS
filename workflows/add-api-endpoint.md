# Playbook — Add an API Endpoint

**Goal:** Add an endpoint without breaking contracts or drifting docs.

---

## Inputs
- `docs/Architecture.md`
- (Optional) `docs/API.md`
- Backend `agent.md`

## Outputs
- New endpoint implemented
- Contract documented
- Tests updated

---

## Steps

1. **Define contract first**
   - [ ] Route + method
   - [ ] Request schema
   - [ ] Response schema
   - [ ] Errors (at least 2 common failure modes)

2. **Update docs**
   - [ ] Add/Update `docs/API.md` (or `Architecture.md` section)

3. **Implement backend**
   - [ ] Validate input
   - [ ] Implement business logic
   - [ ] Add logging where needed (minimal)

4. **Add tests**
   - [ ] Unit tests for core logic
   - [ ] Integration test for endpoint (if available)

5. **Update frontend (if used)**
   - [ ] Update client call
   - [ ] Handle error states

---

## Done when
- [ ] Endpoint works and is documented
- [ ] Tests cover the happy path + one failure
- [ ] No contract drift between docs and implementation
