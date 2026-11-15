import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Monitor,
  CheckCircle,
  ArrowRight,
  Database,
  FileSpreadsheet,
  Star,
  Phone,
  Video,
  Laptop,
  ShieldCheck,
  Building2,
  Printer,
  QrCode,
  Camera,
} from 'lucide-react';
import { SCHOOL_CONTACT } from '@/src/config/contactInfo';
import { SEO } from '@/src/components/SEO';
import { AppImage } from '@/src/components/AppImage';
import { InteractiveWorkspaceShowcase } from '@/src/components/InteractiveWorkspaceShowcase';
import { CampusRoleWorkflows } from '@/src/components/CampusRoleWorkflows';
import { TcoSavingsCalculator } from '@/src/components/TcoSavingsCalculator';
import heroCampusAdminImg from '@/src/assets/images/hero_campus_admin_1794561643066.jpg';
import desktopPosTerminalImg from '@/src/assets/images/desktop_pos_terminal_1794561642933.jpg';
import { useLanguage } from '@/src/context/LanguageContext';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const { isNepali, pick } = useLanguage();

  return (
    <div className="space-y-16 lg:space-y-24 pb-16">
      <SEO
        title={pick(
          'Offline Desktop School Management ERP',
          'अफलाइन डेस्कटप विद्यालय व्यवस्थापन ईआरपी'
        )}
        description={pick(
          'Run 44 school modules 100% offline on Windows, macOS & Linux. Manage fee ledgers, NEB/CBSE broadsheets, school calendars, and receipts with zero cloud fees.',
          'Windows, macOS र Linux मा १००% अफलाइन ४४ विद्यालय मोड्युल चलाउनुहोस्। शुल्क खाता, NEB/CBSE ब्रोडसिट, विद्यालय पात्रो र रसिद बिना क्लाउड शुल्क व्यवस्थापन गर्नुहोस्।'
        )}
        keywords={pick(
          'offline school management system, desktop school ERP, school software Nepal, student fee ledger, ESC POS thermal receipt, NEB CBSE broadsheet, school calendar B.S. A.D., MeroSchool',
          'अफलाइन विद्यालय सफ्टवेयर, डेस्कटप स्कूल ईआरपी, विद्यार्थी शुल्क खाता, थर्मल रसिद, NEB ब्रोडसिट, विद्यालय पात्रो, MeroSchool'
        )}
        canonicalPath="/"
        breadcrumbs={[{ name: pick('Home', 'गृहपृष्ठ'), path: '/' }]}
        structuredData={{
          '@type': 'WebPage',
          name: pick(
            'MeroSchool — Offline Desktop School Management ERP',
            'MeroSchool — अफलाइन डेस्कटप विद्यालय व्यवस्थापन ईआरपी'
          ),
          description: pick(
            'Multi-institution offline desktop school management ERP for fee ledgers, exams, attendance, library, transport, and campus calendars.',
            'शुल्क खाता, परीक्षा, हाजिरी, पुस्तकालय, यातायात र विद्यालय पात्रो सहितको १००% अफलाइन डेस्कटप विद्यालय व्यवस्थापन प्रणाली।'
          ),
          inLanguage: isNepali ? 'ne' : 'en',
        }}
      />

      {/* ============================================================== */}
      {/* 1. ASYMMETRIC SPLIT HERO (1440px Presence, 1 Dominant Anchor)  */}
      {/* ============================================================== */}
      <section className="pt-8 sm:pt-12 lg:pt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Narrative & Primary CTA (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6 py-2">
            <div className="space-y-5">
              {/* Unboxed Metadata Line (Zero-Pill Discipline) */}
              <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400">
                <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                  {pick('Multi-Institution School ERP', 'बहु-संस्थागत विद्यालय ईआरपी')}
                </span>
                <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
                <span>{pick('100% Offline Database', '१००% अफलाइन डेटाबेस')}</span>
                <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
                <span>{pick('Windows, macOS & Linux', 'Windows, macOS र Linux')}</span>
              </div>

              <h1 className="font-display text-[clamp(2.25rem,3.8vw,3.5rem)] font-bold tracking-tight text-slate-900 dark:text-white leading-[1.08] text-balance">
                {pick(
                  'Zero-Latency Offline ERP Built for Modern Schools',
                  'आधुनिक विद्यालयका लागि निर्मित शून्य-विलम्ब अफलाइन ईआरपी'
                )}
              </h1>

              <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
                {pick(
                  'Super Admin provisions each school’s institutional account; once logged in, your entire campus operates 100% offline on your local campus database with zero cloud support. Print 80mm thermal fee receipts in under two seconds, compile NEB/CBSE broadsheets, and issue barcoded PVC bus passes without internet or monthly cloud server bills.',
                  'सुपर एडमिनले प्रत्येक विद्यालयको संस्थागत खाता तयार गरिदिन्छ; एकपटक लगइन गरेपछि तपाईंको सम्पूर्ण विद्यालय बिना क्लाउड सपोर्ट स्थानीय अफलाइन डेटाबेसमा १००% अफलाइन चल्छ। इन्टरनेट वा मासिक क्लाउड शुल्क बिना नै २ सेकेन्डमै ८०mm थर्मल शुल्क रसिद छाप्नुहोस्, NEB/CBSE ब्रोडसिट तयार पार्नुहोस् र बारकोड PVC बस पास जारी गर्नुहोस्।'
                )}
              </p>

              {/* Single Dominant Primary CTA + Clear Secondary Login Action */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
                <button
                  type="button"
                  onClick={() => navigate('/contact?type=demo')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition-colors cursor-pointer min-h-[44px] whitespace-nowrap"
                >
                  <span>{pick('Request Free On-Site Demo', 'निःशुल्क विद्यालय डेमो माग गर्नुहोस्')}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={() => navigate('/features')}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold text-slate-800 dark:text-slate-100 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer min-h-[44px] whitespace-nowrap"
                >
                  <Monitor className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                  <span>{pick('Explore 44 Modules', 'सबै ४४ मोड्युलहरू हेर्नुहोस्')}</span>
                </button>
              </div>
            </div>

            {/* Clean Unboxed Technical Assurances */}
            <div className="pt-5 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-600 dark:text-slate-400 font-mono tabular-nums">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>{pick('~15 MB Native Installer', '~१५ MB नेटिभ इन्स्टलर')}</span>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>{pick('Rs. 0 Monthly Cloud Tax', 'रु. ० मासिक क्लाउड शुल्क')}</span>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>{pick('1-Click USB Vault Backup', '१-क्लिक USB भल्ट ब्याकअप')}</span>
              </span>
            </div>
          </div>

          {/* Right High-Resolution Campus Administration Visual (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <AppImage
              src={heroCampusAdminImg}
              alt={pick(
                'Desktop workstation with 80mm ESC/POS thermal receipt printer and USB barcode scanner running MeroSchool offline ERP',
                '८०mm ESC/POS थर्मल रसिद प्रिन्टर र USB बारकोड स्क्यानर जडित MeroSchool अफलाइन डेस्कटप ERP कार्यकेन्द्र'
              )}
              aspectClass="aspect-[16/9]"
              priority
              fallbackTitle={pick('MeroSchool Offline Campus Administration Desk', 'MeroSchool अफलाइन विद्यालय प्रशासन डेस्क')}
              caption={pick(
                'Front-office workstation paired with an 80mm ESC/POS thermal receipt printer and USB laser barcode scanner running completely offline locally.',
                'स्थानीय अफलाइनमा चल्ने ८०mm ESC/POS थर्मल रसिद प्रिन्टर र USB लेजर बारकोड स्क्यानर जडित विद्यालय कार्यालय डेस्क।'
              )}
            />
          </div>
        </div>

        {/* Full-Width 4-Column Benchmark Strip Directly Below Hero Split */}
        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="p-5 sm:p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-1.5">
            <div className="text-xs font-medium text-indigo-600 dark:text-indigo-400">
              {pick('Query Latency', 'क्वेरी गति')}
            </div>
            <div className="font-display text-2xl sm:text-3xl font-bold font-mono tabular-nums text-slate-900 dark:text-white">
              {pick('0.2 ms', '०.२ ms')}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              {pick(
                'Instant local database reads/writes versus 3,000ms+ remote cloud wait times.',
                'क्लाउडको ३,०००ms+ पर्खाइको तुलनामा स्थानीय डेटाबेसको तीव्र पठन/लेखन।'
              )}
            </p>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-1.5">
            <div className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
              {pick('Internet Required', 'आवश्यक इन्टरनेट')}
            </div>
            <div className="font-display text-2xl sm:text-3xl font-bold font-mono tabular-nums text-emerald-600 dark:text-emerald-400">
              {pick('0 Bytes', '० बाइट्स')}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              {pick(
                'Every logged-in dashboard module runs completely offline after setup.',
                'सेटअपपछि ड्यासबोर्डका प्रत्येक मोड्युल पूर्ण रूपमा अफलाइन चल्दछन्।'
              )}
            </p>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-1.5">
            <div className="text-xs font-medium text-blue-600 dark:text-blue-400">
              {pick('Data Custody', 'डेटा स्वामित्व')}
            </div>
            <div className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              {pick('Campus Disk', 'विद्यालय डिस्क')}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              {pick(
                'Scholar records and financial ledgers remain strictly on school hardware.',
                'विद्यार्थी अभिलेख र वित्तीय खाता विद्यालयकै कम्प्युटर हार्डवेयरमा सुरक्षित रहन्छन्।'
              )}
            </p>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-1.5">
            <div className="text-xs font-medium text-amber-600 dark:text-amber-400">
              {pick('Monthly Hosting Tax', 'मासिक होस्टिङ शुल्क')}
            </div>
            <div className="font-display text-2xl sm:text-3xl font-bold font-mono tabular-nums text-slate-900 dark:text-white">
              {pick('Rs. 0 / mo', 'रु. ० / महिना')}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              {pick(
                'Perpetual institutional licensing with unlimited students and fee counters.',
                'असीमित विद्यार्थी र शुल्क काउन्टरसहितको स्थायी संस्थागत इजाजतपत्र।'
              )}
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. INTERACTIVE WORKSPACE WALKTHROUGH (Rich Functional Content) */}
      {/* ============================================================== */}
      <section className="perf-section max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="max-w-2xl space-y-2">
            <div className="text-xs font-mono font-semibold text-indigo-600 dark:text-indigo-400">
              {pick('Live Product Architecture', 'प्रत्यक्ष प्रणाली संरचना')}
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-tight text-balance">
              {pick(
                'Inspect How Each Campus Desk Operates Offline',
                'विद्यालयका प्रत्येक डेस्क कसरी अफलाइन चल्छन् हेर्नुहोस्'
              )}
            </h2>
          </div>
          <button
            type="button"
            onClick={() => navigate('/features')}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:underline cursor-pointer whitespace-nowrap shrink-0"
          >
            <span>{pick('Explore all 44 modules', 'सबै ४४ मोड्युलहरू हेर्नुहोस्')}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <InteractiveWorkspaceShowcase />
      </section>

      {/* ============================================================== */}
      {/* 3. MULTI-SCHOOL PROVISIONING & OFFLINE LIFECYCLE               */}
      {/* ============================================================== */}
      <section className="perf-section max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-10 lg:p-12 space-y-8">
          <div className="max-w-3xl space-y-2.5">
            <div className="text-xs font-mono font-semibold text-emerald-700 dark:text-emerald-400">
              {pick('Platform Provisioning Architecture', 'प्लेटफर्म प्रबन्धन संरचना')}
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight text-balance">
              {pick(
                'Super Admin Account Provisioning Paired with 100% Offline Execution',
                'सुपर एडमिन खाता सिर्जना र १००% अफलाइन सञ्चालनको समन्वय'
              )}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {pick(
                'MeroSchool is built as a multi-institution platform — not a portal for one specific school. Our Super Admin provisions each institution’s account; once a school signs into its dashboard, zero cloud connectivity is used for any daily activity.',
                'MeroSchool कुनै एक विद्यालयको मात्र पोर्टल नभई बहु-संस्थागत प्लेटफर्म हो। हाम्रो सुपर एडमिनले प्रत्येक विद्यालयको खाता सिर्जना गरिदिन्छ; एकपटक विद्यालयले आफ्नो ड्यासबोर्डमा लगइन गरेपछि दैनिक कामकाजका लागि कुनै क्लाउड कनेक्सन प्रयोग हुँदैन।'
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-slate-200 dark:border-slate-800 pt-8">
            <div className="space-y-2.5">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-indigo-600 dark:text-indigo-400">
                <Building2 className="w-4 h-4" />
                <span>{pick('01. Super Admin Creates School', '०१. सुपर एडमिनद्वारा विद्यालय सिर्जना')}</span>
              </div>
              <h3 className="font-display text-base font-bold text-slate-900 dark:text-white">
                {pick('Institutional Onboarding & LAN Sizing', 'संस्थागत खाता र LAN क्षमता निर्धारण')}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {pick(
                  'Super Admin creates the school record, configures workstation limits for campus LAN counters, and issues dedicated institutional login credentials.',
                  'सुपर एडमिनले विद्यालयको अभिलेख बनाउँछ, विद्यालय LAN काउन्टरहरूका लागि टर्मिनल सीमा मिलाउँछ र छुट्टै संस्थागत लगइन विवरण प्रदान गर्छ।'
                )}
              </p>
            </div>

            <div className="space-y-2.5">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-indigo-600 dark:text-indigo-400">
                <Monitor className="w-4 h-4" />
                <span>{pick('02. School Logs Into Terminal', '०२. विद्यालय टर्मिनलमा लगइन')}</span>
              </div>
              <h3 className="font-display text-base font-bold text-slate-900 dark:text-white">
                {pick('Custom Branding & B.S./A.D. Setup', 'आफ्नै ब्रान्डिङ र वि.सं./ई.सं. सेटअप')}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {pick(
                  'Principal or administrator uploads school crest, picks Bikram Sambat or Gregorian calendar, defines NEB/CBSE grading rules, and imports existing rosters from CSV.',
                  'प्रधानाध्यापक वा प्रशासकले विद्यालयको लोगो राख्नुहुन्छ, विक्रम सम्वत् वा ईस्वी पात्रो रोज्नुहुन्छ, NEB/CBSE ग्रेडिङ नियम तोक्नुहुन्छ र CSV बाट पुराना विद्यार्थी विवरण आयात गर्नुहुन्छ।'
                )}
              </p>
            </div>

            <div className="space-y-2.5">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-emerald-600 dark:text-emerald-400">
                <ShieldCheck className="w-4 h-4" />
                <span>{pick('03. 100% Offline Daily Operations', '०३. १००% अफलाइन दैनिक सञ्चालन')}</span>
              </div>
              <h3 className="font-display text-base font-bold text-slate-900 dark:text-white">
                {pick('Zero Cloud Support Across All 44 Modules', 'सबै ४४ मोड्युलमा शून्य क्लाउड निर्भरता')}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {pick(
                  'Academic sessions, 80mm thermal receipts, barcode library/bus scans, broadsheets, attendance, leave approvals, Cmd+K search, and USB vault backups all run locally.',
                  'शैक्षिक सत्र, ८०mm थर्मल रसिद, बारकोड पुस्तकालय/बस स्क्यान, ब्रोडसिट, हाजिरी, बिदा स्वीकृति, Cmd+K खोज र स्थानीय USB ब्याकअप सबै स्थानीय रूपमै चल्दछन्।'
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 4. ASYMMETRIC CAPABILITIES BENTO GRID                          */}
      {/* ============================================================== */}
      <section className="perf-section max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="max-w-3xl space-y-2">
          <div className="text-xs font-mono font-semibold text-indigo-600 dark:text-indigo-400">
            {pick('44 Integrated Modules', '४४ एकीकृत मोड्युलहरू')}
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-tight text-balance">
            {pick(
              'Built to Replace Paper Ledgers, Fragmented Excel Sheets, and Fragile Web Tools',
              'कागजी ढड्डा, छरिएका Excel फाइल र अनलाइन समस्यायुक्त वेब टुलहरूको भरपर्दो विकल्प'
            )}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Marquee Bento Card 1 (2 cols) */}
          <div className="lg:col-span-2 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col justify-between gap-6">
            <div className="space-y-3">
              <div className="text-xs font-mono font-semibold text-indigo-600 dark:text-indigo-400">
                {pick('01. Double-Entry Finance, Payroll & Cash Desk', '०१. दोहोरो प्रविष्टि लेखा, तलब र नगद डेस्क')}
              </div>
              <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white">
                {pick(
                  'Student Ledgers, Concession Waivers, Payroll & Cash Day-Book',
                  'विद्यार्थी खाता, छात्रवृत्ति छुट, शिक्षक तलब र दैनिक नगद डे-बुक'
                )}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
                {pick(
                  'Track monthly tuition, bus transport, hostel, lab fees, partial installments, and faculty payroll per scholar or staff member. Collect Cash, Bank Transfer, Card POS, or Cheque payments and print 80mm ESC/POS thermal receipts in under two seconds.',
                  'मासिक शुल्क, बस भाडा, छात्रावास, प्रयोगशाला शुल्क, आंशिक किस्ता र कर्मचारी तलब व्यवस्थित गर्नुहोस्। नगद, बैंक ट्रान्सफर वा चेक भुक्तानी लिनुहोस् र २ सेकेन्डभित्रै ८०mm ESC/POS थर्मल रसिद छाप्नुहोस्।'
                )}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-4 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 font-mono">
              <span>{pick('80mm/58mm ESC/POS Receipts', '८०mm/५८mm ESC/POS रसिद')}</span>
              <span aria-hidden="true">·</span>
              <span>{pick('Shift Cash Drawer Closing', 'दैनिक नगद मिलान बन्द')}</span>
              <span aria-hidden="true">·</span>
              <span>{pick('Staff Payroll Slips', 'कर्मचारी तलब पुर्जी')}</span>
            </div>
          </div>

          {/* Standard Card 2 */}
          <div className="p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col justify-between gap-4">
            <div className="space-y-3">
              <div className="text-xs font-mono font-semibold text-emerald-600 dark:text-emerald-400">
                {pick('02. Attendance & Leave Management', '०२. हाजिरी र बिदा व्यवस्थापन')}
              </div>
              <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
                {pick(
                  'Roll-Call, Staff Leave Approvals & Homework Logs',
                  'दैनिक हाजिरी, शिक्षक बिदा स्वीकृति र गृहकार्य अभिलेख'
                )}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {pick(
                  'Bulk-mark morning homerooms offline, approve staff casual/sick leave or student medical leave requests, auto-suggest substitute teachers, and track daily homework logs cleanly.',
                  'बिहानी कक्षाको हाजिरी एकसाथ अफलाइनमा लगाउनुहोस्, शिक्षक/विद्यार्थी बिदा अनुरोध स्वीकृत गर्नुहोस्, स्वचालित वैकल्पिक शिक्षक खोज्नुहोस् र दैनिक गृहकार्य व्यवस्थित राख्नुहोस्।'
                )}
              </p>
            </div>
            <div className="text-xs font-mono text-slate-500 pt-3 border-t border-slate-100 dark:border-slate-800">
              {pick('Attendance · Leave Quotas · Substitutions', 'हाजिरी · बिदा कोटा · सट्टा शिक्षक')}
            </div>
          </div>

          {/* Standard Card 3 */}
          <div className="p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col justify-between gap-4">
            <div className="space-y-3">
              <div className="text-xs font-mono font-semibold text-blue-600 dark:text-blue-400">
                {pick('03. Transport Management & ID Cards', '०३. यातायात व्यवस्थापन र परिचयपत्र')}
              </div>
              <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
                {pick('Fleet Routes, Bus Passes & Campus Gate Logs', 'बस रुट, बस पास र विद्यालय गेट लग')}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {pick(
                  'Manage school bus routes, pickup stops, vehicle maintenance, and seat limits. Issue CR80 PVC student IDs with Code-128 barcodes, bus transit passes, and 80mm thermal gate dismissal slips offline.',
                  'विद्यालय बस रुट, पिकअप स्टप, सवारी मर्मत र सिट क्षमता व्यवस्थापन गर्नुहोस्। Code-128 बारकोडसहित CR80 PVC परिचयपत्र, बस यातायात पास र ८०mm थर्मल गेट पास अफलाइनमै जारी गर्नुहोस्।'
                )}
              </p>
            </div>
            <div className="text-xs font-mono text-slate-500 pt-3 border-t border-slate-100 dark:border-slate-800">
              {pick('CR80 PVC IDs · Barcodes · Gate Slips', 'CR80 PVC परिचयपत्र · बारकोड · गेट पास')}
            </div>
          </div>

          {/* Marquee Bento Card 4 (2 cols) */}
          <div className="lg:col-span-2 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col justify-between gap-6">
            <div className="space-y-3">
              <div className="text-xs font-mono font-semibold text-indigo-600 dark:text-indigo-400">
                {pick(
                  '04. School Calendar, Notices, Broadsheets, Library & Diagnostics',
                  '०४. विद्यालय पात्रो, सूचना, ब्रोडसिट, पुस्तकालय र डेटाबेस जाँच'
                )}
              </div>
              <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white">
                {pick(
                  'Calendar (Holidays, Announcements & Notices), Broadsheets, Library & Cmd+K',
                  'विद्यालय पात्रो (बिदा, घोषणा र सूचना), ब्रोडसिट, पुस्तकालय र Cmd+K खोज'
                )}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
                {pick(
                  'Publish Bikram Sambat & Gregorian school calendars with public holidays, parent announcements, official notices, and campus events. Compile 1,200+ NEB/CBSE broadsheets, run Library & hostel desks, inspect executive charts, search via Cmd+K, and create 1-click USB backups.',
                  'सार्वजनिक बिदा, अभिभावक घोषणा, आधिकारिक सूचना र विद्यालय कार्यक्रमसहितको वि.सं./ई.सं. पात्रो प्रकाशित गर्नुहोस्। १,२००+ NEB/CBSE ब्रोडसिट, पुस्तकालय, छात्रावास, कार्यकारी चार्ट, Cmd+K तीव्र खोज र १-क्लिक USB ब्याकअपको सुविधा लिनुहोस्।'
                )}
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-slate-600 dark:text-slate-400 font-mono">
                <span>{pick('Holidays, Announcements & Notices', 'बिदा, घोषणा र सूचना')}</span>
                <span aria-hidden="true">·</span>
                <span>{pick('Cmd+K & Library', 'Cmd+K र पुस्तकालय')}</span>
                <span aria-hidden="true">·</span>
                <span>{pick('Database Health & USB Vault', 'डेटाबेस सुरक्षा र USB भल्ट')}</span>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => navigate('/features#school-calendar')}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 hover:underline cursor-pointer whitespace-nowrap"
                >
                  <span>{pick('Preview School Calendar', 'पात्रो हेर्नुहोस्')}</span>
                </button>
                <button
                  type="button"
                  onClick={() => navigate('/features')}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline cursor-pointer whitespace-nowrap"
                >
                  <span>{pick('View all 44 modules', 'सबै ४४ मोड्युल हेर्नुहोस्')}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 5. HARDWARE STUDIO & PERIPHERAL COMPATIBILITY                  */}
      {/* ============================================================== */}
      <section className="perf-section max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <div className="text-xs font-mono font-semibold text-indigo-600 dark:text-indigo-400">
                  {pick('Zero-Driver USB Peripherals', 'शून्य-ड्राइभर USB हार्डवेयर सपोर्ट')}
                </div>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight text-balance">
                  {pick(
                    'Direct USB ESC/POS Thermal Printers & Laser Barcode Scanners',
                    'प्रत्यक्ष USB ESC/POS थर्मल प्रिन्टर र लेजर बारकोड स्क्यानर'
                  )}
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {pick(
                    'Stop wrestling with browser print preview popups and margins. MeroSchool communicates directly with standard school front-office hardware.',
                    'ब्राउजरको प्रिन्ट पपअप र मार्जिन समस्याबाट मुक्त हुनुहोस्। MeroSchool ले विद्यालयका मानक कार्यालय उपकरणहरूसँग सिधै काम गर्दछ।'
                  )}
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-900 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Printer className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                      {pick('80mm & 58mm ESC/POS Thermal Printers', '८०mm र ५८mm ESC/POS थर्मल प्रिन्टर')}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mt-0.5">
                      {pick(
                        'Compatible with Epson TM-T82, Xprinter XP-80, Rongta, and standard USB POS receipt cutters with automatic cash drawer kick.',
                        'Epson TM-T82, Xprinter XP-80, Rongta र मानक USB POS रसिद कटरसँग स्वचालित नगद ड्रअर खुला हुने सुविधासहित उपयुक्त।'
                      )}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-900 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <QrCode className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                      {pick('USB HID Laser Barcode Scanners & CR80 PVC Cards', 'USB HID लेजर बारकोड स्क्यानर र CR80 PVC कार्ड')}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mt-0.5">
                      {pick(
                        'Scan Code-128 student IDs, bus transit badges, and ISBN library books for sub-second account lookup and circulation.',
                        'Code-128 विद्यार्थी परिचयपत्र, बस पास र ISBN पुस्तकालय पुस्तकहरू एक सेकेन्डभन्दा कम समयमा स्क्यान र लेनदेन गर्नुहोस्।'
                      )}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-900 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Camera className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                      {pick('UVC USB Webcam Scholar Photo Capture', 'UVC USB वेबक्याम विद्यार्थी फोटो खिचाइ')}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mt-0.5">
                      {pick(
                        'Snap admission portraits directly inside the offline enrollment desk and embed cropped photos onto CR80 PVC ID badges.',
                        'अफलाइन भर्ना डेस्कबाटै सिधै विद्यार्थीको फोटो खिची CR80 PVC परिचयपत्रमा स्वचालित रूपमा समावेश गर्नुहोस्।'
                      )}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => navigate('/features#receipt-simulator')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition-colors cursor-pointer"
                >
                  <Printer className="w-4 h-4" />
                  <span>{pick('Try Interactive Thermal Receipt Simulator', 'प्रत्यक्ष थर्मल रसिद सिमुलेटर चलाएर हेर्नुहोस्')}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <AppImage
                src={desktopPosTerminalImg}
                alt={pick(
                  'MeroSchool cash counter terminal printing 80mm thermal receipt with USB barcode scanner',
                  'USB बारकोड स्क्यानरसहित ८०mm थर्मल रसिद प्रिन्ट गर्दै MeroSchool नगद काउन्टर टर्मिनल'
                )}
                aspectClass="aspect-[4/3]"
                fallbackTitle={pick('USB Thermal Printer & Barcode Hardware', 'USB थर्मल प्रिन्टर र बारकोड हार्डवेयर')}
                caption={pick(
                  'Direct ESC/POS 80mm receipt printer and 1D laser barcode scanner paired with a school fee desk.',
                  'विद्यालय शुल्क डेस्कमा जडित प्रत्यक्ष ESC/POS ८०mm रसिद प्रिन्टर र १D लेजर बारकोड स्क्यानर।'
                )}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 5b. ROLE-BASED WORKFLOWS & RBAC PERMISSIONS                    */}
      {/* ============================================================== */}
      <CampusRoleWorkflows />

      {/* ============================================================== */}
      {/* 6. INTERACTIVE MULTI-YEAR TCO SAVINGS CALCULATOR               */}
      {/* ============================================================== */}
      <section className="perf-section max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TcoSavingsCalculator />
      </section>

      {/* ============================================================== */}
      {/* 7. PROOF & ATTRIBUTABLE SCHOOL TESTIMONIALS                    */}
      {/* ============================================================== */}
      <section className="perf-section max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="text-xs font-mono font-semibold text-emerald-700 dark:text-emerald-400">
              {pick('Verified Campus Outcomes', 'प्रमाणित विद्यालय नतिजाहरू')}
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
              {pick(
                'Proven Across Secondary Schools & Colleges',
                'माध्यमिक विद्यालय र कलेजहरूमा प्रमाणित'
              )}
            </h2>
          </div>
          <button
            type="button"
            onClick={() => navigate('/testimonials')}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:underline cursor-pointer whitespace-nowrap"
          >
            <span>{pick('Read all institutional case studies', 'सबै विद्यालय अनुभवहरू पढ्नुहोस्')}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              metric: isNepali ? '२ सेकेन्डभित्र ८०mm रसिद' : 'Under 2s thermal receipt',
              quote: isNepali
                ? 'बिहानी शुल्क बुझाउने समयमा अभिभावकले लामो लाइनमा बस्नुपर्दैन। हाम्रो नगद डेस्कले २ सेकेन्डभन्दा कम समयमै ८०mm थर्मल रसिद छाप्छ र अफलाइन स्थानीय भण्डारणले पूर्ण निश्चिन्तता दिन्छ।'
                : 'During morning fee collections, parents no longer wait in long lines. Our cash desk settles ledgers and prints itemized 80mm thermal slips in under two seconds, and offline local storage gives us total peace of mind.',
              author: isNepali ? 'सुनिता श्रेष्ठ' : 'Sunita Shrestha',
              role: isNepali
                ? 'मुख्य लेखापाल · भ्याली भ्यु एकेडेमी, ललितपुर'
                : 'Chief Accountant · Valley View Academy, Lalitpur',
            },
            {
              metric: isNepali ? '२ वर्षमा ० मिनेट डाउनटाइम' : '0 min unplanned downtime in 2 years',
              quote: isNepali
                ? 'हाम्रो पुरानो क्लाउड पोर्टल त्रैमासिक बिलिङको बेला अड्किन्थ्यो। MeroSchool जडान गरेपछि मासिक क्लाउड शुल्क बिना नै कार्यालयकै पीसीबाट सबै काम सहज रूपमा चल्छ।'
                : 'Our previous cloud portal froze during peak term billing. With MeroSchool provisioned for our campus, everything runs natively on our office PCs with zero monthly cloud fees.',
              author: isNepali ? 'नारायण पी. भट्टराई' : 'Narayan P. Bhattarai',
              role: isNepali
                ? 'प्रधानाध्यापक · सिद्धार्थ माध्यमिक विद्यालय, काठमाडौं'
                : 'Principal · Siddhartha Secondary, Kathmandu',
            },
            {
              metric: isNepali ? '१ ब्याचमा १,२०० लब्धाङ्कपत्र' : '1,200 report cards in 1 batch',
              quote: isNepali
                ? 'परीक्षा ब्रोडसिट इन्जिनले १,२०० विद्यार्थीको नतिजा तत्कालै तयार पार्छ र सम्पूर्ण विद्यालय डेटाबेस USB पेनड्राइभमा एकै क्लिकमा ब्याकअप हुन्छ।'
                : 'The examination broadsheet engine compiles terminal results for 1,200 scholars instantaneously, and backing up our full school database to a USB drive takes a single click.',
              author: isNepali ? 'डा. रमेश अधिकारी' : 'Dr. Ramesh Adhikari',
              role: isNepali
                ? 'संयोजक · हिमालयन साइन्स कलेज, पोखरा'
                : 'Coordinator · Himalayan Science College, Pokhara',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col justify-between gap-5"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex text-amber-500" aria-label={pick('5 out of 5 stars', '५ मध्ये ५ तारा')}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] font-mono font-semibold text-emerald-700 dark:text-emerald-400 tabular-nums">
                    {item.metric}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  “{item.quote}”
                </p>
              </div>
              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 text-xs">
                <div className="font-semibold text-slate-900 dark:text-white">{item.author}</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">{item.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================== */}
      {/* 8. FINAL CONVERSION & CAMPUS DEMO INVITATION                   */}
      {/* ============================================================== */}
      <section className="perf-section max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-indigo-200 dark:border-indigo-900/70 bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-900 text-white p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="text-xs font-mono font-semibold text-amber-300">
                {pick('Free On-Site & Video Demonstrations', 'निःशुल्क विद्यालय भ्रमण र भिडियो डेमो')}
              </div>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-balance">
                {pick(
                  'Test MeroSchool on Your Office Computers Before Committing',
                  'निर्णय गर्नुअघि आफ्नै कार्यालयको कम्प्युटरमा MeroSchool परीक्षण गर्नुहोस्'
                )}
              </h2>
              <p className="text-xs sm:text-sm text-indigo-100/90 leading-relaxed max-w-2xl">
                {pick(
                  'Our implementation engineers visit your school with a demonstration laptop, an 80mm ESC/POS thermal receipt printer, and a USB barcode scanner for a hands-on walkthrough — or run a private 30-minute video session for your Principal and Accounts Officer.',
                  'हाम्रो प्राविधिक टोली डेमो ल्यापटप, ८०mm ESC/POS थर्मल रसिद प्रिन्टर र USB बारकोड स्क्यानरसहित तपाईंको विद्यालयमै आएर प्रत्यक्ष अभ्यास देखाउँछ — वा प्रधानाध्यापक र लेखापालका लागि ३० मिनेटको निजी भिडियो डेमो सञ्चालन गर्दछ।'
                )}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => navigate('/contact?type=demo&mode=onsite')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-900 bg-white hover:bg-indigo-50 transition-colors cursor-pointer min-h-[44px] whitespace-nowrap"
                >
                  <Laptop className="w-4 h-4 text-indigo-600" />
                  <span>{pick('Book Free On-Site Demo', 'निःशुल्क विद्यालय डेमो बुक गर्नुहोस्')}</span>
                </button>
                <button
                  type="button"
                  onClick={() => navigate('/contact?type=demo&mode=video')}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-colors cursor-pointer min-h-[44px] whitespace-nowrap"
                >
                  <Video className="w-4 h-4 text-amber-300" />
                  <span>{pick('Schedule Video Walkthrough', 'भिडियो डेमो समय मिलाउनुहोस्')}</span>
                </button>
                <a
                  href={`tel:${SCHOOL_CONTACT.phoneMobile}`}
                  className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl text-xs sm:text-sm font-medium text-indigo-100 hover:text-white transition-colors min-h-[44px] whitespace-nowrap font-mono tabular-nums"
                >
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>{SCHOOL_CONTACT.phoneMobile}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3 font-mono text-xs tabular-nums">
              <div className="text-indigo-200 font-semibold text-[11px]">
                {pick('Supported Campus Platforms', 'समर्थित विद्यालय प्लेटफर्महरू')}
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-indigo-100">Windows 10 / 11</span>
                <span className="text-amber-300 font-semibold">{pick('64-bit & ARM', '६४-बिट र ARM')}</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-indigo-100">macOS Universal</span>
                <span className="text-amber-300 font-semibold">{pick('Apple Silicon & Intel', 'Apple Silicon र Intel')}</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-indigo-100">Linux Desktop</span>
                <span className="text-amber-300 font-semibold">Ubuntu / Debian / Fedora</span>
              </div>
              <div className="flex justify-between pt-0.5">
                <span className="text-indigo-100">{pick('Direct Support', 'प्रत्यक्ष सहायता')}</span>
                <span className="text-emerald-300 font-semibold">{SCHOOL_CONTACT.email}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
