---
name: scaffold-project
description: Generates the folder structure and agent.md files for a new project.
---
# Skill: Scaffold Project

## Purpose
Sets up the standard Agent OS directory tree so subsequent agents know where to work.

## Steps
1. **Analyze the PRD:** Read `02_prd.md` to determine the project type (Web App, Library, Automation).
2. **Create Directories:**
   - `docs/` (Architecture, Roadmap)
   - `src/` or `frontend/` + `backend/`
   - `tests/`
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
