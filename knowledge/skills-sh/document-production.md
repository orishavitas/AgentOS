# Document Production Skills (PRDs, Docs, Decks, Spreadsheets)

Goal: make the agent reliably produce **human-readable artifacts**: PRDs, technical docs, slide decks, docx/pdf, and spreadsheets.

## PRDs and Requirements

### prd-planner (charon-fan/agent-playbook)
- Skills.sh: https://skills.sh/charon-fan/agent-playbook (skill: prd-planner)
- Install:
```bash
npx skills add https://github.com/charon-fan/agent-playbook --skill prd-planner
```
- Use when:
  - user explicitly says **PRD** / "product requirements" or you need a structured product doc.
- Enforce outputs:
  - `docs/prd.md`
  - `docs/acceptance_criteria.md`
  - `docs/open_questions.md`

### planning-with-files (charon-fan/agent-playbook)
- Skills.sh: https://skills.sh/charon-fan/agent-playbook (skill: planning-with-files)
- Install:
```bash
npx skills add https://github.com/charon-fan/agent-playbook --skill planning-with-files
```
- Use when:
  - task spans many steps/tools or risks context overflow.
- Expected files:
  - `task_plan.md`, `findings.md`, `progress.md` (names come from the skill description)

## Technical Docs + Writing Quality

### writing-clearly-and-concisely (softaworks/agent-toolkit)
- Skills.sh: https://skills.sh/softaworks/agent-toolkit/writing-clearly-and-concisely
- Install:
```bash
npx skills add https://github.com/softaworks/agent-toolkit --skill writing-clearly-and-concisely
```
- Use when:
  - writing docs, UI text, reports, explanations.
- Enforce:
  - short sentences, active voice, concrete nouns, no filler.

### documentation-engineer (charon-fan/agent-playbook)
- Skills.sh: https://skills.sh/charon-fan/agent-playbook (skill: documentation-engineer)
- Install:
```bash
npx skills add https://github.com/charon-fan/agent-playbook --skill documentation-engineer
```
- Use when:
  - you need a documentation system: information architecture, doc standards, knowledge mgmt.

### crafting-effective-readmes (softaworks/agent-toolkit)
- Skills.sh: https://skills.sh/softaworks/agent-toolkit/crafting-effective-readmes
- Install:
```bash
npx skills add https://github.com/softaworks/agent-toolkit --skill crafting-effective-readmes
```
- Use when:
  - README is an onboarding tool (not a random essay).

### mermaid-diagrams (softaworks/agent-toolkit)
- Skills.sh: https://skills.sh/softaworks/agent-toolkit/mermaid-diagrams
- Install:
```bash
npx skills add https://github.com/softaworks/agent-toolkit --skill mermaid-diagrams
```
- Use when:
  - you need diagrams that stay version-controlled in Markdown.

## Output Formats (docx/pdf/pptx/xlsx)

These skills are particularly useful if your pipeline expects Office/PDF artifacts.

### docx (anthropics/skills)
- Skills.sh: https://skills.sh/anthropics/skills/docx
- Install:
```bash
npx skills add https://github.com/anthropics/skills --skill docx
```
- Use when:
  - generating or editing .docx; converting; handling tracked changes.

### pdf (anthropics/skills)
- Skills.sh: https://skills.sh/anthropics/skills/pdf
- Install:
```bash
npx skills add https://github.com/anthropics/skills --skill pdf
```
- Use when:
  - reading/extracting, merging/splitting, watermarking, filling forms, OCR.

### pptx (anthropics/skills)
- Skills.sh: https://skills.sh/anthropics/skills/pptx
- Install:
```bash
npx skills add https://github.com/anthropics/skills --skill pptx
```
- Use when:
  - building slide decks (title/agenda/storyline -> deck -> export).

### xlsx (anthropics/skills)
- Skills.sh: https://skills.sh/anthropics/skills/xlsx
- Install:
```bash
npx skills add https://github.com/anthropics/skills --skill xlsx
```
- Use when:
  - spreadsheet generation/editing. The skill strongly prefers **Excel formulas over hardcoding**.

## Presentation Theming (Optional but High Leverage)

### theme-factory (anthropics/skills)
- Skills.sh: https://skills.sh/anthropics/skills/theme-factory
- Install:
```bash
npx skills add https://github.com/anthropics/skills --skill theme-factory
```
- Use when:
  - you want a consistent look across decks/docs.

## Suggested "Doc Production" Bundles

- **PRD**: `prd-planner` + `writing-clearly-and-concisely` (+ `mermaid-diagrams`)
- **Developer docs**: `documentation-engineer` + `crafting-effective-readmes` + `mermaid-diagrams`
- **Office output**: `docx` / `pptx` / `xlsx` + `theme-factory`
- **PDF pipelines**: `pdf` (+ OCR only if needed)

## "Done" Definition (Docs)

- Artifacts are stored in predictable folders (`docs/`, `design/`, `artifacts/`).
- Each doc has: audience, purpose, assumptions, non-goals, acceptance criteria, and open questions.
- Diagrams are in-source (Mermaid) when possible.
