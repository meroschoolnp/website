export interface NavLinkItem {
  labelEn: string;
  labelNe: string;
  path: string;
}

export const PRIMARY_NAV_LINKS: NavLinkItem[] = [
  { labelEn: 'Overview', labelNe: 'अवलोकन', path: '/' },
  { labelEn: 'Features', labelNe: 'विशेषताहरू', path: '/features' },
  { labelEn: 'About', labelNe: 'हाम्रो बारेमा', path: '/about' },
  { labelEn: 'Testimonials', labelNe: 'प्रशंसापत्र', path: '/testimonials' },
  { labelEn: 'Contact', labelNe: 'सम्पर्क', path: '/contact' },
];

export const FOOTER_PLATFORM_LINKS: NavLinkItem[] = [
  { labelEn: 'All 44 Modules', labelNe: 'सबै ४४ मोड्युलहरू', path: '/features' },
  { labelEn: 'Architecture & LAN', labelNe: 'संरचना र स्थानीय LAN', path: '/about' },
  { labelEn: 'Case Studies', labelNe: 'सफल प्रयोग विवरण', path: '/testimonials' },
  { labelEn: 'FAQs', labelNe: 'प्रश्नोत्तर (FAQs)', path: '/faqs' },
];

export const FOOTER_LEGAL_LINKS: NavLinkItem[] = [
  { labelEn: 'Privacy', labelNe: 'गोपनीयता नीति', path: '/privacy' },
  { labelEn: 'Terms', labelNe: 'प्रयोगका सर्तहरू', path: '/terms' },
  { labelEn: 'Contact', labelNe: 'सम्पर्क', path: '/contact' },
];
