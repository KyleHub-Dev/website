import { siteConfig } from './site';
import { legalDomainFamilyListDe, legalDomainFamilyListEn, legalDomainFamilyNames } from './legalRegistry';

export type Block = {
  type: 'p' | 'list' | 'note';
  text?: string;
  items?: string[];
};

export type Section = {
  id?: string;
  title: string;
  blocks: Block[];
};

export type Doc = {
  title: string;
  updated: string;
  intro: string;
  badge?: string;
  sections: Section[];
};

const deDate = 'Stand: 6. Mai 2026';
const enDate = 'Last updated: May 6, 2026';
const imprintAddress = `${siteConfig.operator.name}, ${siteConfig.operator.street}, ${siteConfig.operator.city}`;
const hetznerAddress = 'Hetzner Online GmbH, Industriestr. 25, 91710 Gunzenhausen';
const authorityDe = 'Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen (LDI NRW)';
const authorityEn = 'State Commissioner for Data Protection and Freedom of Information of North Rhine-Westphalia (LDI NRW)';
const coveredDomainsDe = `Dieses Impressum gilt für alle öffentlich erreichbaren digitalen Dienste, die von ${siteConfig.operator.name} unter den Domains ${legalDomainFamilyListDe} sowie deren Subdomains betrieben werden, soweit dort kein abweichendes Impressum angegeben ist.`;
const coveredDomainsEn = `This impressum applies to all publicly accessible digital services operated by ${siteConfig.operator.name} under the domains ${legalDomainFamilyListEn} and their subdomains, unless a specific service publishes a different legal notice.`;
const privacyScopeDe = `Diese Datenschutzerklärung gilt für die öffentlich erreichbaren Dienste unter ${legalDomainFamilyListDe} sowie deren Subdomains, soweit dort keine speziellere Datenschutzerklärung bereitgestellt wird.`;
const privacyScopeEn = `This privacy policy applies to the publicly accessible services under ${legalDomainFamilyListEn} and their subdomains unless a more specific privacy policy is provided for an individual service.`;
const termsScopeDe = `Diese Nutzungsbedingungen gelten für die öffentlich erreichbaren Dienste unter ${legalDomainFamilyListDe} sowie deren Subdomains, soweit für einzelne Dienste keine spezielleren Bedingungen gelten.`;
const termsScopeEn = `These terms apply to the publicly accessible services under ${legalDomainFamilyListEn} and their subdomains unless more specific terms apply to an individual service.`;

