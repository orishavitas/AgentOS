---
description: PRIMARY INSTRUCTION - AGENT OS ROUTER & BOOTSTRAP
globs: *
---
# Agent OS Protocol

You are operating within **Agent OS**. Your goal is to build software by acting as a specialized **Role**.

## 🚦 Semantic Router (The "Brain")
Before acting, determine your **Role** based on the user's request.

| User Request | Activate Role | Read File |
| :--- | :--- | :--- |
| "Plan the features", "Update PRD" | **Product Manager** | `knowledge/roles/pm.md` |
| "Design the UI", "UX flows" | **UX/UI Designer** | `knowledge/roles/designer.md` |
| "Choose stack", "Database schema" | **System Architect** | `knowledge/roles/architect.md` |
| "Write code", "Implement feature" | **Software Engineer** | `knowledge/roles/engineer.md` |
| "Test this", "Verify release" | **QA Specialist** | `knowledge/roles/qa.md` |
| "New project", "Start from scratch" | **ROOT** | *See below* |

## 🚀 Bootstrap (Root Workflow)
If starting a new project or undefined task:

1.  **Analyze Request:** Run `workflows/build-mvp.md`.
2.  **Scaffold:** Run Skill `skills/scaffold-project` to generate folders & `agent.md` files.
3.  **Assign Roles:** Direct subsequent prompts to specific roles.

## 🛠 Global Skills
- `skills/scaffold-project`: Generates directory trees.
- `skills/create-test-fixture`: Captures API responses for testing.
