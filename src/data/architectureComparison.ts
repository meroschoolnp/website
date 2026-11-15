export interface ComparisonRow {
  kickerEn: string;
  kickerNe: string;
  titleEn: string;
  titleNe: string;
  proTitleEn: string;
  proTitleNe: string;
  proTagEn: string;
  proTagNe: string;
  proDescEn: string;
  proDescNe: string;
  conTitleEn: string;
  conTitleNe: string;
  conTagEn: string;
  conTagNe: string;
  conDescEn: string;
  conDescNe: string;
}

export const COMPARISON_ROWS: ComparisonRow[] = [
  {
    kickerEn: "Operational Uptime",
    kickerNe: "सञ्चालन निरन्तरता",
    titleEn: "Internet Dependency & Outages",
    titleNe: "इन्टरनेट निर्भरता र अवरोध",
    proTitleEn: "100% Offline-First Architecture",
    proTitleNe: "१००% अफलाइन-प्रथम प्रणाली",
    proTagEn: "Zero Downtime",
    proTagNe: "शून्य अवरोध",
    proDescEn:
      "Operates continuously without internet. Student fee billing, attendance, ID card printing, and exams continue during ISP blackouts, fiber cuts, or monsoon weather.",
    proDescNe:
      "इन्टरनेट बिना निरन्तर चल्दछ। फाइबर टुट्दा वा इन्टरनेट अवरुद्ध हुँदा पनि शुल्क संकलन, हाजिरी, परिचयपत्र प्रिन्ट र परीक्षा रोकिँदैन।",
    conTitleEn: "100% Cloud Dependent (SaaS)",
    conTitleNe: "१००% क्लाउड र इन्टरनेट निर्भर",
    conTagEn: "Total Failure on Outage",
    conTagNe: "नेट जाँदा पूर्ण ठप्प",
    conDescEn:
      "Entire school management freezes when internet drops. Student queues stall, fees cannot be settled, and gates grind to a halt.",
    conDescNe:
      "इन्टरनेट काटिनेबित्तिकै सम्पूर्ण विद्यालय व्यवस्थापन ठप्प हुन्छ। अभिभावकको लाइन रोकिन्छ र शुल्क बिलिङ बन्द हुन्छ।",
  },
  {
    kickerEn: "System Performance",
    kickerNe: "प्रणाली गति",
    titleEn: "Fee Settlement & Query Latency",
    titleNe: "शुल्क बिलिङ र खोजी गति",
    proTitleEn: "< 1ms Sub-Millisecond Speed",
    proTitleNe: "< १ मिलिसेकेन्ड तीव्र गति",
    proTagEn: "Instant Local Storage",
    proTagNe: "तुरुन्त स्थानीय भण्डारण",
    proDescEn:
      "Local offline database storage writes transactions in microseconds. Instant invoice generation, immediate ledger recalculation, and zero page reload latency.",
    proDescNe:
      "स्थानीय अफलाइन डेटाबेसले माइक्रोसेकेन्डमै कारोबार सेभ गर्छ। तुरुन्त बिल निर्माण, खाता मिलान र लोडिङ स्पिनर बिना छिटो कार्यसम्पादन।",
    conTitleEn: "800ms – 3,500ms Server Wait Times",
    conTitleNe: "८००ms – ३,५००ms सर्भर ढिलाइ",
    conTagEn: "High Latency Spikes",
    conTagNe: "उच्च विलम्बता",
    conDescEn:
      "Every action requires requests to remote shared servers. Loading spinners appear on every click, creating massive lag during morning fee rushes.",
    conDescNe:
      "हरेक क्लिकमा टाढाको सर्भरमा अनुरोध पठाउनुपर्ने भएकाले बिहानको शुल्क संकलन भीडमा लोडिङ ढिलाइ भइरहन्छ।",
  },
  {
    kickerEn: "Hardware & POS",
    kickerNe: "हार्डवेयर र POS",
    titleEn: "Thermal Printers & Laser Scanners",
    titleNe: "थर्मल प्रिन्टर र लेजर स्क्यानर",
    proTitleEn: "Direct ESC/POS & Barcode Drivers",
    proTitleNe: "प्रत्यक्ष ESC/POS र बारकोड ड्राइभर",
    proTagEn: "No Browser Popups",
    proTagNe: "ब्राउजर पपअप बिना",
    proDescEn:
      "Native desktop connection to 80mm/58mm thermal receipt printers, USB/Serial laser barcode scanners, cash drawers, and PVC card printers without browser print dialogs.",
    proDescNe:
      "ब्राउजर प्रिन्ट संवाद बिना नै 80mm/58mm थर्मल रसिद प्रिन्टर, USB लेजर बारकोड स्क्यानर, क्यास ड्रअर र PVC कार्ड प्रिन्टरसँग प्रत्यक्ष जडान।",
    conTitleEn: "Browser Print Popups & Focus Loss",
    conTitleNe: "ब्राउजर प्रिन्ट पपअप र फोकस समस्या",
    conTagEn: "Driver Limitations",
    conTagNe: "ड्राइभर सीमा",
    conDescEn:
      "Relies on generic browser Ctrl+P print dialogs on every receipt. Laser barcode scanners lose keystrokes whenever the browser tab loses focus or refreshes.",
    conDescNe:
      "हरेक रसिदमा Ctrl+P ब्राउजर प्रिन्ट पपअपमा भर पर्नुपर्छ र ब्राउजर ट्याब रिफ्रेस हुँदा बारकोड स्क्यानरको इनपुट छुट्छ।",
  },
  {
    kickerEn: "Security & Governance",
    kickerNe: "सुरक्षा र स्वामित्व",
    titleEn: "Data Privacy & Sovereignty",
    titleNe: "डेटा गोपनीयता र स्वामित्व",
    proTitleEn: "100% Campus Data Sovereignty",
    proTitleNe: "१००% विद्यालय डेटा स्वामित्व",
    proTagEn: "Full Ownership",
    proTagNe: "पूर्ण नियन्त्रण",
    proDescEn:
      "Institutional student records, grades, and accounting ledgers live strictly on school-owned hardware. No third-party data mining, telemetric tracking, or cloud breach risks.",
    proDescNe:
      "विद्यार्थीको अभिलेख, नतिजा र लेखा खाता विद्यालयकै कम्प्युटरमा सुरक्षित रहन्छ। तेस्रो पक्षको डेटा ट्र्याकिङ वा क्लाउड चुहावटको जोखिम शून्य हुन्छ।",
    conTitleEn: "Shared External Cloud Servers",
    conTitleNe: "साझा बाह्य क्लाउड सर्भर",
    conTagEn: "Vendor Controlled",
    conTagNe: "भेन्डर नियन्त्रित",
    conDescEn:
      "Confidential scholar and financial records are hosted on third-party servers. Vulnerable to vendor outages, price extortion, and compliance exposure.",
    conDescNe:
      "गोप्य विद्यार्थी र वित्तीय विवरण बाह्य सर्भरमा राखिन्छन्, जसले भेन्डर अवरोध र सुरक्षा जोखिम बढाउँछ।",
  },
  {
    kickerEn: "Counter Throughput",
    kickerNe: "काउन्टर क्षमता",
    titleEn: "Peak Morning Fee Rush Capacity",
    titleNe: "व्यस्त शुल्क समयको कार्यक्षमता",
    proTitleEn: "120+ Transactions Per Minute",
    proTitleNe: "प्रति मिनेट १२०+ रसिद",
    proTagEn: "Rapid Clearance",
    proTagNe: "छिटो निकास",
    proDescEn:
      "High-speed keyboard shortcuts, instant barcode scan search, and single-click invoice settlement clear long student and parent queues in minutes.",
    proDescNe:
      "किबोर्ड सर्टकट, तुरुन्त बारकोड स्क्यान खोज र १-क्लिक बिल फस्र्यौटले अभिभावकको लामो लाइन मिनेटमै खाली गर्छ।",
    conTitleEn: "Throttled by Internet Bandwidth",
    conTitleNe: "इन्टरनेट ब्यान्डविथले सीमित",
    conTagEn: "Queue Congestion",
    conTagNe: "लाइन जाम",
    conDescEn:
      "Cashier throughput is constrained by internet bandwidth and remote server limits. Counters back up with long queues during terminal fee payment deadlines.",
    conDescNe:
      "इन्टरनेट गति र क्लाउड सर्भर सीमाका कारण त्रैमासिक शुल्क बुझाउने दिनमा काउन्टरमा लामो भीड जम्मा हुन्छ।",
  },
  {
    kickerEn: "Licensing & Pricing",
    kickerNe: "इजाजतपत्र र शुल्क",
    titleEn: "Total Cost of Ownership (TCO)",
    titleNe: "कुल स्वामित्व लागत (TCO)",
    proTitleEn: "Zero Recurring Monthly Fees",
    proTitleNe: "शून्य मासिक शुल्क",
    proTagEn: "Perpetual Ownership",
    proTagNe: "स्थायी स्वामित्व",
    proDescEn:
      "Perpetual ownership model. No monthly per-student tax or mandatory annual subscription inflation. Schools own and run their software freely.",
    proDescNe:
      "स्थायी स्वामित्व ढाँचा। प्रति-विद्यार्थी मासिक शुल्क वा अनिवार्य वार्षिक सदस्यता वृद्धि छैन। विद्यालयले स्वतन्त्र रूपमा सफ्टवेयर चलाउँछन्।",
    conTitleEn: "Perpetual Monthly / Annual Billing",
    conTitleNe: "निरन्तर मासिक / वार्षिक शुल्क",
    conTagEn: "Perpetual SaaS Cost",
    conTagNe: "अनन्त SaaS खर्च",
    conDescEn:
      "Subscription prices increase every year and scale per-student. Schools pay perpetually or face immediate account lockouts and data loss.",
    conDescNe:
      "सदस्यता शुल्क हरेक वर्ष र विद्यार्थी संख्यासँगै बढिरहन्छ। तिर्न ढिला भए खाता लक हुने जोखिम रहन्छ।",
  },
  {
    kickerEn: "Disaster Recovery",
    kickerNe: "विपद् पुनर्स्थापना",
    titleEn: "Database Backups & Portability",
    titleNe: "डेटाबेस ब्याकअप र पोर्टेबिलिटी",
    proTitleEn: "1-Click Portable File Backup",
    proTitleNe: "१-क्लिक पोर्टेबल फाइल ब्याकअप",
    proTagEn: "3-Sec Local Backup",
    proTagNe: "३ सेकेन्डमा स्थानीय ब्याकअप",
    proDescEn:
      "Complete school database is a single portable file. Back up to a USB flash drive, external hard drive, or campus NAS in 3 seconds without vendor permission.",
    proDescNe:
      "सम्पूर्ण विद्यालय डेटाबेस एउटै पोर्टेबल फाइल हो। भेन्डरको अनुमति बिना ३ सेकेन्डमै USB पेनड्राइभ वा हार्ड ड्राइभमा ब्याकअप लिन सकिन्छ।",
    conTitleEn: "Restricted Vendor Exports",
    conTitleNe: "सीमित भेन्डर निर्यात",
    conTagEn: "Vendor Lock-in Risk",
    conTagNe: "भेन्डर लक्ड-इन जोखिम",
    conDescEn:
      "Institutions must request database dumps or rely on partial CSV exports. Export queues can take days and data format often prevents switching systems.",
    conDescNe:
      "विद्यालयले डेटा निर्यात गर्न भेन्डरलाई अनुरोध गर्नुपर्छ र दिनौंसम्म कुर्नुपर्छ वा अपूर्ण CSV मात्र पाइन्छ।",
  },
  {
    kickerEn: "Campus Networking",
    kickerNe: "कम्प्युटर सञ्जाल",
    titleEn: "Multi-Workstation Campus LAN",
    titleNe: "बहु-कम्प्युटर स्थानीय सञ्जाल",
    proTitleEn: "Zero-Internet Peer-to-Peer LAN",
    proTitleNe: "इन्टरनेट बिना स्थानीय LAN जडान",
    proTagEn: "Local Campus LAN",
    proTagNe: "स्थानीय विद्यालय सञ्जाल",
    proDescEn:
      "Accounts, admin, library, and examination desks operate across your school’s existing local Wi-Fi or Ethernet LAN without internet or cloud servers.",
    proDescNe:
      "लेखा, प्रशासन, पुस्तकालय र परीक्षा डेस्कहरू इन्टरनेट बिना नै विद्यालयको स्थानीय Wi-Fi वा Ethernet LAN मार्फत आपसमा जोडिन्छन्।",
    conTitleEn: "External Broadband Required for All PCs",
    conTitleNe: "सबै PC मा बाह्य इन्टरनेट अनिवार्य",
    conTagEn: "Heavy Bandwidth Load",
    conTagNe: "उच्च इन्टरनेट खपत",
    conDescEn:
      "Computers sitting on adjacent desks in the same administration room must send all keystrokes out to the internet and back, consuming heavy bandwidth.",
    conDescNe:
      "एउटै कोठामा सँगै रहेका कम्प्युटरहरूले पनि हरेक काम बाह्य इन्टरनेट हुँदै पठाउनुपर्छ, जसले ब्यान्डविथ खपत बढाउँछ।",
  },
  {
    kickerEn: "Academic Compliance",
    kickerNe: "शैक्षिक मापदण्ड",
    titleEn: "Grading & Examination Standards",
    titleNe: "ग्रेडिङ र परीक्षा मापदण्ड",
    proTitleEn: "Built-in NEB, CBSE & Percentage",
    proTitleNe: "बिल्ट-इन NEB, CBSE र प्रतिशत",
    proTagEn: "Fully Configurable",
    proTagNe: "पूर्ण अनुकूलन योग्य",
    proDescEn:
      "Flexible parameterized calculation engine natively complies with Nepal NEB letter grading, CBSE 10-point GPA, and traditional percentage divisions with zero custom coding.",
    proDescNe:
      "कुनै अतिरिक्त कोडिङ बिना नै नेपाल NEB अक्षराङ्क ग्रेडिङ, CBSE १०-अंकीय GPA र परम्परागत प्रतिशत प्रणाली स्वतः समर्थन गर्दछ।",
    conTitleEn: "Rigid Generic Templates",
    conTitleNe: "सीमित सामान्य टेम्प्लेट",
    conTagEn: "Rigid Formats",
    conTagNe: "कठोर ढाँचा",
    conDescEn:
      "Cloud platforms use standardized generic templates. Customizing local board grading scales or report card headers often requires costly vendor change orders.",
    conDescNe:
      "क्लाउड प्रणालीमा एउटै सामान्य ढाँचा हुन्छ; स्थानीय बोर्ड वा लब्धाङ्कपत्र मिलाउन महँगो कस्टम शुल्क तिर्नुपर्छ।",
  },
  {
    kickerEn: "Operating System Autonomy",
    kickerNe: "अपरेटिङ सिस्टम स्वतन्त्रता",
    titleEn: "Native Cross-Platform Desktop Support",
    titleNe: "नेटिभ क्रस-प्लेटफर्म डेस्कटप समर्थन",
    proTitleEn: "Windows, macOS & Linux Native Apps",
    proTitleNe: "Windows, macOS र Linux नेटिभ एप",
    proTagEn: "100% Native Desktop",
    proTagNe: "१००% नेटिभ डेस्कटप",
    proDescEn:
      "Lightweight native desktop applications running directly on campus hardware with zero browser dependencies, instant startup, and hardware peripheral drivers.",
    proDescNe:
      "ब्राउजर निर्भरता बिना सिधै विद्यालयको कम्प्युटरमा चल्ने छिटो नेटिभ डेस्कटप एप, तुरुन्त सुरु हुने र हार्डवेयर ड्राइभरयुक्त।",
    conTitleEn: "Trapped in Browser Only",
    conTitleNe: "वेब ब्राउजरमा मात्र सीमित",
    conTagEn: "Single Point of Failure",
    conTagNe: "ब्राउजर सत्र अवरोध",
    conDescEn:
      "No true native desktop performance. Entire system ceases to operate if the browser session expires or cloud servers encounter downtime.",
    conDescNe:
      "साँचो डेस्कटप गति हुँदैन। ब्राउजर सत्र म्याद सकिँदा वा क्लाउड सर्भर बन्द हुँदा काम रोकिन्छ।",
  },
];
