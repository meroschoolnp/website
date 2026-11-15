import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Check, Lock } from "lucide-react";
import { useLanguage } from "@/src/context/LanguageContext";
import { ROLE_WORKFLOWS, RoleId, RoleWorkflow } from "@/src/data/roleWorkflows";

export type { RoleId, RoleWorkflow };

export const CampusRoleWorkflows: React.FC = () => {
  const navigate = useNavigate();
  const { pick } = useLanguage();
  const [selectedRole, setSelectedRole] = useState<RoleId>("principal");

  const active =
    ROLE_WORKFLOWS.find((r) => r.id === selectedRole) ?? ROLE_WORKFLOWS[0];
  const ActiveIcon = active.icon;

  return (
    <section className="perf-section max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
        <div className="max-w-3xl space-y-2.5">
          <div className="text-xs font-mono font-semibold text-indigo-600 dark:text-indigo-400">
            {pick(
              "Built for Every Campus Desk",
              "विद्यालयका हरेक शाखा र भूमिकाका लागि",
            )}
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-tight text-balance">
            {pick(
              "Tailored Daily Workflows Across Principal, Accounts, Faculty & Logistics",
              "प्रधानाध्यापक, लेखा, शिक्षक र सेवा शाखाका लागि व्यवस्थित दैनिक कार्यप्रवाह",
            )}
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {pick(
              "Select an institutional role below to inspect how MeroSchool partitions permissions, eliminates duplicate paperwork, and keeps every office desk synchronized over your local campus database.",
              "MeroSchool ले अधिकार विभाजन कसरी गर्छ, दोहोरो कागजी काम कसरी हटाउँछ र स्थानीय डेटाबेसबाट प्रत्येक डेस्कलाई कसरी समन्वयमा राख्छ हेर्न तलको भूमिका छान्नुहोस्।",
            )}
          </p>
        </div>
        <button
          type="button"
          onClick={() => navigate("/features")}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:underline cursor-pointer whitespace-nowrap shrink-0"
        >
          <span>
            {pick(
              "Inspect RBAC & all 44 modules",
              "RBAC र सबै ४४ मोड्युल हेर्नुहोस्",
            )}
          </span>
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
                      ? "bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 shadow-2xs"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/60 dark:hover:bg-slate-900/40"
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                      isSelected
                        ? "bg-indigo-600 text-white"
                        : "bg-slate-200/70 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
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
                className={`space-y-2.5 ${idx > 0 ? "md:pl-6 pt-4 md:pt-0 border-t md:border-t-0 border-slate-100 dark:border-slate-800" : ""}`}
              >
                <div className="flex items-center justify-between gap-2 text-[11px] font-mono">
                  <span className="text-slate-500 tabular-nums">
                    0{idx + 1}.
                  </span>
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
              onClick={() => navigate("/contact?type=demo")}
              className="inline-flex items-center gap-1.5 font-semibold text-indigo-600 dark:text-indigo-400 hover:underline cursor-pointer whitespace-nowrap shrink-0"
            >
              <Check className="w-3.5 h-3.5" />
              <span>
                {pick(
                  "Book role-specific walkthrough",
                  "यो भूमिकाको डेमो हेर्नुहोस्",
                )}
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
