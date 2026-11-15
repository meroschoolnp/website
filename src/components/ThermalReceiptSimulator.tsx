import React, { useState } from "react";
import { Printer, Check, FileText } from "lucide-react";
import { useLanguage } from "@/src/context/LanguageContext";
import { SAMPLE_RECEIPTS, ReceiptSample } from "@/src/data/receiptData";

export type { ReceiptSample };

export const ThermalReceiptSimulator: React.FC = () => {
  const { isNepali, pick } = useLanguage();
  const [paperWidth, setPaperWidth] = useState<"80mm" | "58mm">("80mm");
  const [selectedSampleId, setSelectedSampleId] = useState<string>("tuition");
  const [printedFlash, setPrintedFlash] = useState(false);

  const sample =
    SAMPLE_RECEIPTS.find((s) => s.id === selectedSampleId) ||
    SAMPLE_RECEIPTS[0];
  const grossTotal = sample.items.reduce((acc, item) => acc + item.amount, 0);
  const netPaid = grossTotal - sample.discount;

  const triggerTestPrint = () => {
    setPrintedFlash(true);
    setTimeout(() => setPrintedFlash(false), 1800);
  };

  return (
    <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-xs">
      {/* Control Header */}
      <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/60 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-indigo-600 text-white flex items-center justify-center shrink-0">
            <Printer className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
              {pick(
                "Interactive ESC/POS Thermal Receipt Simulator",
                "अन्तरक्रियात्मक ESC/POS थर्मल रसिद सिमुलेटर",
              )}
            </div>
            <div className="text-[11px] text-slate-500">
              {pick(
                "Preview native 80mm & 58mm thermal slip output without browser print dialogs",
                "ब्राउजर प्रिन्ट पपअप बिना ८०mm र ५८mm थर्मल रसिद ढाँचा प्रत्यक्ष हेर्नुहोस्",
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {/* Paper Width Switcher */}
          <div className="inline-flex rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-1">
            {(["80mm", "58mm"] as const).map((w) => (
              <button
                key={w}
                type="button"
                onClick={() => setPaperWidth(w)}
                className={`px-3 py-1 rounded-lg text-xs font-mono font-semibold transition-colors cursor-pointer ${
                  paperWidth === w
                    ? "bg-indigo-600 text-white"
                    : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                }`}
              >
                {w}
              </button>
            ))}
          </div>

          {/* Sample Voucher Selector */}
          <div className="inline-flex rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-1">
            {SAMPLE_RECEIPTS.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setSelectedSampleId(s.id)}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                  selectedSampleId === s.id
                    ? "bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 font-semibold"
                    : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                }`}
              >
                {s.id === "tuition"
                  ? pick("Monthly Tuition", "मासिक शुल्क")
                  : pick("+2 Admission", "+२ भर्ना")}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={triggerTestPrint}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors cursor-pointer"
          >
            {printedFlash ? (
              <Check className="w-3.5 h-3.5" />
            ) : (
              <Printer className="w-3.5 h-3.5" />
            )}
            <span>
              {printedFlash
                ? pick("Spooling ESC/POS (<180ms)", "प्रिन्ट पठाइयो (<१८०ms)")
                : pick("Simulate Thermal Print", "थर्मल प्रिन्ट परीक्षण")}
            </span>
          </button>
        </div>
      </div>

      {/* Body Split: Receipt Preview + Driver Specs */}
      <div className="grid grid-cols-1 lg:grid-cols-12 items-center bg-slate-100/70 dark:bg-slate-950/70">
        {/* Left: Realistic Thermal Paper Preview */}
        <div className="lg:col-span-7 p-6 sm:p-10 flex justify-center">
          <div
            className={`bg-white text-slate-900 border border-slate-300 shadow-lg rounded-md font-mono text-[11px] leading-relaxed p-5 transition-all duration-200 ${
              paperWidth === "80mm"
                ? "w-full max-w-[360px]"
                : "w-full max-w-[270px] text-[10px]"
            } ${printedFlash ? "ring-2 ring-emerald-500 scale-[1.01]" : ""}`}
          >
            <div className="text-center border-b border-dashed border-slate-400 pb-3 space-y-0.5">
              <div className="font-bold text-xs tracking-wide uppercase">
                {pick("HIMALAYAN MODEL ACADEMY", "हिमालयन मोडल एकेडेमी")}
              </div>
              <div className="text-[10px] text-slate-600">
                {pick(
                  "Kathmandu · Powered by MeroSchool",
                  "काठमाडौं · MeroSchool द्वारा संचालित",
                )}
              </div>
              <div className="text-[10px] font-bold pt-1">
                {pick(
                  "*** OFFICIAL FEE RECEIPT ***",
                  "*** आधिकारिक शुल्क रसिद ***",
                )}
              </div>
            </div>

            <div className="py-2.5 border-b border-dashed border-slate-400 space-y-1 text-[10px]">
              <div className="flex justify-between">
                <span>{pick("Receipt #:", "रसिद नं.:")}</span>
                <span className="font-bold">{sample.receiptNo}</span>
              </div>
              <div className="flex justify-between">
                <span>{pick("Date:", "मिति:")}</span>
                <span>
                  {isNepali
                    ? `${sample.dateBs} (वि.सं.)`
                    : `${sample.dateBs} BS (${sample.dateAd})`}
                </span>
              </div>
              <div className="flex justify-between">
                <span>{pick("Scholar:", "विद्यार्थी:")}</span>
                <span className="font-bold">
                  {isNepali ? sample.studentNameNe : sample.studentName}
                </span>
              </div>
              <div className="flex justify-between">
                <span>{pick("Reg ID:", "दर्ता नं.:")}</span>
                <span>{sample.admissionNo}</span>
              </div>
              <div className="flex justify-between">
                <span>{pick("Class:", "कक्षा:")}</span>
                <span>{isNepali ? sample.gradeNe : sample.grade}</span>
              </div>
            </div>

            <div className="py-2.5 border-b border-dashed border-slate-400 space-y-1.5">
              <div className="flex justify-between font-bold text-[10px] text-slate-700">
                <span>{pick("PARTICULARS", "विवरण")}</span>
                <span>{pick("NPR", "रु.")}</span>
              </div>
              {sample.items.map((item, idx) => (
                <div key={idx} className="flex justify-between gap-2">
                  <span className="truncate">
                    {isNepali ? item.labelNe : item.label}
                  </span>
                  <span className="tabular-nums shrink-0">
                    {item.amount.toLocaleString()}.00
                  </span>
                </div>
              ))}
            </div>

            <div className="py-2.5 space-y-1">
              <div className="flex justify-between text-[10px]">
                <span>{pick("Gross Total:", "जम्मा रकम:")}</span>
                <span className="tabular-nums">
                  {grossTotal.toLocaleString()}.00
                </span>
              </div>
              <div className="flex justify-between text-[10px]">
                <span>{pick("Concession / Waiver:", "छात्रवृत्ति छुट:")}</span>
                <span className="tabular-nums">
                  -{sample.discount.toLocaleString()}.00
                </span>
              </div>
              <div className="flex justify-between font-bold text-xs pt-1 border-t border-slate-300">
                <span>{pick("NET PAID:", "कुल भुक्तानी:")}</span>
                <span className="tabular-nums">
                  NPR {netPaid.toLocaleString()}.00
                </span>
              </div>
            </div>

            <div className="pt-2.5 border-t border-dashed border-slate-400 text-center space-y-1 text-[10px] text-slate-600">
              <div>
                {pick("Mode:", "माध्यम:")}{" "}
                {isNepali ? sample.paymentModeNe : sample.paymentMode} ·{" "}
                {sample.cashier}
              </div>
              <div className="font-mono tracking-widest text-[9px] text-slate-800 pt-1">
                |||| ||| || |||| ||| ||||| ||
              </div>
              <div>
                {pick(
                  "Thank you · Locally Verified",
                  "धन्यवाद · स्थानीय रूपमा प्रमाणित",
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Right: Technical ESC/POS Compatibility Details */}
        <div className="lg:col-span-5 p-6 sm:p-8 bg-white dark:bg-slate-900 border-t lg:border-t-0 lg:border-l border-slate-200 dark:border-slate-800 space-y-5 self-stretch flex flex-col justify-center">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-indigo-600 dark:text-indigo-400">
              <FileText className="w-4 h-4" />
              <span>
                {pick(
                  "Zero-Dialog Native Spooling",
                  "पपअप-रहित प्रत्यक्ष प्रिन्टिङ",
                )}
              </span>
            </div>
            <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
              {pick(
                "Tested Across Epson, TVS, Rongta & Xprinter Hardware",
                "Epson, TVS, Rongta र Xprinter उपकरणमा परीक्षण गरिएको",
              )}
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              {pick(
                "Web browsers force cashiers to click through Ctrl+P dialogs on every student invoice. MeroSchool outputs raw ESC/POS byte streams directly over USB or Serial ports.",
                "वेब ब्राउजरले हरेक बिलमा Ctrl+P प्रिन्ट संवादमा अड्काउँछ। MeroSchool ले USB वा सिरियल पोर्टमार्फत सिधै ESC/POS प्रिन्टरमा रसिद पठाउँछ।",
              )}
            </p>
          </div>

          <div className="space-y-2.5 text-xs border-t border-slate-100 dark:border-slate-800 pt-4">
            <div className="flex justify-between">
              <span className="text-slate-500">
                {pick("Supported Paper Widths", "कागज आकार")}
              </span>
              <span className="font-mono font-semibold text-slate-900 dark:text-white">
                80mm (48 col) / 58mm (32 col)
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">
                {pick("Barcode Scanner Mode", "बारकोड स्क्यानर मोड")}
              </span>
              <span className="font-mono font-semibold text-slate-900 dark:text-white">
                USB HID Wedge (Driverless)
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">
                {pick("Cash Drawer Kick", "क्यास ड्रअर ट्रिगर")}
              </span>
              <span className="font-mono font-semibold text-emerald-600 dark:text-emerald-400">
                RJ11 ESC p 0
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">
                {pick("Student ID Format", "परिचयपत्र ढाँचा")}
              </span>
              <span className="font-mono font-semibold text-slate-900 dark:text-white">
                CR80 PVC · Code-128
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
