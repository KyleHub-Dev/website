export const siteConfig = {
  name: 'KyleHub',
  url: 'https://kylehub.dev',
  domainFamilies: ['kylehub.dev', 'porvi.de'],
  githubOrg: 'https://github.com/KyleHub-Dev',
  personalGithub: 'https://github.com/KyleDerZweite',
  operator: {
    name: 'Leander Grau',
    street: 'Obere Bruederstrasse 65',
    city: '46145 Oberhausen',
    country: 'Germany',
    phone: '01773475933',
    legalEmail: 'legal@kylehub.dev',
    privacyEmail: 'privacy@kylehub.dev',
    securityEmail: 'security@kylehub.dev',
    generalEmail: 'info@kylehub.dev',
  },
};

export const nav = {
  de: [
    { href: '/', label: 'Start' },
    { href: '/projects', label: 'Projekte' },
    { href: '/impressum', label: 'Impressum' },
    { href: '/datenschutz', label: 'Datenschutz' },
  ],
  en: [
    { href: '/en/', label: 'Home' },
    { href: '/en/projects', label: 'Projects' },
    { href: '/en/impressum', label: 'Impressum' },
    { href: '/en/privacy-policy', label: 'Privacy' },
  ],
};

export const homeContent = {
  de: {
    title: 'KyleHub | Projekte und Rechtliches',
    description: 'KyleHub sammelt oeffentliche Projektlinks und zentrale Rechtstexte fuer kylehub.dev, porvi.de und deren Subdomains.',
    heroEyebrow: 'KyleHub',
    heroTitle: 'Projekte, Quellen und zentrale Rechtstexte.',
    heroBody:
      'Eine reduzierte Uebersichtsseite fuer oeffentliche Repositories und die zentralen rechtlichen Seiten der Domain-Familien kylehub.dev und porvi.de.',
    primaryCta: { href: '/projects', label: 'Projekte' },
    secondaryCta: { href: '/datenschutz', label: 'Datenschutz' },
    sections: {
      projects: 'Projekte',
    },
  },
  en: {
    title: 'KyleHub | Projects and legal',
    description: 'KyleHub collects public project links and central legal texts for kylehub.dev, porvi.de, and their subdomains.',
    heroEyebrow: 'KyleHub',
    heroTitle: 'Projects, sources, and central legal texts.',
    heroBody:
      'A trimmed overview page for public repositories and the central legal pages of the kylehub.dev and porvi.de domain families.',
    primaryCta: { href: '/en/projects', label: 'Projects' },
    secondaryCta: { href: '/en/privacy-policy', label: 'Privacy' },
    sections: {
      projects: 'Projects',
    },
  },
};

export const projects = {
  de: [
    {
      name: 'Infrastructure',
      href: 'https://github.com/KyleHub-Dev/infrastructure',
      text: 'Gateway, Homelab, Authentifizierung und Infrastruktur-Dokumentation.',
    },
    {
      name: 'Website',
      href: 'https://github.com/KyleHub-Dev/website',
      text: 'Diese Website mit Projektlinks und zentralen Rechtstexten.',
    },
    {
      name: 'Prompts',
      href: 'https://github.com/KyleHub-Dev/prompts',
      text: 'Wiederverwendbare Prompts und Arbeitsvorlagen.',
    },
  ],
  en: [
    {
      name: 'Infrastructure',
      href: 'https://github.com/KyleHub-Dev/infrastructure',
      text: 'Gateway, homelab, authentication, and infrastructure documentation.',
    },
    {
      name: 'Website',
      href: 'https://github.com/KyleHub-Dev/website',
      text: 'This website with project links and central legal texts.',
    },
    {
      name: 'Prompts',
      href: 'https://github.com/KyleHub-Dev/prompts',
      text: 'Reusable prompts and working templates.',
    },
  ],
};
