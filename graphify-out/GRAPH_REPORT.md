# Graph Report - C:\Users\OriShavit\Documents\GitHub\AgentOS  (2026-05-07)

## Corpus Check
- 10 files · ~22,181 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 45 nodes · 79 edges · 10 communities detected
- Extraction: 73% EXTRACTED · 27% INFERRED · 0% AMBIGUOUS · INFERRED: 21 edges (avg confidence: 0.8)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 7|Community 7]]
- [[_COMMUNITY_Community 8|Community 8]]
- [[_COMMUNITY_Community 9|Community 9]]

## God Nodes (most connected - your core abstractions)
1. `main()` - 15 edges
2. `writeFileFromTemplate()` - 9 edges
3. `main()` - 9 edges
4. `pathExists()` - 7 edges
5. `main()` - 5 edges
6. `validateNoUnresolvedPlaceholders()` - 5 edges
7. `copyTemplateTree()` - 4 edges
8. `validateRequiredFiles()` - 4 edges
9. `isDirectory()` - 4 edges
10. `usage()` - 3 edges

## Surprising Connections (you probably didn't know these)
- `writeFileFromTemplate()` --calls--> `writeFile()`  [INFERRED]
  C:\Users\OriShavit\Documents\GitHub\AgentOS\scripts\new-project.js → C:\Users\OriShavit\Documents\GitHub\AgentOS\scripts\lib\fs.js
- `writeFileFromTemplate()` --calls--> `renderString()`  [INFERRED]
  C:\Users\OriShavit\Documents\GitHub\AgentOS\scripts\new-project.js → C:\Users\OriShavit\Documents\GitHub\AgentOS\scripts\lib\render.js
- `main()` --calls--> `parseAgentsFlag()`  [INFERRED]
  C:\Users\OriShavit\Documents\GitHub\AgentOS\scripts\new-project.js → C:\Users\OriShavit\Documents\GitHub\AgentOS\scripts\lib\roles.js
- `main()` --calls--> `validateAgents()`  [INFERRED]
  C:\Users\OriShavit\Documents\GitHub\AgentOS\scripts\new-project.js → C:\Users\OriShavit\Documents\GitHub\AgentOS\scripts\lib\roles.js
- `main()` --calls--> `isDirectoryEmpty()`  [INFERRED]
  C:\Users\OriShavit\Documents\GitHub\AgentOS\scripts\new-project.js → C:\Users\OriShavit\Documents\GitHub\AgentOS\scripts\lib\fs.js

## Communities

### Community 0 - "Community 0"
Cohesion: 0.33
Nodes (9): pathExists(), getPresetTemplateDir(), detectPreset(), fail(), main(), readNonEmpty(), requiredPathsForPreset(), usage() (+1 more)

### Community 1 - "Community 1"
Cohesion: 0.6
Nodes (5): getSkillsToInstall(), installSkill(), main(), parseArgs(), printUsage()

### Community 2 - "Community 2"
Cohesion: 0.67
Nodes (5): main(), parseArgs(), promptForMissingArgs(), todayISO(), usage()

### Community 3 - "Community 3"
Cohesion: 0.33
Nodes (5): listFilesRecursive(), findUnresolvedPlaceholders(), renderString(), isTextFile(), validateNoUnresolvedPlaceholders()

### Community 4 - "Community 4"
Cohesion: 0.47
Nodes (5): isDirectory(), isDirectoryEmpty(), isFile(), statSafe(), writeFile()

### Community 5 - "Community 5"
Cohesion: 0.5
Nodes (4): ensureDir(), copyTemplateTree(), isTextTemplate(), writeFileFromTemplate()

### Community 6 - "Community 6"
Cohesion: 0.67
Nodes (2): parseAgentsFlag(), validateAgents()

### Community 7 - "Community 7"
Cohesion: 1.0
Nodes (0): 

### Community 8 - "Community 8"
Cohesion: 1.0
Nodes (0): 

### Community 9 - "Community 9"
Cohesion: 1.0
Nodes (0): 

## Knowledge Gaps
- **Thin community `Community 7`** (1 nodes): `bootstrap.py`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 8`** (1 nodes): `cite.py`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 9`** (1 nodes): `validate_docs.py`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `main()` connect `Community 2` to `Community 0`, `Community 4`, `Community 5`, `Community 6`?**
  _High betweenness centrality (0.271) - this node is a cross-community bridge._
- **Why does `pathExists()` connect `Community 0` to `Community 2`, `Community 4`, `Community 5`?**
  _High betweenness centrality (0.161) - this node is a cross-community bridge._
- **Why does `writeFileFromTemplate()` connect `Community 5` to `Community 0`, `Community 2`, `Community 3`, `Community 4`?**
  _High betweenness centrality (0.134) - this node is a cross-community bridge._
- **Are the 8 inferred relationships involving `main()` (e.g. with `parseAgentsFlag()` and `validateAgents()`) actually correct?**
  _`main()` has 8 INFERRED edges - model-reasoned connections that need verification._
- **Are the 5 inferred relationships involving `writeFileFromTemplate()` (e.g. with `pathExists()` and `ensureDir()`) actually correct?**
  _`writeFileFromTemplate()` has 5 INFERRED edges - model-reasoned connections that need verification._
- **Are the 2 inferred relationships involving `main()` (e.g. with `pathExists()` and `isDirectory()`) actually correct?**
  _`main()` has 2 INFERRED edges - model-reasoned connections that need verification._
- **Are the 6 inferred relationships involving `pathExists()` (e.g. with `writeFileFromTemplate()` and `main()`) actually correct?**
  _`pathExists()` has 6 INFERRED edges - model-reasoned connections that need verification._