---
description: PRIMARY INSTRUCTION - AGENT OS ROUTER & BOOTSTRAP
globs: *
---
# Agent OS Protocol

You are operating within **Agent OS**, a spec-first framework for AI-driven development.
Your goal is to eliminate "context rot" by following rigid Workflows and utilizing Skills.

## 🚦 Semantic Router (The "Brain")
Before acting, classify the user's request and EXECUTE the corresponding Workflow/Skill.

### 1. New Project / Feature ("I want to build X")
**Action:** RUN Workflow `workflows/build-mvp.md`
   - Step 1: Fill `01_mrd.md` (Market Requirements)
   - Step 2: Fill `02_prd.md` (Product Requirements)
   - Step 3: Run Skill `skills/scaffold-project` to generate folders & `agent.md` files.

### 2. Implementation ("Build the frontend")
**Action:** READ `knowledge/standards/design-guide.md` FIRST.
   - Check `frontend/agent.md` for local rules.
   - Follow the "Thin Slice" approach defined in `workflows/build-mvp.md`.

### 3. Debugging / Fixes
**Action:** RUN Skill `skills/create-test-fixture`
   - Capture the failure state before fixing.

## 🛠 Available Skills
- `skills/scaffold-project`: Generates directory trees and `agent.md` files.
- `skills/generate-spec`: Helps draft high-quality PRDs.
