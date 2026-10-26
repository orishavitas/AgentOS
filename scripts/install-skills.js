#!/usr/bin/env node
/**
 * Cross-platform installer for recommended Skills.sh skills.
 * Usage:
 *   node scripts/install-skills.js --all          # Install all skills
 *   node scripts/install-skills.js --ui --ux      # Install UI and UX skills
 *   node scripts/install-skills.js --docs         # Install docs skills
 *   node scripts/install-skills.js --perf         # Install performance skills
 *   node scripts/install-skills.js --all --dry-run # Preview without installing
 */

const { execSync } = require('child_process');

// Skill definitions by category
const SKILLS = {
  routing: [
    { repo: 'https://github.com/charon-fan/agent-playbook', skill: 'skill-router' },
    { repo: 'https://github.com/charon-fan/agent-playbook', skill: 'planning-with-files' },
  ],
  ui: [
    { repo: 'https://github.com/nextlevelbuilder/ui-ux-pro-max-skill', skill: 'ui-ux-pro-max' },
    { repo: 'https://github.com/gracehunter/design-system-skills', skill: 'design-system-patterns' },
    { repo: 'https://github.com/youmeyou/skills', skill: 'flex-grid-flow' },
    { repo: 'https://github.com/patricio0312rev/Skills', skill: 'accessibility-auditor' },
    { repo: 'https://github.com/wshobson/agents', skill: 'interaction-design' },
  ],
  ux: [
    { repo: 'https://github.com/borghei/claude-skills', skill: 'product-designer' },
    { repo: 'https://github.com/aj-geddes/claude-code-bmad-skills', skill: 'ux-designer' },
    { repo: 'https://github.com/simota/agent-skills', skill: 'researcher' },
    { repo: 'https://github.com/404kidwiz/claude-supercode-skills', skill: 'ux-researcher' },
    { repo: 'https://github.com/softaworks/agent-toolkit', skill: 'requirements-clarity' },
  ],
  docs: [
    { repo: 'https://github.com/charon-fan/agent-playbook', skill: 'prd-planner' },
    { repo: 'https://github.com/charon-fan/agent-playbook', skill: 'documentation-engineer' },
    { repo: 'https://github.com/softaworks/agent-toolkit', skill: 'writing-clearly-and-concisely' },
    { repo: 'https://github.com/softaworks/agent-toolkit', skill: 'crafting-effective-readmes' },
    { repo: 'https://github.com/softaworks/agent-toolkit', skill: 'mermaid-diagrams' },
    { repo: 'https://github.com/anthropics/skills', skill: 'pdf' },
    { repo: 'https://github.com/anthropics/skills', skill: 'docx' },
    { repo: 'https://github.com/anthropics/skills', skill: 'pptx' },
    { repo: 'https://github.com/anthropics/skills', skill: 'xlsx' },
    { repo: 'https://github.com/anthropics/skills', skill: 'theme-factory' },
  ],
  perf: [
    { repo: 'https://github.com/charon-fan/agent-playbook', skill: 'performance-engineer' },
    { repo: 'https://github.com/addyosmani/web-quality-skills', skill: 'performance' },
    { repo: 'https://github.com/softaworks/agent-toolkit', skill: 'agent-md-refactor' },
    { repo: 'https://github.com/softaworks/agent-toolkit', skill: 'session-handoff' },
    { repo: 'https://github.com/wshobson/agents', skill: 'prompt-engineering-patterns' },
  ],
};

function printUsage() {
  console.log(`
Skills.sh Installer for AgentOS

Usage: node scripts/install-skills.js [options]

Options:
  --ui        Install UI skills (design systems, components, a11y)
  --ux        Install UX skills (research, flows, personas)
  --docs      Install documentation skills (PRDs, docs, office formats)
  --perf      Install performance/optimization skills
  --all       Install all skills (includes routing skills)
  --dry-run   Preview commands without executing
  --help      Show this help message

Examples:
  node scripts/install-skills.js --all
  node scripts/install-skills.js --ui --ux
  node scripts/install-skills.js --docs --dry-run
`);
}

function parseArgs(args) {
  const flags = {
    ui: false,
    ux: false,
    docs: false,
    perf: false,
    all: false,
    dryRun: false,
    help: false,
  };

  for (const arg of args) {
    switch (arg) {
      case '--ui':
        flags.ui = true;
        break;
      case '--ux':
        flags.ux = true;
        break;
      case '--docs':
        flags.docs = true;
        break;
      case '--perf':
        flags.perf = true;
        break;
      case '--all':
        flags.all = true;
        break;
      case '--dry-run':
        flags.dryRun = true;
        break;
      case '--help':
      case '-h':
        flags.help = true;
        break;
    }
  }

  return flags;
}

function getSkillsToInstall(flags) {
  const skills = [];

  if (flags.all) {
    // Include routing skills only with --all
    skills.push(...SKILLS.routing);
    skills.push(...SKILLS.ui);
    skills.push(...SKILLS.ux);
    skills.push(...SKILLS.docs);
    skills.push(...SKILLS.perf);
  } else {
    if (flags.ui) skills.push(...SKILLS.ui);
    if (flags.ux) skills.push(...SKILLS.ux);
    if (flags.docs) skills.push(...SKILLS.docs);
    if (flags.perf) skills.push(...SKILLS.perf);
  }

  // Deduplicate by skill name
  const seen = new Set();
  return skills.filter((s) => {
    const key = `${s.repo}:${s.skill}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function installSkill(repo, skill, dryRun) {
  const cmd = `npx skills add "${repo}" --skill "${skill}"`;

  if (dryRun) {
    console.log(`[dry-run] ${cmd}`);
    return true;
  }

  console.log(`==> Installing: ${skill}`);
  try {
    execSync(cmd, { stdio: 'inherit' });
    return true;
  } catch (error) {
    console.error(`Failed to install ${skill}: ${error.message}`);
    return false;
  }
}

function main() {
  const args = process.argv.slice(2);
  const flags = parseArgs(args);

  if (flags.help) {
    printUsage();
    process.exit(0);
  }

  const hasCategory = flags.ui || flags.ux || flags.docs || flags.perf || flags.all;
  if (!hasCategory) {
    console.error('Error: No category specified. Use --help for usage.\n');
    printUsage();
    process.exit(1);
  }

  const skills = getSkillsToInstall(flags);

  if (skills.length === 0) {
    console.log('No skills to install.');
    process.exit(0);
  }

  console.log(`\n${flags.dryRun ? '[DRY RUN] ' : ''}Installing ${skills.length} skill(s)...\n`);

  let success = 0;
  let failed = 0;

  for (const { repo, skill } of skills) {
    if (installSkill(repo, skill, flags.dryRun)) {
      success++;
    } else {
      failed++;
    }
  }

  console.log(`\n${flags.dryRun ? '[DRY RUN] ' : ''}Done. ${success} installed, ${failed} failed.`);

  if (failed > 0) {
    process.exit(1);
  }
}

main();