export const legalDocs: Record<string, Doc> = {
  'de-impressum': {
    title: 'Impressum',
    updated: deDate,
    intro: coveredDomainsDe,
    sections: [
      {
        title: 'Angaben gemäß DDG',
        blocks: [
          { type: 'p', text: imprintAddress },
          { type: 'p', text: `Telefon: ${siteConfig.operator.phone}` },
          { type: 'p', text: `E-Mail: ${siteConfig.operator.legalEmail}` },
        ],
      },
      {
        title: 'Geltungsbereich',
        blocks: [
          {
            type: 'p',
            text: coveredDomainsDe,
          },
          {
            type: 'list',
            items: legalDomainFamilyNames.map((domain) => `${domain} und öffentliche Subdomains`),
          },
          {
            type: 'p',
            text: 'Dienste mit einem abweichenden Betreiber oder eigenen Anbieterangaben veröffentlichen ein eigenes Impressum, das dann für den jeweiligen Dienst vorrangig gilt.',
          },
        ],
      },
      {
        title: 'Verantwortlich für redaktionelle Inhalte',
        blocks: [{ type: 'p', text: `${siteConfig.operator.name}, ${siteConfig.operator.street}, ${siteConfig.operator.city}` }],
      },
      {
        title: 'Externe Links',
        blocks: [
          {
            type: 'p',
            text: 'Diese Website enthält Verweise auf externe Angebote wie GitHub oder Dokumentationsseiten. Für die Inhalte verlinkter Seiten sind ausschließlich deren jeweilige Betreiber verantwortlich.',
          },
        ],
      },
    ],
  },
  'en-impressum': {
    title: 'Impressum',
    updated: enDate,
    intro: coveredDomainsEn,
    sections: [
      {
        title: 'Provider information',
        blocks: [
          { type: 'p', text: imprintAddress },
          { type: 'p', text: `Phone: ${siteConfig.operator.phone}` },
          { type: 'p', text: `Email: ${siteConfig.operator.legalEmail}` },
        ],
      },
      {
        title: 'Scope',
        blocks: [
          {
            type: 'p',
            text: coveredDomainsEn,
          },
          {
            type: 'list',
            items: legalDomainFamilyNames.map((domain) => `${domain} and public subdomains`),
          },
          {
            type: 'p',
            text: 'Services with a different operator or their own provider details publish their own legal notice, which then takes priority for that service.',
          },
        ],
      },
      {
        title: 'Editorial responsibility',
        blocks: [{ type: 'p', text: `${siteConfig.operator.name}, ${siteConfig.operator.street}, ${siteConfig.operator.city}` }],
      },
      {
        title: 'External links',
        blocks: [
          {
            type: 'p',
            text: 'This website links to external services such as GitHub and project documentation. The respective operators remain responsible for their own content.',
          },
        ],
      },
    ],
  },
  'de-privacy': {
    title: 'Datenschutzerklärung',
    updated: deDate,
    intro: privacyScopeDe,
    sections: [
      {
        title: 'Verantwortliche Stelle',
        blocks: [
          { type: 'p', text: imprintAddress },
          { type: 'p', text: `Telefon: ${siteConfig.operator.phone}` },
          { type: 'p', text: `E-Mail: ${siteConfig.operator.privacyEmail}` },
        ],
      },
      {
        title: 'Geltungsbereich',
        blocks: [
          {
            type: 'p',
            text: privacyScopeDe,
          },
          {
            type: 'p',
            text: 'Die folgenden Abschnitte beschreiben die Verarbeitung nach Kategorien von Diensten statt nach einzelnen Subdomains. Dadurch bleibt die Datenschutzerklärung zentral, deckt aber unterschiedliche Arten von Diensten ab.',
          },
        ],
      },
      {
        title: 'Allgemeine Websites und Landing Pages',
        id: 'websites',
        blocks: [
          {
            type: 'p',
            text: 'Allgemeine Websites und Landing Pages stellen Informationen über KyleHub, Porvi, Projekte, Dokumentation oder Kontaktmöglichkeiten bereit.',
          },
          {
            type: 'p',
            text: 'Dabei werden in der Regel nur technische Zugriffsdaten verarbeitet. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO, da ein berechtigtes Interesse an der sicheren und stabilen Bereitstellung besteht.',
          },
        ],
      },
      {
        title: 'Dokumentation und Wissensseiten',
        id: 'docs',
        blocks: [
          {
            type: 'p',
            text: 'Dokumentations- und Wissensseiten können Inhalte, Suchfunktionen und Links zu Repositories oder externen Quellen bereitstellen.',
          },
          {
            type: 'p',
            text: 'Wenn keine Anmeldung, kein Kommentarbereich und keine freiwillige Eingabe genutzt wird, beschränkt sich die Verarbeitung auf technische Zugriffsdaten und die vom Browser übermittelten Informationen.',
          },
        ],
      },
      {
        title: 'Dienste mit Benutzerkonto oder Login',
        id: 'accounts',
        blocks: [
          {
            type: 'p',
            text: 'Einzelne Dienste können Benutzerkonten, Login-Funktionen, Session-Cookies oder nutzerbezogene Inhalte verwenden. Dazu können insbesondere E-Mail-Adresse, Benutzername, Authentifizierungsdaten, Session-IDs, Einstellungen und vom Nutzer eingegebene Inhalte gehören.',
          },
          {
            type: 'p',
            text: 'Die Verarbeitung erfolgt je nach Funktion auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO zur Bereitstellung des Dienstes oder Art. 6 Abs. 1 lit. f DSGVO für Sicherheit, Missbrauchsschutz und stabilen Betrieb.',
          },
        ],
      },
      {
        title: 'Kontaktaufnahme per E-Mail',
        id: 'contact',
        blocks: [
          {
            type: 'p',
            text: 'Wenn Sie per E-Mail Kontakt aufnehmen, verarbeiten wir die mitgeteilten Angaben zur Bearbeitung der Anfrage. Je nach Inhalt der Anfrage erfolgt dies auf Grundlage von Art. 6 Abs. 1 lit. b oder lit. f DSGVO.',
          },
        ],
      },
      {
        title: 'Server-Logs und technische Sicherheit',
        id: 'server-logs',
        blocks: [
          {
            type: 'p',
            text: `Wir hosten zentrale KyleHub-Webinhalte bei ${hetznerAddress}. Bei jedem Aufruf können technisch erforderliche Verbindungsdaten verarbeitet werden, insbesondere IP-Adresse, Zeitpunkt, angeforderte Ressource, Statuscode, Referrer und User-Agent.`,
          },
          {
            type: 'p',
            text: 'Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO, da sie für Betriebssicherheit, Fehleranalyse, Missbrauchserkennung und stabile Bereitstellung erforderlich ist.',
          },
        ],
      },
      {
        title: 'Cookies, Sessions und lokale Speicherung',
        id: 'storage',
        blocks: [
          {
            type: 'p',
            text: 'Die zentrale Baseline setzt keine nicht erforderlichen Analyse-, Marketing- oder Werbe-Cookies voraus. Technisch notwendige Cookies oder vergleichbare Speicherungen können eingesetzt werden, wenn sie für Login, Session-Sicherheit, Spracheinstellungen, Schutzfunktionen oder die ausdrücklich angeforderte Dienstfunktion erforderlich sind.',
          },
          {
            type: 'p',
            text: 'Nicht erforderliche Cookies, Tracking, Analytics, Remote Fonts, Drittanbieter-Embeds oder vergleichbare Technologien dürfen nur eingesetzt werden, wenn sie im jeweiligen Dienst tatsächlich verwendet, hier beschrieben und soweit erforderlich erst nach Einwilligung aktiviert werden.',
          },
        ],
      },
      {
        title: 'Ihre Rechte',
        blocks: [
          {
            type: 'list',
            items: [
              'Auskunft gemäß Art. 15 DSGVO',
              'Berichtigung gemäß Art. 16 DSGVO',
              'Löschung gemäß Art. 17 DSGVO',
              'Einschränkung der Verarbeitung gemäß Art. 18 DSGVO',
              'Datenübertragbarkeit gemäß Art. 20 DSGVO',
              'Widerspruch gemäß Art. 21 DSGVO',
              'Beschwerde bei einer Aufsichtsbehörde gemäß Art. 77 DSGVO',
            ],
          },
          {
            type: 'p',
            text: `Zur Ausübung Ihrer Rechte schreiben Sie an ${siteConfig.operator.privacyEmail}.`,
          },
        ],
      },
      {
        title: 'Beschwerderecht',
        blocks: [
          {
            type: 'p',
            text: `Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren. Zuständig ist insbesondere ${authorityDe}.`,
          },
        ],
      },
      {
        title: 'Speicherdauer',
        blocks: [
          {
            type: 'p',
            text: 'Personenbezogene Daten werden nur so lange gespeichert, wie dies für den jeweiligen Zweck erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen.',
          },
        ],
      },
    ],
  },
  'en-privacy': {
    title: 'Privacy Policy',
    updated: enDate,
    intro: privacyScopeEn,
    sections: [
      {
        title: 'Controller',
        blocks: [
          { type: 'p', text: imprintAddress },
          { type: 'p', text: `Phone: ${siteConfig.operator.phone}` },
          { type: 'p', text: `Email: ${siteConfig.operator.privacyEmail}` },
        ],
      },
      {
        title: 'Scope',
        blocks: [
          {
            type: 'p',
            text: privacyScopeEn,
          },
          {
            type: 'p',
            text: 'The sections below describe processing by service category instead of by individual subdomain. This keeps the privacy policy centralized while still covering different types of services.',
          },
        ],
      },
      {
        title: 'General websites and landing pages',
        id: 'websites',
        blocks: [
          {
            type: 'p',
            text: 'General websites and landing pages provide information about KyleHub, Porvi, projects, documentation, or contact options.',
          },
          {
            type: 'p',
            text: 'Usually only technical access data is processed. The legal basis is Art. 6(1)(f) GDPR because there is a legitimate interest in secure and stable delivery.',
          },
        ],
      },
      {
        title: 'Documentation and knowledge pages',
        id: 'docs',
        blocks: [
          {
            type: 'p',
            text: 'Documentation and knowledge pages may provide content, search functionality, and links to repositories or external sources.',
          },
          {
            type: 'p',
            text: 'Where no login, comments, or voluntary input are used, processing is limited to technical access data and information transmitted by the browser.',
          },
        ],
      },
      {
        title: 'Services with accounts or login',
        id: 'accounts',
        blocks: [
          {
            type: 'p',
            text: 'Some services may use user accounts, login functions, session cookies, or user-related content. This can include email address, username, authentication data, session IDs, settings, and content entered by the user.',
          },
          {
            type: 'p',
            text: 'Depending on the function, the legal basis is Art. 6(1)(b) GDPR for providing the service or Art. 6(1)(f) GDPR for security, abuse prevention, and stable operation.',
          },
        ],
      },
      {
        title: 'Contact by email',
        id: 'contact',
        blocks: [
          {
            type: 'p',
            text: 'If you contact us by email, we process the information you provide to handle the request. Depending on the context, the legal basis is Art. 6(1)(b) or Art. 6(1)(f) GDPR.',
          },
        ],
      },
      {
        title: 'Server logs and technical security',
        id: 'server-logs',
        blocks: [
          {
            type: 'p',
            text: `We host central KyleHub web content with ${hetznerAddress}. Each request may process technically necessary connection data, especially IP address, timestamp, requested resource, status code, referrer, and user agent.`,
          },
          {
            type: 'p',
            text: 'The legal basis is Art. 6(1)(f) GDPR because this processing is necessary for operational security, error analysis, abuse detection, and stable delivery.',
          },
        ],
      },
      {
        title: 'Cookies, sessions, and local storage',
        id: 'storage',
        blocks: [
          {
            type: 'p',
            text: 'The central baseline does not assume non-essential analytics, marketing, or advertising cookies. Technically necessary cookies or comparable storage may be used where required for login, session security, language preferences, protection features, or the expressly requested service function.',
          },
          {
            type: 'p',
            text: 'Non-essential cookies, tracking, analytics, remote fonts, third-party embeds, or comparable technologies may only be used if they are actually present in the service, described here, and activated only after consent where required.',
          },
        ],
      },
      {
        title: 'Your rights',
        blocks: [
          {
            type: 'list',
            items: [
              'Access under Art. 15 GDPR',
              'Rectification under Art. 16 GDPR',
              'Erasure under Art. 17 GDPR',
              'Restriction under Art. 18 GDPR',
              'Data portability under Art. 20 GDPR',
              'Objection under Art. 21 GDPR',
              'Complaint to a supervisory authority under Art. 77 GDPR',
            ],
          },
          { type: 'p', text: `To exercise your rights, contact ${siteConfig.operator.privacyEmail}.` },
        ],
      },
      {
        title: 'Retention',
        blocks: [
          {
            type: 'p',
            text: 'Personal data is stored only as long as necessary for the relevant purpose or as required by law.',
          },
        ],
      },
      {
        title: 'Complaint right',
        blocks: [
          {
            type: 'p',
            text: `You have the right to lodge a complaint with a supervisory authority. In this context, the competent authority is in particular the ${authorityEn}.`,
          },
        ],
      },
    ],
  },
  'de-terms': {
    title: 'Nutzungsbedingungen',
    updated: deDate,
    intro: termsScopeDe,
    sections: [
      {
        title: 'Geltungsbereich',
        blocks: [
          {
            type: 'p',
            text: termsScopeDe,
          },
          {
            type: 'p',
            text: 'Für rein informative Seiten gelten diese Bedingungen nur ergänzend. Dienste mit Benutzerkonto, produktnahen Funktionen oder gesonderten Regeln können spezielle Bedingungen veröffentlichen.',
          },
        ],
      },
      {
        title: 'Informationscharakter',
        blocks: [
          {
            type: 'p',
            text: 'Die Inhalte dieser Website dienen in erster Linie der Information über KyleHub, seine Infrastrukturarbeit, öffentliche Projekte und zentrale Rechtstexte.',
          },
        ],
      },
      {
        title: 'Zulässige Nutzung',
        blocks: [
          {
            type: 'p',
            text: 'Die Dienste dürfen nicht für rechtswidrige Inhalte, Angriffe auf Systeme, Missbrauch von Accounts, Umgehung von Schutzmechanismen oder Handlungen genutzt werden, die Rechte Dritter verletzen.',
          },
        ],
      },
      {
        title: 'Externe Dienste',
        blocks: [
          {
            type: 'p',
            text: 'Verlinkte externe Plattformen, insbesondere GitHub oder separate Produkt-Subdomains, unterliegen ihren eigenen Bedingungen und Datenschutzinformationen.',
          },
        ],
      },
      {
        title: 'Haftung',
        blocks: [
          {
            type: 'p',
            text: 'Wir bemühen uns um korrekte und aktuelle Informationen, übernehmen jedoch keine Gewähr für Vollständigkeit, Verfügbarkeit oder dauerhafte Fehlerfreiheit dieser Website.',
          },
        ],
      },
    ],
  },
  'en-terms': {
    title: 'Terms',
    updated: enDate,
    intro: termsScopeEn,
    sections: [
      {
        title: 'Scope',
        blocks: [
          {
            type: 'p',
            text: termsScopeEn,
          },
          {
            type: 'p',
            text: 'For purely informational pages, these terms apply only as supplementary terms. Services with accounts, product-facing features, or separate rules may publish specific terms.',
          },
        ],
      },
      {
        title: 'Informational nature',
        blocks: [
          {
            type: 'p',
            text: 'This website primarily provides information about KyleHub, its infrastructure work, public projects, and central legal texts.',
          },
        ],
      },
      {
        title: 'Acceptable use',
        blocks: [
          {
            type: 'p',
            text: 'The services may not be used for unlawful content, attacks on systems, account abuse, circumvention of protection mechanisms, or actions that infringe third-party rights.',
          },
        ],
      },
      {
        title: 'External services',
        blocks: [
          {
            type: 'p',
            text: 'Linked external platforms, especially GitHub or separate product subdomains, remain subject to their own legal terms and privacy information.',
          },
        ],
      },
      {
        title: 'Liability',
        blocks: [
          {
            type: 'p',
            text: 'We aim to provide correct and current information but do not guarantee completeness, uninterrupted availability, or permanent freedom from errors.',
          },
        ],
      },
    ],
  },
};
