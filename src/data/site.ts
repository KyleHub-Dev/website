export const siteConfig = {
  name: 'KyleHub',
  url: 'https://kylehub.dev',
  domainFamilies: ['kylehub.dev', 'porvi.de'],
  githubOrg: 'https://github.com/KyleHub-Dev',
  docsUrl: 'https://docs.kylehub.dev',
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
    title: 'KyleHub | Umbrella fuer Infrastruktur, Projekte und zentrale Rechtstexte',
    description: 'KyleHub ist die oeffentliche Umbrella-Ebene fuer Infrastruktur, Dokumentation, Subdomains und zentrale Rechtstexte fuer kylehub.dev und porvi.de.',
    heroEyebrow: 'Umbrella for infra, docs, products',
    heroTitle: 'Eine Basis fuer Infrastruktur, Subdomains und saubere Projektgrenzen.',
    heroBody:
      'KyleHub verbindet die Org-Ebene, aktive Infrastrukturarbeit, oeffentliche Dokumentation und zentrale Rechtstexte fuer oeffentliche Dienste unter kylehub.dev und porvi.de.',
    primaryCta: { href: '/projects', label: 'Projekte ansehen' },
    secondaryCta: { href: '/datenschutz', label: 'Datenschutz lesen' },
    lanes: [
      {
        title: 'Umbrella',
        text: 'kylehub.dev wird zur kanonischen Oeffentlichkeits- und Rechts-Ebene fuer sichtbare Dienste unter kylehub.dev und porvi.de.',
      },
      {
        title: 'Central legal',
        text: 'Impressum, Datenschutz und AGB bleiben zentrale Seiten statt je Subdomain eigene Rechtstexte zu erzeugen.',
      },
      {
        title: 'Category coverage',
        text: 'Die Datenschutzerklaerung beschreibt Verarbeitung nach Dienstkategorien wie Websites, Doku, Login-Diensten, Kontakt und Server-Logs.',
      },
    ],
    spotlightTitle: 'Flagship: Infrastructure',
    spotlightBody:
      'Das Infrastructure-Repo bleibt das technische Flaggschiff: Zero-open-port Homelab, Gateway-VPS, Zitadel-SSO und Doku als Produkt.',
    spotlightCtas: [
      { href: 'https://github.com/KyleHub-Dev/infrastructure', label: 'Infrastructure Repo' },
      { href: 'https://docs.kylehub.dev', label: 'Docs' },
    ],
    sections: {
      org: 'Organisationsebene',
      selected: 'Ausgewaehlte Builds',
      legal: 'Legal System',
    },
  },
  en: {
    title: 'KyleHub | Umbrella for infrastructure, projects, and central legal texts',
    description: 'KyleHub is the public umbrella for infrastructure, documentation, subdomains, and central legal texts for kylehub.dev and porvi.de.',
    heroEyebrow: 'Umbrella for infra, docs, products',
    heroTitle: 'One public surface for infrastructure, subdomains, and clean project boundaries.',
    heroBody:
      'KyleHub ties together the org layer, active infrastructure work, public documentation, and central legal texts for public services under kylehub.dev and porvi.de.',
    primaryCta: { href: '/en/projects', label: 'Explore projects' },
    secondaryCta: { href: '/en/privacy-policy', label: 'Read privacy' },
    lanes: [
      {
        title: 'Umbrella',
        text: 'kylehub.dev becomes the canonical public and legal layer for visible services under kylehub.dev and porvi.de.',
      },
      {
        title: 'Central legal',
        text: 'Impressum, privacy, and terms remain central pages instead of generating separate legal text per subdomain.',
      },
      {
        title: 'Category coverage',
        text: 'The privacy policy describes processing by service category, such as websites, docs, login services, contact, and server logs.',
      },
    ],
    spotlightTitle: 'Flagship: Infrastructure',
    spotlightBody:
      'The infrastructure repository remains the flagship technical project: zero-open-port homelab, gateway VPS, Zitadel SSO, and documentation as product.',
    spotlightCtas: [
      { href: 'https://github.com/KyleHub-Dev/infrastructure', label: 'Infrastructure repo' },
      { href: 'https://docs.kylehub.dev', label: 'Docs' },
    ],
    sections: {
      org: 'Org layer',
      selected: 'Selected builds',
      legal: 'Legal system',
    },
  },
};

export const projectGroups = {
  de: [
    {
      title: 'KyleHub Orga',
      items: [
        {
          name: 'Infrastructure',
          href: 'https://github.com/KyleHub-Dev/infrastructure',
          text: 'Aktives IaC-Flaggschiff fuer Gateway-VPS, Homelab und Zitadel-getriebene Authentifizierung.',
        },
        {
          name: 'Website',
          href: 'https://github.com/KyleHub-Dev/website',
          text: 'Oeffentliche Umbrella-Site fuer Brand, Projekte und zentrale Rechtstexte.',
        },
        {
          name: 'Prompts',
          href: 'https://github.com/KyleHub-Dev/prompts',
          text: 'Neuer Playbook- und Prompt-Ansatz fuer wiederholbare Implementierungen wie Zitadel OIDC oder Legal Pages.',
        },
      ],
    },
    {
      title: 'Ausgewaehlte Builds',
      items: [
        {
          name: 'Spellbook',
          href: 'https://spellbook.kylehub.dev',
          text: 'Produktnahe Subdomain, die von der zentralen Datenschutzerklaerung ueber die Kategorie Login- und Account-Dienste abgedeckt wird.',
        },
        {
          name: 'Docs',
          href: 'https://docs.kylehub.dev',
          text: 'Oeffentliche Dokumentation fuer Infrastruktur und kuenftige Produktbausteine.',
        },
      ],
    },
  ],
  en: [
    {
      title: 'KyleHub org',
      items: [
        {
          name: 'Infrastructure',
          href: 'https://github.com/KyleHub-Dev/infrastructure',
          text: 'Active IaC flagship for the gateway VPS, homelab, and Zitadel-driven authentication.',
        },
        {
          name: 'Website',
          href: 'https://github.com/KyleHub-Dev/website',
          text: 'Public umbrella site for brand, projects, and central legal texts.',
        },
        {
          name: 'Prompts',
          href: 'https://github.com/KyleHub-Dev/prompts',
          text: 'New playbook and prompt approach for repeatable work such as Zitadel OIDC and legal page implementation.',
        },
      ],
    },
    {
      title: 'Selected builds',
      items: [
        {
          name: 'Spellbook',
          href: 'https://spellbook.kylehub.dev',
          text: 'Product-facing subdomain covered by the central privacy policy category for login and account services.',
        },
        {
          name: 'Docs',
          href: 'https://docs.kylehub.dev',
          text: 'Public documentation for infrastructure and future product building blocks.',
        },
      ],
    },
  ],
};
