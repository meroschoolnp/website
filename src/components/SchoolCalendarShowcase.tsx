import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Calendar,
  Megaphone,
  FileText,
  Flag,
  CalendarDays,
  ArrowRight,
  Printer,
} from 'lucide-react';
import { useLanguage } from '@/src/context/LanguageContext';

type CalendarItemType = 'holiday' | 'announcement' | 'notice' | 'event';
type FilterType = 'all' | CalendarItemType;
type MonthKey = 'baisakh' | 'jestha';

interface CalendarEntry {
  id: string;
  month: MonthKey;
  dayBs: number;
  dateBsEn: string;
  dateBsNe: string;
  dateAdEn: string;
  dateAdNe: string;
  type: CalendarItemType;
  audienceEn: string;
  audienceNe: string;
  titleEn: string;
  titleNe: string;
  summaryEn: string;
  summaryNe: string;
  shortTagEn: string;
  shortTagNe: string;
}

const CALENDAR_ENTRIES: CalendarEntry[] = [
  {
    id: 'cal-1',
    month: 'baisakh',
    dayBs: 1,
    dateBsEn: 'Baisakh 01, 2082',
    dateBsNe: 'वैशाख १, २०८२',
    dateAdEn: 'Apr 14, 2025',
    dateAdNe: 'अप्रिल १४, २०२५',
    type: 'holiday',
    audienceEn: 'All Campus',
    audienceNe: 'सम्पूर्ण विद्यालय',
    titleEn: 'Nepali New Year 2082 Public Holiday',
    titleNe: 'नयाँ वर्ष २०८२ सार्वजनिक बिदा',
    summaryEn:
      'Campus closed for Nepali New Year. Working-day counters automatically exclude this date from monthly student and faculty attendance tallies.',
    summaryNe:
      'नयाँ वर्ष २०८२ को अवसरमा विद्यालय बन्द रहनेछ। मासिक विद्यार्थी र शिक्षक हाजिरी कार्यदिन गणनाबाट यो दिन स्वतः घटाइन्छ।',
    shortTagEn: 'Holiday',
    shortTagNe: 'बिदा',
  },
  {
    id: 'cal-2',
    month: 'baisakh',
    dayBs: 4,
    dateBsEn: 'Baisakh 04, 2082',
    dateBsNe: 'वैशाख ४, २०८२',
    dateAdEn: 'Apr 17, 2025',
    dateAdNe: 'अप्रिल १७, २०२५',
    type: 'announcement',
    audienceEn: 'Parents & Grades 1–10',
    audienceNe: 'अभिभावक र कक्षा १–१०',
    titleEn: 'New Academic Session Orientation & Book Distribution',
    titleNe: 'नयाँ शैक्षिक सत्र अभिमुखीकरण तथा पाठ्यपुस्तक वितरण',
    summaryEn:
      'Morning assembly briefing for parents and scholars at 8:30 AM, followed by homeroom timetable handoff and library card activation.',
    summaryNe:
      'बिहान ८:३० बजे अभिभावक तथा विद्यार्थी अभिमुखीकरण सभा र त्यसपछि कक्षा समयतालिका तथा पुस्तकालय कार्ड वितरण गरिनेछ।',
    shortTagEn: 'Announcement',
    shortTagNe: 'घोषणा',
  },
  {
    id: 'cal-3',
    month: 'baisakh',
    dayBs: 11,
    dateBsEn: 'Baisakh 11, 2082',
    dateBsNe: 'वैशाख ११, २०८२',
    dateAdEn: 'Apr 24, 2025',
    dateAdNe: 'अप्रिल २४, २०२५',
    type: 'holiday',
    audienceEn: 'All Campus',
    audienceNe: 'सम्पूर्ण विद्यालय',
    titleEn: 'Loktantra Diwas — Official School Holiday',
    titleNe: 'लोकतन्त्र दिवस — आधिकारिक विद्यालय बिदा',
    summaryEn:
      'No classes or bus routes scheduled. Transport manifests and daily roll-call registers remain paused for this statutory holiday.',
    summaryNe:
      'नियमित कक्षा तथा विद्यालय बस सेवा बन्द रहनेछ। यस आधिकारिक बिदामा दैनिक हाजिरी रजिस्टर स्वतः बिदा चिह्नित हुन्छ।',
    shortTagEn: 'Holiday',
    shortTagNe: 'बिदा',
  },
  {
    id: 'cal-4',
    month: 'baisakh',
    dayBs: 15,
    dateBsEn: 'Baisakh 15, 2082',
    dateBsNe: 'वैशाख १५, २०८२',
    dateAdEn: 'Apr 28, 2025',
    dateAdNe: 'अप्रिल २८, २०२५',
    type: 'notice',
    audienceEn: 'Faculty & Accounts',
    audienceNe: 'शिक्षक र लेखा शाखा',
    titleEn: 'First Monthly Tuition Window & Scholarship Waiver Circular',
    titleNe: 'प्रथम मासिक शुल्क बुझाउने र छात्रवृत्ति नवीकरण सूचना',
    summaryEn:
      'Printable noticeboard circular reminding guardians of fee desk hours (8:00 AM – 4:00 PM) and merit scholarship verification forms.',
    summaryNe:
      'शुल्क काउन्टर समय (बिहान ८:०० – दिउँसो ४:००) र जेहेन्दार छात्रवृत्ति प्रमाणीकरण फारम सम्बन्धी प्रिन्टयोग्य आधिकारिक सूचना।',
    shortTagEn: 'Notice',
    shortTagNe: 'सूचना',
  },
  {
    id: 'cal-5',
    month: 'baisakh',
    dayBs: 23,
    dateBsEn: 'Baisakh 23, 2082',
    dateBsNe: 'वैशाख २३, २०८२',
    dateAdEn: 'May 06, 2025',
    dateAdNe: 'मे ६, २०२५',
    type: 'event',
    audienceEn: 'Grades 6–12',
    audienceNe: 'कक्षा ६–१२',
    titleEn: 'Inter-House Science & Robotics Exhibition',
    titleNe: 'अन्तर-सदन विज्ञान तथा रोबोटिक्स प्रदर्शनी',
    summaryEn:
      'Auditorium & Physics Lab showcase scheduled from 10:00 AM to 3:00 PM. Coordinator duty rosters linked directly with timetable slots.',
    summaryNe:
      'सभागृह र भौतिकशास्त्र प्रयोगशालामा बिहान १०:०० देखि ३:०० बजेसम्म प्रदर्शनी। संयोजक शिक्षक तालिका स्वतः समन्वित छ।',
    shortTagEn: 'Event',
    shortTagNe: 'कार्यक्रम',
  },
  {
    id: 'cal-6',
    month: 'baisakh',
    dayBs: 29,
    dateBsEn: 'Baisakh 29, 2082',
    dateBsNe: 'वैशाख २९, २०८२',
    dateAdEn: 'May 12, 2025',
    dateAdNe: 'मे १२, २०२५',
    type: 'holiday',
    audienceEn: 'All Campus',
    audienceNe: 'सम्पूर्ण विद्यालय',
    titleEn: 'Buddha Jayanti — National Public Holiday',
    titleNe: 'बुद्ध जयन्ती — राष्ट्रिय सार्वजनिक बिदा',
    summaryEn:
      'Institutional holiday tagged across all branch campuses. Library return due dates automatically extend to the next open school day.',
    summaryNe:
      'सबै शाखाहरूमा लागू हुने सार्वजनिक बिदा। यस दिनको पुस्तकालय पुस्तक फिर्ता म्याद स्वतः अर्को खुल्ने दिनमा सर्दछ।',
    shortTagEn: 'Holiday',
    shortTagNe: 'बिदा',
  },
  {
    id: 'cal-7',
    month: 'jestha',
    dayBs: 5,
    dateBsEn: 'Jestha 05, 2082',
    dateBsNe: 'जेठ ५, २०८२',
    dateAdEn: 'May 19, 2025',
    dateAdNe: 'मे १९, २०२५',
    type: 'notice',
    audienceEn: 'Parents & Students',
    audienceNe: 'अभिभावक र विद्यार्थी',
    titleEn: 'First Unit Test Schedule & Admit Card Clearance Notice',
    titleNe: 'प्रथम एकाइ परीक्षा तालिका र प्रवेशपत्र सूचना',
    summaryEn:
      'Official notice publishing subject dates, hall seating lists, and fee clearance reminders prior to admit card batch printing.',
    summaryNe:
      'विषयगत परीक्षा मिति, कक्षा सिट योजना र प्रवेशपत्र छपाइ अघिको शुल्क मिलान सम्बन्धी आधिकारिक विद्यालय सूचना।',
    shortTagEn: 'Notice',
    shortTagNe: 'सूचना',
  },
  {
    id: 'cal-8',
    month: 'jestha',
    dayBs: 15,
    dateBsEn: 'Jestha 15, 2082',
    dateBsNe: 'जेठ १५, २०८२',
    dateAdEn: 'May 29, 2025',
    dateAdNe: 'मे २९, २०२५',
    type: 'holiday',
    audienceEn: 'All Campus',
    audienceNe: 'सम्पूर्ण विद्यालय',
    titleEn: 'Republic Day (Ganatantra Diwas) Holiday',
    titleNe: 'गणतन्त्र दिवस सार्वजनिक बिदा',
    summaryEn:
      'National holiday across all grades. Faculty payroll and student attendance calendars treat the date as an approved non-working day.',
    summaryNe:
      'सबै कक्षाहरूका लागि राष्ट्रिय बिदा। शिक्षक तलब र विद्यार्थी हाजिरी पात्रोमा स्वीकृत गैर-कार्यदिनका रूपमा अङ्कित हुन्छ।',
    shortTagEn: 'Holiday',
    shortTagNe: 'बिदा',
  },
  {
    id: 'cal-9',
    month: 'jestha',
    dayBs: 20,
    dateBsEn: 'Jestha 20, 2082',
    dateBsNe: 'जेठ २०, २०८२',
    dateAdEn: 'Jun 03, 2025',
    dateAdNe: 'जुन ३, २०२५',
    type: 'announcement',
    audienceEn: 'All Parents & Teachers',
    audienceNe: 'सम्पूर्ण अभिभावक र शिक्षक',
    titleEn: 'Parent-Teacher Meeting (PTM) & Progress Briefing',
    titleNe: 'अभिभावक-शिक्षक बैठक (PTM) तथा प्रगति समीक्षा घोषणा',
    summaryEn:
      'Scheduled homeroom conferences between 9:00 AM and 1:00 PM to review first-month attendance records and formative homework diaries.',
    summaryNe:
      'प्रथम महिनाको हाजिरी प्रतिशत र गृहकार्य प्रगति समीक्षाका लागि बिहान ९:०० देखि दिउँसो १:०० बजेसम्म कक्षागत बैठक हुनेछ।',
    shortTagEn: 'Announcement',
    shortTagNe: 'घोषणा',
  },
  {
    id: 'cal-10',
    month: 'jestha',
    dayBs: 27,
    dateBsEn: 'Jestha 27, 2082',
    dateBsNe: 'जेठ २७, २०८२',
    dateAdEn: 'Jun 10, 2025',
    dateAdNe: 'जुन १०, २०२५',
    type: 'event',
    audienceEn: 'All Campus',
    audienceNe: 'सम्पूर्ण विद्यालय',
    titleEn: 'Annual Inter-School Sports Meet & House Parade',
    titleNe: 'वार्षिक अन्तर-विद्यालय खेलकुद सप्ताह तथा मार्चपास',
    summaryEn:
      'Full-day athletics and house competitions on the main sports ground. Infirmary team and transport departures shifted to 4:00 PM.',
    summaryNe:
      'मुख्य खेलमैदानमा दिनभर एथलेटिक्स र सदन प्रतियोगिता। प्राथमिक उपचार कक्ष र बस प्रस्थान समय दिउँसो ४:०० बजे तय गरिएको छ।',
    shortTagEn: 'Event',
    shortTagNe: 'कार्यक्रम',
  },
];

