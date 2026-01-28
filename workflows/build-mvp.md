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

### 1) Lock the MVP scope (Role: PM)
- [ ] In `docs/PRD.md`, confirm:
  - [ ] MVP statement (one paragraph)
  - [ ] In-scope list (<= 7 bullets)
  - [ ] Out-of-scope list
  - [ ] Success criteria for MVP

### 2) Design & Contracts (Role: Architect & Designer)
- [ ] **(Designer)** Map the core flow in `design/User-Flows.md`.
- [ ] **(Architect)** Create/confirm API contract doc (inline in `Architecture.md` or separate `API.md`).
- [ ] **(Architect)** Decide mock vs real backend for first UI pass.

### 3) Build the “thin slice” (Role: Engineer)
- [ ] Implement the smallest end-to-end path:
  - UI → API → persistence (or mock) → UI
- [ ] Add basic empty/loading/error states (per Designer's specs).

### 4) Add validation gates (Role: QA)
- [ ] Minimal tests for the thin slice.
- [ ] Manual checklist for the core flow in `docs/QA-Plan.md`.

### 5) Freeze and document (Role: Architect)
- [ ] Update `docs/Architecture.md` with what exists.
- [ ] Add a short Decision Log entry if you deviated from templates.

---

## Done when
- [ ] Core flow works end-to-end
- [ ] Run instructions are correct
- [ ] QA checklist exists and passes
