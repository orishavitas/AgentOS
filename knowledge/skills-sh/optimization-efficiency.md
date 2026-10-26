# Optimization & Efficiency Skills (Routing, Planning, Performance)

Goal: make the agent faster, more reliable, and less context-wasteful.

## Core Operational Skills

### 1) skill-router (charon-fan/agent-playbook)
- Skills.sh: https://skills.sh/charon-fan/agent-playbook (skill: skill-router)
- Install:
```bash
npx skills add https://github.com/charon-fan/agent-playbook --skill skill-router
```
- Use when:
  - user asks "which skill", "how do we approach", or the request is ambiguous.
- Output:
  - recommended skill set + ordering + "why", then start execution.

### 2) planning-with-files (charon-fan/agent-playbook)
- Skills.sh: https://skills.sh/charon-fan/agent-playbook (skill: planning-with-files)
- Install:
```bash
npx skills add https://github.com/charon-fan/agent-playbook --skill planning-with-files
```
- Use when:
  - multi-step task, research, implementation involving >5 tool calls.
- Output:
  - `task_plan.md`, `findings.md`, `progress.md` and update them as you go.

### 3) self-improving-agent (charon-fan/agent-playbook)
- Skills.sh: https://skills.sh/charon-fan/agent-playbook (skill: self-improving-agent)
- Install:
```bash
npx skills add https://github.com/charon-fan/agent-playbook --skill self-improving-agent
```
- Use when:
  - you want automatic retrospectives after successes/failures (hook-based improvement).
- Practical note:
  - best used in repos where you *want* persistent learnings.

## Performance / Optimization

### performance-engineer (charon-fan/agent-playbook)
- Skills.sh: https://skills.sh/charon-fan/agent-playbook (skill: performance-engineer)
- Install:
```bash
npx skills add https://github.com/charon-fan/agent-playbook --skill performance-engineer
```
- Use when:
  - performance tuning, observability, scalability, CWV, caching, load testing.

### performance (addyosmani/web-quality-skills)
- Skills.sh: https://skills.sh/addyosmani/web-quality-skills/performance
- Install:
```bash
npx skills add https://github.com/addyosmani/web-quality-skills --skill performance
```
- Use when:
  - web quality audits (Core Web Vitals mindset), shipping UI that feels fast.

## Context + Time Efficiency in Agent Workflows

### agent-md-refactor (softaworks/agent-toolkit)
- Skills.sh: https://skills.sh/softaworks/agent-toolkit/agent-md-refactor
- Install:
```bash
npx skills add https://github.com/softaworks/agent-toolkit --skill agent-md-refactor
```
- Use when:
  - your `AGENTS.md` / `CLAUDE.md` becomes bloated; split into linked modules.

### session-handoff (softaworks/agent-toolkit)
- Skills.sh: https://skills.sh/softaworks/agent-toolkit/session-handoff
- Install:
```bash
npx skills add https://github.com/softaworks/agent-toolkit --skill session-handoff
```
- Use when:
  - you're near context limits or handing off to a fresh agent.

### reducing-entropy (softaworks/agent-toolkit)
- Skills.sh: https://skills.sh/softaworks/agent-toolkit/reducing-entropy
- Install:
```bash
npx skills add https://github.com/softaworks/agent-toolkit --skill reducing-entropy
```
- Use when:
  - user explicitly wants to **shrink** codebase: delete, simplify, reduce scope.

### prompt-engineering-patterns (wshobson/agents)
- Skills.sh: https://skills.sh/wshobson/agents/prompt-engineering-patterns
- Install:
```bash
npx skills add https://github.com/wshobson/agents --skill prompt-engineering-patterns
```
- Use when:
  - improving agent reliability: structured prompts, constraints, evaluation loops.

## Efficiency "Hard Rules" You Can Encode

1. **Always route first** (skill-router or playbook).
2. **Use file-based planning** when task > 30 minutes or > 5 steps.
3. **Define "done" early** (acceptance criteria + measurables).
4. **Prefer checklists + templates** over prose in long projects.
5. **Prefer small diffs** and modular files to reduce context cost.

## Output Expectations (for the Orchestrator)

- Any time a plan is made: there must be an updated `progress.md`.
- Any time performance work is requested: define a budget (ms, KB, CWV).
- Any time doc work is requested: outline first, then fill.
