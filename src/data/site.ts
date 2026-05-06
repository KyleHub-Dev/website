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
    { href: '/projects', label: 'Projekte' },
  ],
  en: [
    { href: '/en/', label: 'Home' },
    { href: '/en/projects', label: 'Projects' },
  ],
};

export const homeContent = {
  de: {
    title: 'KyleHub',
    description:
      'KyleHub ist die zentrale Stelle für öffentliche Dienste auf kylehub.dev und porvi.de. Hier liegen die Rechtstexte und eine kleine Auswahl an laufenden Projekten.',
    eyebrow: '01 / Betrieb',
    titleLead: 'Eine Person,',
    titleAccent: 'ein paar Dienste,',
    titleTail: 'langsam gepflegt.',
    body: 'KyleHub ist die zentrale Stelle für meine öffentlichen Dienste auf kylehub.dev und porvi.de. Hier liegen die Impressums-, Datenschutz- und AGB-Seiten, eine kleine Auswahl an laufenden Projekten, und ein offenes Ohr für seltsame Ideen.',
    handoffLabel: 'Projekte',
  },
  en: {
    title: 'KyleHub',
    description:
      'KyleHub is the central surface for public services on kylehub.dev and porvi.de. The legal pages live here, alongside a small set of running projects.',
    eyebrow: '01 / Operator',
    titleLead: 'One person,',
    titleAccent: 'a handful of services,',
    titleTail: 'kept slowly.',
    body: 'KyleHub is the central surface for my public services on kylehub.dev and porvi.de. The legal pages live here, a small set of running projects sits to the right, and there is an open door for odd ideas at the bottom of the page.',
    handoffLabel: 'projects',
  },
};

export interface ProjectEntry {
  name: string;
  owner: string;
  repo: string;
  href: string;
  text: { de: string; en: string };
  noStats?: boolean;
  badge?: { de: string; en: string };
}

export interface ProjectCategory {
  slug: string;
  title: { de: string; en: string };
  projects: ProjectEntry[];
}

const owner = 'KyleDerZweite';
const ghHref = (repo: string) => `https://github.com/${owner}/${repo}`;

export const projectCategories: ProjectCategory[] = [
  {
    slug: 'self-hosted',
    title: { de: 'Self-Hosted und Tooling', en: 'Self-Hosted and Tooling' },
    projects: [
      {
        name: 'spellbook',
        owner,
        repo: 'spellbook',
        href: ghHref('spellbook'),
        text: {
          de: 'Self-hosted TCG-Sammlungs-Manager mit OCR-Scan, Suche und Sync.',
          en: 'Self-hosted TCG collection manager with OCR scanning, search, and sync.',
        },
      },
      {
        name: 'hatchery',
        owner,
        repo: 'hatchery',
        href: ghHref('hatchery'),
        text: {
          de: 'Automatisiert die Generierung von Minecraft-Modpack-Server-„Eggs“ für Pterodactyl/Pelican.',
          en: 'Automates Minecraft modpack-to-server “egg” generation for Pterodactyl/Pelican.',
        },
      },
      {
        name: 'nashordaq',
        owner,
        repo: 'nashordaq',
        href: ghHref('nashordaq'),
        text: {
          de: 'Fantasy-Aktienmarkt-Spiel für League-of-Legends-Freundeskreise.',
          en: 'Fantasy stock-market game for League of Legends friend groups.',
        },
      },
    ],
  },
  {
    slug: 'file-surgery',
    title: { de: 'File Surgery', en: 'File Surgery' },
    projects: [
      {
        name: 'ppinject',
        owner,
        repo: 'ppinject',
        href: ghHref('ppinject'),
        text: {
          de: 'XML-Injektor zur Bearbeitung von .pptx-PowerPoint-Dateien.',
          en: 'XML injector for modifying .pptx PowerPoint files.',
        },
      },
      {
        name: 'xlinject',
        owner,
        repo: 'xlinject',
        href: ghHref('xlinject'),
        text: {
          de: 'XLSX-Zellen-Injektor, der Workbook-Struktur und Metadaten erhält.',
          en: 'XLSX cell injection tool that preserves workbook structure and metadata.',
        },
      },
    ],
  },
  {
    slug: 'security',
    title: { de: 'Security, Privacy und Networking', en: 'Security, Privacy, and Networking' },
    projects: [
      {
        name: 'basalt',
        owner,
        repo: 'basalt',
        href: ghHref('basalt'),
        text: {
          de: 'OSINT-Werkzeug zum Verknüpfen von Nutzernamen, E-Mails, Domains und digitalen Spuren.',
          en: 'OSINT tool for mapping usernames, emails, domains, and digital footprint relationships.',
        },
      },
      {
        name: 'p2p-cli',
        owner,
        repo: 'p2p-cli',
        href: ghHref('p2p-cli'),
        text: {
          de: 'Verschlüsselter terminalbasierter Peer-to-Peer-Messenger.',
          en: 'Encrypted terminal-based peer-to-peer messenger.',
        },
      },
    ],
  },
  {
    slug: 'memberships',
    title: { de: 'Mitgliedschaften', en: 'Memberships' },
    projects: [
      {
        name: 'VauxlNet',
        owner: 'VauxlNet',
        repo: 'VauxlNet',
        href: 'https://github.com/VauxlNet',
        noStats: true,
        badge: { de: 'GitHub Organisation', en: 'GitHub organization' },
        text: {
          de: 'Discord-Alternative auf Matrix-Basis: ein Server-Manager, der Matrix-kompatible Server selbst hostet und über eine vertraute Oberfläche bedient.',
          en: 'Discord alternative built on the Matrix protocol: a server manager that self-hosts Matrix-compatible servers and exposes them through a familiar interface.',
        },
      },
    ],
  },
  {
    slug: 'learning',
    title: { de: 'Lernen und Misc', en: 'Learning and Misc' },
    projects: [
      {
        name: 'advent-of-code',
        owner,
        repo: 'advent-of-code',
        href: ghHref('advent-of-code'),
        text: {
          de: 'Advent-of-Code-Lösungen in verschiedenen Sprachen und Paradigmen.',
          en: 'Advent of Code solutions across languages and paradigms.',
        },
      },
      {
        name: 'vnb-atlas',
        owner,
        repo: 'vnb-atlas',
        href: ghHref('vnb-atlas'),
        text: {
          de: 'Python-Repo, Uni-Projekt zur Visualisierung von VNB-Map-Coverage.',
          en: 'Python repo, university project visualising VNB map coverage.',
        },
      },
    ],
  },
];
