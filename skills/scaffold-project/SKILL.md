---
name: scaffold-project
description: Generates the folder structure and agent.md files for a new project.
---
# Skill: Scaffold Project

## Purpose
Sets up a standard Agent OS project directory tree so subsequent agents know where to work.

## Steps
1. **Analyze scaffold requirements:** Use `docs/internal/PRD_AgentOS.md` as the SSOT for what the scaffolder must generate (presets, roles, required docs, and overwrite behavior).
2. **Create Directories:**
   - Start from the preset (e.g., `app`, `automation`, `library`) and create the required folder tree.
   - For `app`, the baseline is `docs/`, `frontend/`, `backend/`, `shared/`, `design/`, `tests/`, `scripts/`.
3. **Generate `agent.md`:**
   - Create an `agent.md` in EVERY directory.
   - Use the template:
     ```markdown
     # Agent Guide - {DIR_NAME}
     ## Mission
     [One sentence on what this folder contains]
     ## Rules
     - Do not modify files outside this directory.
     ```
