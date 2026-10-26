# Skill Routing Playbook (for Orchestrator Agents)

Use this if `skill-router` is unavailable or as a deterministic fallback.

## Step 1: Classify the Request (Pick 1 Primary + 0-2 Secondary)

- UI Visual / Components / Design system
- UX Research / IA / Flows / Validation
- Document production (PRD / docs / slides / spreadsheets / PDFs)
- Optimization (performance, scalability, observability)
- Efficiency (planning, refactoring docs, session handoff)

## Step 2: Pick Skills (Default Bundles)

### A) UI (Build/Polish)

**Default bundle**
- ui-ux-pro-max
- design-system-patterns
- flex-grid-flow
- accessibility-auditor

**If micro-interactions / motion**
- + interaction-design

**If implementing from Figma**
- + figma-implement-design (and/or code-connect-components)

### B) UX (Research -> Flows -> Validation)

**Default bundle**
- requirements-clarity
- researcher (or ux-researcher)
- ux-designer
- ux-design (principles checklist)

**If you need a brief**
- + design-brief-generator

### C) Docs (PRD / Technical Docs / Slides / Spreadsheets)

**Default bundle**
- writing-clearly-and-concisely
- documentation-engineer

**PRD**
- + prd-planner
- + planning-with-files (if complex)

**Deck**
- + pptx (+ theme-factory)

**Spreadsheet**
- + xlsx

**Word doc**
- + docx

**PDF workflows**
- + pdf

### D) Optimization

**Default bundle**
- performance-engineer
- performance (web-quality-skills)

### E) Efficiency / Meta

- planning-with-files
- agent-md-refactor
- session-handoff
- prompt-engineering-patterns
- reducing-entropy (only if explicitly asked)

## Step 3: Enforce Output Folders

- UI outputs -> `design/` + `frontend/`
- UX outputs -> `ux/` + `research/`
- Docs -> `docs/` (+ `artifacts/` for exported binaries)
- Performance -> `perf/` (budgets, findings, dashboards)

## Step 4: Gate Checks (Stop Points)

- UI: confirm tokens + component inventory before coding everything.
- UX: confirm IA + critical flows before hi-fi.
- Docs: confirm outline + audience before full text.
- Perf: confirm budgets + measurement approach before optimizing.

## Quick Keyword Map

| Keywords | Skills |
|----------|--------|
| "design system", "tokens", "components" | design-system-patterns + ui-ux-pro-max |
| "wireframes", "flows", "journey", "IA" | ux-designer + ux-design |
| "research", "usability test", "interviews" | researcher / ux-researcher |
| "PRD", "requirements" | prd-planner + writing-clearly-and-concisely |
| "slides", "deck" | pptx (+ theme-factory) |
| "pdf", "form", "merge", "ocr" | pdf |
| "spreadsheet", "excel" | xlsx |
| "slow", "CWV", "latency", "bundle size" | performance-engineer + performance |
