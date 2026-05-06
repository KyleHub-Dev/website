import { readFileSync } from 'node:fs';

const registrySource = readFileSync(new URL('../src/data/legalRegistry.ts', import.meta.url), 'utf8');
const legalSource = readFileSync(new URL('../src/data/legal.ts', import.meta.url), 'utf8');

const requiredDomainFamilies = ['kylehub.dev', 'porvi.de'];
const requiredRoutes = ['/impressum', '/datenschutz', '/agb'];
const requiredPrivacyCategories = [
  'Allgemeine Websites und Landing Pages',
  'Dokumentation und Wissensseiten',
  'Dienste mit Benutzerkonto oder Login',
  'Kontaktaufnahme per E-Mail',
  'Server-Logs und technische Sicherheit',
  'Cookies, Sessions und lokale Speicherung',
];

const failures = [];

for (const domain of requiredDomainFamilies) {
  if (!registrySource.includes(`domainFamily: '${domain}'`)) {
    failures.push(`Missing legal domain family: ${domain}`);
  }
}

if (!legalSource.includes('legalDomainFamilyListDe') || !legalSource.includes('legalDomainFamilyListEn')) {
  failures.push('Central legal text is not derived from the legal domain-family registry.');
}

for (const route of requiredRoutes) {
  if (!registrySource.includes(`'${route}'`)) {
    failures.push(`Missing central route coverage in registry: ${route}`);
  }
}

for (const category of requiredPrivacyCategories) {
  if (!legalSource.includes(category)) {
    failures.push(`Missing central privacy category: ${category}`);
  }
}

if (!legalSource.includes('soweit dort kein abweichendes Impressum angegeben ist')) {
  failures.push('Missing Impressum override clause for services with separate provider details.');
}

if (!legalSource.includes('soweit dort keine speziellere Datenschutzerklaerung bereitgestellt wird')) {
  failures.push('Missing privacy override clause for services with a more specific privacy policy.');
}

if (failures.length > 0) {
  console.error('Legal validation failed:');
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log('Legal validation passed.');
