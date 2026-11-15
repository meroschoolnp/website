import React, { useState, useMemo, useDeferredValue } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  HelpCircle,
  ChevronDown,
  Search,
  Sparkles,
  RotateCcw,
  X,
} from 'lucide-react';
import { SCHOOL_CONTACT } from '@/src/config/contactInfo';
import { SEO } from '@/src/components/SEO';
import { useLanguage } from '@/src/context/LanguageContext';

export const FaqPage: React.FC = () => {
  const navigate = useNavigate();
  const { isNepali, pick } = useLanguage();
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const deferredQuery = useDeferredValue(searchQuery);

  const faqCategories = [
    { id: 'all', label: pick('All FAQs', 'सबै प्रश्नहरू') },
    { id: 'offline', label: pick('Offline & Local Storage', 'अफलाइन र स्थानीय भण्डारण') },
    { id: 'hardware', label: pick('Hardware & Printers', 'हार्डवेयर र प्रिन्टर') },
    { id: 'customization', label: pick('School Customization', 'विद्यालय अनुकूलन') },
    { id: 'installation', label: pick('Platforms & Onboarding', 'प्लेटफर्म र अनबोर्डिङ') },
    { id: 'licensing', label: pick('Licensing & Pricing', 'इजाजतपत्र र मूल्य') },
  ];

  const faqItems = [
    {
      id: 'demo',
      q: 'Can we request a free live demo or on-site school visit before deciding?',
      qNe: 'निर्णय गर्नुअघि के हामी निःशुल्क प्रत्यक्ष डेमो वा विद्यालयमै भ्रमणको अनुरोध गर्न सक्छौं?',
      category: 'licensing',
      a: 'Yes. We offer 100% Free On-Site Campus Demonstrations and 1-on-1 Remote Video Walkthroughs. For on-site demos, our implementation engineers visit your school with pre-configured laptops, USB laser barcode scanners, and 80mm ESC/POS thermal printers so your principal, accountant, and exam controller can test real transactions on campus.',
      aNe: 'हो। हामी १००% निःशुल्क विद्यालयमै गएर प्रत्यक्ष डेमो तथा १-अन-१ भिडियो डेमो प्रदान गर्दछौं। विद्यालय भ्रमणका क्रममा हाम्रा इन्जिनियरहरू ल्यापटप, USB लेजर बारकोड स्क्यानर र ८०mm थर्मल प्रिन्टरसहित आएर प्रधानाध्यापक, लेखापाल र परीक्षा नियन्त्रकलाई वास्तविक परीक्षण गराउनुहुन्छ।',
    },
    {
      id: 'platform-model',
      q: 'Is MeroSchool an individual school portal or a multi-school platform?',
      qNe: 'MeroSchool कुनै एक विद्यालयको मात्र पोर्टल हो कि बहु-विद्यालय प्लेटफर्म हो?',
      category: 'licensing',
      a: 'MeroSchool is NOT an individual school admission website. It is a multi-institution platform where our Super Admin provisions an institutional account for each school. Once your administrator signs in, your entire school dashboard runs 100% offline locally on campus storage with zero cloud support.',
      aNe: 'MeroSchool कुनै एक विद्यालयको भर्ना वेबसाइट होइन। यो बहु-संस्थागत प्लेटफर्म हो जहाँ हाम्रो सुपर एडमिनले प्रत्येक विद्यालयको खाता सिर्जना गरिदिन्छ। प्रशासकले लगइन गरेपछि सम्पूर्ण विद्यालय ड्यासबोर्ड बिना क्लाउड सपोर्ट स्थानीय डेटाबेसमा १००% अफलाइन चल्दछ।',
    },
    {
      id: 'offline',
      q: 'Does MeroSchool require an internet connection or cloud support?',
      qNe: 'के MeroSchool चलाउन इन्टरनेट जडान वा क्लाउड सपोर्ट आवश्यक पर्छ?',
      category: 'offline',
      a: 'No. Every dashboard activity — student records, double-entry fee ledgers, exam marks, daily roll-call attendance, and printable report cards — executes 100% offline on your local campus database with zero cloud servers, zero external SMS APIs, and zero remote gateways.',
      aNe: 'पर्दैन। विद्यार्थी अभिलेख, दोहोरो प्रविष्टि शुल्क खाता, परीक्षा अंक, दैनिक हाजिरी र प्रिन्टयोग्य लब्धाङ्कपत्र लगायत ड्यासबोर्डका प्रत्येक कार्य क्लाउड सर्भर बिना नै स्थानीय डेटाबेसमा १००% अफलाइन चल्दछन्।',
    },
    {
      id: 'storage-protection',
      q: 'How does MeroSchool store and protect our school’s data?',
      qNe: 'MeroSchool ले विद्यालयको डेटा कसरी भण्डारण र सुरक्षित गर्दछ?',
      category: 'offline',
      a: 'All data is stored locally in a crash-safe offline campus database built for concurrent multi-desk work and power-cut resilience. Student records and financial books never leave campus hardware, ensuring complete institutional data sovereignty.',
      aNe: 'सम्पूर्ण डेटा धेरै डेस्कमा एकसाथ चल्न सक्ने र विद्युत अवरोध सहन सक्ने स्थानीय अफलाइन डेटाबेसमा भण्डारण हुन्छ। विद्यार्थी विवरण र आर्थिक खाता विद्यालयको कम्प्युटर बाहिर कहिल्यै नजाने हुँदा डेटा पूर्ण सुरक्षित रहन्छ।',
    },
    {
      id: 'backup',
      q: 'How do we back up our school’s database and financial records?',
      qNe: 'विद्यालयको डेटाबेस र आर्थिक अभिलेखको ब्याकअप कसरी लिने?',
      category: 'offline',
      a: 'Inside the Database & Backup vault, you can create a verified encrypted backup snapshot with one click and copy it directly to a USB flash drive, external hard drive, or campus NAS without internet.',
      aNe: 'डेटाबेस र ब्याकअप भल्टभित्र एकै क्लिकमा प्रमाणित सुरक्षित ब्याकअप स्न्यापसट बनाएर इन्टरनेट बिना नै सिधै USB पेनड्राइभ, बाहिरी हार्ड ड्राइभ वा स्थानीय NAS मा कपी गर्न सकिन्छ।',
    },
    {
      id: 'csv-migration',
      q: 'How do we migrate existing students from Excel or CSV spreadsheets?',
      qNe: 'हामीले पहिले राखेका Excel वा CSV का विद्यार्थी विवरण कसरी सार्ने?',
      category: 'installation',
      a: 'Our engineering team provides turnkey onboarding assistance, and MeroSchool supports structured Excel/CSV bulk import mapping for student directories, class sections, guardian contacts, and opening tuition balances so your staff never have to re-type years of history manually.',
      aNe: 'हाम्रो प्राविधिक टोलीले सुरुवाती डेटा सार्न पूर्ण सहयोग गर्दछ। MeroSchool मा Excel/CSV मार्फत विद्यार्थी विवरण, कक्षा-सेक्सन, अभिभावक सम्पर्क र अघिल्लो बाँकी शुल्क एकसाथ आयात (Bulk Import) गर्न मिल्ने हुँदा हातैले पुनः टाइप गर्नुपर्दैन।',
    },
    {
      id: 'os-support',
      q: 'Which operating systems does MeroSchool support?',
      qNe: 'MeroSchool कुन–कुन अपरेटिङ सिस्टम (OS) मा चल्दछ?',
      category: 'installation',
      a: 'MeroSchool runs natively on Windows 10 & 11 (64-bit and ARM64), macOS 11.0+ (Universal Apple Silicon M-series & Intel), and modern Linux distributions (Debian, Ubuntu, Fedora, Arch, openSUSE).',
      aNe: 'MeroSchool Windows 10 र 11 (६४-बिट र ARM64), macOS 11.0+ (Apple Silicon M-series र Intel) तथा आधुनिक Linux वितरणहरू (Debian, Ubuntu, Fedora, Arch, openSUSE) मा नेटिभ रूपमा चल्दछ।',
    },
    {
      id: 'customization',
      q: 'Can we customize the school name, logo, address, and report cards?',
      qNe: 'के हामी विद्यालयको नाम, लोगो, ठेगाना र लब्धाङ्कपत्र अनुकूलन गर्न सक्छौं?',
      category: 'customization',
      a: 'Yes. In Settings, your administrator uploads your institution crest, configures school name and registration numbers, chooses Bikram Sambat (B.S.) or Gregorian (A.D.) calendars, sets NEB / CBSE / Percentage grading scales, and customizes fee headings.',
      aNe: 'सकिन्छ। सेटिङमा गएर विद्यालयको लोगो, नाम र दर्ता नम्बर राख्न, विक्रम सम्वत् (वि.सं.) वा ईस्वी (ई.सं.) पात्रो रोज्न, NEB / CBSE / प्रतिशत ग्रेडिङ प्रणाली मिलाउन र शुल्क शीर्षकहरू अनुकूलन गर्न सकिन्छ।',
    },
    {
      id: 'hardware',
      q: 'Does MeroSchool support barcode scanners and POS thermal printers?',
      qNe: 'के MeroSchool ले बारकोड स्क्यानर र POS थर्मल प्रिन्टर सपोर्ट गर्छ?',
      category: 'hardware',
      a: 'Yes. Standard USB barcode laser scanners work immediately as keyboard wedges without drivers. ESC/POS 80mm and 58mm thermal receipt printers connect directly for under-2-second fee receipts, alongside CR80 PVC printers for student ID cards and bus passes.',
      aNe: 'गर्छ। सामान्य USB बारकोड लेजर स्क्यानर अतिरिक्त ड्राइभर बिना नै तुरुन्त चल्दछन्। २ सेकेन्डमै शुल्क रसिद निकाल्न ८०mm र ५८mm थर्मल प्रिन्टर तथा परिचयपत्र र बस पासका लागि CR80 PVC प्रिन्टर सिधै जडान हुन्छन्।',
    },
    {
      id: 'specs',
      q: 'What are the hardware requirements to run MeroSchool?',
      qNe: 'MeroSchool चलाउन कस्तो कम्प्युटर क्षमता (Hardware Requirements) चाहिन्छ?',
      category: 'installation',
      a: 'Thanks to its lightweight native desktop design (~15 MB footprint), MeroSchool runs smoothly on any campus desktop or laptop with 2 GB+ RAM running Windows 10+, macOS 11+, or Linux.',
      aNe: 'हल्का नेटिभ डेस्कटप संरचना (~१५ MB आकार) का कारण Windows 10+, macOS 11+ वा Linux भएका र २ GB+ RAM रहेका कुनै पनि विद्यालय डेस्कटप वा ल्यापटपमा सहजै चल्दछ।',
    },
    {
      id: 'cloud-fees',
      q: 'Are there monthly recurring cloud hosting fees?',
      qNe: 'के यसमा मासिक क्लाउड होस्टिङ वा सर्भर शुल्क लाग्दछ?',
      category: 'licensing',
      a: 'No. Because your database resides on school-owned hardware rather than rented cloud infrastructure, there are zero monthly per-student server bills or forced subscription escalations.',
      aNe: 'लाग्दैन। तपाईंको डेटाबेस भाडाको क्लाउड सर्भरको सट्टा विद्यालयकै हार्डवेयरमा रहने भएकाले प्रतिविद्यार्थी मासिक सर्भर शुल्क वा जबरजस्ती नवीकरण खर्च हुँदैन।',
    },
    {
      id: 'multi-pc',
      q: 'Can multiple computers in the school access the local database?',
      qNe: 'के विद्यालयका धेरै कम्प्युटरहरूले एउटै स्थानीय डेटाबेस प्रयोग गर्न सक्छन्?',
      category: 'offline',
      a: 'Yes. Connect administration, accounts, library, and exam computers over your existing local campus Wi-Fi router or Gigabit Ethernet LAN—enabling seamless multi-counter coordination with zero internet.',
      aNe: 'सक्छन्। प्रशासन, लेखा, पुस्तकालय र परीक्षा शाखाका कम्प्युटरहरूलाई विद्यालयकै स्थानीय Wi-Fi राउटर वा इथरनेट LAN मार्फत जोडेर इन्टरनेट बिना नै एकसाथ काम गर्न सकिन्छ।',
    },
    {
      id: 'calendar-notices',
      q: 'How does the School Calendar handle holidays, announcements, and notices?',
      qNe: 'विद्यालय पात्रोले बिदा, घोषणा र आधिकारिक सूचनाहरू कसरी व्यवस्थापन गर्छ?',
      category: 'customization',
      a: 'MeroSchool includes a dual Bikram Sambat (B.S.) and Gregorian (A.D.) School Calendar synced with Campus Announcements and Notices. Marking public or seasonal holidays automatically updates attendance working-day counters and library book return dates, while noticeboard bulletins and parent circulars can be printed offline in one click.',
      aNe: 'MeroSchool मा घोषणा र सूचनासँग जोडिएको दोहोरो विक्रम संवत् (वि.सं.) र ईस्वी संवत् (A.D.) विद्यालय पात्रो छ। सार्वजनिक वा मौसमी बिदा चिह्नित गर्दा हाजिरी कार्यदिन र पुस्तकालय फिर्ता मिति स्वतः मिलान हुन्छन् र सूचना बुलेटिन १-क्लिकमै प्रिन्ट गर्न सकिन्छ।',
    },
    {
      id: 'power-cut-safety',
      q: 'What happens if electricity cuts off suddenly while billing fees or entering marks?',
      qNe: 'शुल्क बिलिङ वा अंक प्रविष्टि गरिरहँदा अचानक बत्ती गएमा डेटा सुरक्षित रहन्छ?',
      category: 'offline',
      a: 'Yes. MeroSchool uses crash-safe atomic disk saves so every completed fee receipt or mark entry is safely committed—sudden power cuts or PC restarts will not corrupt your ledgers or lose saved transactions.',
      aNe: 'सुरक्षित रहन्छ। MeroSchool ले सुरक्षित स्थानीय सेभ प्रणाली प्रयोग गर्छ। सेभ भइसकेका प्रत्येक रसिद र परीक्षा अंक सुरक्षित रहने हुँदा बत्ती जाँदा डेटा बिग्रने जोखिम हुँदैन।',
    },
    {
      id: 'rbac-audit',
      q: 'Can we restrict what cashiers, teachers, and librarians can view or edit?',
      qNe: 'के लेखापाल, शिक्षक र पुस्तकालय प्रमुखका लागि अलग–अलग पहुँच सीमा तोक्न मिल्छ?',
      category: 'offline',
      a: 'Yes. Built-in Role-Based Access Control (RBAC) separates Super Admin, Principal, Cashier/Accountant, Subject Teacher, Librarian, and Transport In-Charge roles. Cashiers cannot modify exam scores, teachers cannot alter financial accounts, and every sensitive action is recorded in local audit logs.',
      aNe: 'मिल्छ। अन्तर्निर्मित भूमिका-आधारित पहुँच नियन्त्रण (RBAC) ले प्रधानाध्यापक, लेखापाल, विषय शिक्षक, पुस्तकालय प्रमुख र यातायात इन्चार्जको अधिकार अलग राख्छ। लेखापालले परीक्षा अंक बदल्न नसक्ने र शिक्षकले आर्थिक खाता चलाउन नसक्ने सुरक्षा व्यवस्था छ।',
    },
    {
      id: 'hostel-payroll',
      q: 'Does MeroSchool also handle staff payroll, hostel boarding, and infirmary logs?',
      qNe: 'के MeroSchool मा कर्मचारी तलब, छात्रावास (Hostel) र स्वास्थ्य कक्ष अभिलेख पनि समावेश छ?',
      category: 'customization',
      a: 'Yes. All 44 modules are included out of the box—covering monthly faculty payroll with printable payslips, hostel wing/bed occupancy with automated mess billing linked to student ledgers, campus infirmary visit/allergy logs, and thermal reception gate passes.',
      aNe: 'हो। प्रिन्ट गर्न मिल्ने तलब पे-स्लिप, छात्रावास कोठा/मेस बिलिङ, विद्यार्थी स्वास्थ्य कक्ष तथा एलर्जी विवरण र थर्मल गेट पाससहित सबै ४४ मोड्युल एउटै प्याकेजमा समावेश छन्।',
    },
  ];

  const filtered = useMemo(() => {
    const q = deferredQuery.trim().toLowerCase();
    return faqItems.filter((f) => {
      const catMatch = activeCategory === 'all' || f.category === activeCategory;
      const queryMatch =
        !q ||
        f.q.toLowerCase().includes(q) ||
        f.a.toLowerCase().includes(q) ||
        f.qNe.toLowerCase().includes(q) ||
        f.aNe.toLowerCase().includes(q);
      return catMatch && queryMatch;
    });
  }, [activeCategory, deferredQuery]);

  return (
    <div className="space-y-12 lg:space-y-16 pb-16">
      <SEO
        title={pick(
          'FAQs & Offline Setup Guide',
          'बारम्बार सोधिने प्रश्न र जडान गाइड'
        )}
        description={pick(
          'Find clear answers on MeroSchool offline campus setup, local data backups, CSV student import, thermal printers, barcode scanners, and B.S./A.D. calendars.',
          'MeroSchool अफलाइन जडान, स्थानीय डेटा ब्याकअप, CSV विद्यार्थी आयात, थर्मल प्रिन्टर, बारकोड स्क्यानर र वि.सं./ई.सं. पात्रोसम्बन्धी सम्पूर्ण प्रश्नोत्तर।'
        )}
        keywords={pick(
          'MeroSchool FAQ, offline school software setup, local campus backup, thermal printer barcode scanner, CSV student migration, B.S. A.D. school calendar',
          'MeroSchool प्रश्नोत्तर, अफलाइन विद्यालय सफ्टवेयर जडान, स्थानीय डेटा ब्याकअप, थर्मल प्रिन्टर बारकोड स्क्यानर, CSV आयात'
        )}
        canonicalPath="/faqs"
        breadcrumbs={[
          { name: pick('Home', 'गृहपृष्ठ'), path: '/' },
          { name: pick('FAQs', 'प्रश्नोत्तर'), path: '/faqs' },
        ]}
        structuredData={{
          '@type': 'FAQPage',
          inLanguage: isNepali ? 'ne' : 'en',
          mainEntity: faqItems.map((item) => ({
            '@type': 'Question',
            name: isNepali ? item.qNe : item.q,
            acceptedAnswer: {
              '@type': 'Answer',
              text: isNepali ? item.aNe : item.a,
            },
          })),
        }}
      />

      {/* 1. Header */}
      <section className="pt-6 sm:pt-10 lg:pt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-3 sm:space-y-4">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-indigo-600 dark:text-indigo-400">
            <HelpCircle className="w-4 h-4 shrink-0" />
            <span>{pick('Knowledge Base', 'ज्ञान केन्द्र')}</span>
            <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
            <span className="text-slate-600 dark:text-slate-400 font-medium">
              {pick('Technical Architecture & Deployment Answers', 'प्राविधिक संरचना र जडानसम्बन्धी उत्तरहरू')}
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.12] text-balance">
            {pick('Frequently Asked Questions', 'बारम्बार सोधिने प्रश्नहरू')}
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            {pick(
              'Everything principals, accountants, and campus coordinators need to know about local offline storage, hardware peripherals, CSV migration, and multi-PC LAN setups.',
              'स्थानीय अफलाइन भण्डारण, हार्डवेयर उपकरण, CSV डेटा आयात र बहु-पीसी LAN सेटअपबारे प्रधानाध्यापक, लेखापाल र प्रशासनलाई आवश्यक सम्पूर्ण जानकारी।'
            )}
          </p>
        </div>
      </section>

      {/* 2. Search + Category Filters */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="relative flex-1 max-w-lg">
            <Search className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setActiveFaq(0);
              }}
              placeholder={pick(
                'Search questions (e.g. offline, backup, CSV, thermal, LAN)...',
                'प्रश्न खोज्नुहोस् (जस्तै: अफलाइन, ब्याकअप, CSV, थर्मल, LAN)...'
              )}
              aria-label={pick('Search frequently asked questions', 'बारम्बार सोधिने प्रश्न खोज्नुहोस्')}
              className="w-full pl-10 pr-10 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-indigo-500 shadow-xs min-h-[42px]"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setActiveFaq(0);
                }}
                aria-label={pick('Clear FAQ search', 'खोज मेटाउनुहोस्')}
                className="absolute right-2.5 top-2.5 p-1 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
          <div className="text-xs font-mono text-slate-500 tabular-nums">
            {isNepali
              ? `कुल ${faqItems.length} मध्ये ${filtered.length} उत्तर`
              : `Showing ${filtered.length} of ${faqItems.length} answers`}
          </div>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-3 pt-1 border-b border-slate-200 dark:border-slate-800">
          {faqCategories.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => {
                setActiveCategory(c.id);
                setActiveFaq(0);
              }}
              className={`whitespace-nowrap shrink-0 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-colors cursor-pointer min-h-[38px] ${
                activeCategory === c.id
                  ? 'bg-indigo-600 text-white font-semibold shadow-xs'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </section>

      {/* 3. FAQ Accordion Grid */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
        {filtered.length > 0 ? (
          filtered.map((faq, idx) => {
            const isOpen = activeFaq === idx;
            return (
              <div
                key={faq.id}
                className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-xs transition-colors"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setActiveFaq(isOpen ? null : idx)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 text-xs sm:text-sm font-bold text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors cursor-pointer"
                >
                  <span>{isNepali ? faq.qNe : faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${
                      isOpen ? 'rotate-180 text-indigo-600 dark:text-indigo-400' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-3">
                    {isNepali ? faq.aNe : faq.a}
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div className="p-10 text-center rounded-2xl border border-dashed border-slate-300 dark:border-slate-700 space-y-3">
            <p className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300">
              {isNepali
                ? `“${searchQuery}” सँग मिल्ने कुनै उत्तर भेटिएन`
                : `No answers matched “${searchQuery}”`}
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-indigo-600 text-white hover:bg-indigo-700 transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{pick('Reset Search & Filters', 'खोज र फिल्टर रिसेट गर्नुहोस्')}</span>
            </button>
          </div>
        )}
      </section>

      {/* 3b. Pre-Demo Campus Readiness Checklist */}
      <section className="perf-section max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-5 shadow-xs">
          <div className="space-y-1">
            <div className="text-xs font-mono font-semibold text-indigo-600 dark:text-indigo-400">
              {pick('Pre-Demo Preparation', 'डेमो अघिको तयारी')}
            </div>
            <h2 className="font-display text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
              {pick(
                'What Your School Needs Before a Free Campus Walkthrough',
                'निःशुल्क विद्यालय डेमोका लागि के-के तयार राख्ने'
              )}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
            <div className="space-y-1.5">
              <div className="font-bold text-slate-900 dark:text-white">
                {pick('01. Any Existing PC or Laptop', '०१. कार्यालयको सामान्य कम्प्युटर')}
              </div>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {pick(
                  'Windows 10/11, macOS, or Linux with 2 GB+ RAM. No internet connection or dedicated server room is needed.',
                  '२ GB+ RAM भएको Windows, macOS वा Linux पीसी। इन्टरनेट वा छुट्टै सर्भर कोठा आवश्यक पर्दैन।'
                )}
              </p>
            </div>
            <div className="space-y-1.5">
              <div className="font-bold text-slate-900 dark:text-white">
                {pick('02. Optional Sample Fee Sheet', '०२. नमुना शुल्क तालिका वा CSV')}
              </div>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {pick(
                  'Share a sample Excel student list or fee structure so our engineer tests your real grades and receipts live.',
                  'तपाईंको विद्यालयको वास्तविक शुल्क र कक्षा नमुनामा प्रत्यक्ष परीक्षण गर्न चाहिनेमा एउटा Excel सूची राख्नुहोस्।'
                )}
              </p>
            </div>
            <div className="space-y-1.5">
              <div className="font-bold text-slate-900 dark:text-white">
                {pick('03. Key Staff in 30-Min Session', '०३. मुख्य कर्मचारीको ३० मिनेट समय')}
              </div>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {pick(
                  'Invite your Principal, Chief Accountant, and Exam Coordinator—our team brings our own 80mm thermal printer & scanner.',
                  'प्रधानाध्यापक, मुख्य लेखापाल र परीक्षा संयोजक सहभागी हुनुहोस्—हाम्रो टोलीले आफ्नै ८०mm प्रिन्टर र स्क्यानर ल्याउँछ।'
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Have a question? Box */}
      <section className="perf-section max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40 text-center space-y-3">
          <h2 className="font-display text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
            {pick('Have a question that is not covered here?', 'यहाँ नसमेटिएको अरू कुनै प्रश्न छ?')}
          </h2>
          <p className="text-xs text-slate-600 dark:text-slate-400 max-w-md mx-auto">
            {isNepali ? (
              <>
                हाम्रो इन्जिनियरिङ र प्राविधिक सहायता टोलीलाई सिधै{' '}
                <a
                  href={`mailto:${SCHOOL_CONTACT.email}`}
                  className="text-indigo-600 dark:text-indigo-400 underline font-mono font-bold"
                >
                  {SCHOOL_CONTACT.email}
                </a>{' '}
                मा इमेल वा {SCHOOL_CONTACT.phonesDisplay} मा फोन गर्नुहोस्।
              </>
            ) : (
              <>
                Contact our engineering and technical support team directly at{' '}
                <a
                  href={`mailto:${SCHOOL_CONTACT.email}`}
                  className="text-indigo-600 dark:text-indigo-400 underline font-mono font-bold"
                >
                  {SCHOOL_CONTACT.email}
                </a>{' '}
                or call {SCHOOL_CONTACT.phonesDisplay}.
              </>
            )}
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <button
              type="button"
              onClick={() => navigate('/contact?type=demo')}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition-colors cursor-pointer shadow-xs"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>{pick('Request Free On-Site Demo', 'निःशुल्क विद्यालय डेमो माग गर्नुहोस्')}</span>
            </button>
            <button
              type="button"
              onClick={() => navigate('/contact')}
              className="px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            >
              {pick('Contact Support Desk', 'सहायता डेस्कमा सम्पर्क')}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
