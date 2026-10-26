# UX Skills (Research + IA + Flows + Validation)

Goal: help an agent design UX that's **grounded**, testable, and actionable (not just pretty screens).

## Core UX Skill Set

### 1) product-designer (borghei/claude-skills)
- Skills.sh: https://skills.sh/borghei/claude-skills/product-designer
- Install:
```bash
npx skills add https://github.com/borghei/claude-skills --skill product-designer
```
- Use when:
  - you want a **complete product design loop**: goals -> users -> IA -> flows -> UI -> validation.
- Enforce outputs:
  - `ux/problem_statement.md`
  - `ux/personas.md` + `ux/journeys.md`
  - `ux/ia_sitemap.md`
  - `ux/critical_flows.md` (happy path + 2 failure paths)

### 2) ux-designer (aj-geddes/claude-code-bmad-skills)
- Skills.sh: https://skills.sh/aj-geddes/claude-code-bmad-skills/ux-designer
- Install:
```bash
npx skills add https://github.com/aj-geddes/claude-code-bmad-skills --skill ux-designer
```
- Use when:
  - you need wireframes, flows, journeys, and WCAG-minded UX artifacts.

### 3) ux-design (mindrally/skills)
- Skills.sh: https://skills.sh/mindrally/skills/ux-design
- Install:
```bash
npx skills add https://github.com/mindrally/skills --skill ux-design
```
- Use when:
  - you want a **principles checklist** (IA, interaction design, feedback, error recovery, accessibility).

### 4) researcher (simota/agent-skills)
- Skills.sh: https://skills.sh/simota/agent-skills/researcher
- Install:
```bash
npx skills add https://github.com/simota/agent-skills --skill researcher
```
- Use when:
  - you need **structured research** (questions -> method -> analysis -> actionable recs).
- Enforce outputs:
  - `research/questions.md`
  - `research/method.md`
  - `research/findings.md` + `research/recommendations.md`

### 5) ux-researcher (404kidwiz/claude-supercode-skills)
- Skills.sh: https://skills.sh/404kidwiz/claude-supercode-skills/ux-researcher
- Install:
```bash
npx skills add https://github.com/404kidwiz/claude-supercode-skills --skill ux-researcher
```
- Use when:
  - you're doing usability testing, synthesis, research ops.

### 6) requirements-clarity (softaworks/agent-toolkit)
- Skills.sh: https://skills.sh/softaworks/agent-toolkit/requirements-clarity
- Install:
```bash
npx skills add https://github.com/softaworks/agent-toolkit --skill requirements-clarity
```
- Use when:
  - requirements are ambiguous; force "Why?" + "Simpler?" before committing to design/build.

## Optional UX Accelerators

### design-brief-generator (jamesrochabrun/claude-code-skills)
- Skills.sh: https://skills.sh/jamesrochabrun/claude-code-skills/design-brief-generator
- Install:
```bash
npx skills add https://github.com/jamesrochabrun/claude-code-skills --skill design-brief-generator
```
- Use when:
  - you need a concise brief with goals, constraints, audience, tone, and deliverables.

## Recommended UX Execution Sequence (Agent Protocol)

1. **Clarify**: run requirements-clarity (or equivalent) until scope is coherent.
2. **Research** (lightweight if needed): researcher/ux-researcher.
3. **IA & flows**: sitemap + critical flows + edge cases.
4. **Wireframes** (lo-fi): validate structure before styling.
5. **Validation plan**: usability test script + success metrics.

## "Done" Definition (UX)

- Primary personas + top jobs-to-be-done documented.
- Critical flows documented (happy + failure paths).
- IA/sitemap exists.
- A validation plan exists (what to test, with whom, success criteria).
