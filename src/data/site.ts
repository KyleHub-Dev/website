export const siteConfig = {
  name: 'KyleHub',
  url: 'https://kylehub.dev',
  domainFamilies: ['kylehub.dev', 'porvi.de'],
  porviUrl: 'https://porvi.de',
  codeHosts: {
    githubOrg: 'https://github.com/KyleHub-Dev',
    githubPersonal: 'https://github.com/KyleDerZweite',
    codebergOrg: 'https://codeberg.org/KyleHub',
    codebergPersonal: 'https://codeberg.org/KyleDerZweite',
  },
  operator: {
    name: 'Leander Grau',
    street: 'Obere Brüderstraße 65',
    city: '46145 Oberhausen',
    country: 'Germany',
    phone: '01773475933',
    legalEmail: 'legal@kylehub.dev',
    privacyEmail: 'privacy@kylehub.dev',
    securityEmail: 'security@kylehub.dev',
    generalEmail: 'info@kylehub.dev',
    contactEmail: 'kyle@kylehub.dev',
  },
  contact: {
    discord: 'https://discord.gg/hAU3UdtyWr',
    email: 'kyle@kylehub.dev',
    matrix: null as string | null,
    mastodon: null as string | null,
  },
};

export const nav = {
  de: [
    { href: '/', label: 'Start' },
    { href: '/#projects', label: 'Projekte' },
  ],
  en: [
    { href: '/en/', label: 'Home' },
    { href: '/en/#projects', label: 'Projects' },
  ],
};

export const homeContent = {
  de: {
    title: 'KyleHub',
    description:
      'KyleHub bündelt öffentliche Dienste, Rechtstexte und Open-Source-Projekte von Leander Grau.',
    body: [
      'KyleHub ist die Domain, unter der ich kleine Projekte, Experimente und Dienste sammle.',
      'Wenn du eine kreative Idee hast, die nicht nach 0815-Standardprojekt klingt, kannst du sie mir gerne schicken. Ich baue sowas in meiner Freizeit, wenn es mich reizt.',
    ],
  },
  en: {
    title: 'KyleHub',
    description:
      'KyleHub collects public services, legal pages, and open-source projects by Leander Grau.',
    body: [
      'KyleHub is the domain where I collect small projects, experiments, and services.',
      'If you have a creative idea that does not feel like a generic standard project, feel free to send it my way. I build things like that in my free time when the idea catches my interest.',
    ],
  },
};

export type ProjectHost = 'github' | 'codeberg';
export type ProjectVisibility = 'public' | 'codeberg-account';

export interface ProjectLink {
  label: string;
  href: string;
  host: ProjectHost;
  owner?: string;
  repo?: string;
  primary?: boolean;
}

export interface ProjectEntry {
  name: string;
  links: ProjectLink[];
  text: { de: string; en: string };
  badge?: { de: string; en: string };
  stats?: boolean;
  visibility?: ProjectVisibility;
}

export interface ProjectCategory {
  slug: string;
  title: { de: string; en: string };
  projects: ProjectEntry[];
}

const githubRepo = (owner: string, repo: string, label = 'Code'): ProjectLink => ({
  label,
  href: `https://github.com/${owner}/${repo}`,
  host: 'github',
  owner,
  repo,
  primary: true,
});

const owner = 'KyleDerZweite';
const gh = (repo: string, label?: string) => githubRepo(owner, repo, label);

export const projectCategories: ProjectCategory[] = [
  {
    slug: 'self-hosted',
    title: { de: 'Self-Hosted und Tooling', en: 'Self-Hosted and Tooling' },
    projects: [
      {
        name: 'spellbook',
        links: [gh('spellbook')],
        text: {
          de: 'Self-hosted TCG-Sammlungs-Manager mit OCR-Scan, Suche und Sync.',
          en: 'Self-hosted TCG collection manager with OCR scanning, search, and sync.',
        },
        stats: true,
      },
      {
        name: 'hatchery',
        links: [gh('hatchery')],
        text: {
          de: 'Modpack-to-egg Automation für Pterodactyl und Pelican Panels.',
          en: 'Modpack-to-egg automation for Pterodactyl and Pelican panels.',
        },
        stats: true,
      },
      {
        name: 'nashordaq',
        links: [gh('nashordaq')],
        text: {
          de: 'Fantasy-Stock-Market für eine League-of-Legends-Freundesgruppe.',
          en: 'Fantasy stock market for a League of Legends friend group.',
        },
        stats: true,
      },
    ],
  },
  {
    slug: 'file-surgery',
    title: { de: 'File Surgery', en: 'File Surgery' },
    projects: [
      {
        name: 'ppinject',
        links: [gh('ppinject')],
        text: {
          de: 'Kleines OOXML-Werkzeug für PowerPoint-Dateien.',
          en: 'Small OOXML tool for PowerPoint files.',
        },
        stats: true,
      },
      {
        name: 'xlinject',
        links: [gh('xlinject')],
        text: {
          de: 'Kleines OOXML-Werkzeug für Excel-Dateien, mit Fokus auf Formeln, Formatierung und Metadaten.',
          en: 'Small OOXML tool for Excel files, focused on formulas, formatting, and metadata.',
        },
        stats: true,
      },
    ],
  },
  {
    slug: 'security',
    title: { de: 'Security, Privacy und Networking', en: 'Security, Privacy, and Networking' },
    projects: [
      {
        name: 'basalt',
        links: [gh('basalt')],
        text: {
          de: 'Relationales OSINT-Tool für Usernames, E-Mails, Domains und digitale Spuren.',
          en: 'Relational OSINT tool for usernames, emails, domains, and digital footprints.',
        },
        stats: true,
      },
      {
        name: 'p2p-cli',
        links: [gh('p2p-cli')],
        text: {
          de: 'Terminalbasierter Peer-to-Peer-Messenger in Rust.',
          en: 'Terminal-based peer-to-peer messenger in Rust.',
        },
        stats: true,
      },
    ],
  },
  {
    slug: 'learning',
    title: { de: 'Lernen und Misc', en: 'Learning and Misc' },
    projects: [
      {
        name: 'advent-of-code',
        links: [gh('advent-of-code')],
        text: {
          de: 'Advent-of-Code-Lösungen und Sprach-/Paradigmen-Experimente.',
          en: 'Advent of Code solutions and language/paradigm experiments.',
        },
        stats: true,
      },
    ],
  },
];
