export type CalendarItemType = "holiday" | "announcement" | "notice" | "event";
export type FilterType = "all" | CalendarItemType;
export type MonthKey = "baisakh" | "jestha";

export interface CalendarEntry {
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

export const MONTH_META: Record<
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
    labelEn: "Baisakh 2082 B.S.",
    labelNe: "वैशाख २०८२ वि.सं.",
    adRangeEn: "April – May 2025 A.D.",
    adRangeNe: "अप्रिल – मे २०२५ ई.सं.",
    daysCount: 31,
    startWeekday: 1, // Monday
    workingDays: 24,
  },
  jestha: {
    labelEn: "Jestha 2082 B.S.",
    labelNe: "जेठ २०८२ वि.सं.",
    adRangeEn: "May – June 2025 A.D.",
    adRangeNe: "मे – जुन २०२५ ई.सं.",
    daysCount: 31,
    startWeekday: 4, // Thursday
    workingDays: 25,
  },
};

export const CALENDAR_ENTRIES: CalendarEntry[] = [
  {
    id: "cal-1",
    month: "baisakh",
    dayBs: 1,
    dateBsEn: "Baisakh 01, 2082",
    dateBsNe: "वैशाख १, २०८२",
    dateAdEn: "Apr 14, 2025",
    dateAdNe: "अप्रिल १४, २०२५",
    type: "holiday",
    audienceEn: "All Campus",
    audienceNe: "सम्पूर्ण विद्यालय",
    titleEn: "Nepali New Year 2082 Public Holiday",
    titleNe: "नयाँ वर्ष २०८२ सार्वजनिक बिदा",
    summaryEn:
      "Campus closed for Nepali New Year. Working-day counters automatically exclude this date from monthly student and faculty attendance tallies.",
    summaryNe:
      "नयाँ वर्ष २०८२ को अवसरमा विद्यालय बन्द रहनेछ। मासिक विद्यार्थी र शिक्षक हाजिरी कार्यदिन गणनाबाट यो दिन स्वतः घटाइन्छ।",
    shortTagEn: "Holiday",
    shortTagNe: "बिदा",
  },
  {
    id: "cal-2",
    month: "baisakh",
    dayBs: 4,
    dateBsEn: "Baisakh 04, 2082",
    dateBsNe: "वैशाख ४, २०८२",
    dateAdEn: "Apr 17, 2025",
    dateAdNe: "अप्रिल १७, २०२५",
    type: "announcement",
    audienceEn: "Parents & Grades 1–10",
    audienceNe: "अभिभावक र कक्षा १–१०",
    titleEn: "New Academic Session Orientation & Book Distribution",
    titleNe: "नयाँ शैक्षिक सत्र अभिमुखीकरण तथा पाठ्यपुस्तक वितरण",
    summaryEn:
      "Morning assembly briefing for parents and scholars at 8:30 AM, followed by homeroom timetable handoff and library card activation.",
    summaryNe:
      "बिहान ८:३० बजे अभिभावक तथा विद्यार्थी अभिमुखीकरण सभा र त्यसपछि कक्षा समयतालिका तथा पुस्तकालय कार्ड वितरण गरिनेछ।",
    shortTagEn: "Announcement",
    shortTagNe: "घोषणा",
  },
  {
    id: "cal-3",
    month: "baisakh",
    dayBs: 11,
    dateBsEn: "Baisakh 11, 2082",
    dateBsNe: "वैशाख ११, २०८२",
    dateAdEn: "Apr 24, 2025",
    dateAdNe: "अप्रिल २४, २०२५",
    type: "holiday",
    audienceEn: "All Campus",
    audienceNe: "सम्पूर्ण विद्यालय",
    titleEn: "Loktantra Diwas — Official School Holiday",
    titleNe: "लोकतन्त्र दिवस — आधिकारिक विद्यालय बिदा",
    summaryEn:
      "No classes or bus routes scheduled. Transport manifests and daily roll-call registers remain paused for this statutory holiday.",
    summaryNe:
      "नियमित कक्षा तथा विद्यालय बस सेवा बन्द रहनेछ। यस आधिकारिक बिदामा दैनिक हाजिरी रजिस्टर स्वतः बिदा चिह्नित हुन्छ।",
    shortTagEn: "Holiday",
    shortTagNe: "बिदा",
  },
  {
    id: "cal-4",
    month: "baisakh",
    dayBs: 15,
    dateBsEn: "Baisakh 15, 2082",
    dateBsNe: "वैशाख १५, २०८२",
    dateAdEn: "Apr 28, 2025",
    dateAdNe: "अप्रिल २८, २०२५",
    type: "notice",
    audienceEn: "Faculty & Accounts",
    audienceNe: "शिक्षक र लेखा शाखा",
    titleEn: "First Monthly Tuition Window & Scholarship Waiver Circular",
    titleNe: "प्रथम मासिक शुल्क बुझाउने र छात्रवृत्ति नवीकरण सूचना",
    summaryEn:
      "Printable noticeboard circular reminding guardians of fee desk hours (8:00 AM – 4:00 PM) and merit scholarship verification forms.",
    summaryNe:
      "शुल्क काउन्टर समय (बिहान ८:०० – दिउँसो ४:००) र जेहेन्दार छात्रवृत्ति प्रमाणीकरण फारम सम्बन्धी प्रिन्टयोग्य आधिकारिक सूचना।",
    shortTagEn: "Notice",
    shortTagNe: "सूचना",
  },
  {
    id: "cal-5",
    month: "baisakh",
    dayBs: 23,
    dateBsEn: "Baisakh 23, 2082",
    dateBsNe: "वैशाख २३, २०८२",
    dateAdEn: "May 06, 2025",
    dateAdNe: "मे ६, २०२५",
    type: "event",
    audienceEn: "Grades 6–12",
    audienceNe: "कक्षा ६–१२",
    titleEn: "Inter-House Science & Robotics Exhibition",
    titleNe: "अन्तर-सदन विज्ञान तथा रोबोटिक्स प्रदर्शनी",
    summaryEn:
      "Auditorium & Physics Lab showcase scheduled from 10:00 AM to 3:00 PM. Coordinator duty rosters linked directly with timetable slots.",
    summaryNe:
      "सभागृह र भौतिकशास्त्र प्रयोगशालामा बिहान १०:०० देखि ३:०० बजेसम्म प्रदर्शनी। संयोजक शिक्षक तालिका स्वतः समन्वित छ।",
    shortTagEn: "Event",
    shortTagNe: "कार्यक्रम",
  },
  {
    id: "cal-6",
    month: "baisakh",
    dayBs: 29,
    dateBsEn: "Baisakh 29, 2082",
    dateBsNe: "वैशाख २९, २०८२",
    dateAdEn: "May 12, 2025",
    dateAdNe: "मे १२, २०२५",
    type: "holiday",
    audienceEn: "All Campus",
    audienceNe: "सम्पूर्ण विद्यालय",
    titleEn: "Buddha Jayanti — National Public Holiday",
    titleNe: "बुद्ध जयन्ती — राष्ट्रिय सार्वजनिक बिदा",
    summaryEn:
      "Institutional holiday tagged across all branch campuses. Library return due dates automatically extend to the next open school day.",
    summaryNe:
      "सबै शाखाहरूमा लागू हुने सार्वजनिक बिदा। यस दिनको पुस्तकालय पुस्तक फिर्ता म्याद स्वतः अर्को खुल्ने दिनमा सर्दछ।",
    shortTagEn: "Holiday",
    shortTagNe: "बिदा",
  },
  {
    id: "cal-7",
    month: "jestha",
    dayBs: 5,
    dateBsEn: "Jestha 05, 2082",
    dateBsNe: "जेठ ५, २०८२",
    dateAdEn: "May 19, 2025",
    dateAdNe: "मे १९, २०२५",
    type: "notice",
    audienceEn: "Parents & Students",
    audienceNe: "अभिभावक र विद्यार्थी",
    titleEn: "First Unit Test Schedule & Admit Card Clearance Notice",
    titleNe: "प्रथम एकाइ परीक्षा तालिका र प्रवेशपत्र सूचना",
    summaryEn:
      "Official notice publishing subject dates, hall seating lists, and fee clearance reminders prior to admit card batch printing.",
    summaryNe:
      "विषयगत परीक्षा मिति, कक्षा सिट योजना र प्रवेशपत्र छपाइ अघिको शुल्क मिलान सम्बन्धी आधिकारिक विद्यालय सूचना।",
    shortTagEn: "Notice",
    shortTagNe: "सूचना",
  },
  {
    id: "cal-8",
    month: "jestha",
    dayBs: 15,
    dateBsEn: "Jestha 15, 2082",
    dateBsNe: "जेठ १५, २०८२",
    dateAdEn: "May 29, 2025",
    dateAdNe: "मे २९, २०२५",
    type: "holiday",
    audienceEn: "All Campus",
    audienceNe: "सम्पूर्ण विद्यालय",
    titleEn: "Republic Day (Ganatantra Diwas) Holiday",
    titleNe: "गणतन्त्र दिवस सार्वजनिक बिदा",
    summaryEn:
      "National holiday across all grades. Faculty payroll and student attendance calendars treat the date as an approved non-working day.",
    summaryNe:
      "सबै कक्षाहरूका लागि राष्ट्रिय बिदा। शिक्षक तलब र विद्यार्थी हाजिरी पात्रोमा स्वीकृत गैर-कार्यदिनका रूपमा अङ्कित हुन्छ।",
    shortTagEn: "Holiday",
    shortTagNe: "बिदा",
  },
  {
    id: "cal-9",
    month: "jestha",
    dayBs: 20,
    dateBsEn: "Jestha 20, 2082",
    dateBsNe: "जेठ २०, २०८२",
    dateAdEn: "Jun 03, 2025",
    dateAdNe: "जुन ३, २०२५",
    type: "announcement",
    audienceEn: "All Parents & Teachers",
    audienceNe: "सम्पूर्ण अभिभावक र शिक्षक",
    titleEn: "Parent-Teacher Meeting (PTM) & Progress Briefing",
    titleNe: "अभिभावक-शिक्षक बैठक (PTM) तथा प्रगति समीक्षा घोषणा",
    summaryEn:
      "Scheduled homeroom conferences between 9:00 AM and 1:00 PM to review first-month attendance records and formative homework diaries.",
    summaryNe:
      "प्रथम महिनाको हाजिरी प्रतिशत र गृहकार्य प्रगति समीक्षाका लागि बिहान ९:०० देखि दिउँसो १:०० बजेसम्म कक्षागत बैठक हुनेछ।",
    shortTagEn: "Announcement",
    shortTagNe: "घोषणा",
  },
  {
    id: "cal-10",
    month: "jestha",
    dayBs: 27,
    dateBsEn: "Jestha 27, 2082",
    dateBsNe: "जेठ २७, २०८२",
    dateAdEn: "Jun 10, 2025",
    dateAdNe: "जुन १०, २०२५",
    type: "event",
    audienceEn: "All Campus",
    audienceNe: "सम्पूर्ण विद्यालय",
    titleEn: "Annual Inter-School Sports Meet & House Parade",
    titleNe: "वार्षिक अन्तर-विद्यालय खेलकुद सप्ताह तथा मार्चपास",
    summaryEn:
      "Full-day athletics and house competitions on the main sports ground. Infirmary team and transport departures shifted to 4:00 PM.",
    summaryNe:
      "मुख्य खेलमैदानमा दिनभर एथलेटिक्स र सदन प्रतियोगिता। प्राथमिक उपचार कक्ष र बस प्रस्थान समय दिउँसो ४:०० बजे तय गरिएको छ।",
    shortTagEn: "Event",
    shortTagNe: "कार्यक्रम",
  },
];
