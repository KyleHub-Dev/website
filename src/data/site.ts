export const siteConfig = {
  name: 'KyleHub',
  url: 'https://kylehub.dev',
  domainFamilies: ['kylehub.dev', 'porvi.de'],
  porviUrl: 'https://porvi.de',
  codeHosts: {
    githubOrg: 'https://github.com/KyleHub-Dev',
    githubPersonal: 'https://github.com/KyleDerZweite',
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

export interface ProjectEntry {
  name: string;
  owner: string;
  repo: string;
  badge?: { de: string; en: string };
}

export interface ProjectCategory {
  slug: string;
  title: { de: string; en: string };
  projects: ProjectEntry[];
}

const personalRepo = (repo: string): ProjectEntry => ({
  name: repo,
  owner: 'KyleDerZweite',
  repo,
});

export const projectCategories: ProjectCategory[] = [
  {
    slug: 'self-hosted',
    title: { de: 'Self-Hosted und Tooling', en: 'Self-Hosted and Tooling' },
    projects: [
      personalRepo('spellbook'),
      personalRepo('hatchery'),
      personalRepo('nashordaq'),
    ],
  },
  {
    slug: 'file-surgery',
    title: { de: 'File Surgery', en: 'File Surgery' },
    projects: [
      personalRepo('ppinject'),
      personalRepo('xlinject'),
    ],
  },
  {
    slug: 'security',
    title: { de: 'Security, Privacy und Networking', en: 'Security, Privacy, and Networking' },
    projects: [
      personalRepo('basalt'),
      personalRepo('p2p-cli'),
    ],
  },
  {
    slug: 'learning',
    title: { de: 'Lernen und Misc', en: 'Learning and Misc' },
    projects: [
      personalRepo('advent-of-code'),
    ],
  },
];