const MONTH_META: Record<
  MonthKey,
  {
    labelEn: string;
    labelNe: string;
    adRangeEn: string;
    adRangeNe: string;
    daysCount: number;
    startWeekday: number; // 0 = Sun
    workingDays: number;
  }
> = {
  baisakh: {
    labelEn: 'Baisakh 2082 B.S.',
    labelNe: 'वैशाख २०८२ वि.सं.',
    adRangeEn: 'April – May 2025 A.D.',
    adRangeNe: 'अप्रिल – मे २०२५ ई.सं.',
    daysCount: 31,
    startWeekday: 1, // Monday
    workingDays: 24,
  },
  jestha: {
    labelEn: 'Jestha 2082 B.S.',
    labelNe: 'जेठ २०८२ वि.सं.',
    adRangeEn: 'May – June 2025 A.D.',
    adRangeNe: 'मे – जुन २०२५ ई.सं.',
    daysCount: 31,
    startWeekday: 4, // Thursday
    workingDays: 25,
  },
};

export const SchoolCalendarShowcase: React.FC = () => {
  const navigate = useNavigate();
  const { pick } = useLanguage();
  const [selectedMonth, setSelectedMonth] = useState<MonthKey>('baisakh');
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [selectedEntryId, setSelectedEntryId] = useState<string>('cal-1');

  const monthMeta = MONTH_META[selectedMonth];

  const monthEntries = useMemo(
    () => CALENDAR_ENTRIES.filter((entry) => entry.month === selectedMonth),
    [selectedMonth]
  );

  const filteredEntries = useMemo(() => {
    if (activeFilter === 'all') return monthEntries;
    return monthEntries.filter((entry) => entry.type === activeFilter);
  }, [monthEntries, activeFilter]);

  const activeEntry = useMemo(() => {
    const inFiltered = filteredEntries.find((e) => e.id === selectedEntryId);
    return inFiltered ?? filteredEntries[0] ?? monthEntries[0];
  }, [filteredEntries, monthEntries, selectedEntryId]);

  const entryByDay = useMemo(() => {
    const map = new Map<number, CalendarEntry>();
    for (const entry of monthEntries) {
      if (activeFilter === 'all' || entry.type === activeFilter) {
        map.set(entry.dayBs, entry);
      }
    }
    return map;
  }, [monthEntries, activeFilter]);

  const handleMonthChange = (month: MonthKey) => {
    setSelectedMonth(month);
    const first = CALENDAR_ENTRIES.find(
      (e) => e.month === month && (activeFilter === 'all' || e.type === activeFilter)
    );
    if (first) setSelectedEntryId(first.id);
  };

  const handleFilterChange = (filter: FilterType) => {
    setActiveFilter(filter);
    const first = CALENDAR_ENTRIES.find(
      (e) => e.month === selectedMonth && (filter === 'all' || e.type === filter)
    );
    if (first) setSelectedEntryId(first.id);
  };

  const filterOptions: { id: FilterType; label: string }[] = [
    { id: 'all', label: pick('All', 'सबै') },
    { id: 'holiday', label: pick('Holidays', 'बिदा') },
    { id: 'announcement', label: pick('Announcements', 'घोषणा') },
    { id: 'notice', label: pick('Notices', 'सूचना') },
    { id: 'event', label: pick('Events', 'कार्यक्रम') },
  ];

  const weekdayLabels = [
    pick('Sun', 'आइत'),
    pick('Mon', 'सोम'),
    pick('Tue', 'मंगल'),
    pick('Wed', 'बुध'),
    pick('Thu', 'बिहि'),
    pick('Fri', 'शुक्र'),
    pick('Sat', 'शनि'),
  ];

  const typeIcon = (type: CalendarItemType) => {
    switch (type) {
      case 'holiday':
        return Flag;
      case 'announcement':
        return Megaphone;
      case 'notice':
        return FileText;
      case 'event':
        return CalendarDays;
    }
  };

  const typeAccentClass = (type: CalendarItemType) => {
    switch (type) {
      case 'holiday':
        return 'text-rose-700 dark:text-rose-400';
      case 'announcement':
        return 'text-indigo-700 dark:text-indigo-400';
      case 'notice':
        return 'text-amber-700 dark:text-amber-400';
      case 'event':
        return 'text-emerald-700 dark:text-emerald-400';
    }
  };

  const cellHighlightClass = (type: CalendarItemType, isSelected: boolean) => {
    if (isSelected) {
      return 'bg-indigo-600 text-white border-indigo-600 shadow-2xs';
    }
    switch (type) {
      case 'holiday':
        return 'bg-rose-50/80 dark:bg-rose-950/40 text-rose-800 dark:text-rose-200 border-rose-200 dark:border-rose-900/70 hover:bg-rose-100/80 dark:hover:bg-rose-950/70';
      case 'announcement':
        return 'bg-indigo-50/80 dark:bg-indigo-950/40 text-indigo-800 dark:text-indigo-200 border-indigo-200 dark:border-indigo-900/70 hover:bg-indigo-100/80 dark:hover:bg-indigo-950/70';
      case 'notice':
        return 'bg-amber-50/80 dark:bg-amber-950/40 text-amber-800 dark:text-amber-200 border-amber-200 dark:border-amber-900/70 hover:bg-amber-100/80 dark:hover:bg-amber-950/70';
      case 'event':
        return 'bg-emerald-50/80 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-200 border-emerald-200 dark:border-emerald-900/70 hover:bg-emerald-100/80 dark:hover:bg-emerald-950/70';
    }
  };

  const holidayCount = monthEntries.filter((e) => e.type === 'holiday').length;
  const noticeAndAnnouncementCount = monthEntries.filter(
    (e) => e.type === 'notice' || e.type === 'announcement'
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
                'School Calendar & Noticeboard Suite',
                'विद्यालय पात्रो र सूचना पाटी प्रणाली'
              )}
            </span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-tight text-balance">
            {pick(
              'Unified Calendar for Holidays, Announcements, Notices & Events',
              'बिदा, घोषणा, सूचना र कार्यक्रमहरूको एकीकृत विद्यालय पात्रो'
            )}
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {pick(
              'Publish public holidays, parent announcements, exam notices, and school events across both Bikram Sambat (B.S.) and Gregorian (A.D.) dates. Automatically updates attendance working days, library due dates, and printable campus circulars completely offline.',
              'विक्रम संवत् (वि.सं.) र ईस्वी संवत् (A.D.) दुवै मितिमा सार्वजनिक बिदा, अभिभावक घोषणा, परीक्षा सूचना र विद्यालय कार्यक्रमहरू प्रकाशित गर्नुहोस्। यसले हाजिरी कार्यदिन, पुस्तकालय म्याद र प्रिन्टयोग्य परिपत्रहरू पूर्णतः अफलाइनमै अद्यावधिक गर्दछ।'
            )}
          </p>
        </div>

        <button
          type="button"
          onClick={() => navigate('/contact?type=demo')}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition-colors cursor-pointer whitespace-nowrap shrink-0 min-h-[42px]"
        >
          <span>{pick('Request Calendar & Notice Demo', 'पात्रो र सूचना डेमो माग्नुहोस्')}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Unified Interactive Showcase Container */}
      <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-xs">
        {/* Top Interactive Controls Bar */}
        <div className="p-4 sm:px-6 border-b border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/60 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-1 p-1 bg-slate-200/70 dark:bg-slate-800 rounded-xl">
              {(['baisakh', 'jestha'] as MonthKey[]).map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => handleMonthChange(m)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap min-h-[34px] ${
                    selectedMonth === m
                      ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-2xs'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
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
                    ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 font-semibold shadow-2xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
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
                  className={`py-1 ${idx === 6 ? 'text-rose-600 dark:text-rose-400' : ''}`}
                >
                  {wd}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-1.5">
              {calendarCells.map((day, index) => {
                if (day === null) {
                  return <div key={`blank-${index}`} className="min-h-[58px] sm:min-h-[68px]" />;
                }
                const entry = entryByDay.get(day);
                const isSaturday = index % 7 === 6;
                const isSelected = Boolean(entry && activeEntry?.id === entry.id);

                if (entry) {
                  return (
                    <button
                      key={day}
                      type="button"
                      onClick={() => setSelectedEntryId(entry.id)}
                      className={`min-h-[58px] sm:min-h-[68px] p-1.5 sm:p-2 rounded-xl border text-left flex flex-col justify-between transition-colors cursor-pointer ${cellHighlightClass(
                        entry.type,
                        isSelected
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
                        ? 'bg-rose-50/40 dark:bg-rose-950/15 text-rose-600 dark:text-rose-400'
                        : 'bg-slate-50/50 dark:bg-slate-950/40 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    <span className="text-xs font-mono tabular-nums leading-none">{day}</span>
                    {isSaturday && (
                      <span className="text-[10px] text-rose-500/80 dark:text-rose-400/80 truncate">
                        {pick('Wknd', 'शनि')}
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
                  {pick('Working Days:', 'कार्यदिन:')}{' '}
                  <strong className="text-slate-900 dark:text-white">{monthMeta.workingDays}</strong>
                </span>
                <span aria-hidden="true">·</span>
                <span>
                  {pick('Public Holidays:', 'सार्वजनिक बिदा:')}{' '}
                  <strong className="text-rose-600 dark:text-rose-400">{holidayCount}</strong>
                </span>
                <span aria-hidden="true">·</span>
                <span>
                  {pick('Notices & Announcements:', 'सूचना र घोषणा:')}{' '}
                  <strong className="text-indigo-600 dark:text-indigo-400">
                    {noticeAndAnnouncementCount}
                  </strong>
                </span>
              </div>
              <span>{pick('Dual B.S. / A.D. Sync', 'वि.सं. र ई.सं. समन्वय')}</span>
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
                        ? 'bg-indigo-50/70 dark:bg-indigo-950/30'
                        : 'hover:bg-white dark:hover:bg-slate-900/60'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <Icon className={`w-4 h-4 shrink-0 mt-0.5 ${typeAccentClass(entry.type)}`} />
                      <div className="min-w-0 flex-1 space-y-1">
                        <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-mono text-slate-500 dark:text-slate-400">
                          <span className={`font-semibold ${typeAccentClass(entry.type)}`}>
                            {pick(entry.shortTagEn, entry.shortTagNe)}
                          </span>
                          <span aria-hidden="true">·</span>
                          <span>{pick(entry.dateBsEn, entry.dateBsNe)}</span>
                          <span aria-hidden="true">·</span>
                          <span>{pick(entry.audienceEn, entry.audienceNe)}</span>
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
                      `A4 सूचना परिपत्र तयार · ${activeEntry.dateAdNe}`
                    )}
                  </span>
                </span>
                <span className="text-emerald-700 dark:text-emerald-400 font-semibold">
                  {pick('100% Offline Local Storage', '१००% अफलाइन स्थानीय भण्डारण')}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
