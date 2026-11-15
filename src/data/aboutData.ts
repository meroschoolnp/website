import React from 'react';
import { ShieldCheck, Zap, Award, GraduationCap } from 'lucide-react';

export interface CorePrinciple {
  icon: React.ComponentType<{ className?: string }>;
  titleEn: string;
  titleNe: string;
  descEn: string;
  descNe: string;
  color: string;
  bg: string;
}

export const CORE_PRINCIPLES: CorePrinciple[] = [
  {
    icon: ShieldCheck,
    titleEn: 'Absolute Data Sovereignty',
    titleNe: 'पूर्ण डेटा सार्वभौमिकता',
    descEn:
      'Student transcripts, family records, and financial fee ledgers never leave campus hardware. 100% offline crash-safe local database keeps your institution completely private and secure.',
    descNe:
      'विद्यार्थीको लब्धाङ्कपत्र, पारिवारिक विवरण र वित्तीय शुल्क खाता कहिल्यै विद्यालयको हार्डवेयर बाहिर जाँदैन। १००% अफलाइन सुरक्षित स्थानीय डेटाबेसले संस्थालाई पूर्ण सुरक्षित राख्छ।',
    color: 'text-emerald-600 dark:text-emerald-400',
    bg: 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-200 dark:border-emerald-900/60',
  },
  {
    icon: Zap,
    titleEn: 'Sub-Millisecond Speed',
    titleNe: 'शून्य-विलम्ब गति',
    descEn:
      'Engineered for morning fee queues and exam deadlines. Zero network round-trips means transactions execute in < 1ms with instant student lookup and barcode scanning.',
    descNe:
      'बिहानी शुल्क लाइन र परीक्षाको चटारोलाई ध्यानमा राखी निर्मित। नेटवर्क पर्खाइ नहुने भएकाले १ms भित्रै कारोबार र तत्काल बारकोड स्क्यानिङ सम्भव हुन्छ।',
    color: 'text-indigo-600 dark:text-indigo-400',
    bg: 'bg-indigo-50 dark:bg-indigo-950/60 border-indigo-200 dark:border-indigo-900/60',
  },
  {
    icon: Award,
    titleEn: 'Standardized Broadsheet Rigor',
    titleNe: 'परीक्षा तथा लेखा शुद्धता',
    descEn:
      'Standardized Nepal NEB/SEE CDC letter grading (A+ to NG), CBSE/ICSE CGPA calculations, and double-entry fee ledgers built directly into the core engine with zero third-party plugins.',
    descNe:
      'नेपालको NEB/SEE CDC अक्षराङ्कन (A+ देखि NG सम्म), CBSE/ICSE CGPA गणना र दोहोरो प्रविष्टि शुल्क खाता अतिरिक्त प्लगइन बिना नै मूल इन्जिनमा निर्मित छन्।',
    color: 'text-amber-600 dark:text-amber-400',
    bg: 'bg-amber-50 dark:bg-amber-950/60 border-amber-200 dark:border-amber-900/60',
  },
  {
    icon: GraduationCap,
    titleEn: 'Built With Educators & Bursars',
    titleNe: 'विद्यालयको वास्तविक आवश्यकतामा आधारित',
    descEn:
      'Developed in close consultation with school principals, accounts officers, and homeroom teachers across Nepal to eliminate paperwork friction and repetitive spreadsheet chaos.',
    descNe:
      'नेपालभरका प्रधानाध्यापक, लेखापाल र शिक्षकहरूसँगको प्रत्यक्ष सहकार्यमा कागजी झन्झट र दोहोरिने एक्सेल काम हटाउन विकास गरिएको।',
    color: 'text-blue-600 dark:text-blue-400',
    bg: 'bg-blue-50 dark:bg-blue-950/60 border-blue-200 dark:border-blue-900/60',
  },
];

export interface Milestone {
  yearEn: string;
  yearNe: string;
  titleEn: string;
  titleNe: string;
  descEn: string;
  descNe: string;
}

export const MILESTONES: Milestone[] = [
  {
    yearEn: '2024',
    yearNe: '२०८०/८१',
    titleEn: 'School Field Research',
    titleNe: 'शैक्षिक समस्याहरूको अध्ययन',
    descEn:
      'Investigated cloud ERP freeze rates, fiber cuts, and fee queue bottlenecks across 60+ schools and colleges in Kathmandu, Pokhara, and Biratnagar.',
    descNe:
      'काठमाडौं, पोखरा र विराटनगरका ६०+ विद्यालय तथा कलेजहरूमा अनलाइन ईआरपी अड्किने समस्या, इन्टरनेट कटौती र शुल्क काउन्टरको भीडबारे गहन अध्ययन गरियो।',
  },
  {
    yearEn: '2025',
    yearNe: '२०८१/८२',
    titleEn: 'Native Desktop Architecture',
    titleNe: 'नेटिभ डेस्कटप इन्जिन',
    descEn:
      'Pioneered native offline desktop ERP engine with crash-safe local data integrity, 44 integrated campus modules, and zero-driver hardware printer/scanner support for Windows, macOS & Linux.',
    descNe:
      'Windows, macOS र Linux का लागि सुरक्षित स्थानीय डेटाबेस प्रणाली, ४४ एकीकृत मोड्युल र ड्राइभर-रहित प्रिन्टर/स्क्यानर सपोर्टसहितको नेटिभ डेस्कटप इन्जिन तयार गरियो।',
  },
  {
    yearEn: '2026',
    yearNe: '२०८२/८३',
    titleEn: 'Powering Campuses Nationwide',
    titleNe: 'देशभरका विद्यालयहरूमा सफल सञ्चालन',
    descEn:
      'Enabling over 150,000 students’ academic records, instant fee settlements, and automated report cards daily with 99.999% uptime and zero cloud subscription fees.',
    descNe:
      'दैनिक १,५०,०००+ विद्यार्थीको शैक्षिक अभिलेख, तत्काल शुल्क रसिद र स्वचालित लब्धाङ्कपत्र शून्य क्लाउड शुल्क र ९९.९९९% विश्वसनीयताका साथ सञ्चालनमा।',
  },
];
