import React from 'react';
import { Printer, FileText, QrCode, Award } from 'lucide-react';

export interface DeliverableItem {
  icon: React.ComponentType<{ className?: string }>;
  formatEn: string;
  formatNe: string;
  titleEn: string;
  titleNe: string;
  descEn: string;
  descNe: string;
}

export const DELIVERABLES_LIST: DeliverableItem[] = [
  {
    icon: Printer,
    formatEn: '80mm / 58mm ESC/POS',
    formatNe: '८०mm / ५८mm ESC/POS',
    titleEn: 'Thermal Fee Receipts & Gate Passes',
    titleNe: 'थर्मल शुल्क रसिद र गेट पास',
    descEn:
      'Itemized fee slips, partial payment balances, and guardian early-dismissal gate tickets printed directly without browser popups.',
    descNe:
      'ब्राउजर पपअप बिना नै शीर्षकगत शुल्क रसिद, बाँकी बक्यौता विवरण र अभिभावक प्रमाणित गेट पास तुरुन्त प्रिन्ट हुन्छ।',
  },
  {
    icon: FileText,
    formatEn: 'A4 Print & PDF',
    formatNe: 'A4 प्रिन्ट र PDF',
    titleEn: 'NEB / CBSE Report Cards & Broadsheets',
    titleNe: 'NEB / CBSE लब्धाङ्कपत्र र ब्रोडसिट',
    descEn:
      'Class-wide batch transcripts featuring institutional crest watermarks, attendance percentages, GPA/CGPA tables, and signature blocks.',
    descNe:
      'विद्यालयको वाटरमार्क, हाजिरी प्रतिशत, GPA/CGPA तालिका र हस्ताक्षर खण्डसहित पूरै कक्षाको ब्याच लब्धाङ्कपत्र।',
  },
  {
    icon: QrCode,
    formatEn: '85.6 × 54 mm CR80',
    formatNe: '८५.६ × ५४ mm CR80',
    titleEn: 'Barcoded PVC Student IDs & Bus Passes',
    titleNe: 'बारकोड PVC परिचयपत्र र बस पास',
    descEn:
      'Standardized CR80 badges with webcam scholar portrait, Code-128 linear barcode or QR code, blood group, and route stop tags.',
    descNe:
      'वेबक्याम फोटो, Code-128 बारकोड वा QR कोड, रक्त समूह र बस स्टप विवरणसहितको मानक CR80 PVC कार्ड।',
  },
  {
    icon: Award,
    formatEn: 'Serial Audit Register',
    formatNe: 'क्रमसंख्या अडिट रजिस्टर',
    titleEn: 'Transfer, Character & Salary Documents',
    titleNe: 'स्थानान्तरण, चारित्रिक र तलब पुर्जी',
    descEn:
      'Official Transfer Certificates (TC), Bonafide proofs, exam hall admit cards, monthly faculty payslips, and printable noticeboard circulars.',
    descNe:
      'आधिकारिक स्थानान्तरण प्रमाणपत्र (TC), चारित्रिक प्रमाणपत्र, परीक्षा प्रवेशपत्र, शिक्षक पे-स्लिप र सूचना बुलेटिन।',
  },
];

export interface OnboardingStepItem {
  step: string;
  durationEn: string;
  durationNe: string;
  titleEn: string;
  titleNe: string;
  descEn: string;
  descNe: string;
}

export const ONBOARDING_STEPS: OnboardingStepItem[] = [
  {
    step: '01',
    durationEn: 'Day 1 · 10 Minutes',
    durationNe: 'दिन १ · १० मिनेट',
    titleEn: 'Super Admin Account & Desktop Install',
    titleNe: 'सुपर एडमिन खाता र डेस्कटप स्थापना',
    descEn:
      'Super Admin provisions your school account. Install the ~15 MB native MeroSchool app on Windows 10/11, macOS, or Linux with zero external server setup.',
    descNe:
      'सुपर एडमिनले विद्यालयको खाता सिर्जना गर्छ। बाहिरी सर्भर सेटअप बिना नै Windows, macOS वा Linux मा ~१५ MB नेटिभ एप जडान गर्नुहोस्।',
  },
  {
    step: '02',
    durationEn: 'Day 1 · 20 Minutes',
    durationNe: 'दिन १ · २० मिनेट',
    titleEn: 'Branding, B.S./A.D. Calendar & Fee Heads',
    titleNe: 'लोगो, वि.सं./ई.सं. पात्रो र शुल्क शीर्षक',
    descEn:
      'Upload your school crest, choose Bikram Sambat or Gregorian calendars, set NEB/CBSE/Percentage grading rules, and import classes & tuition tiers.',
    descNe:
      'विद्यालयको लोगो राख्नुहोस्, वि.सं. वा ई.सं. पात्रो छान्नुहोस्, NEB/CBSE ग्रेडिङ नियम र कक्षाअनुसार शुल्क संरचना मिलाउनुहोस्।',
  },
  {
    step: '03',
    durationEn: 'Day 1 · 30 Minutes',
    durationNe: 'दिन १ · ३० मिनेट',
    titleEn: 'Bulk CSV Roster Import & Peripheral Pairing',
    titleNe: 'CSV विद्यार्थी आयात र प्रिन्टर/स्क्यानर जडान',
    descEn:
      'Import existing student directories, guardian phones, and opening balances via CSV templates—then plug in 80mm thermal printers and USB barcode scanners.',
    descNe:
      'Excel/CSV बाट पुराना विद्यार्थी विवरण र अघिल्लो बाँकी रकम एकसाथ आयात गर्नुहोस् र ८०mm थर्मल प्रिन्टर तथा USB बारकोड स्क्यानर जोड्नुहोस्।',
  },
  {
    step: '04',
    durationEn: 'Day 2 Onwards',
    durationNe: 'दिन २ देखि निरन्तर',
    titleEn: 'Optional Campus LAN & Daily USB Vault Backup',
    titleNe: 'ऐच्छिक स्थानीय LAN र दैनिक USB ब्याकअप',
    descEn:
      'Optionally connect multiple school laptops via offline local Wi-Fi or Gigabit LAN. Eject a 1-click encrypted SQLite backup snapshot to a USB drive daily.',
    descNe:
      'इन्टरनेट बिना नै स्थानीय Wi-Fi वा LAN बाट थप कम्प्युटर जोड्नुहोस्। दैनिक १-क्लिकमा सुरक्षित इन्क्रिप्टेड ब्याकअप USB पेनड्राइभमा निकाल्नुहोस्।',
  },
];
