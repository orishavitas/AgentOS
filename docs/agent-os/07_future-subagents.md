# Future: subagent assembly (repo-only) — Router → Roles → Skills → Handoffs

This document is a **repo-only** specification for a future “subagent” orchestration layer for AgentOS. It does **not** require any Cursor-specific automation and it does **not** implement anything; it only defines conventions so future automation can be added without redesign.

For the high-level operating model and v1 Role→Skill mapping, see `docs/agent-os/02_operating-model.md`.

## Goals

- Define a **stable interface** between:
  - a **Router** (orchestrator),
  - **Role agents** (PM/Architect/Engineer/QA),
  - and **Skills** (repeatable execution units under `skills/`).
- Define **handoff contracts**: what each role must read, what it must produce, and what “done” means for that handoff.
- Keep the system **repo-only**: file-based artifacts and conventions that can later be automated.

## Non-goals

- Implementing a router, subagents, or any automation.
- Defining Cursor rules, prompts, or any `.cursor/rules/` behavior.
- Replacing the existing docs layer separation described in `docs/agent-os/03_repo-architecture.md`.

## Concepts

### Router

The Router is the coordinator that:
- selects which role should act next,
- packages a **Work Order** (inputs + constraints + required outputs),
- and verifies that the resulting artifacts satisfy the handoff contract.

The Router can be manual (a human following this doc) or future automation.

### Role agent

A Role agent is an executor with a focused responsibility:
- **PM**: scope, success criteria, prioritization.
- **Architect**: boundaries, contracts, structure, major decisions.
- **Engineer**: implementation of CLI/templates/scripts.
- **QA**: validation, reproducibility, failure interpretation.

Role definitions (repo knowledge) live under `knowledge/roles/` (v1), and the operating model lives in `docs/agent-os/02_operating-model.md`.

### Skill

A Skill is a repeatable procedure under `skills/<name>/` with explicit inputs/outputs.

In future subagent automation, “invoking a skill” means: execute that procedure and produce the expected artifacts (or a clear failure report).

### Artifact

Artifacts are files or directories that serve as the **contract** between roles.

AgentOS has two documentation layers; the Router must always be explicit about which layer is in scope:

- **AgentOS-internal (this repo)**: SSOT is `docs/internal/PRD_AgentOS.md`.
- **Generated project**: SSOT lives in the generated project’s `docs/` (e.g., `docs/PRD.md`, `docs/Architecture.md`, etc.).

See `docs/agent-os/03_repo-architecture.md`.

## Work Order + Handoff Bundle (file-based interface)

### Work Order (Router → Role)

The Router issues a Work Order with:
- **Objective**: what outcome the role must achieve.
- **Scope**: which doc layer (AgentOS repo vs generated project).
- **Inputs**: explicit file paths to read (not “the whole repo”).
- **Constraints**: e.g., “repo-only”, “no `.cursor/rules/` changes”, “no breaking changes”.
- **Required outputs**: explicit file paths and acceptance checks.

### Handoff Bundle (Role → Router/Next Role)

The role returns a Handoff Bundle containing:
- **Changed artifacts**: file paths modified/created and why.
- **Decisions**: what was decided and what remains open.
- **Assumptions**: anything assumed due to missing info.
- **Acceptance checks**: how to verify the handoff is correct.
- **Next role suggestion**: who should act next and why.

Recommended minimal schema (conceptual; not implemented):

```yaml
handoff:
  from_role: Engineer
  to_role: QA
  objective: "Validate scaffold output for preset=app"
  inputs:
    - "docs/agent-os/05_validation.md"
    - "scripts/validate-scaffold.js"
  outputs:
    - "workflows/04_validate.md"
  decisions:
    - "Validator checks unresolved placeholders by scanning for '{{' tokens."
  open_questions:
    - "Should validation treat '{{{raw}}}' blocks as allowed?"
  acceptance_checks:
    - "Running validation on fixture passes."
```

## Role → Skill assembly (future)

This section defines how a Router can “assemble” work by routing each role to specific skills and requiring specific outputs.

> Note: listed skills reflect the v1 skill set described in the skills-first roadmap. Some roles also require future “docs editing” skills; these are explicitly marked as future.

