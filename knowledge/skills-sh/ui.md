# UI Skills (Selection + Integration Notes)

Goal: help an agent produce **high-fidelity UI**, scalable component patterns, and implementation-ready guidance (React/Next/Vue/etc).

## Core UI Skill Set

### 1) ui-ux-pro-max (nextlevelbuilder/ui-ux-pro-max-skill)
- Skills.sh: https://skills.sh/nextlevelbuilder/ui-ux-pro-max-skill
- Install:
```bash
npx skills add https://github.com/nextlevelbuilder/ui-ux-pro-max-skill --skill ui-ux-pro-max
```
- Use when:
  - you need a strong **visual style**, tokens, component look & feel, layouts, charts, responsive rules.
- Outputs you should enforce:
  - `design/ui_style.md` (palette, typography, spacing scale, elevations, radii, motion)
  - `design/components.md` (component inventory + states)
  - `frontend/` component code (or `snippets/` if not coding yet)
- Pair with:
  - `design-system-patterns` (systematic components + tokens)
  - `accessibility-auditor` (a11y constraints baked in)

### 2) design-system-patterns (gracehunter/design-system-skills)
- Skills.sh: https://skills.sh/gracehunter/design-system-skills/design-system-patterns
- Install:
```bash
npx skills add https://github.com/gracehunter/design-system-skills --skill design-system-patterns
```
- Use when:
  - you need a **real design system**: tokens -> components -> variants -> guidelines -> documentation.
- Enforce outputs:
  - `design/tokens.json` (or `tokens.yml`)
  - `design/component_anatomy.md` (props, states, a11y)
  - `design/patterns/` (navigation, forms, tables, dialogs, empty states, errors)

### 3) flex-grid-flow (youmeyou/skills)
- Skills.sh: https://skills.sh/youmeyou/skills/flex-grid-flow
- Install:
```bash
npx skills add https://github.com/youmeyou/skills --skill flex-grid-flow
```
- Use when:
  - layout gets messy: responsive grids, alignment, overflow, spacing systems.
- Enforce outputs:
  - `design/layout_rules.md` (breakpoints, grid, container widths, spacing rules)

### 4) interaction-design (wshobson/agents)
- Skills.sh: https://skills.sh/wshobson/agents/interaction-design
- Install:
```bash
npx skills add https://github.com/wshobson/agents --skill interaction-design
```
- Use when:
  - micro-interactions, motion, state transitions, perceived performance.
- Enforce outputs:
  - `design/motion_spec.md` (durations, easing, interaction rules, reduced-motion)

### 5) accessibility-auditor (patricio0312rev/Skills)
- Skills.sh: https://skills.sh/patricio0312rev/Skills/accessibility-auditor
- Install:
```bash
npx skills add https://github.com/patricio0312rev/Skills --skill accessibility-auditor
```
- Use when:
  - you need WCAG-minded UI, semantic HTML, keyboard nav, contrast, forms.
- Enforce outputs:
  - `design/accessibility_checklist.md`
  - `qa/a11y_test_cases.md`

## Optional UI Skills (Useful Add-ons)

### ui-designer (olehsvyrydov/ai-development-team)
- Skills.sh: https://skills.sh/olehsvyrydov/ai-development-team/ui-designer
- Install:
```bash
npx skills add https://github.com/olehsvyrydov/ai-development-team --skill ui-designer
```
- Use when:
  - you want **high-fidelity UI** (dashboards, landing pages, brand language, prototypes).

### frontend-ui-ux-engineer (404kidwiz/claude-supercode-skills)
- Skills.sh: https://skills.sh/404kidwiz/claude-supercode-skills/frontend-ui-ux-engineer
- Install:
```bash
npx skills add https://github.com/404kidwiz/claude-supercode-skills --skill frontend-ui-ux-engineer
```
- Use when:
  - you have *functional UI* and need it to look/feel "finished".

## Figma Integration (When You Have Designs)

### figma-implement-design + figma (openai/skills)
- Skills.sh:
  - https://skills.sh/openai/skills/figma-implement-design
  - https://skills.sh/openai/skills/figma
- Install:
```bash
npx skills add https://github.com/openai/skills --skill figma
npx skills add https://github.com/openai/skills --skill figma-implement-design
```
- Use when:
  - you have a Figma link or screenshots and want implementation specs.

### code-connect-components (Figma/mcp-server-guide)
- Skills.sh: https://skills.sh/Figma/mcp-server-guide/code-connect-components
- Install:
```bash
npx skills add https://github.com/Figma/mcp-server-guide --skill code-connect-components
```
- Use when:
  - you want **component linking** between code and design (needs MCP wiring).

## Recommended UI Execution Sequence (Agent Protocol)

1. Run routing (`skill-router`) -> pick UI bundle.
2. Produce **UI style & tokens** (palette/typography/spacing) first.
3. Build **component inventory** (top 20 components + states).
4. Run **a11y pass** early (contrast, keyboard, semantics).
5. Only then implement the UI code.

## "Done" Definition (UI)

- Tokens exist (colors/typography/spacing/radii/elevation).
- Component library exists (props + states + a11y).
- Layout rules exist (grid/breakpoints).
- Motion rules exist (with reduced-motion behavior).
