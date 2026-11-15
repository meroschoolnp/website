import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/src/context/LanguageContext';
import { TCO_DEFAULTS, calculateTcoMetrics } from '@/src/data/tcoData';

export const TcoSavingsCalculator: React.FC = () => {
  const navigate = useNavigate();
  const { pick } = useLanguage();
  const [students, setStudents] = useState<number>(TCO_DEFAULTS.students);
  const [monthlyPerStudentFee, setMonthlyPerStudentFee] = useState<number>(
    TCO_DEFAULTS.monthlyPerStudentFee
  );
  const [years, setYears] = useState<number>(TCO_DEFAULTS.years);

  const metrics = useMemo(
    () => calculateTcoMetrics(students, monthlyPerStudentFee, years),
    [students, monthlyPerStudentFee, years]
  );

  return (
    <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-10 space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Controls */}
        <div className="lg:col-span-6 space-y-6">
          <div className="space-y-2">
            <div className="text-xs font-mono font-semibold text-emerald-700 dark:text-emerald-400">
              {pick('Total Cost of Ownership Estimator', 'कुल लागत बचत अनुमानक')}
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight text-balance">
              {pick('Calculate Your School’s Multi-Year Savings', 'तपाईंको विद्यालयको बहु-वर्षीय बचत गणना गर्नुहोस्')}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {pick(
                'Cloud ERP vendors bill recurring fees per student every month. Adjust your campus size below to compare multi-year cloud charges against perpetual local ownership.',
                'क्लाउड सफ्टवेयर प्रदायकहरूले हरेक महिना प्रति-विद्यार्थी शुल्क लिन्छन्। तल विद्यार्थी संख्या मिलाएर बहु-वर्षीय क्लाउड खर्च र स्थानीय MeroSchool स्वामित्वबीच तुलना गर्नुहोस्।'
              )}
            </p>
          </div>

          <div className="space-y-5">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-semibold">
                <label htmlFor="tco-students" className="text-slate-700 dark:text-slate-300">
                  {pick('Enrolled Students on Campus', 'विद्यालयमा अध्ययनरत विद्यार्थी संख्या')}
                </label>
                <span className="font-mono tabular-nums text-indigo-600 dark:text-indigo-400">
                  {students.toLocaleString()} {pick('students', 'विद्यार्थी')}
                </span>
              </div>
              <input
                id="tco-students"
                type="range"
                min={150}
                max={3000}
                step={50}
                value={students}
                onChange={(e) => setStudents(Number(e.target.value))}
                className="w-full accent-indigo-600"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-semibold">
                <label htmlFor="tco-rate" className="text-slate-700 dark:text-slate-300">
                  {pick('Typical Cloud SaaS Fee (Rs. / student / month)', 'अन्य क्लाउड शुल्क (रु. / विद्यार्थी / महिना)')}
                </label>
                <span className="font-mono tabular-nums text-slate-900 dark:text-white">
                  {pick(`Rs. ${monthlyPerStudentFee} / mo`, `रु. ${monthlyPerStudentFee} / महिना`)}
                </span>
              </div>
              <input
                id="tco-rate"
                type="range"
                min={20}
                max={120}
                step={5}
                value={monthlyPerStudentFee}
                onChange={(e) => setMonthlyPerStudentFee(Number(e.target.value))}
                className="w-full accent-indigo-600"
              />
            </div>

            <div className="space-y-2">
              <div className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                {pick('Comparison Horizon', 'तुलना अवधि')}
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[3, 5, 10].map((yr) => (
                  <button
                    key={yr}
                    type="button"
                    onClick={() => setYears(yr)}
                    className={`py-2 px-3 rounded-xl text-xs font-mono font-semibold border transition-colors cursor-pointer ${
                      years === yr
                        ? 'bg-indigo-600 text-white border-indigo-600'
                        : 'bg-slate-50 dark:bg-slate-950 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-slate-300'
                    }`}
                  >
                    {yr} {pick('Years', 'वर्ष')}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Financial Breakdown */}
        <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-5">
          <div className="space-y-1 border-b border-slate-200 dark:border-slate-800 pb-4">
            <div className="text-xs font-mono text-slate-500 dark:text-slate-400">
              {pick(`Projected ${years}-Year Institutional Savings`, `${years}-वर्षमा अनुमानित संस्थागत बचत`)}
            </div>
            <div className="font-display text-3xl sm:text-4xl font-bold font-mono tabular-nums text-emerald-600 dark:text-emerald-400">
              {pick(`Rs. ${metrics.estimatedSavings.toLocaleString()}`, `रु. ${metrics.estimatedSavings.toLocaleString()}`)}
            </div>
            <div className="text-xs text-slate-600 dark:text-slate-400">
              {pick(
                'Retained in your school budget instead of recurring cloud hosting fees',
                'नियमित क्लाउड होस्टिङ शुल्कमा खर्च हुनुको साटो विद्यालयकै कोषमा जोगिने रकम'
              )}
            </div>
          </div>

          <div className="space-y-3 text-xs font-mono tabular-nums">
            <div className="flex items-center justify-between">
              <span className="font-sans text-slate-600 dark:text-slate-400">
                {pick(`Recurring Cloud ERP (${years} yrs total)`, `नियमित क्लाउड ERP खर्च (${years} वर्ष कुल)`)}
              </span>
              <span className="font-semibold text-rose-600 dark:text-rose-400">
                {pick(`Rs. ${metrics.totalCloudCost.toLocaleString()}`, `रु. ${metrics.totalCloudCost.toLocaleString()}`)}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-sans text-slate-600 dark:text-slate-400">
                {pick('MeroSchool Offline Perpetual Deployment', 'MeroSchool अफलाइन एकपटक स्थापना')}
              </span>
              <span className="font-semibold text-slate-900 dark:text-white">
                {pick(`Rs. ${metrics.meroschoolPerpetualCost.toLocaleString()} once`, `रु. ${metrics.meroschoolPerpetualCost.toLocaleString()} एकपटक`)}
              </span>
            </div>
            <div className="flex items-center justify-between pt-2 border-t border-slate-200 dark:border-slate-800">
              <span className="font-sans font-semibold text-slate-900 dark:text-white">
                {pick('Monthly Cloud Server Tax', 'मासिक क्लाउड सर्भर शुल्क')}
              </span>
              <span className="font-bold text-emerald-600 dark:text-emerald-400">
                {pick('Rs. 0 / month', 'रु. ० / महिना')}
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => navigate('/contact?type=demo')}
            className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition-colors cursor-pointer"
          >
            <span>{pick('Request Institutional Proposal & Free Demo', 'संस्थागत प्रस्ताव र निःशुल्क डेमो माग गर्नुहोस्')}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