### PM assembly

- **Primary outputs**
  - Scope/success criteria in the relevant SSOT:
    - AgentOS repo: `docs/internal/PRD_AgentOS.md`
    - Generated project: `docs/PRD.md`, `docs/Roadmap.md`
- **Skills**
  - `skills/add-placeholder` (when new metadata fields are required for templates/validation)
  - (future) “edit PRD/Roadmap” skills (to standardize structure and acceptance criteria)
- **Handoff contract**
  - Must produce: crisp acceptance criteria and constraints that downstream roles can test.
  - Must not produce: ambiguous requirements (“nice to have”) without priority/DoD.

### Architect assembly

- **Primary outputs**
  - AgentOS repo: architecture decisions documented in `docs/agent-os/*` (repo-only)
  - Generated project: `docs/Architecture.md`
- **Skills**
  - `skills/add-preset` (when a new preset requires new structure/contracts)
  - `skills/add-placeholder` (when templates/contracts require new data)
  - (future) “architecture doc update” skill (to standardize contract sections)
- **Handoff contract**
  - Must produce: clear contracts (I/O, boundaries, invariants) suitable for implementation + validation.
  - Must include: any constraints that affect template rendering or validation rules.

### Engineer assembly

- **Primary outputs**
  - Code: `scripts/`, `templates/`, `skills/` as appropriate
  - Repo operating docs/workflows when needed (still repo-only)
- **Skills**
  - `skills/add-preset`
  - `skills/add-role`
  - `skills/add-placeholder`
- **Handoff contract**
  - Must produce: runnable commands (CLI/validator) and deterministic outputs.
  - Must ensure: “no unresolved placeholders” in generated outputs (unless explicitly allowed).

### QA assembly

- **Primary outputs**
  - Validation procedures and interpretation notes:
    - `skills/validate-scaffold-output`
    - `skills/create-test-fixture` (optional v1)
    - Repo docs under `docs/agent-os/05_validation.md` and/or workflows under `workflows/04_validate.md` (repo-only)
- **Skills**
  - `skills/validate-scaffold-output`
  - `skills/create-test-fixture`
- **Handoff contract**
  - Must produce: clear pass/fail criteria and actionable failure diagnostics.
  - Must verify: reruns without `--force` are non-destructive (when applicable).

## Router policy (selection + guardrails)

### Role selection heuristics

- Route to **PM** when: scope is unclear, acceptance criteria missing, priorities undefined.
- Route to **Architect** when: boundaries/contracts unclear, structure changes needed, placeholders/roles/presets impact design.
- Route to **Engineer** when: code/templates need implementation or refactoring.
- Route to **QA** when: changes need validation, reproducibility, fixtures, or failure analysis.

### Guardrails (repo-only)

- The Router must always specify **exact paths** in “Inputs” and “Required outputs”.
- Roles should avoid “drive-by edits”; only change files needed to satisfy the Work Order.
- Prefer producing artifacts that are **diffable** and **reviewable** (markdown, json, scripts).
- Treat docs as contracts: update docs whenever behavior or interfaces change.

## Orchestration flow (conceptual)

```mermaid
flowchart TD
  Router[Router (manual or automated)] -->|Work Order| PM[PM Role]
  Router -->|Work Order| Arch[Architect Role]
  Router -->|Work Order| Eng[Engineer Role]
  Router -->|Work Order| QA[QA Role]

  PM -->|Handoff Bundle| Router
  Arch -->|Handoff Bundle| Router
  Eng -->|Handoff Bundle| Router
  QA -->|Handoff Bundle| Router

  Router -->|Select next role| Router
```

## Checkpoints: “Done” at the system level (v1)

These are Router-level completion gates (matches the spirit of `docs/agent-os/02_operating-model.md`):

- **Scaffold works**: running the scaffolder produces the expected tree.
- **Validation passes**: validation runs and returns success for required presets/fixtures.
- **No unresolved placeholders**: generated files contain no leftover `{{...}}` tokens (unless explicitly allowed).
- **Non-destructive re-run**: re-running without force does not overwrite user content.

