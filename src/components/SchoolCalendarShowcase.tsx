import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  Calendar,
  CalendarDays,
  Bell,
  Clock,
  Sparkles,
  ArrowRight,
  ChevronRight,
  GraduationCap,
  CalendarCheck2,
  Flag,
  Megaphone,
  FileText,
  Printer,
} from "lucide-react";
import { useLanguage } from "@/src/context/LanguageContext";
import {
  CALENDAR_ENTRIES,
  MONTH_META,
  CalendarEntry,
  CalendarItemType,
  MonthKey,
  FilterType,
} from "@/src/data/calendarData";

export type { CalendarEntry, CalendarItemType, MonthKey, FilterType };

export const SchoolCalendarShowcase: React.FC = () => {
  const navigate = useNavigate();
  const { pick } = useLanguage();
  const [selectedMonth, setSelectedMonth] = useState<MonthKey>("baisakh");
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const [selectedEntryId, setSelectedEntryId] = useState<string>("cal-1");

  const monthMeta = MONTH_META[selectedMonth];

  const monthEntries = useMemo(
    () => CALENDAR_ENTRIES.filter((entry) => entry.month === selectedMonth),
    [selectedMonth],
  );

  const filteredEntries = useMemo(() => {
    if (activeFilter === "all") return monthEntries;
    return monthEntries.filter((entry) => entry.type === activeFilter);
  }, [monthEntries, activeFilter]);

  const activeEntry = useMemo(() => {
    const inFiltered = filteredEntries.find((e) => e.id === selectedEntryId);
    return inFiltered ?? filteredEntries[0] ?? monthEntries[0];
  }, [filteredEntries, monthEntries, selectedEntryId]);

  const entryByDay = useMemo(() => {
    const map = new Map<number, CalendarEntry>();
    for (const entry of monthEntries) {
      if (activeFilter === "all" || entry.type === activeFilter) {
        map.set(entry.dayBs, entry);
      }
    }
    return map;
  }, [monthEntries, activeFilter]);

  const handleMonthChange = (month: MonthKey) => {
    setSelectedMonth(month);
    const first = CALENDAR_ENTRIES.find(
      (e) =>
        e.month === month &&
        (activeFilter === "all" || e.type === activeFilter),
    );
    if (first) setSelectedEntryId(first.id);
  };

  const handleFilterChange = (filter: FilterType) => {
    setActiveFilter(filter);
    const first = CALENDAR_ENTRIES.find(
      (e) =>
        e.month === selectedMonth && (filter === "all" || e.type === filter),
    );
    if (first) setSelectedEntryId(first.id);
  };

  const filterOptions: { id: FilterType; label: string }[] = [
    { id: "all", label: pick("All", "सबै") },
    { id: "holiday", label: pick("Holidays", "बिदा") },
    { id: "announcement", label: pick("Announcements", "घोषणा") },
    { id: "notice", label: pick("Notices", "सूचना") },
    { id: "event", label: pick("Events", "कार्यक्रम") },
  ];

  const weekdayLabels = [
    pick("Sun", "आइत"),
    pick("Mon", "सोम"),
    pick("Tue", "मंगल"),
    pick("Wed", "बुध"),
    pick("Thu", "बिहि"),
    pick("Fri", "शुक्र"),
    pick("Sat", "शनि"),
  ];

  const typeIcon = (type: CalendarItemType) => {
    switch (type) {
      case "holiday":
        return Flag;
      case "announcement":
        return Megaphone;
      case "notice":
        return FileText;
      case "event":
        return CalendarDays;
    }
  };

  const typeAccentClass = (type: CalendarItemType) => {
    switch (type) {
      case "holiday":
        return "text-rose-700 dark:text-rose-400";
      case "announcement":
        return "text-indigo-700 dark:text-indigo-400";
      case "notice":
        return "text-amber-700 dark:text-amber-400";
      case "event":
        return "text-emerald-700 dark:text-emerald-400";
    }
  };

  const cellHighlightClass = (type: CalendarItemType, isSelected: boolean) => {
    if (isSelected) {
      return "bg-indigo-600 text-white border-indigo-600 shadow-2xs";
    }
    switch (type) {
      case "holiday":
        return "bg-rose-50/80 dark:bg-rose-950/40 text-rose-800 dark:text-rose-200 border-rose-200 dark:border-rose-900/70 hover:bg-rose-100/80 dark:hover:bg-rose-950/70";
      case "announcement":
        return "bg-indigo-50/80 dark:bg-indigo-950/40 text-indigo-800 dark:text-indigo-200 border-indigo-200 dark:border-indigo-900/70 hover:bg-indigo-100/80 dark:hover:bg-indigo-950/70";
      case "notice":
        return "bg-amber-50/80 dark:bg-amber-950/40 text-amber-800 dark:text-amber-200 border-amber-200 dark:border-amber-900/70 hover:bg-amber-100/80 dark:hover:bg-amber-950/70";
      case "event":
        return "bg-emerald-50/80 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-200 border-emerald-200 dark:border-emerald-900/70 hover:bg-emerald-100/80 dark:hover:bg-emerald-950/70";
    }
  };

  const holidayCount = monthEntries.filter((e) => e.type === "holiday").length;
  const noticeAndAnnouncementCount = monthEntries.filter(
    (e) => e.type === "notice" || e.type === "announcement",
  ).length;

  const calendarCells = useMemo(() => {
    const blanks = Array.from({ length: monthMeta.startWeekday }, () => null);
    const days = Array.from({ length: monthMeta.daysCount }, (_, i) => i + 1);
    return [...blanks, ...days];
  }, [monthMeta]);

  return (
    <section
      id="school-calendar"
      className="perf-section max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8"
    >
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
        <div className="max-w-3xl space-y-2.5">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold text-indigo-600 dark:text-indigo-400">
            <Calendar className="w-4 h-4 shrink-0" />
            <span>
              {pick(
                "School Calendar & Noticeboard Suite",
                "विद्यालय पात्रो र सूचना पाटी प्रणाली",
              )}
            </span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-tight text-balance">
            {pick(
              "Unified Calendar for Holidays, Announcements, Notices & Events",
              "बिदा, घोषणा, सूचना र कार्यक्रमहरूको एकीकृत विद्यालय पात्रो",
            )}
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {pick(
              "Publish public holidays, parent announcements, exam notices, and school events across both Bikram Sambat (B.S.) and Gregorian (A.D.) dates. Automatically updates attendance working days, library due dates, and printable campus circulars completely offline.",
              "विक्रम संवत् (वि.सं.) र ईस्वी संवत् (A.D.) दुवै मितिमा सार्वजनिक बिदा, अभिभावक घोषणा, परीक्षा सूचना र विद्यालय कार्यक्रमहरू प्रकाशित गर्नुहोस्। यसले हाजिरी कार्यदिन, पुस्तकालय म्याद र प्रिन्टयोग्य परिपत्रहरू पूर्णतः अफलाइनमै अद्यावधिक गर्दछ।",
            )}
          </p>
        </div>

        <button
          type="button"
          onClick={() => navigate("/contact?type=demo")}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition-colors cursor-pointer whitespace-nowrap shrink-0 min-h-[42px]"
        >
          <span>
            {pick(
              "Request Calendar & Notice Demo",
              "पात्रो र सूचना डेमो माग्नुहोस्",
            )}
          </span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Unified Interactive Showcase Container */}
      <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-xs">
        {/* Top Interactive Controls Bar */}
        <div className="p-4 sm:px-6 border-b border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/60 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-1 p-1 bg-slate-200/70 dark:bg-slate-800 rounded-xl">
              {(["baisakh", "jestha"] as MonthKey[]).map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => handleMonthChange(m)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap min-h-[34px] ${
                    selectedMonth === m
                      ? "bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-2xs"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  {pick(MONTH_META[m].labelEn, MONTH_META[m].labelNe)}
                </button>
              ))}
            </div>
            <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
              {pick(monthMeta.adRangeEn, monthMeta.adRangeNe)}
            </span>
          </div>

          <div className="flex items-center gap-1 p-1 bg-slate-200/70 dark:bg-slate-800 rounded-xl overflow-x-auto">
            {filterOptions.map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => handleFilterChange(opt.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer whitespace-nowrap shrink-0 min-h-[34px] ${
                  activeFilter === opt.id
                    ? "bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 font-semibold shadow-2xs"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Two-Column Interactive Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-200 dark:divide-slate-800">
          {/* Left 7 Cols: Monthly Dual Calendar Grid */}
          <div className="lg:col-span-7 p-5 sm:p-6 space-y-4">
            <div className="grid grid-cols-7 gap-1.5 text-center text-[11px] font-mono font-semibold text-slate-500 dark:text-slate-400 pb-1">
              {weekdayLabels.map((wd, idx) => (
                <div
                  key={wd}
                  className={`py-1 ${idx === 6 ? "text-rose-600 dark:text-rose-400" : ""}`}
                >
                  {wd}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-1.5">
              {calendarCells.map((day, index) => {
                if (day === null) {
                  return (
                    <div
                      key={`blank-${index}`}
                      className="min-h-[58px] sm:min-h-[68px]"
                    />
                  );
                }
                const entry = entryByDay.get(day);
                const isSaturday = index % 7 === 6;
                const isSelected = Boolean(
                  entry && activeEntry?.id === entry.id,
                );

                if (entry) {
                  return (
                    <button
                      key={day}
                      type="button"
                      onClick={() => setSelectedEntryId(entry.id)}
                      className={`min-h-[58px] sm:min-h-[68px] p-1.5 sm:p-2 rounded-xl border text-left flex flex-col justify-between transition-colors cursor-pointer ${cellHighlightClass(
                        entry.type,
                        isSelected,
                      )}`}
                    >
                      <span className="text-xs font-mono font-bold tabular-nums leading-none">
                        {day}
                      </span>
                      <span className="text-[10px] font-medium leading-tight truncate w-full">
                        {pick(entry.shortTagEn, entry.shortTagNe)}
                      </span>
                    </button>
                  );
                }

                return (
                  <div
                    key={day}
                    className={`min-h-[58px] sm:min-h-[68px] p-1.5 sm:p-2 rounded-xl border border-slate-100 dark:border-slate-800/80 flex flex-col justify-between ${
                      isSaturday
                        ? "bg-rose-50/40 dark:bg-rose-950/15 text-rose-600 dark:text-rose-400"
                        : "bg-slate-50/50 dark:bg-slate-950/40 text-slate-700 dark:text-slate-300"
                    }`}
                  >
                    <span className="text-xs font-mono tabular-nums leading-none">
                      {day}
                    </span>
                    {isSaturday && (
                      <span className="text-[10px] text-rose-500/80 dark:text-rose-400/80 truncate">
                        {pick("Wknd", "शनि")}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Clean Unboxed Monthly Summary Metrics */}
            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600 dark:text-slate-400 font-mono tabular-nums">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                <span>
                  {pick("Working Days:", "कार्यदिन:")}{" "}
                  <strong className="text-slate-900 dark:text-white">
                    {monthMeta.workingDays}
                  </strong>
                </span>
                <span aria-hidden="true">·</span>
                <span>
                  {pick("Public Holidays:", "सार्वजनिक बिदा:")}{" "}
                  <strong className="text-rose-600 dark:text-rose-400">
                    {holidayCount}
                  </strong>
                </span>
                <span aria-hidden="true">·</span>
                <span>
                  {pick("Notices & Announcements:", "सूचना र घोषणा:")}{" "}
                  <strong className="text-indigo-600 dark:text-indigo-400">
                    {noticeAndAnnouncementCount}
                  </strong>
                </span>
              </div>
              <span>
                {pick("Dual B.S. / A.D. Sync", "वि.सं. र ई.सं. समन्वय")}
              </span>
            </div>
          </div>

          {/* Right 5 Cols: Bulletin Feed & Selected Circular Inspector */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-slate-50/40 dark:bg-slate-950/30">
            <div className="divide-y divide-slate-200 dark:divide-slate-800">
              {filteredEntries.map((entry) => {
                const Icon = typeIcon(entry.type);
                const selected = activeEntry?.id === entry.id;
                return (
                  <button
                    key={entry.id}
                    type="button"
                    onClick={() => setSelectedEntryId(entry.id)}
                    className={`w-full text-left p-4 sm:px-5 transition-colors cursor-pointer block ${
                      selected
                        ? "bg-indigo-50/70 dark:bg-indigo-950/30"
                        : "hover:bg-white dark:hover:bg-slate-900/60"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <Icon
                        className={`w-4 h-4 shrink-0 mt-0.5 ${typeAccentClass(entry.type)}`}
                      />
                      <div className="min-w-0 flex-1 space-y-1">
                        <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-mono text-slate-500 dark:text-slate-400">
                          <span
                            className={`font-semibold ${typeAccentClass(entry.type)}`}
                          >
                            {pick(entry.shortTagEn, entry.shortTagNe)}
                          </span>
                          <span aria-hidden="true">·</span>
                          <span>{pick(entry.dateBsEn, entry.dateBsNe)}</span>
                          <span aria-hidden="true">·</span>
                          <span>
                            {pick(entry.audienceEn, entry.audienceNe)}
                          </span>
                        </div>
                        <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white leading-snug">
                          {pick(entry.titleEn, entry.titleNe)}
                        </div>
                        {selected && (
                          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pt-1">
                            {pick(entry.summaryEn, entry.summaryNe)}
                          </p>
                        )}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {activeEntry && (
              <div className="p-4 sm:px-5 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-slate-600 dark:text-slate-400">
                <span className="inline-flex items-center gap-1.5">
                  <Printer className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                  <span>
                    {pick(
                      `A4 Notice Circular Ready · ${activeEntry.dateAdEn}`,
                      `A4 सूचना परिपत्र तयार · ${activeEntry.dateAdNe}`,
                    )}
                  </span>
                </span>
                <span className="text-emerald-700 dark:text-emerald-400 font-semibold">
                  {pick(
                    "100% Offline Local Storage",
                    "१००% अफलाइन स्थानीय भण्डारण",
                  )}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
