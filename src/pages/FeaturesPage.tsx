import React, { useState, useMemo, useDeferredValue, lazy, Suspense } from "react";
import { useNavigate } from "react-router-dom";
import {
  Search,
  X,
  ArrowRight,
  Sparkles,
  CheckCircle,
  HelpCircle,
  Monitor,
  Printer,
  GraduationCap,
} from "lucide-react";
import { SEO } from "@/src/components/SEO";
import { AppImage } from "@/src/components/AppImage";
import { useLanguage } from "@/src/context/LanguageContext";
import { MODULES_NE } from "@/src/data/modulesNe";
import { ALL_MODULES, ALL_MODULES as allModules, MODULE_CATEGORIES, ModuleItem } from "@/src/data/modules";
import { ArchitectureComparisonSection } from "@/src/components/ArchitectureComparisonSection";
import { SchoolCalendarShowcase } from "@/src/components/SchoolCalendarShowcase";
import { DeliverablesAndOnboardingSection } from "@/src/components/DeliverablesAndOnboardingSection";
import desktopPosTerminalImg from "@/src/assets/images/desktop_pos_terminal_1794561642933.jpg";

const ThermalReceiptSimulator = lazy(() =>
  import("@/src/components/ThermalReceiptSimulator").then((m) => ({
    default: m.ThermalReceiptSimulator,
  }))
);

export type { ModuleItem };

