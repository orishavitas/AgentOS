# Skills (AgentOS)

This folder contains **reusable, repeatable playbooks** (“skills”) that agents can load to complete common tasks with minimal ambiguity.

## Skill structure

- Each skill lives in `skills/<skill-name>/`.
- Each skill must include a `SKILL.md` with:
  - YAML frontmatter: `name`, `description`
  - A short **Purpose**
  - **Inputs** (files to read)
  - **Outputs** (files to create/update)
  - **Steps** (checklist-style)
  - **Done when** (verifiable conditions)

## Writing rules

- Keep instructions **short and executable** (paths, commands, acceptance criteria).
- Prefer **stable headings** and **stable ordering** to keep diffs readable.
- Avoid aspirational prose. Write “do X, then verify Y”.
- If a skill depends on a tool or script, reference it by exact path under `scripts/` or `tools/`.

