import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ShieldCheck,
  Receipt,
  BookOpen,
  Bus,
  Check,
  ArrowRight,
  Lock,
} from 'lucide-react';
import { useLanguage } from '@/src/context/LanguageContext';

type RoleId = 'principal' | 'bursar' | 'teacher' | 'logistics';

interface RoleWorkflow {
  id: RoleId;
  titleEn: string;
  titleNe: string;
  subtitleEn: string;
  subtitleNe: string;
  accessScopeEn: string;
  accessScopeNe: string;
  icon: React.ComponentType<{ className?: string }>;
  dailyTasks: {
    taskEn: string;
    taskNe: string;
    detailEn: string;
    detailNe: string;
    metricEn: string;
    metricNe: string;
  }[];
  guardrailEn: string;
  guardrailNe: string;
}

const ROLE_WORKFLOWS: RoleWorkflow[] = [
  {
    id: 'principal',
    titleEn: 'Principal & Administration',
    titleNe: 'प्रधानाध्यापक र प्रशासन',
    subtitleEn: 'Full campus visibility, calendar governance, and staff approvals',
    subtitleNe: 'सम्पू्र्ण विद्यालय निगरानी, पात्रो व्यवस्थापन र कर्मचारी स्वीकृति',
    accessScopeEn: 'RBAC Level · Institutional Admin',
    accessScopeNe: 'पहुँच तह · संस्थागत प्रशासक',
    icon: ShieldCheck,
    dailyTasks: [
      {
        taskEn: 'Morning Attendance & Leave Approvals',
        taskNe: 'बिहानी हाजिरी र बिदा स्वीकृति',
        detailEn:
          'Review campus-wide class attendance percentages, approve faculty casual/sick leave requests, and trigger automatic substitute teacher assignments.',
        detailNe:
          'सम्पूर्ण कक्षाको दैनिक हाजिरी प्रतिशत हेर्नुहोस्, शिक्षक बिदा स्वीकृत गर्नुहोस् र स्वचालित सट्टा शिक्षक मिलान गर्नुहोस्।',
        metricEn: '< 60 sec review',
        metricNe: '< ६० सेकेन्डमा समीक्षा',
      },
      {
        taskEn: 'School Calendar, Holidays & Official Notices',
        taskNe: 'विद्यालय पात्रो, बिदा र आधिकारिक सूचना',
        detailEn:
          'Publish B.S./A.D. public holidays, parent announcements, exam circulars, and printable noticeboard bulletins offline.',
        detailNe:
          'वि.सं./ई.सं. सार्वजनिक बिदा, अभिभावक घोषणा, परीक्षा परिपत्र र प्रिन्टयोग्य सूचना बुलेटिन अफलाइनमै जारी गर्नुहोस्।',
        metricEn: 'B.S. & A.D. synced',
        metricNe: 'वि.सं. र ई.सं. समन्वित',
      },
      {
        taskEn: 'Executive Analytics & Vault Backups',
        taskNe: 'कार्यकारी विश्लेषण र भल्ट ब्याकअप',
        detailEn:
          'Inspect 6M/1Y fee collection vs. expense trends, check database integrity, and export encrypted backups to USB.',
        detailNe:
          'शुल्क संकलन र खर्चको तुलनात्मक चार्ट हेर्नुहोस्, डेटाबेस शुद्धता जाँच्नुहोस् र USB मा इन्क्रिप्टेड ब्याकअप लिनुहोस्।',
        metricEn: '3 sec USB snapshot',
        metricNe: '३ सेकेन्डमा USB ब्याकअप',
      },
    ],
    guardrailEn:
      'Every fee waiver, grade modification, and certificate issuance is logged with timestamp and operator ID in your local campus database.',
    guardrailNe:
      'प्रत्येक शुल्क छुट, अंक संशोधन र प्रमाणपत्र छपाइ स्थानीय विद्यालय डेटाबेसमा मिति र प्रयोगकर्ता आईडीसहित सुरक्षित रहन्छ।',
  },
  {
    id: 'bursar',
    titleEn: 'Bursar & Cash Counter',
    titleNe: 'लेखापाल र नगद काउन्टर',
    subtitleEn: 'High-speed fee settlements, Day-Book closing, and staff payroll',
    subtitleNe: 'तीव्र शुल्क बिलिङ, दैनिक डे-बुक मिलान र कर्मचारी तलब',
    accessScopeEn: 'RBAC Level · Finance & Cash Desk',
    accessScopeNe: 'पहुँच तह · लेखा तथा नगद डेस्क',
    icon: Receipt,
    dailyTasks: [
      {
        taskEn: 'Barcode Lookup & Sub-2s Receipt Printing',
        taskNe: 'बारकोड खोजी र २ सेकेन्डमै रसिद छपाइ',
        detailEn:
          'Scan scholar CR80 ID cards or search by admission number, settle partial or full monthly dues, and spool 80mm ESC/POS receipts.',
        detailNe:
          'विद्यार्थी परिचयपत्र स्क्यान वा दर्ता नम्बरबाट खोजी गरी आंशिक/पूर्ण शुल्क असुली र ८०mm थर्मल रसिद प्रिन्ट गर्नुहोस्।',
        metricEn: '120+ receipts / min',
        metricNe: 'प्रति मिनेट १२०+ रसिद',
      },
      {
        taskEn: 'Currency Denomination & Shift Closing',
        taskNe: 'नोट गणना र सिफ्ट नगद मिलान',
        detailEn:
          'Reconcile physical drawer cash notes against Cash, Bank Transfer, Card POS, and Cheque journals before closing the office counter.',
        detailNe:
          'कार्यालय बन्द गर्नुअघि नगद घर्राको नोट विवरणलाई नगद, बैंक, कार्ड र चेक अभिलेखसँग सटीक मिलान गर्नुहोस्।',
        metricEn: 'Zero ledger drift',
        metricNe: 'शून्य हिसाब अन्तर',
      },
      {
        taskEn: 'Monthly Staff Payroll & Expenses Ledger',
        taskNe: 'मासिक तलब र विद्यालय खर्च खाता',
        detailEn:
          'Calculate faculty basic pay, allowances, leave deductions, and tax withholdings while logging vendor bills and bus fuel expenses.',
        detailNe:
          'शिक्षकको आधारभूत तलब, भत्ता, बिदा कट्टी र कर गणना गरी कर्मचारी पे-स्लिप र विद्यालय खर्च भौचर तयार पार्नुहोस्।',
        metricEn: '1-click payslips',
        metricNe: '१-क्लिकमा पे-स्लिप',
      },
    ],
    guardrailEn:
      'Strict privilege isolation ensures finance operators cannot alter examination marks, broadsheets, or grading scales.',
    guardrailNe:
      'कडा अधिकार विभाजनले लेखा शाखाले परीक्षा अंक, ब्रोडसिट वा ग्रेडिङ मापदण्ड परिवर्तन गर्न नसक्ने सुरक्षा दिन्छ।',
  },
  {
    id: 'teacher',
    titleEn: 'Teachers & Exam Controller',
    titleNe: 'शिक्षक र परीक्षा नियन्त्रक',
    subtitleEn: 'Keyboard marks entry, NEB/CBSE broadsheets, and class routines',
    subtitleNe: 'द्रुत अंक प्रविष्टि, NEB/CBSE ब्रोडसिट र कक्षा तालिका',
    accessScopeEn: 'RBAC Level · Academic & Grading',
    accessScopeNe: 'पहुँच तह · शैक्षिक तथा परीक्षा',
    icon: BookOpen,
    dailyTasks: [
      {
        taskEn: 'Keyboard-Driven Theory & Practical Gradebook',
        taskNe: 'किबोर्डमैत्री सैद्धान्तिक र प्रयोगात्मक अंक प्रविष्टि',
        detailEn:
          'Enter marks rapidly across subjects using arrow keys with automatic full-mark validation and real-time GPA letter conversion.',
        detailNe:
          'पूर्णाङ्क सीमा जाँच र तत्काल अक्षराङ्क रूपान्तरणसहित किबोर्डबाटै छिटो परीक्षा अंक प्रविष्ट गर्नुहोस्।',
        metricEn: '0.2 ms autosave',
        metricNe: '०.२ ms अटो-सेभ',
      },
      {
        taskEn: 'Master Broadsheet & Batch Report Cards',
        taskNe: 'मास्टर ब्रोडसिट र सामूहिक लब्धाङ्कपत्र',
        detailEn:
          'Compile class ranks, subject toppers, pass/fail analytics, and print-ready A4 transcripts with institutional crest watermarks.',
        detailNe:
          'कक्षा स्थान, विषयगत उत्कृष्ट नतिजा र विद्यालयको वाटरमार्कसहित ब्याच लब्धाङ्कपत्र एउटै PDF/प्रिन्टमा तयार पार्नुहोस्।',
        metricEn: '1,200+ in 1 batch',
        metricNe: '१ ब्याचमा १,२००+ नतिजा',
      },
      {
        taskEn: 'Admit Cards, Homework & Lesson Plans',
        taskNe: 'प्रवेशपत्र, गृहकार्य र पाठ योजना',
        detailEn:
          'Generate QR-verified exam hall tickets (flagging fee dues automatically) and track unit-by-unit syllabus coverage.',
        detailNe:
          'बक्यौता शुल्क जाँचसहित QR कोड भएको परीक्षा प्रवेशपत्र बनाउनुहोस् र पाठ योजना प्रगति अभिलेख राख्नुहोस्।',
        metricEn: '2 or 4 per A4 page',
        metricNe: 'प्रति A4 २ वा ४ टिकट',
      },
    ],
    guardrailEn:
      'Staff-room PCs connect over local campus LAN so multiple teachers score concurrently without internet or cloud lag.',
    guardrailNe:
      'शिक्षक कक्षका कम्प्युटरहरू स्थानीय LAN मा जोडिने हुँदा इन्टरनेट बिना नै धेरै शिक्षकले एकैसाथ अंक भर्न सक्छन्।',
  },
  {
    id: 'logistics',
    titleEn: 'Librarian, Transport & Hostel',
    titleNe: 'पुस्तकालय, यातायात र छात्रावास',
    subtitleEn: 'Barcode book circulation, bus seat manifests, and gate security',
    subtitleNe: 'बारकोड पुस्तक लेनदेन, बस सिट सूची र गेट सुरक्षा',
    accessScopeEn: 'RBAC Level · Campus Logistics',
    accessScopeNe: 'पहुँच तह · क्याम्पस सेवा',
    icon: Bus,
    dailyTasks: [
      {
        taskEn: 'ISBN Barcode Book Issue & Overdue Sync',
        taskNe: 'ISBN बारकोड पुस्तक लेनदेन र जरिवाना मिलान',
        detailEn:
          'Scan ISBN book labels and student CR80 cards via USB wedge to check books in/out in seconds and sync late fines to fee ledgers.',
        detailNe:
          'USB बारकोड स्क्यानरबाट पुस्तक र विद्यार्थी परिचयपत्र स्क्यान गरी तुरुन्त लेनदेन र ढिलाइ जरिवाना शुल्क खातामा जोड्नुहोस्।',
        metricEn: '1-sec scan checkout',
        metricNe: '१ सेकेन्डमा लेनदेन',
      },
      {
        taskEn: 'School Bus Routes & CR80 Transit Passes',
        taskNe: 'विद्यालय बस रुट र CR80 बस पास',
        detailEn:
          'Enforce seat capacities across routes, log fuel & maintenance schedules, and issue barcoded PVC passes for boarding checks.',
        detailNe:
          'सिट क्षमताभन्दा बढी बुकिङ रोक्नुहोस्, सवारी मर्मत अभिलेख राख्नुहोस् र बारकोड PVC बस पास जारी गर्नुहोस्।',
        metricEn: '100% seat compliance',
        metricNe: '१००% सिट नियन्त्रण',
      },
      {
        taskEn: 'Hostel Beds, Infirmary & Thermal Gate Passes',
        taskNe: 'छात्रावास, स्वास्थ्य कक्ष र थर्मल गेट पास',
        detailEn:
          'Allocate boarding rooms and mess fees, log infirmary visits/allergies, and print 80mm early-dismissal guardian gate slips.',
        detailNe:
          'छात्रावास कोठा/मेस शुल्क व्यवस्थापन, प्राथमिक उपचार लग र ८०mm थर्मल गेट-पास रसिद प्रिन्ट गर्नुहोस्।',
        metricEn: 'Unified campus ledger',
        metricNe: 'एकीकृत विद्यालय खाता',
      },
    ],
    guardrailEn:
      'All library fines, hostel boarding charges, and bus route fees post directly into the single student ledger with zero duplicate typing.',
    guardrailNe:
      'पुस्तकालय जरिवाना, छात्रावास शुल्क र बस भाडा दोहोरो प्रविष्टि बिना नै एउटै विद्यार्थी खातामा स्वतः जोडिन्छ।',
  },
];

