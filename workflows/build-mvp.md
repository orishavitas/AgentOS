# Playbook — Build MVP (AgentOS)

**Goal:** A repeatable sequence for getting from scaffold → working MVP with minimal loops.

---

## Inputs
- `docs/PRD.md`
- `docs/Roadmap.md`
- Folder `agent.md` files (ownership boundaries)

## Outputs
- A runnable MVP implementing the first “core flow”
- Updated docs reflecting reality (no drift)

---

## Steps

### 1) Lock the MVP scope (30 minutes max)
- [ ] In `docs/PRD.md`, confirm:
  - [ ] MVP statement (one paragraph)
  - [ ] In-scope list (<= 7 bullets)
  - [ ] Out-of-scope list
  - [ ] Success criteria for MVP

### 2) Define contracts early
- [ ] Create/confirm API contract doc (inline in `Architecture.md` or separate `API.md`)
- [ ] Decide mock vs real backend for first UI pass

### 3) Build the “thin slice”
- [ ] Implement the smallest end-to-end path:
  - UI → API → persistence (or mock) → UI
- [ ] Add basic empty/loading/error states

### 4) Add validation gates
- [ ] Minimal tests for the thin slice
- [ ] Manual checklist for the core flow in `docs/QA-Plan.md`

### 5) Freeze and document
- [ ] Update `docs/Architecture.md` with what exists
- [ ] Add a short Decision Log entry if you deviated from templates

---

## Done when
- [ ] Core flow works end-to-end
- [ ] Run instructions are correct
- [ ] QA checklist exists and passes
