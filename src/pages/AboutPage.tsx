import React from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  Cpu,
  HardDrive,
  ShieldCheck,
  Zap,
  ArrowRight,
  FileCode,
  Network,
  Server,
  Lock,
  Sparkles,
  Target,
  Eye,
  Award,
  GraduationCap,
  HeartHandshake,
  Clock,
  Phone,
} from "lucide-react";
import { SCHOOL_CONTACT } from "@/src/config/contactInfo";
import { SEO } from "@/src/components/SEO";
import { AppImage } from "@/src/components/AppImage";
import campusLanOfficeImg from "@/src/assets/images/campus_lan_office_1794561642963.jpg";
import { useLanguage } from "@/src/context/LanguageContext";

export const AboutPage: React.FC = () => {
  const navigate = useNavigate();
  const { isNepali, pick } = useLanguage();

  const corePrinciples = [
    {
      icon: ShieldCheck,
      title: pick("Absolute Data Sovereignty", "पूर्ण डेटा सार्वभौमिकता"),
      desc: pick(
        "Student transcripts, family records, and financial fee ledgers never leave campus hardware. 100% offline crash-safe local database keeps your institution completely private and secure.",
        "विद्यार्थीको लब्धाङ्कपत्र, पारिवारिक विवरण र वित्तीय शुल्क खाता कहिल्यै विद्यालयको हार्डवेयर बाहिर जाँदैन। १००% अफलाइन सुरक्षित स्थानीय डेटाबेसले संस्थालाई पूर्ण सुरक्षित राख्छ।",
      ),
      color: "text-emerald-600 dark:text-emerald-400",
      bg: "bg-emerald-50 dark:bg-emerald-950/60 border-emerald-200 dark:border-emerald-900/60",
    },
    {
      icon: Zap,
      title: pick("Sub-Millisecond Speed", "शून्य-विलम्ब गति"),
      desc: pick(
        "Engineered for morning fee queues and exam deadlines. Zero network round-trips means transactions execute in < 1ms with instant student lookup and barcode scanning.",
        "बिहानी शुल्क लाइन र परीक्षाको चटारोलाई ध्यानमा राखी निर्मित। नेटवर्क पर्खाइ नहुने भएकाले १ms भित्रै कारोबार र तत्काल बारकोड स्क्यानिङ सम्भव हुन्छ।",
      ),
      color: "text-indigo-600 dark:text-indigo-400",
      bg: "bg-indigo-50 dark:bg-indigo-950/60 border-indigo-200 dark:border-indigo-900/60",
    },
    {
      icon: Award,
      title: pick("Standardized Broadsheet Rigor", "परीक्षा तथा लेखा शुद्धता"),
      desc: pick(
        "Standardized Nepal NEB/SEE CDC letter grading (A+ to NG), CBSE/ICSE CGPA calculations, and double-entry fee ledgers built directly into the core engine with zero third-party plugins.",
        "नेपालको NEB/SEE CDC अक्षराङ्कन (A+ देखि NG सम्म), CBSE/ICSE CGPA गणना र दोहोरो प्रविष्टि शुल्क खाता अतिरिक्त प्लगइन बिना नै मूल इन्जिनमा निर्मित छन्।",
      ),
      color: "text-amber-600 dark:text-amber-400",
      bg: "bg-amber-50 dark:bg-amber-950/60 border-amber-200 dark:border-amber-900/60",
    },
    {
      icon: GraduationCap,
      title: pick(
        "Built With Educators & Bursars",
        "विद्यालयको वास्तविक आवश्यकतामा आधारित",
      ),
      desc: pick(
        "Developed in close consultation with school principals, accounts officers, and homeroom teachers across Nepal to eliminate paperwork friction and repetitive spreadsheet chaos.",
        "नेपालभरका प्रधानाध्यापक, लेखापाल र शिक्षकहरूसँगको प्रत्यक्ष सहकार्यमा कागजी झन्झट र दोहोरिने एक्सेल काम हटाउन विकास गरिएको।",
      ),
      color: "text-blue-600 dark:text-blue-400",
      bg: "bg-blue-50 dark:bg-blue-950/60 border-blue-200 dark:border-blue-900/60",
    },
  ];

  const milestones = [
    {
      year: isNepali ? "२०८०/८१" : "2024",
      title: pick("School Field Research", "शैक्षिक समस्याहरूको अध्ययन"),
      desc: pick(
        "Investigated cloud ERP freeze rates, fiber cuts, and fee queue bottlenecks across 60+ schools and colleges in Kathmandu, Pokhara, and Biratnagar.",
        "काठमाडौं, पोखरा र विराटनगरका ६०+ विद्यालय तथा कलेजहरूमा अनलाइन ईआरपी अड्किने समस्या, इन्टरनेट कटौती र शुल्क काउन्टरको भीडबारे गहन अध्ययन गरियो।",
      ),
    },
    {
      year: isNepali ? "२०८१/८२" : "2025",
      title: pick("Native Desktop Architecture", "नेटिभ डेस्कटप इन्जिन"),
      desc: pick(
        "Pioneered native offline desktop ERP engine with crash-safe local data integrity, 44 integrated campus modules, and zero-driver hardware printer/scanner support for Windows, macOS & Linux.",
        "Windows, macOS र Linux का लागि सुरक्षित स्थानीय डेटाबेस प्रणाली, ४४ एकीकृत मोड्युल र ड्राइभर-रहित प्रिन्टर/स्क्यानर सपोर्टसहितको नेटिभ डेस्कटप इन्जिन तयार गरियो।",
      ),
    },
    {
      year: isNepali ? "२०८२/८३" : "2026",
      title: pick(
        "Powering Campuses Nationwide",
        "देशभरका विद्यालयहरूमा सफल सञ्चालन",
      ),
      desc: pick(
        "Enabling over 150,000 students’ academic records, instant fee settlements, and automated report cards daily with 99.999% uptime and zero cloud subscription fees.",
        "दैनिक १,५०,०००+ विद्यार्थीको शैक्षिक अभिलेख, तत्काल शुल्क रसिद र स्वचालित लब्धाङ्कपत्र शून्य क्लाउड शुल्क र ९९.९९९% विश्वसनीयताका साथ सञ्चालनमा।",
      ),
    },
  ];

  return (
    <div className="space-y-16 lg:space-y-24 pb-16">
      <SEO
        title={pick(
          "About Our Offline Campus Mission",
          "हाम्रो बारेमा र अफलाइन लक्ष्य",
        )}
        description={pick(
          "Discover why MeroSchool was built to give schools and colleges 100% offline reliability, instant campus operations, and complete data ownership.",
          "विद्यालय र कलेजलाई १००% अफलाइन विश्वसनीयता, छिटो सञ्चालन र पूर्ण डेटा स्वामित्व दिन MeroSchool किन बनाइयो जान्नुहोस्।",
        )}
        keywords={pick(
          "about MeroSchool, offline school ERP mission, school data sovereignty, zero cloud dependency, campus LAN school software, Kathmandu school software",
          "MeroSchool बारेमा, अफलाइन विद्यालय ईआरपी, डेटा सार्वभौमिकता, स्थानीय विद्यालय नेटवर्क",
        )}
        canonicalPath="/about"
        breadcrumbs={[
          { name: pick("Home", "गृहपृष्ठ"), path: "/" },
          { name: pick("About", "हाम्रो बारेमा"), path: "/about" },
        ]}
        structuredData={{
          "@type": "AboutPage",
          name: pick("About MeroSchool", "MeroSchool को बारेमा"),
          description: pick(
            "Empowering educational institutions with 100% offline desktop operations and zero recurring cloud fees.",
            "शैक्षिक संस्थाहरूलाई १००% अफलाइन डेस्कटप सञ्चालन र शून्य मासिक क्लाउड शुल्कसहित सशक्त बनाउँदै।",
          ),
        }}
      />

      {/* ============================================================== */}
      {/* 1. HERO HEADER                                                 */}
      {/* ============================================================== */}
      <section className="pt-12 sm:pt-16 pb-12 border-b border-slate-200 dark:border-slate-800 bg-gradient-to-b from-indigo-50/50 via-white to-transparent dark:from-slate-900/40 dark:via-slate-950 dark:to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-700 dark:text-indigo-300">
            <HeartHandshake className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            <span className="tracking-wide uppercase font-mono text-[11px]">
              {pick("Our Story & Purpose", "हाम्रो कथा र उद्देश्य")}
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight max-w-4xl mx-auto leading-[1.12] text-balance">
            {pick(
              "Empowering Educational Institutions with ",
              "शैक्षिक संस्थाहरूलाई सशक्त बनाउँदै ",
            )}
            <span className="text-indigo-600 dark:text-indigo-400">
              {pick(
                "Zero-Downtime Reliability",
                "शून्य-डाउनटाइम विश्वसनीयताका साथ",
              )}
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            {pick(
              "Built by specialists who saw schools struggle with cloud ERP freezing during morning fee queues and exam broadsheet printing. Designed with local offline storage, sub-millisecond responsiveness, and institutional data sovereignty.",
              "बिहानी शुल्क लाइन र परीक्षाको नतिजा छपाइका क्रममा क्लाउड सफ्टवेयर अड्किएर विद्यालयहरूले भोगेको समस्या देखेका विशेषज्ञहरूद्वारा निर्मित। स्थानीय अफलाइन भण्डारण, मिलिसेकेन्डभन्दा छिटो कार्यक्षमता र पूर्ण डेटा सार्वभौमिकतासहित तयार पारिएको।",
            )}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
            <button
              type="button"
              onClick={() => navigate("/contact?type=demo")}
              className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs sm:text-sm flex items-center gap-2 cursor-pointer shadow-md shadow-indigo-600/20 transition-all hover:scale-[1.02] active:scale-[0.98] min-h-[44px]"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>
                {pick(
                  "Request Free On-Site Demo",
                  "निःशुल्क विद्यालय डेमो माग गर्नुहोस्",
                )}
              </span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <Link
              to="/features"
              className="px-5 py-3 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs sm:text-sm font-semibold border border-slate-300 dark:border-slate-700 transition-colors cursor-pointer min-h-[44px] inline-flex items-center gap-2"
            >
              <span>
                {pick("Explore All 44 Modules", "सबै ४४ मोड्युलहरू हेर्नुहोस्")}
              </span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. WHY WE BUILT MEROSCHOOL + MISSION & VISION                  */}
      {/* ============================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-700 dark:text-emerald-400">
            <Target className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span className="tracking-wide uppercase font-mono text-[11px]">
              {pick("Why We Built MeroSchool", "हामीले MeroSchool किन बनायौं")}
            </span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {pick(
              "Designed for Schools, Not Generic Cloud Subscriptions",
              "नियमित क्लाउड शुल्कका लागि होइन, विद्यालयको सहजताका लागि निर्मित",
            )}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {pick(
              "We witnessed schools and colleges across Kathmandu, Pokhara, and rural districts lose hours during busy term deadlines simply because their cloud ERP was buffering, down, or disconnected. Monthly per-student subscriptions drained institutional budgets while sensitive student bio-data was held on shared external servers. We built MeroSchool to give educators permanent operational autonomy: 100% offline-first, lightning-fast, and completely secure.",
              "काठमाडौं, पोखरादेखि ग्रामीण जिल्लाका विद्यालय र कलेजहरूले इन्टरनेट काटिँदा वा क्लाउड सर्भर सुस्त हुँदा घण्टौं समय गुमाएको हामीले देख्यौं। प्रतिविद्यार्थी मासिक शुल्कले विद्यालयको बजेटमा भार थप्थ्यो र संवेदनशील विद्यार्थी विवरण बाहिरी सर्भरमा रहन्थ्यो। त्यसैले हामीले MeroSchool बनायौं: १००% अफलाइन, अत्यन्तै छिटो र पूर्ण रूपमा विद्यालयकै नियन्त्रणमा रहने प्रणाली।",
            )}
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 relative overflow-hidden shadow-xs hover:border-indigo-300 dark:hover:border-indigo-800 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-950/80 border border-indigo-200 dark:border-indigo-900 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-5">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">
              {pick("Our Mission", "हाम्रो मिसन")}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {pick(
                "To democratize industrial-grade academic management, double-entry fee ledgers, and automated broadsheets for schools, colleges, and educational institutions worldwide. We believe school administrators should own their software and scholar data completely without being held hostage by monthly cloud subscriptions or vulnerable internet connections.",
                "संसारभरका विद्यालय, कलेज र शैक्षिक संस्थाहरूमा उच्चस्तरीय शैक्षिक व्यवस्थापन, दोहोरो प्रविष्टि शुल्क लेखा र स्वचालित ब्रोडसिट प्रणाली सर्वसुलभ बनाउनु हाम्रो लक्ष्य हो। विद्यालयहरूले मासिक क्लाउड शुल्क वा अनिश्चित इन्टरनेटको भर नपरी आफ्नै सफ्टवेयर र डेटाको पूर्ण स्वामित्व पाउनुपर्छ भन्ने हाम्रो विश्वास छ।",
              )}
            </p>
          </div>

          {/* Vision Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 relative overflow-hidden shadow-xs hover:border-teal-300 dark:hover:border-teal-800 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-teal-50 dark:bg-teal-950/80 border border-teal-200 dark:border-teal-900 flex items-center justify-center text-teal-600 dark:text-teal-400 mb-5">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">
              {pick("Our Vision", "हाम्रो भिजन")}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {pick(
                "To set the global benchmark for zero-downtime, zero-latency desktop academic ERP systems. Empowering every principal, accountant, and exam controller with immediate financial clarity, tamper-proof audit trails, and effortless national curriculum compliance across Windows, macOS, and Linux.",
                "शून्य-डाउनटाइम र शून्य-विलम्ब डेस्कटप शैक्षिक ईआरपी प्रणालीको विश्वस्तरीय मापदण्ड स्थापित गर्नु। Windows, macOS र Linux मा प्रत्येक प्रधानाध्यापक, लेखापाल र परीक्षा नियन्त्रकलाई स्पष्ट वित्तीय विवरण, सुरक्षित अडिट लग र राष्ट्रिय पाठ्यक्रम अनुसारको सहज कार्यसम्पादन प्रदान गर्नु।",
              )}
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 3. CORE PRINCIPLES GUIDING MEROSCHOOL                          */}
      {/* ============================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center sm:text-left max-w-3xl space-y-2">
          <div className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-mono">
            {pick("Guiding Values", "मूलभूत मान्यताहरू")}
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
            {pick(
              "Core Principles Guiding MeroSchool",
              "MeroSchool का मुख्य सिद्धान्तहरू",
            )}
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {corePrinciples.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div
                    className={`w-10 h-10 rounded-xl ${item.bg} border flex items-center justify-center mb-4`}
                  >
                    <Icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ============================================================== */}
      {/* 4. EVOLUTION & KEY MILESTONES                                  */}
      {/* ============================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-10 rounded-3xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-8 shadow-xs">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
              {pick(
                "Our Evolution & Key Milestones",
                "विकास यात्रा र मुख्य उपलब्धिहरू",
              )}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {milestones.map((m, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400">
                    {pick(`Phase ${idx + 1}`, `चरण ${idx + 1}`)}
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400">
                    {m.year}
                  </span>
                </div>
                <div className="text-sm font-bold text-slate-900 dark:text-white">
                  {m.title}
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 5. THE 3 CORE PILLARS                                          */}
      {/* ============================================================== */}
      <section className="perf-section max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center sm:text-left max-w-3xl space-y-2">
          <div className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-mono">
            {pick("Platform Architecture", "प्रणाली संरचनाका आधारहरू")}
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
            {pick(
              "The Three Core Pillars of MeroSchool",
              "MeroSchool का तीन मुख्य आधारहरू",
            )}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <div className="p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-4 shadow-xs">
            <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold">
              <FileCode className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              {pick(
                "1. Fast Desktop Workspace",
                "१. छिटो र आधुनिक डेस्कटप इन्टरफेस",
              )}
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              {pick(
                "Crafted for busy administrative offices. Delivers an intuitive user experience with sub-millisecond tab switching, live searchable rosters, keyboard shortcuts, and interactive grade calculations.",
                "व्यस्त विद्यालय कार्यालयका लागि निर्मित। तुरुन्त ट्याब परिवर्तन, प्रत्यक्ष खोजी गर्न मिल्ने तालिका, किबोर्ड सर्टकट र स्वचालित ग्रेड गणनाका साथ सहज अनुभव प्रदान गर्दछ।",
              )}
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-4 shadow-xs">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              {pick(
                "2. Lightweight Native Desktop Engine",
                "२. हल्का नेटिभ डेस्कटप इन्जिन",
              )}
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              {pick(
                "Unlike legacy heavy desktop apps that consume 500 MB of memory, MeroSchool runs natively on your operating system. The entire installer is only ~15 MB and runs smoothly even on standard 2 GB RAM school computers.",
                "५०० MB RAM खपत गर्ने भारी एपहरूको सट्टा MeroSchool सिधै अपरेटिङ सिस्टममै चल्दछ। पूरा इन्स्टलर मात्र ~१५ MB को छ र कम CPU तथा २ GB RAM मै सहजै चल्छ।",
              )}
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-4 shadow-xs">
            <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold">
              <HardDrive className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              {pick(
                "3. Crash-Safe Local Campus Database",
                "३. सुरक्षित स्थानीय विद्यालय डेटाबेस",
              )}
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              {pick(
                "Powered by a crash-safe local database designed for concurrent campus counters. Zero server administration, instant power-cut safe saves, and 1-click full institution backup to any USB drive.",
                "धेरै काउन्टरमा एकैसाथ चल्न सक्ने सुरक्षित स्थानीय डेटाबेसद्वारा संचालित। छुट्टै सर्भर व्यवस्थापन नचाहिने, बत्ती जाँदा पनि सुरक्षित रहने र एकै क्लिकमा USB मा ब्याकअप हुने सुविधा।",
              )}
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 6. ARCHITECTURAL COMPARISON: DESKTOP VS CLOUD ERP              */}
      {/* ============================================================== */}
      <section className="perf-section max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-10 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-6 shadow-xs">
          <div className="space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-mono">
              {pick("Honest Comparison", "स्पष्ट तुलना")}
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
              {pick(
                "MeroSchool Desktop vs Traditional Cloud SaaS",
                "MeroSchool डेस्कटप बनाम परम्परागत क्लाउड SaaS",
              )}
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 text-slate-500 font-mono uppercase text-[11px]">
                  <th className="py-3 pr-4">{pick("Dimension", "मापदण्ड")}</th>
                  <th className="py-3 px-4 text-indigo-600 dark:text-indigo-400 font-bold">
                    {pick(
                      "MeroSchool Desktop (Offline)",
                      "MeroSchool डेस्कटप (अफलाइन)",
                    )}
                  </th>
                  <th className="py-3 pl-4">
                    {pick("Traditional Cloud SaaS", "परम्परागत क्लाउड SaaS")}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                <tr>
                  <td className="py-3.5 pr-4 font-semibold">
                    {pick("Internet Dependency", "इन्टरनेट निर्भरता")}
                  </td>
                  <td className="py-3.5 px-4 font-bold text-emerald-600 dark:text-emerald-400">
                    {pick(
                      "100% Offline (Works with zero internet)",
                      "१००% अफलाइन (इन्टरनेट बिना नै पूर्ण सञ्चालन)",
                    )}
                  </td>
                  <td className="py-3.5 pl-4 text-slate-500">
                    {pick(
                      "Unusable during internet dropouts",
                      "इन्टरनेट काटिनासाथ काम रोकिने",
                    )}
                  </td>
                </tr>
                <tr>
                  <td className="py-3.5 pr-4 font-semibold">
                    {pick("Recurring Cloud Bills", "नियमित क्लाउड शुल्क")}
                  </td>
                  <td className="py-3.5 px-4 font-bold text-emerald-600 dark:text-emerald-400">
                    {pick(
                      "Rs. 0 / month (Perpetual desktop app)",
                      "रु. ० / महिना (स्थायी डेस्कटप इजाजतपत्र)",
                    )}
                  </td>
                  <td className="py-3.5 pl-4 text-slate-500">
                    {pick(
                      "Recurring monthly fees per student",
                      "प्रतिविद्यार्थी मासिक वा वार्षिक नवीकरण शुल्क",
                    )}
                  </td>
                </tr>
                <tr>
                  <td className="py-3.5 pr-4 font-semibold">
                    {pick("Query Latency", "प्रतिक्रिया गति")}
                  </td>
                  <td className="py-3.5 px-4 font-bold text-emerald-600 dark:text-emerald-400">
                    {pick(
                      "0.2 ms – 2 ms (Local Campus Storage)",
                      "०.२ ms – २ ms (स्थानीय भण्डारण)",
                    )}
                  </td>
                  <td className="py-3.5 pl-4 text-slate-500">
                    {pick(
                      "300 ms – 2000 ms cloud latency",
                      "३०० ms – २००० ms क्लाउड ढिलाइ",
                    )}
                  </td>
                </tr>
                <tr>
                  <td className="py-3.5 pr-4 font-semibold">
                    {pick(
                      "Data Privacy & Sovereignty",
                      "डेटा गोपनीयता र सुरक्षा",
                    )}
                  </td>
                  <td className="py-3.5 px-4 font-bold text-emerald-600 dark:text-emerald-400">
                    {pick(
                      "Resides 100% on your school’s hard drive",
                      "१००% विद्यालयकै हार्ड ड्राइभमा सुरक्षित",
                    )}
                  </td>
                  <td className="py-3.5 pl-4 text-slate-500">
                    {pick(
                      "Stored on third-party cloud servers",
                      "तेस्रो-पक्षको बाहिरी क्लाउड सर्भरमा रहने",
                    )}
                  </td>
                </tr>
                <tr>
                  <td className="py-3.5 pr-4 font-semibold">
                    {pick("Hardware Peripherals", "हार्डवेयर उपकरण जडान")}
                  </td>
                  <td className="py-3.5 px-4 font-bold text-emerald-600 dark:text-emerald-400">
                    {pick(
                      "Direct USB barcode scanners & POS printers",
                      "सिधै USB बारकोड स्क्यानर र POS प्रिन्टर सपोर्ट",
                    )}
                  </td>
                  <td className="py-3.5 pl-4 text-slate-500">
                    {pick(
                      "Restricted by browser security limits",
                      "ब्राउजर सुरक्षाका कारण पपअप र सीमितता",
                    )}
                  </td>
                </tr>
                <tr>
                  <td className="py-3.5 pr-4 font-semibold">
                    {pick("Installer Size", "इन्स्टलर आकार")}
                  </td>
                  <td className="py-3.5 px-4 font-bold text-emerald-600 dark:text-emerald-400">
                    {pick(
                      "~15 MB (Lightweight Native App)",
                      "~१५ MB (हल्का नेटिभ एप)",
                    )}
                  </td>
                  <td className="py-3.5 pl-4 text-slate-500">
                    {pick(
                      "N/A or ~150 MB (Heavy Desktop Wrappers)",
                      "उपलब्ध नहुने वा ~१५० MB भारी एप",
                    )}
                  </td>
                </tr>
                <tr>
                  <td className="py-3.5 pr-4 font-semibold">
                    {pick("Platform & OS Coverage", "प्लेटफर्म र OS सपोर्ट")}
                  </td>
                  <td className="py-3.5 px-4 font-bold text-indigo-600 dark:text-indigo-400">
                    {pick(
                      "Native Cross-Platform Desktop (Windows, macOS & Linux with 100% Offline Autonomy)",
                      "क्रस-प्लेटफर्म नेटिभ डेस्कटप (Windows, macOS र Linux मा १००% अफलाइन स्वायत्तता)",
                    )}
                  </td>
                  <td className="py-3.5 pl-4 text-slate-500">
                    {pick(
                      "Cloud only (requires continuous internet, vulnerable to disconnects)",
                      "क्लाउड मात्र (निरन्तर इन्टरनेट चाहिने)",
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 7. CAMPUS NETWORK TOPOLOGY (MULTI-PC LAN)                      */}
      {/* ============================================================== */}
      <section className="perf-section max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-indigo-600 dark:text-indigo-400 font-mono uppercase tracking-wider">
                <Network className="w-4 h-4" />
                <span>
                  {pick(
                    "Multi-PC Campus Local Area Network (LAN)",
                    "बहु-पीसी विद्यालय लोकल नेटवर्क (LAN)",
                  )}
                </span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                {pick(
                  "Connect Multiple Computers with Zero Internet Dependency",
                  "इन्टरनेट बिना नै कार्यालयका धेरै कम्प्युटरहरू आपसमा जोड्नुहोस्",
                )}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {pick(
                  "MeroSchool is built to support busy multi-counter intake and simultaneous exam marks entry across separate staff rooms. Connect your administration computers over standard campus Gigabit Ethernet cables or local Wi-Fi router.",
                  "MeroSchool ले एकैसाथ धेरै शुल्क काउन्टर र शिक्षक कक्षबाट परीक्षा अंक प्रविष्ट गर्न सहयोग गर्दछ। विद्यालयकै इथरनेट केबल वा स्थानीय Wi-Fi राउटरमार्फत प्रशासनका कम्प्युटरहरू सहजै जोड्न सकिन्छ।",
                )}
              </p>
            </div>
            <div className="lg:col-span-6">
              <AppImage
                src={campusLanOfficeImg}
                alt={pick(
                  "School academic coordination office with multiple workstations linked over a local campus LAN displaying exam broadsheets",
                  "विद्यालयको स्थानीय LAN नेटवर्कमा जोडिएका धेरै कम्प्युटरहरूबाट परीक्षा ब्रोडसिट सञ्चालन भइरहेको कार्यालय",
                )}
                aspectClass="aspect-[16/9]"
                caption={pick(
                  "Parallel exam scoring & cash desk desks connected over local Gigabit campus LAN.",
                  "स्थानीय गिगाबिट LAN मार्फत समानान्तर परीक्षा अंक प्रविष्टि र नगद काउन्टर सञ्चालन।",
                )}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold">
                <Server className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                {pick(
                  "Host / Server PC (Counter 1)",
                  "मुख्य होस्ट पीसी (काउन्टर १)",
                )}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {pick(
                  "Houses the master school database file for high-speed local access. Handles thermal receipt printing, daily cash reconciliation, and automated USB snapshots.",
                  "मुख्य विद्यालय डेटाबेस फाइल उच्च गतिमा यहीँ सुरक्षित रहन्छ। यसले थर्मल रसिद छपाइ, दैनिक नगद मिलान र USB ब्याकअप व्यवस्थापन गर्छ।",
                )}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                <Network className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                {pick(
                  "Campus Local Network Bridge",
                  "विद्यालय स्थानीय नेटवर्क ब्रिज",
                )}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {pick(
                  "Workstations communicate over your internal router IP subnet (e.g., 192.168.1.x). Zero internet packets leave your institution, rendering operations immune to fiber cuts.",
                  "कम्प्युटरहरू आन्तरिक राउटर सबनेट (जस्तै 192.168.1.x) मार्फत जोडिन्छन्। कुनै डेटा इन्टरनेटमा बाहिर नजाने हुँदा फाइबर काटिँदा पनि काम रोकिँदैन।",
                )}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                {pick(
                  "Staff Room & Principal Desks",
                  "शिक्षक कक्ष र प्रधानाध्यापक डेस्क",
                )}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {pick(
                  "Teachers input terminal exam broadsheet marks and homeroom attendance concurrently without blocking cashiers or risking write conflicts.",
                  "शिक्षकहरूले एकैसाथ परीक्षाको अंक र कक्षा हाजिरी प्रविष्ट गर्न सक्छन्; काउन्टरको काममा कुनै अवरोध वा डेटा द्वन्द्व हुँदैन।",
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 8. FOR EVERY EDUCATIONAL INSTITUTION (CONFIGURABLE)            */}
      {/* ============================================================== */}
      <section className="perf-section max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl border border-indigo-200 dark:border-indigo-900 bg-indigo-50/50 dark:bg-indigo-950/30 space-y-4">
          <div className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-mono">
            {pick(
              "For Every Educational Institution",
              "हरेक शैक्षिक संस्थाका लागि उपयुक्त",
            )}
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
            {pick(
              "Built for Any School: Super Admin Provisioned, 100% Offline Dashboard",
              "कुनै पनि विद्यालयका लागि निर्मित: सुपर एडमिन प्रबन्धित, १००% अफलाइन ड्यासबोर्ड",
            )}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
            {pick(
              "MeroSchool is not for any particular school — it is a multi-institution platform where school accounts are created by the Super Admin. Once a school logs into its dashboard, every single module runs 100% offline on local storage with zero cloud support. In Settings, administrators customize their institution’s name, logo crest, contact details, academic calendar (B.S. or A.D.), currency, and terminal grading scales.",
              "MeroSchool कुनै एक विद्यालयका लागि मात्र होइन — यो बहु-संस्थागत प्लेटफर्म हो जहाँ सुपर एडमिनले विद्यालयको खाता सिर्जना गरिदिन्छ। लगइन गरिसकेपछि प्रत्येक मोड्युल बिना क्लाउड सपोर्ट स्थानीय भण्डारणमा १००% अफलाइन चल्छ। सेटिङबाट प्रशासकले विद्यालयको नाम, लोगो, सम्पर्क विवरण, पात्रो (वि.सं. वा ई.सं.), मुद्रा र परीक्षा ग्रेडिङ मापदण्ड अनुकूलन गर्न सक्छन्।",
            )}
          </p>

          <div className="pt-4 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button
              type="button"
              onClick={() => navigate("/features")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition-colors cursor-pointer min-h-[44px]"
            >
              <span>
                {pick("Explore All 44 Modules", "सबै ४४ मोड्युलहरू हेर्नुहोस्")}
              </span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => navigate("/contact")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer min-h-[44px]"
            >
              <span>
                {pick(
                  "Contact Desktop Engineering Team",
                  "प्राविधिक टोलीसँग सम्पर्क गर्नुहोस्",
                )}
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 8b. SECURITY, POWER-CUT SAFETY & SUPPORT GUARANTEES            */}
      {/* ============================================================== */}
      <section className="perf-section max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="max-w-3xl space-y-2">
          <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 font-mono">
            {pick("Institutional Commitments", "संस्थागत प्रतिबद्धताहरू")}
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight text-balance">
            {pick(
              "Built for Real Campus Conditions: Power Cuts, Audits & Long-Term Ownership",
              "वास्तविक विद्यालय परिस्थितिका लागि निर्मित: विद्युत अवरोध सुरक्षा, अडिट र दीर्घकालीन स्वायत्तता",
            )}
          </h2>
        </div>

        <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200 dark:divide-slate-800 overflow-hidden shadow-xs">
          <div className="divide-y divide-slate-200 dark:divide-slate-800">
            <div className="p-6 sm:p-8 space-y-2.5">
              <div className="text-xs font-mono font-semibold text-indigo-600 dark:text-indigo-400">
                {pick(
                  "01. Crash & Power-Outage Safe",
                  "०१. विद्युत अवरोधमा डेटा सुरक्षा",
                )}
              </div>
              <h3 className="font-display text-base font-bold text-slate-900 dark:text-white">
                {pick(
                  "Crash-Safe & Power-Cut Transaction Integrity",
                  "विद्युत अवरोध र आकस्मिक बन्दबाट पूर्ण डेटा सुरक्षा",
                )}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {pick(
                  "Sudden power cuts or laptop battery shutdowns never corrupt your accounting books. Every fee receipt and mark entry is safely committed to local disk before acknowledging.",
                  "एक्कासि बिजुली जाँदा वा कम्प्युटर बन्द हुँदा पनि लेखा खाता बिग्रँदैन। प्रत्येक शुल्क रसिद र परीक्षा अंक सुरक्षित रूपमा स्थानीय डिस्कमा सेभ हुन्छ।",
                )}
              </p>
            </div>
            <div className="p-6 sm:p-8 space-y-2.5">
              <div className="text-xs font-mono font-semibold text-emerald-700 dark:text-emerald-400">
                {pick(
                  "02. Zero Telemetry & Audit Trail",
                  "०२. शून्य टेलिमेट्री र अडिट अभिलेख",
                )}
              </div>
              <h3 className="font-display text-base font-bold text-slate-900 dark:text-white">
                {pick(
                  "Role-Isolated Access & Local Logs",
                  "भूमिका-विभाजित पहुँच र स्थानीय अडिट लग",
                )}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {pick(
                  "Cashiers cannot edit exam grades, and subject teachers cannot alter fee ledgers. Every login, waiver, and certificate reprint stays strictly inside your local audit trail.",
                  "क्यासियरले परीक्षा अंक बदल्न सक्दैनन् र शिक्षकले शुल्क खाता चलाउन पाउँदैनन्। प्रत्येक लगइन, छुट र प्रमाणपत्र छपाइ स्थानीय अडिट लगमा अभिलेख रहन्छ।",
                )}
              </p>
            </div>
          </div>

          <div className="divide-y divide-slate-200 dark:divide-slate-800">
            <div className="p-6 sm:p-8 space-y-2.5">
              <div className="text-xs font-mono font-semibold text-blue-600 dark:text-blue-400">
                {pick(
                  "03. Regional & Board Native",
                  "०३. क्षेत्रीय पात्रो र शिक्षा बोर्ड अनुकूल",
                )}
              </div>
              <h3 className="font-display text-base font-bold text-slate-900 dark:text-white">
                {pick(
                  "Bikram Sambat (B.S.), NEB & CBSE Ready",
                  "विक्रम संवत् (वि.सं.), NEB र CBSE तयार",
                )}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {pick(
                  "Switch seamlessly between Nepali B.S. and Gregorian A.D. calendars across attendance, holidays, notices, fee schedules, and NEB CDC / CBSE report cards.",
                  "हाजिरी, सार्वजनिक बिदा, सूचना, शुल्क तालिका र NEB CDC / CBSE लब्धाङ्कपत्रभरि नेपाली वि.सं. र ई.सं. मिति सहजै प्रयोग गर्नुहोस्।",
                )}
              </p>
            </div>
            <div className="p-6 sm:p-8 space-y-2.5">
              <div className="text-xs font-mono font-semibold text-amber-600 dark:text-amber-400">
                {pick(
                  "04. Direct Engineering Support",
                  "०४. प्रत्यक्ष इन्जिनियरिङ सहायता",
                )}
              </div>
              <h3 className="font-display text-base font-bold text-slate-900 dark:text-white">
                {pick(
                  "No Ticket Queues — Talk Directly to Builders",
                  "लामो टिकट लाइन होइन — सिधै विकासकर्तासँग सम्पर्क",
                )}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {pick(
                  "When your accounts or exam desk calls, you speak directly with the software engineers who built MeroSchool—with on-site campus visits, WhatsApp assistance, and CSV migration help.",
                  "लेखा वा परीक्षा शाखाले सम्पर्क गर्दा तपाईंले सिधै MeroSchool निर्माण गर्ने इन्जिनियरहरूसँग कुरा गर्नुहुन्छ—विद्यालय भ्रमण, WhatsApp र CSV सहायता सहित।",
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 9. BOTTOM CALL TO ACTION                                       */}
      {/* ============================================================== */}
      <section className="perf-section max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-indigo-200 dark:border-indigo-900 bg-gradient-to-br from-indigo-50/90 via-white to-indigo-50/50 dark:from-slate-900 dark:via-slate-900 dark:to-indigo-950/40 p-8 sm:p-12 space-y-5 text-center shadow-xs">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-700 dark:text-indigo-300 mx-auto">
            <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
            <span className="font-mono text-[11px] uppercase tracking-wider">
              {pick("Campus Implementation", "विद्यालय कार्यान्वयन सहयोग")}
            </span>
          </div>

          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {pick(
              "Join 120+ Schools & Colleges Thriving with MeroSchool",
              "MeroSchool प्रयोग गरिरहेका १२०+ विद्यालय र कलेजहरूसँग जोडिनुहोस्",
            )}
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {pick(
              "Launch your offline school management system in minutes, or schedule a 100% free on-site campus demonstration where our engineers bring thermal receipt printers and barcode scanners right to your administrative desk.",
              "केही मिनेटमै अफलाइन विद्यालय व्यवस्थापन सुरु गर्नुहोस्, वा हाम्रो टोली थर्मल रसिद प्रिन्टर र बारकोड स्क्यानरसहित तपाईंको प्रशासनिक डेस्कमै आउने १००% निःशुल्क डेमो बुक गर्नुहोस्।",
            )}
          </p>

          <div className="pt-2 flex flex-wrap justify-center items-center gap-3 sm:gap-4">
            <button
              type="button"
              onClick={() => navigate("/contact?type=demo")}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition-colors shadow-md shadow-indigo-600/20 cursor-pointer min-h-[44px]"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>
                {pick("Request a Live Demo", "प्रत्यक्ष डेमो माग गर्नुहोस्")}
              </span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => navigate("/contact")}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-100 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-xs cursor-pointer min-h-[44px]"
            >
              <span>
                {pick(
                  "Contact Support Hub",
                  "सहायता केन्द्रमा सम्पर्क गर्नुहोस्",
                )}
              </span>
            </button>
            <a
              href={`tel:${SCHOOL_CONTACT.phoneMobile}`}
              className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors min-h-[44px]"
            >
              <Phone className="w-4 h-4 text-indigo-500" />
              <span className="font-mono">{SCHOOL_CONTACT.phoneMobile}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
