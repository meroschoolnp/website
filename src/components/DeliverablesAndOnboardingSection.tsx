import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  FileText,
  Printer,
  QrCode,
  Award,
  HardDrive,
  Upload,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { useLanguage } from "@/src/context/LanguageContext";
import {
  DELIVERABLES_LIST,
  ONBOARDING_STEPS,
  DeliverableItem,
  OnboardingStepItem,
} from "@/src/data/deliverablesData";

export type { DeliverableItem, OnboardingStepItem };

export const DeliverablesAndOnboardingSection: React.FC = () => {
  const navigate = useNavigate();
  const { isNepali, pick } = useLanguage();

  const deliverables = useMemo(
    () =>
      DELIVERABLES_LIST.map((d) => ({
        icon: d.icon,
        format: isNepali ? d.formatNe : d.formatEn,
        title: isNepali ? d.titleNe : d.titleEn,
        desc: isNepali ? d.descNe : d.descEn,
      })),
    [isNepali]
  );

  const onboardingSteps = useMemo(
    () =>
      ONBOARDING_STEPS.map((s) => ({
        step: s.step,
        duration: isNepali ? s.durationNe : s.durationEn,
        title: isNepali ? s.titleNe : s.titleEn,
        desc: isNepali ? s.descNe : s.descEn,
      })),
    [isNepali]
  );

  return (
    <div className="space-y-16 lg:space-y-24">
      {/* Official Offline Print & Export Deliverables */}
      <section className="perf-section max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="max-w-3xl space-y-2.5">
          <div className="text-xs font-mono font-semibold text-indigo-600 dark:text-indigo-400">
            {pick(
              "Print-Ready Institutional Outputs",
              "प्रिन्ट-तयार आधिकारिक कागजातहरू",
            )}
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-tight text-balance">
            {pick(
              "Every Official Document & Card Printed Locally in Seconds",
              "विद्यालयलाई आवश्यक प्रत्येक आधिकारिक कागजात र कार्ड सेकेन्डमै प्रिन्ट",
            )}
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {pick(
              "MeroSchool renders print-ready, crisp A4 transcripts, thermal receipts, PVC cards, and notice circulars locally using your school’s logo crest and serial registers.",
              "MeroSchool ले विद्यालयको लोगो र आधिकारिक दर्ता क्रमसंख्यासहित स्पष्ट A4 लब्धाङ्कपत्र, थर्मल रसिद, PVC कार्ड र सूचना परिपत्र स्थानीय रूपमै तयार पार्दछ।",
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
                      {item.format}
                    </span>
                  </div>
                  <h3 className="font-display text-base font-bold text-slate-900 dark:text-white leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center gap-1.5 text-[11px] font-mono text-emerald-700 dark:text-emerald-400">
                  <CheckCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>
                    {pick(
                      "Zero Internet Required",
                      "इन्टरनेट बिना प्रिन्ट हुने",
                    )}
                  </span>
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
                <span>
                  {pick(
                    "Turnkey Migration Playbook",
                    "सजिलो जडान र डेटा सार्ने प्रक्रिया",
                  )}
                </span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight text-balance">
                {pick(
                  "How Your School Moves from Paper or Cloud to MeroSchool in Under 1 Hour",
                  "कागजी ढड्डा वा क्लाउडबाट १ घण्टाभित्रै MeroSchool मा कसरी सर्ने",
                )}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {pick(
                  "No multi-week IT consulting contracts. Our implementation engineers guide your staff through installation, CSV import, hardware pairing, and USB backup verification.",
                  "लामो प्राविधिक पर्खाइ बिना नै हाम्रो टोलीले स्थापना, CSV डेटा आयात, हार्डवेयर जडान र USB ब्याकअप परीक्षणमा प्रत्यक्ष सहयोग गर्दछ।",
                )}
              </p>
            </div>
            <button
              type="button"
              onClick={() => navigate("/contact?type=demo")}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition-colors cursor-pointer whitespace-nowrap shrink-0 min-h-[42px]"
            >
              <HardDrive className="w-4 h-4" />
              <span>
                {pick(
                  "Book Guided Onboarding",
                  "गाइडेड अनबोर्डिङ बुक गर्नुहोस्",
                )}
              </span>
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
                  <span className="font-bold text-indigo-600 dark:text-indigo-400">
                    {s.step}.
                  </span>
                  <span className="text-slate-500 dark:text-slate-400 tabular-nums">
                    {s.duration}
                  </span>
                </div>
                <h3 className="font-display text-sm font-bold text-slate-900 dark:text-white leading-snug">
                  {s.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
