import React from 'react';
import { Receipt, FileSpreadsheet, CalendarCheck, ShieldCheck } from 'lucide-react';

export type ShowcaseTabId = 'fees' | 'exams' | 'attendance' | 'provisioning';

export interface WorkspaceTabItem {
  id: ShowcaseTabId;
  index: string;
  labelEn: string;
  labelNe: string;
  headlineEn: string;
  headlineNe: string;
  summaryEn: string;
  summaryNe: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const WORKSPACE_TABS: WorkspaceTabItem[] = [
  {
    id: 'fees',
    index: '01',
    labelEn: 'Fee Ledger & Cash Desk',
    labelNe: 'शुल्क खाता र नगद डेस्क',
    headlineEn: 'Sub-2-second tuition billing & 80mm thermal receipts',
    headlineNe: '२ सेकेन्डमै शुल्क बिलिङ र 80mm थर्मल रसिद',
    summaryEn:
      'Search any scholar by admission number or barcode scan, apply scholarship waivers, settle partial dues, and spool direct ESC/POS receipts without waiting on internet round-trips.',
    summaryNe:
      'दर्ता नम्बर वा बारकोड स्क्यानबाट तुरुन्त विद्यार्थी खोज्नुहोस्, छात्रवृत्ति छुट लागू गर्नुहोस्, आंशिक बक्यौता असुली गर्नुहोस् र इन्टरनेट प्रतीक्षा नगरी ESC/POS रसिद प्रिन्ट गर्नुहोस्।',
    icon: Receipt,
  },
  {
    id: 'exams',
    index: '02',
    labelEn: 'NEB & CBSE Broadsheet',
    labelNe: 'NEB र CBSE ब्रोडसिट',
    headlineEn: 'Instant GPA compilation across all subjects and sections',
    headlineNe: 'सबै विषय र सेक्सनको तत्काल GPA र नतिजा संकलन',
    summaryEn:
      'Teachers enter theory and practical marks from staff-room LAN terminals. MeroSchool converts weighted totals to NEB CDC letter grades or CBSE 10-point GPA and renders print-ready broadsheets.',
    summaryNe:
      'शिक्षकहरूले स्टाफ-रूम LAN टर्मिनलबाट सैद्धान्तिक र प्रयोगात्मक अंक प्रविष्ट गर्छन्। MeroSchool ले स्वतः NEB अक्षराङ्क वा CBSE १०-अंकीय GPA र प्रिन्ट-तयार ब्रोडसिट तयार पार्छ।',
    icon: FileSpreadsheet,
  },
  {
    id: 'attendance',
    index: '03',
    labelEn: 'Homeroom Roll-Call',
    labelNe: 'दैनिक कक्षा हाजिरी',
    headlineEn: '60-second daily roll-call & printable absence registers',
    headlineNe: '६० सेकेन्डमै दैनिक हाजिरी र प्रिन्ट गर्न मिल्ने रजिस्टर',
    summaryEn:
      'Mark an entire section in seconds with one-click defaults, flag chronic absenteeism against threshold rules, and print physical notice slips with zero SMS or cloud dependencies.',
    summaryNe:
      'एक क्लिकमै पूरै कक्षाको हाजिरी लगाउनुहोस्, न्यूनतम उपस्थिति सीमाअनुसार अनुपस्थित विद्यार्थी पहिचान गर्नुहोस् र SMS वा क्लाउड बिना अभिभावक सूचना स्लिप प्रिन्ट गर्नुहोस्।',
    icon: CalendarCheck,
  },
  {
    id: 'provisioning',
    index: '04',
    labelEn: 'Super Admin & Offline Mode',
    labelNe: 'सुपर एडमिन र अफलाइन मोड',
    headlineEn: 'Multi-school provisioning paired with 100% local offline execution',
    headlineNe: 'बहु-विद्यालय खाता सिर्जना र १००% स्थानीय अफलाइन सञ्चालन',
    summaryEn:
      'Super Admin creates each institution’s account and LAN counter allocation. Once the school signs into its dashboard, all 44 modules execute strictly offline on local storage.',
    summaryNe:
      'सुपर एडमिनले प्रत्येक विद्यालयको खाता र LAN काउन्टर संख्या तय गर्छ। विद्यालयले ड्यासबोर्डमा लगइन गरेपछि सबै ४४ मोड्युल स्थानीय भण्डारणमा पूर्णतः अफलाइन चल्छन्।',
    icon: ShieldCheck,
  },
];
