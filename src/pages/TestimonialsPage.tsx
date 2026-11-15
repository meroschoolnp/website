import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Star,
  ArrowRight,
  MapPin,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';
import { SEO } from '@/src/components/SEO';
import { AppImage } from '@/src/components/AppImage';
import engineerOnsiteDemoImg from '@/src/assets/images/engineer_onsite_demo_1794561645767.jpg';
import { useLanguage } from '@/src/context/LanguageContext';

interface CaseStudy {
  name: string;
  nameNe: string;
  role: string;
  roleNe: string;
  institution: string;
  institutionNe: string;
  location: string;
  locationNe: string;
  category: 'schools' | 'colleges' | 'operations';
  challenge: string;
  challengeNe: string;
  outcome: string;
  outcomeNe: string;
  quote: string;
  quoteNe: string;
  metric: string;
  metricNe: string;
  rating: number;
}

const CASE_STUDIES: CaseStudy[] = [
  {
    name: 'Narayan Prasad Bhattarai',
    nameNe: 'नारायण प्रसाद भट्टराई',
    role: 'Principal & Executive Director',
    roleNe: 'प्रधानाध्यापक तथा कार्यकारी निर्देशक',
    institution: 'Siddhartha Model Secondary School',
    institutionNe: 'सिद्धार्थ मोडल माध्यमिक विद्यालय',
    location: 'Kathmandu',
    locationNe: 'काठमाडौं',
    category: 'schools',
    challenge: '3-hour cloud portal outages during term peak intake week',
    challengeNe: 'शैक्षिक सत्रको भीडभाडमा ३ घण्टासम्म क्लाउड पोर्टल अवरुद्ध',
    outcome: '0 minutes unplanned downtime over 24 consecutive months',
    outcomeNe: 'लगातार २४ महिनामा ० मिनेट अनपेक्षित डाउनटाइम',
    quote:
      'During intake peak week, our previous cloud portal froze for three straight hours due to server bandwidth limits. Switching to MeroSchool removed every network dependency—fee collection and broadsheet marks entry run locally on our office PCs without lag.',
    quoteNe:
      'भर्ना र बिलिङको मुख्य हप्तामा हाम्रो पुरानो क्लाउड पोर्टल सर्भर ब्यान्डविथका कारण लगातार तीन घण्टा अड्कियो। MeroSchool मा सरेपछि नेटवर्क निर्भरता पूर्णतः हट्यो—शुल्क संकलन र ब्रोडसिट अंक प्रविष्टि बिना कुनै ढिलाइ कार्यालयकै पीसीमा चल्छ।',
    metric: '0 min downtime in 2 yrs',
    metricNe: '२ वर्षमा ० मिनेट डाउनटाइम',
    rating: 5,
  },
  {
    name: 'Sunita Shrestha',
    nameNe: 'सुनिता श्रेष्ठ',
    role: 'Chief Accountant & Bursar',
    roleNe: 'मुख्य लेखापाल',
    institution: 'Valley View Higher Secondary Academy',
    institutionNe: 'भ्याली भ्यु उच्च माध्यमिक एकेडेमी',
    location: 'Lalitpur',
    locationNe: 'ललितपुर',
    category: 'schools',
    challenge: 'Morning tuition queues stalling over slow web receipt rendering',
    challengeNe: 'ढिलो वेब रसिद खुल्ने समस्याले बिहानी शुल्क लाइन जाम',
    outcome: '80mm ESC/POS receipts printed in under 2 seconds per parent',
    outcomeNe: 'प्रति अभिभावक २ सेकेन्डमै ८०mm थर्मल रसिद प्रिन्ट',
    quote:
      'The running student account ledger and daily cash Day-Book transformed our counter speed. When parents queue up in the morning, we settle invoices and print itemized thermal slips in under two seconds—even when the fiber line drops.',
    quoteNe:
      'विद्यार्थीको चालु खाता र दैनिक नगद डे-बुकले हाम्रो काउन्टरको गति नै बदलिदियो। बिहान अभिभावकको भीड हुँदा फाइबर लाइन काटे पनि २ सेकेन्डभन्दा कम समयमै रसिद छापेर दिन सकिन्छ।',
    metric: '< 2s cash settlement',
    metricNe: '< २ सेकेन्ड नगद फर्छ्यौट',
    rating: 5,
  },
  {
    name: 'Dr. Ramesh K. Adhikari',
    nameNe: 'डा. रमेश के. अधिकारी',
    role: 'Academic Coordinator',
    roleNe: 'शैक्षिक संयोजक',
    institution: 'Himalayan Science & Management College',
    institutionNe: 'हिमालयन साइन्स एण्ड म्यानेजमेन्ट कलेज',
    location: 'Pokhara',
    locationNe: 'पोखरा',
    category: 'colleges',
    challenge: 'Manual weekend Excel reconciliation across 1,200 +2 scholars',
    challengeNe: '१,२०० +२ विद्यार्थीको एक्सेल मिलानमा पूरा सप्ताहन्त खर्च',
    outcome: 'NEB letter grades, ranks & transcripts compiled in one click',
    outcomeNe: 'एकै क्लिकमा NEB ग्रेड, श्रेणी र लब्धाङ्कपत्र तयार',
    quote:
      'Compiling terminal broadsheets for 1,200 Science and Management scholars used to consume an entire weekend of spreadsheet formulas. With MeroSchool, GPA calculations, subject toppers, and batch report cards generate instantly from local campus storage.',
    quoteNe:
      '१,२०० विज्ञान र व्यवस्थापन संकायका विद्यार्थीको नतिजा तयार पार्न पहिले एक्सेल फर्मुलामा पूरा सप्ताहन्त बित्थ्यो। MeroSchool बाट स्थानीय भण्डारणमार्फत GPA, विषयगत उत्कृष्ट नतिजा र सामूहिक लब्धाङ्कपत्र तत्काल बन्छन्।',
    metric: '1,200 transcripts in 1 click',
    metricNe: '१ क्लिकमा १,२०० लब्धाङ्कपत्र',
    rating: 5,
  },
  {
    name: 'Dinesh Manandhar',
    nameNe: 'दिनेश मानन्धर',
    role: 'Head of IT & Systems Administrator',
    roleNe: 'आईटी प्रमुख तथा प्रणाली प्रशासक',
    institution: 'Prabhat Model Higher Secondary School',
    institutionNe: 'प्रभात मोडल उच्च माध्यमिक विद्यालय',
    location: 'Bhaktapur',
    locationNe: 'भक्तपुर',
    category: 'colleges',
    challenge: 'Escaping recurring per-student cloud SaaS renewal hikes',
    challengeNe: 'प्रतिविद्यार्थी बढ्दै जाने क्लाउड नवीकरण शुल्कको भार',
    outcome: 'Rs. 0 monthly hosting bills with automated USB backup vault',
    outcomeNe: 'रु. ० मासिक होस्टिङ खर्च र १-क्लिक USB भल्ट ब्याकअप',
    quote:
      'The architecture respects school autonomy. Our installer footprint is tiny, RAM overhead stays low on existing Windows 10 desktops, and backing up the full institutional database takes one click straight to an external USB drive.',
    quoteNe:
      'यो संरचनाले विद्यालयको स्वायत्तताको सम्मान गर्छ। इन्स्टलर सानो छ, पुरानो Windows 10 कम्प्युटरमा पनि थोरै RAM मा चल्छ र पूरा विद्यालयको डेटाबेस बाहिरी USB ड्राइभमा एकै क्लिकमा ब्याकअप हुन्छ।',
    metric: 'Rs. 0 monthly cloud bills',
    metricNe: 'रु. ० मासिक क्लाउड बिल',
    rating: 5,
  },
  {
    name: 'Bimala Thapa',
    nameNe: 'बिमला थापा',
    role: 'Fleet Transit & Transport Supervisor',
    roleNe: 'यातायात तथा बस सुपरभाइजर',
    institution: 'Everest Public School',
    institutionNe: 'एभरेष्ट पब्लिक स्कूल',
    location: 'Kathmandu',
    locationNe: 'काठमाडौं',
    category: 'operations',
    challenge: 'Paper bus rosters leading to missed stops and seat overbooking',
    challengeNe: 'कागजी बस सूचीका कारण स्टप छुट्ने र सिट ओभरबुक हुने समस्या',
    outcome: '14 bus routes standardized with Code-128 CR80 PVC bus passes',
    outcomeNe: 'Code-128 CR80 PVC बस पाससहित १४ रुट व्यवस्थित',
    quote:
      'Printing CR80 plastic bus passes with Code-128 linear barcodes brought industrial precision to our morning fleet. Conductors verify route assignments reliably and capacity thresholds prevent accidental vehicle overbooking.',
    quoteNe:
      'Code-128 बारकोड भएको CR80 प्लास्टिक बस पासले हाम्रो बिहानी यातायातमा व्यवस्थित अनुशासन ल्याएको छ। सहचालकले रुट सजिलै प्रमाणित गर्न सक्छन् र सिट क्षमताभन्दा बढी विद्यार्थी राखिँदैन।',
    metric: '14 bus routes synchronized',
    metricNe: '१४ बस रुट व्यवस्थित',
    rating: 5,
  },
  {
    name: 'Gopal Krishna Regmi',
    nameNe: 'गोपाल कृष्ण रेग्मी',
    role: 'Vice Principal (Administration)',
    roleNe: 'सहायक प्रधानाध्यापक (प्रशासन)',
    institution: 'Mount View Secondary English School',
    institutionNe: 'माउन्ट भ्यु सेकेन्डरी इङ्ग्लिस स्कूल',
    location: 'Chitwan',
    locationNe: 'चितवन',
    category: 'operations',
    challenge: '8:00 AM timetable scrambling during sudden teacher leave',
    challengeNe: 'आकस्मिक शिक्षक बिदा हुँदा बिहान ८ बजे कक्षा तालिका मिलाउन अन्योल',
    outcome: 'Automated free-period faculty matching completed in under 60s',
    outcomeNe: '६० सेकेन्डभित्रै खाली पिरियड भएका शिक्षकको स्वचालित मिलान',
    quote:
      'The teacher substitution desk eliminates morning homeroom confusion. When faculty call in sick at 8:00 AM, the system highlights every available teacher sharing free slots and department expertise in seconds.',
    quoteNe:
      'शिक्षक सट्टा (Substitution) डेस्कले बिहानी कक्षाको अन्योल हटाइदिएको छ। बिहान शिक्षक बिरामी परेमा प्रणालीले केही सेकेन्डमै खाली समय र सम्बन्धित विषयका उपलब्ध शिक्षक देखाउँछ।',
    metric: '60s morning substitution',
    metricNe: '६० सेकेन्डमा सट्टा शिक्षक',
    rating: 5,
  },
  {
    name: 'Shyam Sundar Yadav',
    nameNe: 'श्याम सुन्दर यादव',
    role: 'Hostel Warden & Boarding Coordinator',
    roleNe: 'छात्रावास वार्डेन तथा आवासीय संयोजक',
    institution: 'Janaki Residential Academy',
    institutionNe: 'जानकी आवासीय एकेडेमी',
    location: 'Janakpur',
    locationNe: 'जनकपुर',
    category: 'operations',
    challenge: 'Separate mess registers causing missed boarding fee entries',
    challengeNe: 'छुट्टै मेस रजिस्टरका कारण आवासीय शुल्क हिसाबमा छुटफुट',
    outcome: '420 hostel beds & monthly mess dues unified in student ledgers',
    outcomeNe: '४२० छात्रावास सिट र मासिक मेस बिल विद्यार्थी खातामै एकीकृत',
    quote:
      'Before MeroSchool, our hostel mess register and front-office fee book were managed on separate Excel sheets. Now bed allocation, infirmary allergy notes, and monthly boarding dues appear inside the exact same student ledger.',
    quoteNe:
      'MeroSchool अघि हाम्रो छात्रावास मेस रजिस्टर र शुल्क खाता फरक एक्सेल फाइलमा थिए। अहिले कोठा बाँडफाँट, स्वास्थ्य नोट र मासिक आवास शुल्क एउटै विद्यार्थी खातामा स्वतः जोडिन्छ।',
    metric: '420 beds unified offline',
    metricNe: '४२० सिट अफलाइन एकीकृत',
    rating: 5,
  },
  {
    name: 'Kabita Gurung',
    nameNe: 'कविता गुरुङ',
    role: 'Primary Wing Head',
    roleNe: 'प्राथमिक तह प्रमुख',
    institution: 'Annapurna Sunrise Boarding School',
    institutionNe: 'अन्नपूर्ण सनराइज बोर्डिङ स्कूल',
    location: 'Butwal',
    locationNe: 'बुटवल',
    category: 'schools',
    challenge: 'Manual holiday counting & delayed printed parent circulars',
    challengeNe: 'बिदा दिन हातैले गन्नुपर्ने र अभिभावक परिपत्र छपाइमा ढिलाइ',
    outcome: 'B.S./A.D. calendar, holidays & notice circulars ready in 1 click',
    outcomeNe: '१-क्लिकमै वि.सं./ई.सं. पात्रो, बिदा र सूचना परिपत्र तयार',
    quote:
      'Tracking Bikram Sambat public holidays alongside Gregorian dates used to cause errors in monthly attendance percentages. With the unified school calendar and notice desk, holidays automatically adjust working days and parent notices print cleanly.',
    quoteNe:
      'विक्रम संवत् र ईस्वी मिति मिलाएर सार्वजनिक बिदा गन्दा मासिक हाजिरीमा गल्ती हुन्थ्यो। एकीकृत विद्यालय पात्रो र सूचना डेस्कले कार्यदिन स्वतः मिलाउँछ र परिपत्र तुरुन्त प्रिन्ट हुन्छ।',
    metric: 'Zero attendance calendar errors',
    metricNe: 'हाजिरी पात्रो गल्ती शून्य',
    rating: 5,
  },
];

