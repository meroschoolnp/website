import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FileText,
  Printer,
  QrCode,
  Award,
  HardDrive,
  Upload,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';
import { useLanguage } from '@/src/context/LanguageContext';

export const DeliverablesAndOnboardingSection: React.FC = () => {
  const navigate = useNavigate();
  const { pick } = useLanguage();

  const deliverables = [
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

  const onboardingSteps = [
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
        'Link reception, library, and staff-room computers over local Wi-Fi or Ethernet and save integrity-verified campus backup snapshots to USB in 3 seconds.',
      descNe:
        'स्थानीय Wi-Fi वा इथरनेट LAN बाट कार्यालयका कम्प्युटर जोड्नुहोस् र ३ सेकेन्डमै USB पेनड्राइभमा प्रमाणित विद्यालय ब्याकअप सुरक्षित गर्नुहोस्।',
    },
  ];

  return (
    <div className="space-y-16 lg:space-y-24">
      {/* Official Offline Print & Export Deliverables */}
      <section className="perf-section max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="max-w-3xl space-y-2.5">
          <div className="text-xs font-mono font-semibold text-indigo-600 dark:text-indigo-400">
            {pick('Print-Ready Institutional Outputs', 'प्रिन्ट-तयार आधिकारिक कागजातहरू')}
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-tight text-balance">
            {pick(
              'Every Official Document & Card Printed Locally in Seconds',
              'विद्यालयलाई आवश्यक प्रत्येक आधिकारिक कागजात र कार्ड सेकेन्डमै प्रिन्ट'
            )}
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {pick(
              'MeroSchool renders print-ready, crisp A4 transcripts, thermal receipts, PVC cards, and notice circulars locally using your school’s logo crest and serial registers.',
              'MeroSchool ले विद्यालयको लोगो र आधिकारिक दर्ता क्रमसंख्यासहित स्पष्ट A4 लब्धाङ्कपत्र, थर्मल रसिद, PVC कार्ड र सूचना परिपत्र स्थानीय रूपमै तयार पार्दछ।'
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {deliverables.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono font-semibold text-slate-500 dark:text-slate-400">
                      {pick(item.formatEn, item.formatNe)}
                    </span>
                  </div>
                  <h3 className="font-display text-base font-bold text-slate-900 dark:text-white leading-snug">
                    {pick(item.titleEn, item.titleNe)}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {pick(item.descEn, item.descNe)}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center gap-1.5 text-[11px] font-mono text-emerald-700 dark:text-emerald-400">
                  <CheckCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{pick('Zero Internet Required', 'इन्टरनेट बिना प्रिन्ट हुने')}</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4-Step Turnkey Campus Onboarding & Migration Playbook */}
      <section className="perf-section max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/60 p-6 sm:p-10 lg:p-12 space-y-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <div className="max-w-3xl space-y-2.5">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-indigo-600 dark:text-indigo-400">
                <Upload className="w-4 h-4 shrink-0" />
                <span>{pick('Turnkey Migration Playbook', 'सजिलो जडान र डेटा सार्ने प्रक्रिया')}</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight text-balance">
                {pick(
                  'How Your School Moves from Paper or Cloud to MeroSchool in Under 1 Hour',
                  'कागजी ढड्डा वा क्लाउडबाट १ घण्टाभित्रै MeroSchool मा कसरी सर्ने'
                )}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {pick(
                  'No multi-week IT consulting contracts. Our implementation engineers guide your staff through installation, CSV import, hardware pairing, and USB backup verification.',
                  'लामो प्राविधिक पर्खाइ बिना नै हाम्रो टोलीले स्थापना, CSV डेटा आयात, हार्डवेयर जडान र USB ब्याकअप परीक्षणमा प्रत्यक्ष सहयोग गर्दछ।'
                )}
              </p>
            </div>
            <button
              type="button"
              onClick={() => navigate('/contact?type=demo')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition-colors cursor-pointer whitespace-nowrap shrink-0 min-h-[42px]"
            >
              <HardDrive className="w-4 h-4" />
              <span>{pick('Book Guided Onboarding', 'गाइडेड अनबोर्डिङ बुक गर्नुहोस्')}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {onboardingSteps.map((s) => (
              <div
                key={s.step}
                className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-3"
              >
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="font-bold text-indigo-600 dark:text-indigo-400">{s.step}.</span>
                  <span className="text-slate-500 dark:text-slate-400 tabular-nums">
                    {pick(s.durationEn, s.durationNe)}
                  </span>
                </div>
                <h3 className="font-display text-sm font-bold text-slate-900 dark:text-white leading-snug">
                  {pick(s.titleEn, s.titleNe)}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {pick(s.descEn, s.descNe)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
