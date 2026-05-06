import { siteConfig } from './site';

export type LegalDomainFamily = {
  domainFamily: string;
  public: boolean;
  operator: string;
  legalCoveredBy: '/impressum';
  privacyCoveredBy: '/datenschutz';
  termsCoveredBy: '/agb';
};

export const legalDomainFamilies: LegalDomainFamily[] = [
  {
    domainFamily: 'kylehub.dev',
    public: true,
    operator: siteConfig.operator.name,
    legalCoveredBy: '/impressum',
    privacyCoveredBy: '/datenschutz',
    termsCoveredBy: '/agb',
  },
  {
    domainFamily: 'porvi.de',
    public: true,
    operator: siteConfig.operator.name,
    legalCoveredBy: '/impressum',
    privacyCoveredBy: '/datenschutz',
    termsCoveredBy: '/agb',
  },
];

export const publicLegalDomainFamilies = legalDomainFamilies.filter((entry) => entry.public);

export const legalDomainFamilyNames = publicLegalDomainFamilies.map((entry) => entry.domainFamily);

export const legalDomainFamilyListDe = legalDomainFamilyNames.join(', ');

export const legalDomainFamilyListEn = legalDomainFamilyNames.join(', ');
