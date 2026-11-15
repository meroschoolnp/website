import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Check, Monitor, Sparkles, X, Zap } from "lucide-react";
import { useLanguage } from "@/src/context/LanguageContext";
import { COMPARISON_ROWS, ComparisonRow } from "@/src/data/architectureComparison";

export type { ComparisonRow };

interface Props {
  totalModules: number;
}

export const ArchitectureComparisonSection: React.FC<Props> = ({
  totalModules,
}) => {
  const navigate = useNavigate();
  const { isNepali, pick } = useLanguage();

  return (
    <>
      {/* 6. Architectural Head-to-Head: MeroSchool Desktop ERP vs. Generic Cloud School ERP */}
      <section
        id="comparison"
        className="perf-section max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8"
      >
        <div className="max-w-3xl space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-indigo-600 dark:text-indigo-400 font-mono uppercase tracking-wider">
            <Zap className="w-4 h-4" />
            <span>
              {pick(
                "Architectural Head-to-Head Comparison",
                "प्रणालीगत तुलनात्मक अध्ययन",
              )}
            </span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            {pick(
              "MeroSchool Desktop ERP vs. Generic Cloud School ERP",
              "MeroSchool डेस्कटप ERP बनाम सामान्य क्लाउड स्कूल ERP",
            )}
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            {pick(
              "Why local-first desktop software outperforms subscription cloud systems when school gates open, fee queues form, and internet connectivity fluctuates.",
              "विद्यालय खुल्दा, शुल्क काउन्टरमा भीड लाग्दा र इन्टरनेट अवरुद्ध हुँदा स्थानीय-प्रथम डेस्कटप सफ्टवेयर किन क्लाउड सदस्यता प्रणालीभन्दा उत्कृष्ट हुन्छ।",
            )}
          </p>
        </div>

        {/* Comparison Table Container */}
        <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[740px]">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
                  <th className="py-4 px-6 text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider w-[28%]">
                    {pick("Dimension & Capability", "मापदण्ड र क्षमता")}
                  </th>
                  <th className="py-4 px-6 text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider w-[36%] bg-indigo-50/60 dark:bg-indigo-950/30 border-x border-indigo-100 dark:border-indigo-900/50">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-extrabold">
                        {pick(
                          "MeroSchool Desktop ERP",
                          "MeroSchool डेस्कटप ERP",
                        )}
                      </span>
                      <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold normal-case">
                        {pick("Local-First Native", "स्थानीय-प्रथम नेटिभ")}
                      </span>
                    </div>
                  </th>
                  <th className="py-4 px-6 text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider w-[36%]">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-semibold text-slate-600 dark:text-slate-400">
                        {pick(
                          "Generic Cloud School ERP / SaaS",
                          "सामान्य क्लाउड स्कूल ERP / SaaS",
                        )}
                      </span>
                      <span className="text-[11px] font-mono text-rose-600 dark:text-rose-400 font-semibold normal-case">
                        {pick("Web-Only Cloud", "वेब-मात्र क्लाउड")}
                      </span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800/80 text-xs">
                {COMPARISON_ROWS.map((row, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-slate-50/60 dark:hover:bg-slate-800/30 transition-colors"
                  >
                    <td className="py-4 px-6 align-top">
                      <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-1">
                        {pick(row.kickerEn, row.kickerNe)}
                      </div>
                      <div className="font-semibold text-slate-900 dark:text-white text-xs sm:text-sm">
                        {pick(row.titleEn, row.titleNe)}
                      </div>
                    </td>
                    <td className="py-4 px-6 align-top bg-indigo-50/30 dark:bg-indigo-950/15 border-x border-indigo-100 dark:border-indigo-900/30">
                      <div className="flex items-start gap-2.5">
                        <span className="mt-0.5 inline-flex items-center justify-center w-4 h-4 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 shrink-0">
                          <Check className="w-3 h-3 stroke-[2.5]" />
                        </span>
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="font-bold text-slate-900 dark:text-white">
                              {pick(row.proTitleEn, row.proTitleNe)}
                            </span>
                            <span className="text-[11px] font-mono font-semibold text-emerald-700 dark:text-emerald-400">
                              · {pick(row.proTagEn, row.proTagNe)}
                            </span>
                          </div>
                          <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-[11px] sm:text-xs">
                            {pick(row.proDescEn, row.proDescNe)}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6 align-top">
                      <div className="flex items-start gap-2.5">
                        <span className="mt-0.5 inline-flex items-center justify-center w-4 h-4 rounded-full bg-rose-100 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 shrink-0">
                          <X className="w-3 h-3 stroke-[2.5]" />
                        </span>
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="font-semibold text-slate-800 dark:text-slate-200">
                              {pick(row.conTitleEn, row.conTitleNe)}
                            </span>
                            <span className="text-[11px] font-mono font-semibold text-rose-700 dark:text-rose-400">
                              · {pick(row.conTagEn, row.conTagNe)}
                            </span>
                          </div>
                          <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-[11px] sm:text-xs">
                            {pick(row.conDescEn, row.conDescNe)}
                          </p>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-3 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 text-[11px] text-center text-slate-600 dark:text-slate-400">
            {pick(
              "Tip: On mobile screens, scroll horizontally across the matrix to view side-by-side specifications.",
              "सुझाव: मोबाइल स्क्रिनमा तालिका दायाँ-बायाँ स्क्रोल गरेर दुवै प्रणालीका विवरण सँगै हेर्न सक्नुहुन्छ।",
            )}
          </div>
        </div>

        {/* 3 Summary Takeaway Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-2 shadow-xs">
            <div className="text-3xl font-extrabold font-mono tabular-nums text-emerald-600 dark:text-emerald-400">
              0.0 ms
            </div>
            <div className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              {pick("Internet Downtime Risk", "इन्टरनेट अवरोध जोखिम")}
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              {pick(
                "School operations never stop. Fee collection, exam broadsheets, and gate passes function seamlessly during fiber cuts or stormy weather.",
                "विद्यालयको काम कहिल्यै रोकिँदैन। फाइबर टुट्दा वा खराब मौसममा पनि शुल्क संकलन, परीक्षा ब्रोडसिट र गेट पास सहजै चल्दछन्।",
              )}
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-2 shadow-xs">
            <div className="text-3xl font-extrabold font-mono tabular-nums text-indigo-600 dark:text-indigo-400">
              &lt; 1 ms
            </div>
            <div className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              {pick(
                "Sub-Millisecond Query Latency",
                "१ मिलिसेकेन्डभन्दा कम गति",
              )}
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              {pick(
                "Direct local offline database transactions clear long cashier queues at 120+ receipts per minute without waiting spinners.",
                "स्थानीय अफलाइन डेटाबेसले प्रति मिनेट १२०+ रसिद प्रिन्ट गर्दै क्यासियरको लामो लाइन छिट्टै खाली गर्छ।",
              )}
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-2 shadow-xs">
            <div className="text-3xl font-extrabold font-mono tabular-nums text-amber-600 dark:text-amber-400">
              100%
            </div>
            <div className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              {pick("Campus Data Sovereignty", "विद्यालय डेटा स्वामित्व")}
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              {pick(
                "Institutional student records, grades, and accounting ledgers live securely on school hardware with zero external tracking or subscription price hikes.",
                "विद्यार्थी अभिलेख, नतिजा र लेखा खाता विद्यालयकै कम्प्युटरमा सुरक्षित रहन्छन्; कुनै बाह्य ट्र्याकिङ वा वार्षिक मूल्यवृद्धि हुँदैन।",
              )}
            </p>
          </div>
        </div>

        {/* Demo Callout Strip */}
        <div className="p-6 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-200/80 dark:border-indigo-900/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <div className="font-bold text-slate-900 dark:text-white text-sm sm:text-base flex items-center justify-center sm:justify-start gap-2">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>
                {pick(
                  "Ready to test this sub-millisecond local speed at your institution?",
                  "तपाईंको विद्यालयमै यो तीव्र स्थानीय गति प्रत्यक्ष परीक्षण गर्न तयार हुनुहुन्छ?",
                )}
              </span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              {pick(
                "Our software engineers will visit your school with laptops and thermal printers for a free, zero-commitment trial.",
                "हाम्रा सफ्टवेयर इन्जिनियरहरू निःशुल्क परीक्षणका लागि ल्यापटप र थर्मल प्रिन्टरसहित तपाईंको विद्यालयमै आउनुहुनेछ।",
              )}
            </p>
          </div>
          <button
            type="button"
            onClick={() => navigate("/contact?type=demo")}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition-colors shadow-xs cursor-pointer whitespace-nowrap"
          >
            <span>
              {pick(
                "Request Free On-Site Demo",
                "निःशुल्क विद्यालय डेमो माग्नुहोस्",
              )}
            </span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

      {/* Bottom CTA Strip */}
      <section className="perf-section max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-indigo-200 dark:border-indigo-900 bg-gradient-to-br from-indigo-50/80 via-white to-indigo-50/50 dark:from-slate-900 dark:via-slate-900 dark:to-indigo-950/40 p-8 sm:p-12 space-y-4 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
            {isNepali
              ? `तपाईंको विद्यालयको डेस्कटपमा सबै ${totalModules} मोड्युलहरू जडान गर्नुहोस्`
              : `Deploy All ${totalModules} Modules on Your School Desktop`}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {isNepali ? (
              <>
                सबै {totalModules} मोड्युलहरू सक्रिय इन्टरनेट जडान बिना नै
                स्थानीय रूपमा चल्दछन्। Windows, Linux, वा macOS मा MeroSchool
                प्रयोग गरी पूर्ण सञ्चालन स्वतन्त्रताका साथ विद्यालय व्यवस्थापन
                गर्नुहोस्।
              </>
            ) : (
              <>
                All {totalModules} modules run locally without requiring an
                active internet connection. Experience MeroSchool for Windows,
                Linux, or macOS and manage your school with complete operational
                independence.
              </>
            )}
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <button
              type="button"
              onClick={() => navigate("/contact?type=demo")}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition-colors shadow-xs cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>
                {pick(
                  "Request Free On-Site Demo",
                  "निःशुल्क विद्यालय डेमो माग्नुहोस्",
                )}
              </span>
            </button>
            <button
              type="button"
              onClick={() => navigate("/features")}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-100 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 hover:bg-slate-50 transition-colors shadow-xs cursor-pointer"
            >
              <Monitor className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span>
                {pick("Explore 44 Modules", "सबै ४४ मोड्युलहरू हेर्नुहोस्")}
              </span>
            </button>
            <button
              type="button"
              onClick={() => navigate("/contact")}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              <span>
                {pick("Implementation Assistance", "कार्यान्वयन सहायता")}
              </span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
