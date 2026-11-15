import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Printer,
  Check,
} from "lucide-react";

import { useLanguage } from "@/src/context/LanguageContext";
import {
  ShowcaseTabId,
  WORKSPACE_TABS,
  WorkspaceTabItem,
} from "@/src/data/workspaceData";

export type { ShowcaseTabId, WorkspaceTabItem };

export const InteractiveWorkspaceShowcase: React.FC = () => {
  const navigate = useNavigate();
  const { isNepali, pick } = useLanguage();
  const [activeTab, setActiveTab] = useState<ShowcaseTabId>("fees");
  const [gradingBoard, setGradingBoard] = useState<"NEB" | "CBSE">("NEB");

  const tabs = useMemo(
    () =>
      WORKSPACE_TABS.map((t) => ({
        id: t.id,
        index: t.index,
        label: isNepali ? t.labelNe : t.labelEn,
        headline: isNepali ? t.headlineNe : t.headlineEn,
        summary: isNepali ? t.summaryNe : t.summaryEn,
        icon: t.icon,
      })),
    [isNepali]
  );

  const currentTab = tabs.find((t) => t.id === activeTab) || tabs[0];

  return (
    <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden">
      {/* Top Interactive Tab Strip */}
      <div className="border-b border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/60 p-2 sm:p-3">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`text-left px-3.5 py-3 rounded-xl transition-colors cursor-pointer flex items-center gap-3 min-h-[44px] ${
                  active
                    ? "bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 shadow-2xs"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/60 dark:hover:bg-slate-900/40"
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                    active
                      ? "bg-indigo-600 text-white"
                      : "bg-slate-200/70 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] font-mono text-indigo-600 dark:text-indigo-400 font-semibold">
                    {tab.index}.
                  </div>
                  <div className="text-xs font-semibold truncate">
                    {tab.label}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Interactive Split Preview */}
      <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
        {/* Left Explanatory Narrative (5 cols) */}
        <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between gap-6 border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-slate-800">
          <div className="space-y-4">
            <div className="text-xs font-mono text-indigo-600 dark:text-indigo-400 font-semibold">
              {currentTab.index}. {currentTab.label}
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight leading-snug text-balance">
              {currentTab.headline}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {currentTab.summary}
            </p>
          </div>

          <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-600 dark:text-slate-400">
              <span>
                {pick("Crash-Safe Local Storage", "सुरक्षित स्थानीय भण्डारण")}
              </span>
              <span aria-hidden="true">·</span>
              <span>{pick("Zero Cloud Latency", "शून्य क्लाउड विलम्ब")}</span>
              <span aria-hidden="true">·</span>
              <span>
                {pick("Keyboard Shortcut Ready", "किबोर्ड सर्टकट सुविधा")}
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => navigate("/features#receipt-simulator")}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition-colors cursor-pointer whitespace-nowrap"
              >
                <span>
                  {pick(
                    "Open Interactive Simulator",
                    "अन्तरक्रियात्मक सिम्युलेटर खोल्नुहोस्",
                  )}
                </span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={() => navigate("/contact?type=demo")}
                className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer whitespace-nowrap"
              >
                <span>
                  {pick("Book Live Walkthrough", "लाइभ डेमो बुक गर्नुहोस्")}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Interactive Realistic Screen Preview (7 cols) */}
        <div className="lg:col-span-7 p-6 sm:p-8 bg-slate-50/70 dark:bg-slate-950/60 flex flex-col justify-center">
          {activeTab === "fees" && (
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden">
              <div className="px-5 py-3.5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-semibold text-slate-900 dark:text-white">
                    {pick(
                      "Scholar Fee Ledger · Grade 10 Section A",
                      "विद्यार्थी शुल्क खाता · कक्षा १० सेक्सन A",
                    )}
                  </div>
                  <div className="text-[11px] text-slate-500">
                    {pick(
                      "Double-entry running balance · ESC/POS Counter 01",
                      "दोहोरो लेखा चलन मौज्दात · ESC/POS काउन्टर ०१",
                    )}
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-emerald-700 dark:text-emerald-400 font-semibold">
                  <Printer className="w-3.5 h-3.5" />
                  <span>{pick("Thermal Ready", "थर्मल प्रिन्ट तयार")}</span>
                </span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-slate-100 dark:border-slate-800 text-slate-500 font-mono text-[11px]">
                      <th className="py-2.5 px-4">
                        {pick("Voucher #", "भौचर नं.")}
                      </th>
                      <th className="py-2.5 px-4">
                        {pick("Particulars", "विवरण")}
                      </th>
                      <th className="py-2.5 px-4 text-right">
                        {pick("Billed (NPR)", "बिल रकम")}
                      </th>
                      <th className="py-2.5 px-4 text-right">
                        {pick("Paid (NPR)", "तिरेको रकम")}
                      </th>
                      <th className="py-2.5 px-4 text-right">
                        {pick("Balance", "बाँकी")}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800 font-mono tabular-nums text-[11px]">
                    <tr>
                      <td className="py-2.5 px-4 text-slate-500">
                        INV-2082-014
                      </td>
                      <td className="py-2.5 px-4 font-sans font-medium text-slate-800 dark:text-slate-200">
                        {pick(
                          "Baisakh Tuition & Lab Fee",
                          "वैशाख शिक्षण तथा प्रयोगशाला शुल्क",
                        )}
                      </td>
                      <td className="py-2.5 px-4 text-right">6,200.00</td>
                      <td className="py-2.5 px-4 text-right text-emerald-600 dark:text-emerald-400">
                        6,200.00
                      </td>
                      <td className="py-2.5 px-4 text-right text-slate-500">
                        0.00
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-4 text-slate-500">
                        INV-2082-089
                      </td>
                      <td className="py-2.5 px-4 font-sans font-medium text-slate-800 dark:text-slate-200">
                        {pick(
                          "Jestha Bus Transit (Route 04)",
                          "जेठ बस यातायात शुल्क (रुट ०४)",
                        )}
                      </td>
                      <td className="py-2.5 px-4 text-right">1,800.00</td>
                      <td className="py-2.5 px-4 text-right text-emerald-600 dark:text-emerald-400">
                        1,000.00
                      </td>
                      <td className="py-2.5 px-4 text-right font-semibold text-amber-600 dark:text-amber-400">
                        800.00
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-4 text-slate-500">
                        CON-2082-003
                      </td>
                      <td className="py-2.5 px-4 font-sans font-medium text-slate-800 dark:text-slate-200">
                        {pick(
                          "Merit Scholarship Waiver (15%)",
                          "जेहेन्दार छात्रवृत्ति छुट (१५%)",
                        )}
                      </td>
                      <td className="py-2.5 px-4 text-right">-</td>
                      <td className="py-2.5 px-4 text-right text-indigo-600 dark:text-indigo-400">
                        675.00
                      </td>
                      <td className="py-2.5 px-4 text-right font-bold text-slate-900 dark:text-white">
                        125.00
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="px-5 py-3 bg-slate-50 dark:bg-slate-950/60 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-600 dark:text-slate-400">
                <span>
                  {pick(
                    "Cash + Bank Transfer + Card POS + Cheque",
                    "नगद + बैंक ट्रान्सफर + कार्ड POS + चेक",
                  )}
                </span>
                <span className="font-semibold text-slate-900 dark:text-white">
                  {pick("Net Payable: NPR 125.00", "तिर्न बाँकी: रु. 125.00")}
                </span>
              </div>
            </div>
          )}

          {activeTab === "exams" && (
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden">
              <div className="px-5 py-3.5 border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <div className="text-xs font-semibold text-slate-900 dark:text-white">
                    {pick(
                      "Terminal Broadsheet Matrix · First Term 2082",
                      "त्रैमासिक ब्रोडसिट म्याट्रिक्स · प्रथम परीक्षा २०८२",
                    )}
                  </div>
                  <div className="text-[11px] text-slate-500">
                    {pick(
                      "75% Theory + 25% Internal Practical · Auto Rank & GPA",
                      "७५% सैद्धान्तिक + २५% प्रयोगात्मक · स्वतः स्थान र GPA",
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-800 rounded-lg">
                  <button
                    type="button"
                    onClick={() => setGradingBoard("NEB")}
                    className={`px-2.5 py-1 text-[11px] font-mono font-semibold rounded-md transition-colors cursor-pointer ${
                      gradingBoard === "NEB"
                        ? "bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-2xs"
                        : "text-slate-600 dark:text-slate-400"
                    }`}
                  >
                    {pick("NEB Letter", "NEB अक्षराङ्क")}
                  </button>
                  <button
                    type="button"
                    onClick={() => setGradingBoard("CBSE")}
                    className={`px-2.5 py-1 text-[11px] font-mono font-semibold rounded-md transition-colors cursor-pointer ${
                      gradingBoard === "CBSE"
                        ? "bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-2xs"
                        : "text-slate-600 dark:text-slate-400"
                    }`}
                  >
                    CBSE CGPA
                  </button>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-slate-100 dark:border-slate-800 text-slate-500 font-mono text-[11px]">
                      <th className="py-2.5 px-4">{pick("Roll", "रोल")}</th>
                      <th className="py-2.5 px-4">
                        {pick("Scholar", "विद्यार्थी")}
                      </th>
                      <th className="py-2.5 px-4 text-right">
                        {pick("Math", "गणित")}
                      </th>
                      <th className="py-2.5 px-4 text-right">
                        {pick("Science", "विज्ञान")}
                      </th>
                      <th className="py-2.5 px-4 text-right">
                        {pick("English", "अंग्रेजी")}
                      </th>
                      <th className="py-2.5 px-4 text-right">
                        {gradingBoard === "NEB"
                          ? pick("GPA / Grade", "GPA / ग्रेड")
                          : "CGPA"}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800 font-mono tabular-nums text-[11px]">
                    <tr>
                      <td className="py-2.5 px-4 text-slate-500">01</td>
                      <td className="py-2.5 px-4 font-sans font-medium text-slate-800 dark:text-slate-200">
                        {pick("Aayusha Gurung", "आयुषा गुरुङ")}
                      </td>
                      <td className="py-2.5 px-4 text-right">94</td>
                      <td className="py-2.5 px-4 text-right">91</td>
                      <td className="py-2.5 px-4 text-right">89</td>
                      <td className="py-2.5 px-4 text-right font-bold text-emerald-600 dark:text-emerald-400">
                        {gradingBoard === "NEB" ? "3.85 (A+)" : "9.6 CGPA"}
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-4 text-slate-500">02</td>
                      <td className="py-2.5 px-4 font-sans font-medium text-slate-800 dark:text-slate-200">
                        {pick("Pratiksha Koirala", "प्रतीक्षा कोइराला")}
                      </td>
                      <td className="py-2.5 px-4 text-right">86</td>
                      <td className="py-2.5 px-4 text-right">84</td>
                      <td className="py-2.5 px-4 text-right">88</td>
                      <td className="py-2.5 px-4 text-right font-bold text-indigo-600 dark:text-indigo-400">
                        {gradingBoard === "NEB" ? "3.55 (A)" : "8.9 CGPA"}
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-4 text-slate-500">03</td>
                      <td className="py-2.5 px-4 font-sans font-medium text-slate-800 dark:text-slate-200">
                        {pick("Rohan Maharjan", "रोहन महर्जन")}
                      </td>
                      <td className="py-2.5 px-4 text-right">79</td>
                      <td className="py-2.5 px-4 text-right">82</td>
                      <td className="py-2.5 px-4 text-right">77</td>
                      <td className="py-2.5 px-4 text-right font-semibold text-slate-800 dark:text-slate-200">
                        {gradingBoard === "NEB" ? "3.25 (B+)" : "8.1 CGPA"}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="px-5 py-3 bg-slate-50 dark:bg-slate-950/60 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-600 dark:text-slate-400">
                <span>
                  {pick(
                    "Batch A4 Transcript & Crest Watermark",
                    "ब्याच A4 लब्धाङ्कपत्र र लोगो वाटरमार्क",
                  )}
                </span>
                <span className="font-semibold text-slate-900 dark:text-white">
                  {pick(
                    "Zero Spreadsheet Macros",
                    "एक्सेल सूत्रको झन्झट शून्य",
                  )}
                </span>
              </div>
            </div>
          )}

          {activeTab === "attendance" && (
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden">
              <div className="px-5 py-3.5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold text-slate-900 dark:text-white">
                    {pick(
                      "Morning Homeroom Register · Grade 8 Section B",
                      "बिहानी कक्षा हाजिरी · कक्षा ८ सेक्सन B",
                    )}
                  </div>
                  <div className="text-[11px] text-slate-500">
                    {pick(
                      "Offline roll-call · Printable absence notice slips",
                      "अफलाइन हाजिरी · प्रिन्ट गर्न मिल्ने अनुपस्थिति सूचना",
                    )}
                  </div>
                </div>
                <span className="text-[11px] font-mono font-semibold text-slate-700 dark:text-slate-300 tabular-nums">
                  {pick("38 / 40 Present", "३८ / ४० उपस्थित")}
                </span>
              </div>
              <div className="divide-y divide-slate-100 dark:divide-slate-800 text-xs">
                {[
                  {
                    roll: "04",
                    name: pick("Nabin Tamang", "नविन तामाङ"),
                    status: pick("Present", "उपस्थित"),
                    present: true,
                    pct: "96.4%",
                  },
                  {
                    roll: "05",
                    name: pick("Roshni Basnet", "रोशनी बस्नेत"),
                    status: pick(
                      "Absent · Print Slip Ready",
                      "अनुपस्थित · सूचना प्रिन्ट तयार",
                    ),
                    present: false,
                    pct: "78.2%",
                  },
                  {
                    roll: "06",
                    name: pick("Sujan Poudel", "सुजन पौडेल"),
                    status: pick("Present", "उपस्थित"),
                    present: true,
                    pct: "94.0%",
                  },
                ].map((row) => (
                  <div
                    key={row.roll}
                    className="px-5 py-3 flex items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[11px] text-slate-500 tabular-nums">
                        #{row.roll}
                      </span>
                      <span className="font-medium text-slate-900 dark:text-white">
                        {row.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-[11px] font-mono tabular-nums">
                      <span className="text-slate-500">
                        {row.pct} {pick("term avg", "सत्र औसत")}
                      </span>
                      <span
                        className={`font-semibold ${
                          row.present
                            ? "text-emerald-600 dark:text-emerald-400"
                            : "text-amber-600 dark:text-amber-400"
                        }`}
                      >
                        {row.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="px-5 py-3 bg-slate-50 dark:bg-slate-950/60 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-600 dark:text-slate-400">
                <span>
                  {pick(
                    "80% Exam Eligibility Gate Check",
                    "८०% परीक्षा योग्यता सीमा जाँच",
                  )}
                </span>
                <span className="font-semibold text-slate-900 dark:text-white">
                  {pick("100% Offline Matrix", "१००% अफलाइन प्रणाली")}
                </span>
              </div>
            </div>
          )}

          {activeTab === "provisioning" && (
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-6 space-y-4">
              <div className="text-xs font-semibold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-3">
                {pick(
                  "Institutional Provisioning & Local Execution Boundary",
                  "विद्यालय खाता सिर्जना र स्थानीय सञ्चालन सीमा",
                )}
              </div>
              <div className="space-y-3 text-xs">
                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white">
                      {pick(
                        "1. Super Admin Creates School Account",
                        "१. सुपर एडमिनले विद्यालय खाता सिर्जना गर्छ",
                      )}
                    </div>
                    <div className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      {pick(
                        "Accounts are provisioned centrally per partner campus with assigned terminal count and institutional code.",
                        "प्रत्येक साझेदार विद्यालयका लागि तोकिएको टर्मिनल संख्या र संस्थागत कोडसहित केन्द्रीकृत खाता तयार गरिन्छ।",
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white">
                      {pick(
                        "2. School Administrator Logs In",
                        "२. विद्यालय प्रशासकले लगइन गर्छन्",
                      )}
                    </div>
                    <div className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      {pick(
                        "Staff sign into their school’s dedicated dashboard, customize their crest, B.S./A.D. academic year, and grading standard.",
                        "कर्मचारीले विद्यालयको छुट्टै ड्यासबोर्डमा लगइन गरी लोगो, वि.सं./ई.सं. शैक्षिक वर्ष र ग्रेडिङ प्रणाली सेट गर्छन्।",
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white">
                      {pick(
                        "3. 100% Offline Execution (Zero Cloud Support)",
                        "३. १००% अफलाइन सञ्चालन (शून्य क्लाउड निर्भरता)",
                      )}
                    </div>
                    <div className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      {pick(
                        "All student dossiers, fee settlements, payroll, exam broadsheets, and USB backups operate exclusively on local campus storage with zero cloud sync.",
                        "सबै विद्यार्थी अभिलेख, शुल्क भुक्तानी, तलबमान, परीक्षा ब्रोडसिट र USB ब्याकअप क्लाउड सिंक बिना पूर्णतः स्थानीय भण्डारणमा चल्छन्।",
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