export const FeaturesPage: React.FC = () => {
  const navigate = useNavigate();
  const { isNepali, pick } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = useMemo(
    () =>
      MODULE_CATEGORIES.map((c) => ({
        id: c.id,
        label: isNepali ? c.labelNe : c.labelEn,
      })),
    [isNepali]
  );

    const deferredQuery = useDeferredValue(searchQuery);

  const localizedModules = useMemo(() => {
    if (!isNepali) return ALL_MODULES;
    return ALL_MODULES.map((m) => {
      const ne = MODULES_NE[m.id];
      if (!ne) return m;
      return {
        ...m,
        categoryLabel: ne.categoryLabel,
        title: ne.title,
        kicker: ne.kicker,
        description: ne.description,
        capabilities: ne.capabilities,
        desktopIntegration: ne.desktopIntegration,
      };
    });
  }, [isNepali]);

  const filteredModules = useMemo(() => {
    const q = deferredQuery.trim().toLowerCase();
    return localizedModules.filter((m) => {
      const matchesCategory =
        activeCategory === "all" || m.category === activeCategory;
      if (!matchesCategory) return false;
      if (!q) return true;
      const orig = allModules.find((o) => o.id === m.id);
      const ne = MODULES_NE[m.id];
      return (
        m.title.toLowerCase().includes(q) ||
        m.description.toLowerCase().includes(q) ||
        m.kicker.toLowerCase().includes(q) ||
        m.capabilities.some((c) => c.toLowerCase().includes(q)) ||
        (orig
          ? orig.title.toLowerCase().includes(q) ||
            orig.description.toLowerCase().includes(q) ||
            orig.kicker.toLowerCase().includes(q) ||
            orig.capabilities.some((c) => c.toLowerCase().includes(q))
          : false) ||
        (ne
          ? ne.title.toLowerCase().includes(q) ||
            ne.description.toLowerCase().includes(q)
          : false)
      );
    });
  }, [localizedModules, allModules, activeCategory, deferredQuery]);

  return (
    <div className="space-y-16 lg:space-y-24 pb-16">
      <SEO
        title={pick(
          "All 44 School ERP Modules & Features",
          "सबै ४४ विद्यालय मोड्युल र सुविधाहरू",
        )}
        description={pick(
          "Explore 44 offline school modules: fee ledgers, ESC/POS receipts, NEB/CBSE broadsheets, B.S./A.D. school calendar, holidays, notices, library, and USB backup.",
          "४४ अफलाइन विद्यालय मोड्युल हेर्नुहोस्: शुल्क खाता, थर्मल रसिद, NEB/CBSE ब्रोडसिट, वि.सं./ई.सं. विद्यालय पात्रो, बिदा, सूचना, पुस्तकालय र USB ब्याकअप।",
        )}
        keywords={pick(
          "44 school ERP modules, school calendar holidays notices announcements, double-entry fee ledger, NEB CBSE report cards, library barcode management, CR80 bus pass, leave management, MeroSchool",
          "४४ विद्यालय मोड्युल, विद्यालय पात्रो बिदा सूचना, विद्यार्थी शुल्क खाता, लब्धाङ्कपत्र, पुस्तकालय बारकोड, बस पास, बिदा व्यवस्थापन",
        )}
        canonicalPath="/features"
        breadcrumbs={[
          { name: pick("Home", "गृहपृष्ठ"), path: "/" },
          { name: pick("Features", "विशेषताहरू"), path: "/features" },
        ]}
        structuredData={{
          "@type": "CollectionPage",
          name: pick(
            "MeroSchool 44 Offline School Modules",
            "MeroSchool ४४ अफलाइन विद्यालय मोड्युलहरू",
          ),
          mainEntity: {
            "@type": "ItemList",
            numberOfItems: allModules.length,
            itemListElement: allModules.slice(0, 12).map((mod, idx) => ({
              "@type": "ListItem",
              position: idx + 1,
              name: mod.title,
              description: mod.description,
            })),
          },
        }}
      />
      {/* 1. Header Section */}
      <section className="pt-6 sm:pt-10 lg:pt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-3 sm:space-y-4">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-indigo-600 dark:text-indigo-400">
            <Monitor className="w-4 h-4 shrink-0" />
            <span>
              {pick("Complete Module Catalog", "सम्पूर्ण मोड्युल सूची")}
            </span>
            <span
              aria-hidden="true"
              className="text-slate-300 dark:text-slate-700"
            >
              ·
            </span>
            <span className="font-mono text-xs tabular-nums">
              {allModules.length}{" "}
              {pick("Integrated Features", "एकीकृत सुविधाहरू")}
            </span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.12] text-balance">
            {pick(
              "Everything Built into MeroSchool Offline Desktop ERP",
              "MeroSchool अफलाइन डेस्कटप ERP भित्र समेटिएका सम्पूर्ण सुविधाहरू",
            )}
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            {isNepali ? (
              <>
                हरेक सुविधा तपाईंको कम्प्युटरकै स्थानीय अफलाइन डेटाबेसमा पूर्ण
                रूपमा चल्छ। विद्यार्थी शुल्क खाता, बिदा व्यवस्थापन, पुस्तकालय
                लेनदेन, यातायात व्यवस्थापन, ब्रोडसिट, छात्रावास कोठा र स्थानीय
                ब्याकअप समेट्ने सबै {allModules.length} विशेष मोड्युलहरू
                हेर्नुहोस्।
              </>
            ) : (
              <>
                Every feature runs completely offline on your computer&apos;s
                local campus database. Explore all {allModules.length}{" "}
                specialized modules covering student fee ledgers, leave
                management, library circulation, transport management,
                broadsheets, hostel rooms, and local backups.
              </>
            )}
          </p>

          {/* On-Site Demo Invitation Banner */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-4 rounded-2xl bg-indigo-50/80 dark:bg-indigo-950/40 border border-indigo-200/80 dark:border-indigo-800/60 text-xs">
            <div className="flex flex-wrap items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
              <span className="font-semibold text-slate-900 dark:text-white">
                {isNepali
                  ? `यी सबै ${allModules.length} मोड्युलहरू विद्यालयमै प्रत्यक्ष हेर्न चाहनुहुन्छ?`
                  : `Want to see these ${allModules.length} modules live in your school?`}
              </span>
              <span className="text-slate-600 dark:text-slate-300">
                {pick(
                  "Our engineers visit your campus with demonstration laptops, USB laser barcode scanners, and 80mm thermal receipt printers.",
                  "हाम्रा इन्जिनियरहरू डेमो ल्यापटप, USB लेजर बारकोड स्क्यानर र 80mm थर्मल रसिद प्रिन्टरसहित तपाईंको विद्यालयमै आउनुहुन्छ।",
                )}
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-2 shrink-0">
              <a
                href="#receipt-simulator"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-indigo-700 dark:text-indigo-300 bg-white dark:bg-slate-900 border border-indigo-200 dark:border-indigo-800 hover:bg-indigo-50 dark:hover:bg-slate-800 transition-colors whitespace-nowrap"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>{pick("Try Receipt Simulator", "रसिद सिमुलेटर")}</span>
              </a>
              <button
                type="button"
                onClick={() => navigate("/contact?type=demo")}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 transition-colors cursor-pointer shadow-xs whitespace-nowrap"
              >
                <span>
                  {pick("Request Free Demo", "निःशुल्क डेमो माग्नुहोस्")}
                </span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Interactive Search & Category Filter Controls */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        {/* Search Bar */}
        <div className="relative max-w-lg">
          <Search className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
          <input
            type="text"
            placeholder={pick(
              "Search all 44 modules (e.g. calendar, holiday, announcement, notices, fees)...",
              "सबै ४४ मोड्युल खोज्नुहोस् (उदा. पात्रो, बिदा, घोषणा, सूचना, शुल्क)...",
            )}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-10 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-indigo-500 shadow-xs min-h-[42px]"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              aria-label={pick("Clear module search", "खोज मेटाउनुहोस्")}
              className="absolute right-2.5 top-2.5 p-1 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Category Filter Pills (Horizontal Scrolling on Small Viewports) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 pt-1 border-b border-slate-200 dark:border-slate-800">
          {categories.map((c) => {
            const count =
              c.id === "all"
                ? allModules.length
                : allModules.filter((m) => m.category === c.id).length;
            const isSelected = activeCategory === c.id;
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => setActiveCategory(c.id)}
                className={`whitespace-nowrap shrink-0 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-colors cursor-pointer flex items-center gap-2 min-h-[38px] ${
                  isSelected
                    ? "bg-indigo-600 text-white font-semibold shadow-xs"
                    : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800"
                }`}
              >
                <span>{c.label}</span>
                <span
                  className={`px-1.5 py-0.2 rounded-full text-[10px] font-mono ${
                    isSelected
                      ? "bg-indigo-700 text-indigo-100"
                      : "bg-slate-100 dark:bg-slate-800 text-slate-500"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* 3. Detailed Modules Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredModules.map((m) => {
            const Icon = m.icon;
            return (
              <div
                key={m.id}
                className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-4 shadow-xs hover:border-indigo-300 dark:hover:border-indigo-700 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 text-right">
                      {m.categoryLabel}
                    </span>
                  </div>

                  <div>
                    <div className="text-[11px] font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                      {m.kicker}
                    </div>
                    <h3 className="font-display text-base font-bold text-slate-900 dark:text-white mt-0.5">
                      {m.title}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {m.description}
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
                    <div className="font-semibold text-[11px] text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                      {pick("Core Capabilities:", "मुख्य विशेषताहरू:")}
                    </div>
                    <ul className="space-y-1 text-slate-600 dark:text-slate-400">
                      {m.capabilities.map((c, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <div className="text-[10px] font-mono text-slate-500 truncate max-w-[180px]">
                    {m.desktopIntegration}
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      navigate(
                        `/contact?type=demo&module=${encodeURIComponent(m.title)}`,
                      )
                    }
                    className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline cursor-pointer"
                  >
                    <span>{pick("Request in Demo", "डेमोमा हेर्नुहोस्")}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {filteredModules.length === 0 && (
          <div className="p-12 text-center rounded-2xl border border-dashed border-slate-300 dark:border-slate-700 space-y-3">
            <Search className="w-8 h-8 text-slate-400 mx-auto" />
            <h4 className="text-sm font-bold text-slate-700 dark:text-slate-300">
              {pick("No matching modules found", "मिल्दो मोड्युल भेटिएन")}
            </h4>
            <p className="text-xs text-slate-500">
              {pick(
                'Try searching with different terms like "ledger", "exam", "attendance", or "bus".',
                'कृपया "शुल्क", "परीक्षा", "हाजिरी", वा "बस" जस्ता फरक शब्दहरू राखेर खोज्नुहोस्।',
              )}
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("all");
              }}
              className="px-3 py-1.5 rounded-lg bg-indigo-600 text-white text-xs font-medium cursor-pointer"
            >
              {pick("Reset Filters", "फिल्टर रिसेट गर्नुहोस्")}
            </button>
          </div>
        )}
      </section>

      {/* 3b. Interactive School Calendar, Holidays, Announcements & Notices Showcase */}
      <SchoolCalendarShowcase />

      {/* 4. Academic Standards & Grading System Compliance */}
      <section className="perf-section max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-8 shadow-xs">
          <div className="max-w-3xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-indigo-600 dark:text-indigo-400 font-mono uppercase tracking-wider">
              <GraduationCap className="w-4 h-4" />
              <span>
                {pick(
                  "Standardized Examination Architecture",
                  "मानकीकृत परीक्षा प्रणाली",
                )}
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
              {pick(
                "Full Compatibility with National & International Grading",
                "राष्ट्रिय तथा अन्तर्राष्ट्रिय ग्रेडिङ मापदण्डसँग पूर्ण अनुकूलता",
              )}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {pick(
                "MeroSchool’s broadsheet calculation engine is parameterized for the statutory requirements of education boards across South Asia and worldwide.",
                "MeroSchool को ब्रोडसिट गणना इन्जिन नेपाल र दक्षिण एसियाली शिक्षा बोर्डहरूको आधिकारिक मापदण्डअनुसार तयार पारिएको छ।",
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 space-y-3">
              <div className="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400 uppercase">
                {pick("Nepal NEB / SEE Standard", "नेपाल NEB / SEE मापदण्ड")}
              </div>
              <h3 className="font-display text-sm font-bold text-slate-900 dark:text-white">
                {pick(
                  "Letter Grading (A+ to NG)",
                  "अक्षराङ्क पद्धति (A+ देखि NG)",
                )}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {pick(
                  "Complies with Curriculum Development Centre (CDC) and NEB guidelines. Automatically converts combined 75% theory and 25% internal/practical marks into Grade Points (GP) and final letter grades.",
                  "पाठ्यक्रम विकास केन्द्र (CDC) र NEB निर्देशिकाअनुरूप। ७५% सैद्धान्तिक र २५% आन्तरिक/प्रयोगात्मक अंकलाई स्वतः Grade Point (GP) र अक्षराङ्क ग्रेडमा रूपान्तरण गर्दछ।",
                )}
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 space-y-3">
              <div className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase">
                {pick("CBSE & ICSE GPA Matrix", "CBSE र ICSE GPA तालिका")}
              </div>
              <h3 className="font-display text-sm font-bold text-slate-900 dark:text-white">
                {pick("10-Point CGPA Scale", "१०-अंकीय CGPA मापदण्ड")}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {pick(
                  "Full support for formative and summative terminal assessments, scholastic grade points, positional subject ranks, and automated pass/fail credit hour thresholds.",
                  "निरन्तर तथा त्रैमासिक मूल्याङ्कन, विषयगत श्रेणी क्रम र उत्तीर्ण/अनुत्तीर्ण क्रेडिट आवर सीमाको पूर्ण समर्थन।",
                )}
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 space-y-3">
              <div className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400 uppercase">
                {pick(
                  "Traditional Percentage & Honors",
                  "परम्परागत प्रतिशत र डिभिजन",
                )}
              </div>
              <h3 className="font-display text-sm font-bold text-slate-900 dark:text-white">
                {pick(
                  "Distinction & Division Ranks",
                  "विशिष्ट र श्रेणी विभाजन",
                )}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {pick(
                  "Customizable mark weighting, distinction tiers (≥80%), first division (≥60%), grace mark allowances, and printable batch report cards with school crest watermarks.",
                  "अनुकूलित अंक भार, विशिष्ट श्रेणी (≥८०%), प्रथम श्रेणी (≥६०%), ग्रेस अंक सुविधा र विद्यालयको वाटरमार्कसहित ब्याच लब्धाङ्कपत्र प्रिन्टिङ।",
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Hardware Studio Intro + Interactive Thermal Receipt Simulator */}
      <section
        id="receipt-simulator"
        className="perf-section max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs">
          <div className="lg:col-span-6 space-y-3">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              {pick(
                "Hardware Peripheral Integration",
                "प्रत्यक्ष हार्डवेयर जडान",
              )}
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
              {pick(
                "Direct USB ESC/POS Thermal Printers & Laser Barcode Scanners",
                "प्रत्यक्ष USB ESC/POS थर्मल प्रिन्टर र लेजर बारकोड स्क्यानर",
              )}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {pick(
                "Unlike cloud portals trapped behind browser print dialogs, MeroSchool talks directly to your front-office hardware: 80mm/58mm thermal cash receipt printers, CR80 PVC ID printers, and USB barcode wedges.",
                "ब्राउजरको प्रिन्ट पपअपमा अड्किने क्लाउड पोर्टलभन्दा फरक, MeroSchool सिधै तपाईंको काउन्टर हार्डवेयर—80mm/58mm थर्मल रसिद प्रिन्टर, CR80 PVC कार्ड प्रिन्टर र USB बारकोड स्क्यानरसँग जोडिन्छ।",
              )}
            </p>
          </div>
          <div className="lg:col-span-6">
            <AppImage
              src={desktopPosTerminalImg}
              alt={pick(
                "MeroSchool front-office counter equipped with an 80mm ESC/POS thermal receipt printer, USB laser barcode scanner, and laminated student ID card",
                "80mm ESC/POS थर्मल रसिद प्रिन्टर, USB लेजर बारकोड स्क्यानर र विद्यार्थी परिचयपत्र सहितको MeroSchool काउन्टर",
              )}
              aspectClass="aspect-[4/3]"
              caption={pick(
                "Turnkey counter setup verified during every on-site campus demonstration.",
                "हरेक प्रत्यक्ष विद्यालय डेमोमा परीक्षण गरिने सम्पूर्ण काउन्टर सेटअप।",
              )}
            />
          </div>
        </div>

        <Suspense
          fallback={
            <div className="h-[520px] rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 flex items-center justify-center text-xs font-mono text-slate-500">
              {pick(
                "Loading interactive ESC/POS receipt simulator...",
                "अन्तरक्रियात्मक ESC/POS रसिद सिमुलेटर लोड हुँदैछ...",
              )}
            </div>
          }
        >
          <ThermalReceiptSimulator />
        </Suspense>
      </section>

      <DeliverablesAndOnboardingSection />

      <ArchitectureComparisonSection totalModules={allModules.length} />
    </div>
  );
};
