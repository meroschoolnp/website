import React, { useState, useMemo, useDeferredValue } from "react";
import { useNavigate } from "react-router-dom";
import {
  HelpCircle,
  ChevronDown,
  Search,
  Sparkles,
  RotateCcw,
  X,
} from "lucide-react";
import { SCHOOL_CONTACT } from "@/src/config/contactInfo";
import { SEO } from "@/src/components/SEO";
import { useLanguage } from "@/src/context/LanguageContext";
import { FAQ_CATEGORIES, FAQ_ITEMS, FaqCategory, FaqItem } from "@/src/data/faqs";
export type { FaqCategory, FaqItem };

export const FaqPage: React.FC = () => {
  const navigate = useNavigate();
  const { isNepali, pick } = useLanguage();
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const deferredQuery = useDeferredValue(searchQuery);

  const faqCategories = useMemo(
    () =>
      FAQ_CATEGORIES.map((c) => ({
        id: c.id,
        label: isNepali ? c.labelNe : c.labelEn,
      })),
    [isNepali]
  );

  const faqItems = FAQ_ITEMS;

  const filtered = useMemo(() => {
    const q = deferredQuery.trim().toLowerCase();
    return faqItems.filter((f) => {
      const catMatch =
        activeCategory === "all" || f.category === activeCategory;
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
          "FAQs & Offline Setup Guide",
          "बारम्बार सोधिने प्रश्न र जडान गाइड",
        )}
        description={pick(
          "Find clear answers on MeroSchool offline campus setup, local data backups, CSV student import, thermal printers, barcode scanners, and B.S./A.D. calendars.",
          "MeroSchool अफलाइन जडान, स्थानीय डेटा ब्याकअप, CSV विद्यार्थी आयात, थर्मल प्रिन्टर, बारकोड स्क्यानर र वि.सं./ई.सं. पात्रोसम्बन्धी सम्पूर्ण प्रश्नोत्तर।",
        )}
        keywords={pick(
          "MeroSchool FAQ, offline school software setup, local campus backup, thermal printer barcode scanner, CSV student migration, B.S. A.D. school calendar",
          "MeroSchool प्रश्नोत्तर, अफलाइन विद्यालय सफ्टवेयर जडान, स्थानीय डेटा ब्याकअप, थर्मल प्रिन्टर बारकोड स्क्यानर, CSV आयात",
        )}
        canonicalPath="/faqs"
        breadcrumbs={[
          { name: pick("Home", "गृहपृष्ठ"), path: "/" },
          { name: pick("FAQs", "प्रश्नोत्तर"), path: "/faqs" },
        ]}
        structuredData={{
          "@type": "FAQPage",
          inLanguage: isNepali ? "ne" : "en",
          mainEntity: faqItems.map((item) => ({
            "@type": "Question",
            name: isNepali ? item.qNe : item.q,
            acceptedAnswer: {
              "@type": "Answer",
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
            <span>{pick("Knowledge Base", "ज्ञान केन्द्र")}</span>
            <span
              aria-hidden="true"
              className="text-slate-300 dark:text-slate-700"
            >
              ·
            </span>
            <span className="text-slate-600 dark:text-slate-400 font-medium">
              {pick(
                "Technical Architecture & Deployment Answers",
                "प्राविधिक संरचना र जडानसम्बन्धी उत्तरहरू",
              )}
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.12] text-balance">
            {pick("Frequently Asked Questions", "बारम्बार सोधिने प्रश्नहरू")}
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            {pick(
              "Everything principals, accountants, and campus coordinators need to know about local offline storage, hardware peripherals, CSV migration, and multi-PC LAN setups.",
              "स्थानीय अफलाइन भण्डारण, हार्डवेयर उपकरण, CSV डेटा आयात र बहु-पीसी LAN सेटअपबारे प्रधानाध्यापक, लेखापाल र प्रशासनलाई आवश्यक सम्पूर्ण जानकारी।",
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
                "Search questions (e.g. offline, backup, CSV, thermal, LAN)...",
                "प्रश्न खोज्नुहोस् (जस्तै: अफलाइन, ब्याकअप, CSV, थर्मल, LAN)...",
              )}
              aria-label={pick(
                "Search frequently asked questions",
                "बारम्बार सोधिने प्रश्न खोज्नुहोस्",
              )}
              className="w-full pl-10 pr-10 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-indigo-500 shadow-xs min-h-[42px]"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setActiveFaq(0);
                }}
                aria-label={pick("Clear FAQ search", "खोज मेटाउनुहोस्")}
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
                  ? "bg-indigo-600 text-white font-semibold shadow-xs"
                  : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800"
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
                      isOpen
                        ? "rotate-180 text-indigo-600 dark:text-indigo-400"
                        : ""
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
                setSearchQuery("");
                setActiveCategory("all");
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-indigo-600 text-white hover:bg-indigo-700 transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>
                {pick("Reset Search & Filters", "खोज र फिल्टर रिसेट गर्नुहोस्")}
              </span>
            </button>
          </div>
        )}
      </section>

      {/* 3b. Pre-Demo Campus Readiness Checklist */}
      <section className="perf-section max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-5 shadow-xs">
          <div className="space-y-1">
            <div className="text-xs font-mono font-semibold text-indigo-600 dark:text-indigo-400">
              {pick("Pre-Demo Preparation", "डेमो अघिको तयारी")}
            </div>
            <h2 className="font-display text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
              {pick(
                "What Your School Needs Before a Free Campus Walkthrough",
                "निःशुल्क विद्यालय डेमोका लागि के-के तयार राख्ने",
              )}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
            <div className="space-y-1.5">
              <div className="font-bold text-slate-900 dark:text-white">
                {pick(
                  "01. Any Existing PC or Laptop",
                  "०१. कार्यालयको सामान्य कम्प्युटर",
                )}
              </div>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {pick(
                  "Windows 10/11, macOS, or Linux with 2 GB+ RAM. No internet connection or dedicated server room is needed.",
                  "२ GB+ RAM भएको Windows, macOS वा Linux पीसी। इन्टरनेट वा छुट्टै सर्भर कोठा आवश्यक पर्दैन।",
                )}
              </p>
            </div>
            <div className="space-y-1.5">
              <div className="font-bold text-slate-900 dark:text-white">
                {pick(
                  "02. Optional Sample Fee Sheet",
                  "०२. नमुना शुल्क तालिका वा CSV",
                )}
              </div>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {pick(
                  "Share a sample Excel student list or fee structure so our engineer tests your real grades and receipts live.",
                  "तपाईंको विद्यालयको वास्तविक शुल्क र कक्षा नमुनामा प्रत्यक्ष परीक्षण गर्न चाहिनेमा एउटा Excel सूची राख्नुहोस्।",
                )}
              </p>
            </div>
            <div className="space-y-1.5">
              <div className="font-bold text-slate-900 dark:text-white">
                {pick(
                  "03. Key Staff in 30-Min Session",
                  "०३. मुख्य कर्मचारीको ३० मिनेट समय",
                )}
              </div>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {pick(
                  "Invite your Principal, Chief Accountant, and Exam Coordinator—our team brings our own 80mm thermal printer & scanner.",
                  "प्रधानाध्यापक, मुख्य लेखापाल र परीक्षा संयोजक सहभागी हुनुहोस्—हाम्रो टोलीले आफ्नै ८०mm प्रिन्टर र स्क्यानर ल्याउँछ।",
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
            {pick(
              "Have a question that is not covered here?",
              "यहाँ नसमेटिएको अरू कुनै प्रश्न छ?",
            )}
          </h2>
          <p className="text-xs text-slate-600 dark:text-slate-400 max-w-md mx-auto">
            {isNepali ? (
              <>
                हाम्रो इन्जिनियरिङ र प्राविधिक सहायता टोलीलाई सिधै{" "}
                <a
                  href={`mailto:${SCHOOL_CONTACT.email}`}
                  className="text-indigo-600 dark:text-indigo-400 underline font-mono font-bold"
                >
                  {SCHOOL_CONTACT.email}
                </a>{" "}
                मा इमेल वा {SCHOOL_CONTACT.phonesDisplay} मा फोन गर्नुहोस्।
              </>
            ) : (
              <>
                Contact our engineering and technical support team directly at{" "}
                <a
                  href={`mailto:${SCHOOL_CONTACT.email}`}
                  className="text-indigo-600 dark:text-indigo-400 underline font-mono font-bold"
                >
                  {SCHOOL_CONTACT.email}
                </a>{" "}
                or call {SCHOOL_CONTACT.phonesDisplay}.
              </>
            )}
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <button
              type="button"
              onClick={() => navigate("/contact?type=demo")}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition-colors cursor-pointer shadow-xs"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>
                {pick(
                  "Request Free On-Site Demo",
                  "निःशुल्क विद्यालय डेमो माग गर्नुहोस्",
                )}
              </span>
            </button>
            <button
              type="button"
              onClick={() => navigate("/contact")}
              className="px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            >
              {pick("Contact Support Desk", "सहायता डेस्कमा सम्पर्क")}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