export const TestimonialsPage: React.FC = () => {
  const navigate = useNavigate();
  const { isNepali, pick } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<'all' | 'schools' | 'colleges' | 'operations'>('all');

  const FILTERS = [
    { id: 'all', label: pick('All Institutions', 'सबै संस्थाहरू') },
    { id: 'schools', label: pick('K-12 Secondary Schools', 'माध्यमिक विद्यालयहरू') },
    { id: 'colleges', label: pick('+2 & Science Colleges', '+२ र विज्ञान कलेजहरू') },
    { id: 'operations', label: pick('Fleet & Operations', 'यातायात र सञ्चालन') },
  ] as const;

  const visibleCases = useMemo(
    () =>
      activeFilter === 'all'
        ? CASE_STUDIES
        : CASE_STUDIES.filter((c) => c.category === activeFilter),
    [activeFilter]
  );

  return (
    <div className="space-y-16 lg:space-y-24 pb-16">
      <SEO
        title={pick('School Case Studies & Reviews', 'विद्यालय अनुभव र प्रशंसापत्र')}
        description={pick(
          'Read verified case studies from principals, bursars, and coordinators across Nepal using MeroSchool for fast offline billing, exams, and fleet operations.',
          'छिटो अफलाइन बिलिङ, परीक्षा र बस व्यवस्थापनका लागि MeroSchool प्रयोग गर्ने नेपालभरका विद्यालय प्रधानाध्यापक र लेखापालका अनुभव पढ्नुहोस्।'
        )}
        keywords={pick(
          'MeroSchool reviews, school ERP case studies Nepal, principal testimonials, offline fee billing feedback, broadsheet school reviews',
          'MeroSchool समीक्षा, विद्यालय अनुभव, प्रधानाध्यापक प्रशंसापत्र'
        )}
        canonicalPath="/testimonials"
        breadcrumbs={[
          { name: pick('Home', 'गृहपृष्ठ'), path: '/' },
          { name: pick('Testimonials', 'प्रशंसापत्र'), path: '/testimonials' },
        ]}
        structuredData={{
          '@type': 'CollectionPage',
          name: pick('Institutional Case Studies & Reviews', 'संस्थागत अनुभव र समीक्षाहरू'),
          review: CASE_STUDIES.map((cs) => ({
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: pick(cs.name, cs.nameNe),
              jobTitle: pick(cs.role, cs.roleNe),
            },
            reviewBody: pick(cs.quote, cs.quoteNe),
            reviewRating: {
              '@type': 'Rating',
              ratingValue: cs.rating,
              bestRating: 5,
            },
            itemReviewed: {
              '@type': 'SoftwareApplication',
              name: 'MeroSchool Desktop ERP',
            },
          })),
        }}
      />

      {/* 1. Header */}
      <section className="pt-8 sm:pt-12 lg:pt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-emerald-600 dark:text-emerald-400">
            <Star className="w-4 h-4 fill-current shrink-0" />
            <span>{pick('Campus Evidence', 'विद्यालय प्रमाण')}</span>
            <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
            <span className="text-slate-600 dark:text-slate-400 font-medium">
              {pick('Verified Institutional Case Studies', 'प्रमाणित विद्यालय अनुभव र अध्ययन')}
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.12] text-balance">
            {pick(
              'Trusted by Principals, Bursars & Exam Controllers',
              'प्रधानाध्यापक, लेखापाल र परीक्षा नियन्त्रकहरूको विश्वास'
            )}
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            {pick(
              'Discover how schools and +2 colleges eliminated fee-counter lag, manual broadsheet errors, and recurring SaaS hosting expenses by switching to local-first desktop execution.',
              'विद्यालय र +२ कलेजहरूले कसरी स्थानीय डेस्कटप प्रणालीमा सरेर शुल्क काउन्टरको ढिलाइ, ब्रोडसिट गल्ती र नियमित क्लाउड खर्च हटाए भन्ने जान्नुहोस्।'
            )}
          </p>
        </div>
      </section>

      {/* 2. Featured On-Site Rollout & Highlights */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs">
          <div className="lg:col-span-6 space-y-4">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              {pick('Field Implementation Standard', 'फिल्ड कार्यान्वयन मापदण्ड')}
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
              {pick(
                'Tested Live With Your Bursar & Hardware Before Commitment',
                'निर्णय गर्नुअघि तपाईंको लेखापाल र हार्डवेयरसँग प्रत्यक्ष परीक्षण'
              )}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {pick(
                'Every institution featured below tested MeroSchool side-by-side at their own cash counter—printing real 80mm thermal receipts and compiling sample terminal broadsheets—before our Super Admin provisioned their institution account.',
                'तल उल्लेखित प्रत्येक विद्यालयले सुपर एडमिनबाट खाता लिनुअघि आफ्नै नगद काउन्टरमा ८०mm थर्मल रसिद छापेर र नमुना ब्रोडसिट तयार पारेर MeroSchool को प्रत्यक्ष परीक्षण गरेका थिए।'
              )}
            </p>
            <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300 pt-1">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>
                  {pick(
                    'Side-by-side speed check against legacy spreadsheets or web portals',
                    'पुरानो एक्सेल वा वेब पोर्टलसँग गतिको प्रत्यक्ष तुलनात्मक परीक्षण'
                  )}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>
                  {pick(
                    'USB thermal printer, laser barcode scanner & LAN check included free',
                    'USB थर्मल प्रिन्टर, लेजर बारकोड स्क्यानर र LAN नेटवर्क निःशुल्क परीक्षण'
                  )}
                </span>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-6">
            <AppImage
              src={engineerOnsiteDemoImg}
              alt={pick(
                'MeroSchool engineer demonstrating offline desktop ERP and thermal receipt printer directly to school leadership in their administrative office',
                'विद्यालयको प्रशासनिक कार्यालयमै MeroSchool इन्जिनियरले अफलाइन डेस्कटप ईआरपी र थर्मल रसिद प्रिन्टर प्रत्यक्ष प्रदर्शन गर्दै'
              )}
              aspectClass="aspect-[4/3]"
              priority
              caption={pick(
                'On-site hardware walkthrough with school leadership before offline deployment.',
                'अफलाइन जडानअघि विद्यालय नेतृत्वसँग हार्डवेयरसहितको प्रत्यक्ष डेमो।'
              )}
            />
          </div>
        </div>

        {/* Highlights Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs text-center font-mono tabular-nums">
          <div>
            <div className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              {isNepali ? '१००%' : '100%'}
            </div>
            <div className="text-xs text-slate-500 mt-1 font-sans">
              {pick('Offline Continuity', 'अफलाइन निरन्तरता')}
            </div>
          </div>
          <div>
            <div className="font-display text-2xl sm:text-3xl font-bold text-emerald-600 dark:text-emerald-400">
              {isNepali ? '०.२ ms' : '0.2 ms'}
            </div>
            <div className="text-xs text-slate-500 mt-1 font-sans">
              {pick('Ledger Query Latency', 'खाता क्वेरी गति')}
            </div>
          </div>
          <div>
            <div className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              {isNepali ? '~१५ MB' : '~15 MB'}
            </div>
            <div className="text-xs text-slate-500 mt-1 font-sans">
              {pick('Lightweight Footprint', 'हल्का सफ्टवेयर आकार')}
            </div>
          </div>
          <div>
            <div className="font-display text-2xl sm:text-3xl font-bold text-indigo-600 dark:text-indigo-400">
              {isNepali ? 'रु. ०' : 'Rs. 0'}
            </div>
            <div className="text-xs text-slate-500 mt-1 font-sans">
              {pick('Monthly Cloud Fees', 'मासिक क्लाउड शुल्क')}
            </div>
          </div>
        </div>

        {/* Measured Before vs After Impact Benchmark Table */}
        <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-xs">
          <div className="px-6 py-5 border-b border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="font-display text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                {pick('Measured Administrative Time Savings Across Partner Campuses', 'साझेदार विद्यालयहरूमा मापन गरिएको समय बचत')}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {pick(
                  'Observed benchmarks comparing paper ledgers or cloud portals against local MeroSchool desktop installations.',
                  'कागजी ढड्डा र क्लाउड पोर्टलको तुलनामा स्थानीय MeroSchool डेस्कटपबाट प्राप्त नतिजा।'
                )}
              </p>
            </div>
            <span className="text-[11px] font-mono text-emerald-700 dark:text-emerald-400 font-semibold whitespace-nowrap">
              {pick('6-Month Field Audit', '६-महिने फिल्ड मूल्याङ्कन')}
            </span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs min-w-[640px]">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 font-mono uppercase text-[11px]">
                  <th className="py-3 px-6">{pick('Daily Task', 'दैनिक कार्य')}</th>
                  <th className="py-3 px-6">{pick('Paper / Cloud Portal', 'कागज / क्लाउड पोर्टल')}</th>
                  <th className="py-3 px-6 text-indigo-600 dark:text-indigo-400">{pick('With MeroSchool', 'MeroSchool प्रयोगपछि')}</th>
                  <th className="py-3 px-6 text-right">{pick('Net Gain', 'प्रत्यक्ष फाइदा')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800 font-mono tabular-nums">
                {[
                  {
                    taskEn: 'Fee Settlement & Thermal Receipt',
                    taskNe: 'शुल्क भुक्तानी र थर्मल रसिद',
                    beforeEn: '45 – 90 sec (Ctrl+P popup)',
                    beforeNe: '४५ – ९० सेकेन्ड (पपअप)',
                    afterEn: '< 2 sec (Direct ESC/POS)',
                    afterNe: '< २ सेकेन्ड (प्रत्यक्ष ESC/POS)',
                    gainEn: '20x faster queue',
                    gainNe: '२० गुणा छिटो',
                  },
                  {
                    taskEn: '1,200-Scholar Broadsheet & GPA',
                    taskNe: '१,२०० विद्यार्थी ब्रोडसिट र GPA',
                    beforeEn: '2 – 3 days in Excel',
                    beforeNe: '२ – ३ दिन (एक्सेलमा)',
                    afterEn: 'Instant (< 1 sec local calc)',
                    afterNe: 'तुरुन्त (< १ सेकेन्ड)',
                    gainEn: 'Weekend saved',
                    gainNe: 'पूर्ण समय बचत',
                  },
                  {
                    taskEn: 'Morning Teacher Substitution',
                    taskNe: 'बिहानी शिक्षक सट्टा व्यवस्था',
                    beforeEn: '15 – 25 min manual calls',
                    beforeNe: '१५ – २५ मिनेट (फोन/कागज)',
                    afterEn: 'Under 60 sec (Auto match)',
                    afterNe: '६० सेकेन्डभित्र (स्वचालित)',
                    gainEn: 'Zero missed classes',
                    gainNe: 'कुनै कक्षा नछुट्ने',
                  },
                  {
                    taskEn: 'Full Institutional Database Backup',
                    taskNe: 'सम्पूर्ण डेटाबेस ब्याकअप',
                    beforeEn: 'Vendor support ticket (days)',
                    beforeNe: 'भेन्डर पर्खाइ (दिनौं)',
                    afterEn: '3 sec 1-click USB export',
                    afterNe: '३ सेकेन्डमै १-क्लिक USB',
                    gainEn: '100% data custody',
                    gainNe: '१००% डेटा स्वामित्व',
                  },
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/60 dark:hover:bg-slate-800/30 transition-colors">
                    <td className="py-3.5 px-6 font-sans font-semibold text-slate-900 dark:text-white">
                      {pick(row.taskEn, row.taskNe)}
                    </td>
                    <td className="py-3.5 px-6 text-slate-500 dark:text-slate-400">
                      {pick(row.beforeEn, row.beforeNe)}
                    </td>
                    <td className="py-3.5 px-6 font-bold text-emerald-700 dark:text-emerald-400">
                      {pick(row.afterEn, row.afterNe)}
                    </td>
                    <td className="py-3.5 px-6 text-right font-semibold text-indigo-600 dark:text-indigo-400">
                      {pick(row.gainEn, row.gainNe)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 3. Filterable Case Study Grid */}
      <section className="perf-section max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            {FILTERS.map((filter) => {
              const selected = activeFilter === filter.id;
              return (
                <button
                  key={filter.id}
                  type="button"
                  onClick={() => setActiveFilter(filter.id)}
                  className={`whitespace-nowrap shrink-0 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-colors cursor-pointer min-h-[38px] ${
                    selected
                      ? 'bg-indigo-600 text-white font-semibold shadow-xs'
                      : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800'
                  }`}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
          <div className="text-xs font-mono text-slate-500 tabular-nums shrink-0">
            {isNepali
              ? `कुल ${CASE_STUDIES.length} मध्ये ${visibleCases.length} विद्यालय अनुभव`
              : `Showing ${visibleCases.length} of ${CASE_STUDIES.length} case studies`}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {visibleCases.map((t, idx) => (
            <article
              key={idx}
              className="p-6 sm:p-7 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-5 shadow-xs flex flex-col justify-between hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <div
                    className="flex items-center gap-0.5 text-amber-500"
                    aria-label={pick(`${t.rating} out of 5 stars`, `५ मध्ये ${t.rating} तारा`)}
                  >
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] font-mono font-bold text-emerald-600 dark:text-emerald-400 tabular-nums">
                    {isNepali ? t.metricNe : t.metric}
                  </span>
                </div>

                {/* Structured Before -> Outcome */}
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 space-y-1.5 text-[11px]">
                  <div className="text-slate-500 dark:text-slate-400">
                    <span className="font-semibold text-slate-700 dark:text-slate-300">
                      {pick('Before:', 'पहिले:')}
                    </span>{' '}
                    {isNepali ? t.challengeNe : t.challenge}
                  </div>
                  <div className="text-emerald-700 dark:text-emerald-400 font-medium">
                    <span className="font-semibold">{pick('Outcome:', 'नतिजा:')}</span>{' '}
                    {isNepali ? t.outcomeNe : t.outcome}
                  </div>
                </div>

                <blockquote className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  &ldquo;{isNepali ? t.quoteNe : t.quote}&rdquo;
                </blockquote>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2">
                <div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white">
                    {isNepali ? t.nameNe : t.name}
                  </div>
                  <div className="text-[11px] text-slate-500">
                    {isNepali ? t.roleNe : t.role} <span aria-hidden="true">·</span>{' '}
                    {isNepali ? t.institutionNe : t.institution}
                  </div>
                </div>
                <div className="text-[11px] text-slate-400 flex items-center gap-1 font-mono shrink-0">
                  <MapPin className="w-3 h-3 text-slate-400" />
                  <span>{isNepali ? t.locationNe : t.location}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 4. Bottom CTA */}
      <section className="perf-section max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40 p-8 sm:p-12 text-center space-y-4">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
            {pick(
              'Ready to Upgrade Your School’s Administrative Operations?',
              'के तपाईं आफ्नो विद्यालयको प्रशासनिक कार्यलाई छिटो र भरपर्दो बनाउन तयार हुनुहुन्छ?'
            )}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            {pick(
              'Experience 100% offline desktop durability with local campus persistence and zero cloud hosting charges.',
              'स्थानीय भण्डारण सुरक्षा र शून्य क्लाउड शुल्कसहित १००% अफलाइन डेस्कटप स्थायित्व अनुभव गर्नुहोस्।'
            )}
          </p>
          <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <button
              type="button"
              onClick={() => navigate('/contact?type=demo')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition-colors shadow-xs cursor-pointer min-h-[44px]"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>{pick('Book Free On-Site Demo', 'निःशुल्क विद्यालय डेमो बुक गर्नुहोस्')}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => navigate('/features')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer min-h-[44px]"
            >
              <span>{pick('Explore All 44 Modules', 'सबै ४४ मोड्युलहरू हेर्नुहोस्')}</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