export const CampusRoleWorkflows: React.FC = () => {
  const navigate = useNavigate();
  const { pick } = useLanguage();
  const [selectedRole, setSelectedRole] = useState<RoleId>('principal');

  const active = ROLE_WORKFLOWS.find((r) => r.id === selectedRole) ?? ROLE_WORKFLOWS[0];
  const ActiveIcon = active.icon;

  return (
    <section className="perf-section max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
        <div className="max-w-3xl space-y-2.5">
          <div className="text-xs font-mono font-semibold text-indigo-600 dark:text-indigo-400">
            {pick('Built for Every Campus Desk', 'विद्यालयका हरेक शाखा र भूमिकाका लागि')}
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-tight text-balance">
            {pick(
              'Tailored Daily Workflows Across Principal, Accounts, Faculty & Logistics',
              'प्रधानाध्यापक, लेखा, शिक्षक र सेवा शाखाका लागि व्यवस्थित दैनिक कार्यप्रवाह'
            )}
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {pick(
              'Select an institutional role below to inspect how MeroSchool partitions permissions, eliminates duplicate paperwork, and keeps every office desk synchronized over your local campus database.',
              'MeroSchool ले अधिकार विभाजन कसरी गर्छ, दोहोरो कागजी काम कसरी हटाउँछ र स्थानीय डेटाबेसबाट प्रत्येक डेस्कलाई कसरी समन्वयमा राख्छ हेर्न तलको भूमिका छान्नुहोस्।'
            )}
          </p>
        </div>
        <button
          type="button"
          onClick={() => navigate('/features')}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:underline cursor-pointer whitespace-nowrap shrink-0"
        >
          <span>{pick('Inspect RBAC & all 44 modules', 'RBAC र सबै ४४ मोड्युल हेर्नुहोस्')}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-xs">
        {/* Role Selector Tabs */}
        <div className="p-2 sm:p-3 border-b border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/60">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
            {ROLE_WORKFLOWS.map((role) => {
              const Icon = role.icon;
              const isSelected = role.id === selectedRole;
              return (
                <button
                  key={role.id}
                  type="button"
                  onClick={() => setSelectedRole(role.id)}
                  className={`text-left px-3.5 py-3 rounded-xl transition-colors cursor-pointer flex items-center gap-3 min-h-[44px] ${
                    isSelected
                      ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 shadow-2xs'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/60 dark:hover:bg-slate-900/40'
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                      isSelected
                        ? 'bg-indigo-600 text-white'
                        : 'bg-slate-200/70 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-bold truncate">
                      {pick(role.titleEn, role.titleNe)}
                    </div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 truncate">
                      {pick(role.accessScopeEn, role.accessScopeNe)}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Role Content */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-900 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
                <ActiveIcon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
                  {pick(active.titleEn, active.titleNe)}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  {pick(active.subtitleEn, active.subtitleNe)}
                </p>
              </div>
            </div>
            <span className="text-xs font-mono text-indigo-600 dark:text-indigo-400 font-semibold">
              {pick(active.accessScopeEn, active.accessScopeNe)}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:divide-x divide-slate-100 dark:divide-slate-800">
            {active.dailyTasks.map((item, idx) => (
              <div
                key={idx}
                className={`space-y-2.5 ${idx > 0 ? 'md:pl-6 pt-4 md:pt-0 border-t md:border-t-0 border-slate-100 dark:border-slate-800' : ''}`}
              >
                <div className="flex items-center justify-between gap-2 text-[11px] font-mono">
                  <span className="text-slate-500 tabular-nums">0{idx + 1}.</span>
                  <span className="font-semibold text-emerald-700 dark:text-emerald-400 tabular-nums">
                    {pick(item.metricEn, item.metricNe)}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-snug">
                  {pick(item.taskEn, item.taskNe)}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {pick(item.detailEn, item.detailNe)}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-5 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div className="flex items-start sm:items-center gap-2 text-slate-600 dark:text-slate-300">
              <Lock className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5 sm:mt-0" />
              <span>{pick(active.guardrailEn, active.guardrailNe)}</span>
            </div>
            <button
              type="button"
              onClick={() => navigate('/contact?type=demo')}
              className="inline-flex items-center gap-1.5 font-semibold text-indigo-600 dark:text-indigo-400 hover:underline cursor-pointer whitespace-nowrap shrink-0"
            >
              <Check className="w-3.5 h-3.5" />
              <span>{pick('Book role-specific walkthrough', 'यो भूमिकाको डेमो हेर्नुहोस्')}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
