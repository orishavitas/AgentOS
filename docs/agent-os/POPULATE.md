\# Populate Project (Deterministic)



\## Inputs

\- project.seed.yaml

\- agent-os/templates/\*

\- agent-os/docs/agent-os/\* (rules)



\## Limiters

Use limiters from project.seed.yaml:

\- max\_questions

\- max\_rounds

Only ask blocking questions.



\## Output requirements

Generate or update these files with REAL content (no placeholders):

1\) docs/state.md

2\) docs/decisions.md

3\) docs/roadmap.md

4\) docs/MRD.md (use templates/mrd.template.md)

5\) docs/PRD.md (use templates/prd.template.md)

6\) agents/\*/agent.md for:

&nbsp;  - orchestrator, product, design, engineering, qa, security

7\) docs/tasks/<role>/01\_bootstrap\_tasks.md for each role (task packets)



\### Rules

\- Stable headings, stable ordering.

\- Include sections: Assumptions, Known unknowns, Definition of Done.

\- No extra files unless explicitly listed in seed deliverables.

\- Make tasks executable (file paths, commands, acceptance criteria).



