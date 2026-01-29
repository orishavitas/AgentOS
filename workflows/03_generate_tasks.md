
# Playbook — Generate Tasks (AgentOS development)

**Goal:** Turn the PRD’s next increment into executable tasks with clear acceptance criteria and concrete file paths (thin-slice oriented).

---

## Inputs
- `docs/internal/PRD_AgentOS.md` (requirements SSOT)
- `03_backlog.md` (prioritized list of work)
- `templates/task.md` (task template for detailed specs)

## Outputs
- A lightweight next-slice list in `03_backlog.md`, and/or
- Task specs under `tasks/` (one file per task)

---

## Steps
1. **Pick the next slice (1–3 deliverables)**
   - Use `docs/internal/PRD_AgentOS.md` Acceptance Criteria (v1) as the filter.
   - Prefer deliverables that end in a runnable validation signal:
     - scaffold output created
     - validator passes

2. **Write the tasks in the backlog first**
   - Add the slice to `03_backlog.md` under P0/P1 with:
     - goal (1 sentence)
     - files to touch (paths)
     - Done when (verifiable)

3. **Promote to task specs when needed**
   - When a task has multiple subtasks or needs a handoff, create `tasks/<slug>.md` using `templates/task.md`.
   - Include (at minimum):
     - Context linking to the PRD section
     - In/Out of scope
     - Acceptance criteria checkboxes
     - Exact commands to run (usually `npm run new-project` and/or `npm run validate-scaffold`)

4. **Keep tasks thin**
   - If a task touches both templates and scripts, split it unless you can validate in one pass.

---

## Done when
- The next increment is decomposed into a small number of executable tasks with verifiable outcomes.

