# Playbook — Release

**Goal:** Ship predictably without “surprises.”

---

## Inputs
- `docs/Definition-of-Done.md`
- `docs/QA-Plan.md`
- `docs/Decision-Log.md`

## Outputs
- Tagged release (or documented alternative)
- Release notes (short)
- Verified build

---

## Steps

1. **Pre-flight**
   - [ ] Run build
   - [ ] Run tests
   - [ ] Confirm secrets are not committed
   - [ ] Confirm README run steps are correct

2. **QA gate**
   - [ ] Execute QA checklist for core flows
   - [ ] Record results (brief) in `docs/QA-Plan.md`

3. **Version + notes**
   - [ ] Choose version (semantic or simple increment)
   - [ ] Write short release notes:
     - added / changed / fixed / known issues

4. **Tag and publish**
   - [ ] Create git tag (or alternative)
   - [ ] Push changes

---

## Done when
- [ ] Reproducible build exists
- [ ] QA checklist passes (or exceptions are documented)
- [ ] Release notes exist
