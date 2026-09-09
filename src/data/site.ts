export const siteConfig = {
  name: 'KyleHub',
  url: 'https://kylehub.dev',
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
    description: 'Projekte von Kyle: Self-Hosting, Dokumentwerkzeuge und Experimente. Dazu die zentralen KyleHub-Rechtstexte.',
    body: [
      'Ich bin Kyle. Hier sammle ich die Software, die ich in meiner Freizeit baue.',
      'Von selbst gehosteten Anwendungen bis zu kleinen Werkzeugen: Die Projekte unten führen direkt zum Code auf GitHub.'
    ],
    projectsTitle: 'Ausgewählte Projekte'
  },
  en: {
    title: 'KyleHub',
    description: 'Projects by Kyle: self-hosted software, document tools, and experiments. Plus the central KyleHub legal pages.',
    body: [
      "I'm Kyle. This is the software I build in my spare time.",
      'From self-hosted apps to small tools, the projects below take you straight to the code on GitHub.'
    ],
    projectsTitle: 'Selected projects'
  }
};

type LocalizedText = { de: string; en: string };

export interface ProjectEntry {
  name: string;
  owner: string;
  repo: string;
  description: LocalizedText;
}

export interface ProjectCategory {
  slug: string;
  title: LocalizedText;
  projects: ProjectEntry[];
}

export const projectCategories: ProjectCategory[] = [
  {
    slug: 'self-hosted',
    projects: [
      {
        name: 'Nabe',
        owner: 'KyleHub-Dev',
        repo: 'nabe',
        description: {
          de: 'DNS-Verwaltung für den Haushalt auf einem Raspberry Pi. Noch in Entwicklung.',
          en: 'Household DNS management for Raspberry Pi appliances. Under development.'
        }
      },
      {
        name: 'spellbook',
        owner: 'KyleDerZweite',
        repo: 'spellbook',
        description: {
          de: 'Sammelkarten verwalten, mit mobiler Erfassung und Texterkennung.',
          en: 'Manage a trading card collection with mobile scanning and text recognition.'
        }
      },
      {
        name: 'hatchery',
        owner: 'KyleDerZweite',
        repo: 'hatchery',
        description: {
          de: 'Modpacks in Server-Vorlagen für Pterodactyl und Pelican umwandeln.',
          en: 'Turn modpacks into server templates for Pterodactyl and Pelican.'
        }
      }
    ],
    title: {
      de: 'Self-Hosting',
      en: 'Self-hosting'
    }
  },
  {
    slug: 'document-tools',
    projects: [
      {
        name: 'ppinject',
        owner: 'KyleDerZweite',
        repo: 'ppinject',
        description: {
          de: 'Gezielte XML-Änderungen in PowerPoint-Dateien.',
          en: 'Make targeted XML edits in PowerPoint files.'
        }
      },
      {
        name: 'xlinject',
        owner: 'KyleDerZweite',
        repo: 'xlinject',
        description: {
          de: 'Excel-Zellen ändern und dabei Formeln, Formatierung und Metadaten erhalten.',
          en: 'Edit Excel cells while preserving formulas, formatting, and metadata.'
        }
      }
    ],
    title: {
      de: 'Dokumentwerkzeuge',
      en: 'Document tools'
    }
  },
  {
    slug: 'security',
    projects: [
      {
        name: 'basalt',
        owner: 'KyleDerZweite',
        repo: 'basalt',
        description: {
          de: 'Öffentliche Spuren von Nutzernamen, E-Mail-Adressen und Domains untersuchen und verknüpfen.',
          en: 'Explore and connect public traces of usernames, email addresses, and domains.'
        }
      },
      {
        name: 'p2p-cli',
        owner: 'KyleDerZweite',
        repo: 'p2p-cli',
        description: {
          de: 'Peer-to-Peer-Nachrichten im Terminal mit verschlüsselter Kommunikation.',
          en: 'Peer-to-peer messaging in the terminal with encrypted communication.'
        }
      }
    ],
    title: {
      de: 'Sicherheit und Netzwerke',
      en: 'Security and networking'
    }
  },
  {
    slug: 'experiments',
    projects: [
      {
        name: 'nashordaq',
        owner: 'KyleDerZweite',
        repo: 'nashordaq',
        description: {
          de: 'Eine fiktive Börse für die eigene League-of-Legends-Freundesgruppe.',
          en: 'A fantasy stock market for your League of Legends friend group.'
        }
      },
      {
        name: 'advent-of-code',
        owner: 'KyleDerZweite',
        repo: 'advent-of-code',
        description: {
          de: 'Meine Lösungen zu Advent of Code, zum Lernen und Ausprobieren.',
          en: 'My Advent of Code solutions, for learning and trying things out.'
        }
      }
    ],
    title: {
      de: 'Experimente',
      en: 'Experiments'
    }
  }
];
