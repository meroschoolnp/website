import { SCHOOL_CONTACT } from '@/src/config/contactInfo';

export type ChatbotLanguage = 'en' | 'ne';

export interface ChatbotEntry {
  id: string;
  category: string;
  keywords: string[];
  title: string;
  titleNe?: string;
  answer: string;
  answerNe?: string;
  suggestedFollowUps?: string[];
  suggestedFollowUpsNe?: string[];
  actionLink?: {
    label: string;
    labelNe?: string;
    path: string;
  };
}

export const WEBSITE_KNOWLEDGE_BASE: ChatbotEntry[] = [
  // 1. Identity & Overview
  {
    id: 'what-is-meroschool',
    category: 'Overview',
    keywords: [
      'what is', 'overview', 'about', 'meroschool', 'software', 'app', 'system', 'erp', 'school management', 'individual school', 'who are you',
      'के हो', 'परिचय', 'सफ्टवेयर', 'प्लेटफर्म', 'प्रणाली', 'विद्यालय व्यवस्थापन',
    ],
    title: 'What is MeroSchool?',
    titleNe: 'MeroSchool के हो?',
    answer: `**MeroSchool** is a multi-institution offline school management platform designed for Windows, Linux, and macOS desktop computers.\n\n**How It Works:** MeroSchool is **NOT an individual school**. Instead, our Super Admin creates and provisions an account for your school, and your institution logs into its own dashboard which operates **100% offline locally with zero cloud support**.`,
    answerNe: `**MeroSchool** Windows, Linux र macOS डेस्कटप कम्प्युटरहरूका लागि निर्मित बहु-संस्थागत अफलाइन विद्यालय व्यवस्थापन प्लेटफर्म हो।\n\n**यसले कसरी काम गर्छ:** MeroSchool **कुनै एक विद्यालय मात्र होइन**। हाम्रो सुपर एडमिनले तपाईंको विद्यालयको खाता सिर्जना गरिदिन्छ, र लगइन गरेपछि तपाईंको संस्थाको सम्पूर्ण ड्यासबोर्ड **कुनै क्लाउड सपोर्ट बिना १००% अफलाइन** चल्दछ।`,
    suggestedFollowUps: [
      'Is it 100% offline?',
      'Which operating systems are supported?',
      'How does the pricing/license work?',
    ],
    suggestedFollowUpsNe: [
      'के यो १००% अफलाइन चल्छ?',
      'कुन–कुन अपरेटिङ सिस्टम सपोर्ट गर्छ?',
      'मूल्य र इजाजतपत्र कसरी काम गर्छ?',
    ],
    actionLink: {
      label: 'Explore All 44 Modules',
      labelNe: 'सबै ४४ मोड्युलहरू हेर्नुहोस्',
      path: '/features',
    },
  },

  // 1b. All 44 Modules Overview
  {
    id: 'all-44-modules',
    category: 'Modules Overview',
    keywords: [
      '44 modules', 'all modules', 'explore all 44 modules', 'modules', 'features list', 'what modules',
      '४४ मोड्युल', 'सबै ४४ मोड्युलहरू', 'सबै मोड्युल', 'मोड्युलहरू', 'मोड्युल', 'सुविधाहरू',
    ],
    title: 'What are all 44 modules included in MeroSchool?',
    titleNe: 'MeroSchool मा समावेश सबै ४४ मोड्युलहरू के–के हुन्?',
    answer: `MeroSchool includes **44 integrated offline modules** organized across 6 institutional domains:\n\n• **Academics & Structure:** Academic Sessions, Departments, Campus Events, Classrooms & Sections, Subjects, Timetable Solver, and Teacher Substitution.\n• **Students & Lifecycle:** Scholar Directory, Batch CSV Import, Student Progression Timeline, CR80 PVC ID Cards, Alumni, Discipline, and Campus Notice Board.\n• **Examinations & Grading:** Exam Schedules, Terminal Marks Entry, Master Broadsheets, CDC/NEB & CBSE Gradebooks, Report Cards, and Admit Cards.\n• **Finance & Accounts:** Student Fee Ledgers, Daily Cash Day-Book, Concessions & Scholarships, Staff Payroll, and 80mm/58mm ESC/POS Thermal Receipt Printing.\n• **Campus Logistics:** Library Management & Barcode Book Circulation, Transport & Barcoded Bus Passes, Leave Management, Hostel, Inventory, and Infirmary.\n• **Governance & Tools:** Role-Based Access, Cmd+K Global Search, Executive Reports, Database Health & Audit Desk, and 1-Click USB Backup.`,
    answerNe: `MeroSchool मा ६ मुख्य क्षेत्रहरूमा विभाजित **४४ एकीकृत अफलाइन मोड्युलहरू** समावेश छन्:\n\n• **शैक्षिक तथा संरचना:** शैक्षिक सत्र, विभाग, विद्यालय कार्यक्रम, कक्षा/सेक्सन, विषय, समयतालिका र शिक्षक सट्टा कक्षा।\n• **विद्यार्थी व्यवस्थापन:** विद्यार्थी अभिलेख, सामूहिक CSV आयात, शैक्षिक प्रगति विवरण, CR80 PVC परिचयपत्र, पूर्व-विद्यार्थी, अनुशासन र सूचना पाटी।\n• **परीक्षा तथा नतिजा:** परीक्षा तालिका, अंक प्रविष्टि, मास्टर ब्रोडसिट, NEB/CBSE ग्रेडिङ, लब्धाङ्कपत्र र प्रवेशपत्र।\n• **वित्त तथा लेखा:** विद्यार्थी शुल्क खाता, दैनिक नगद डे-बुक, छात्रवृत्ति/छुट, कर्मचारी तलब र ८०mm/५८mm ESC/POS थर्मल रसिद छपाइ।\n• **क्याम्पस सेवा तथा लजिस्टिक्स:** पुस्तकालय व्यवस्थापन र बारकोड पुस्तक लेनदेन, यातायात र बारकोड बस पास, बिदा व्यवस्थापन, होस्टेल, जिन्सी र स्वास्थ्य कक्ष।\n• **शासन तथा उपकरण:** भूमिका-आधारित पहुँच, Cmd+K विश्वव्यापी खोज, कार्यकारी रिपोर्ट, डेटाबेस स्वास्थ्य डेस्क र १-क्लिक USB ब्याकअप।`,
    suggestedFollowUps: [
      'How does student fee ledger work?',
      'How do examinations, broadsheets, and report cards work?',
      'How does library management work?',
      'How does staff and student leave management work?',
    ],
    suggestedFollowUpsNe: [
      'विद्यार्थी शुल्क खाता कसरी काम गर्छ?',
      'परीक्षा र ब्रोडसिट कसरी काम गर्छ?',
      'पुस्तकालय व्यवस्थापन कसरी काम गर्छ?',
      'बिदा व्यवस्थापन कसरी काम गर्छ?',
    ],
    actionLink: {
      label: 'Explore All 44 Modules',
      labelNe: 'सबै ४४ मोड्युलहरू हेर्नुहोस्',
      path: '/features',
    },
  },

  // 2. Offline Architecture
  {
    id: 'offline-architecture',
    category: 'Architecture',
    keywords: [
      'offline', 'internet', 'connection', 'network', 'database', 'cloud', 'wifi', 'data sovereignty', 'cut', 'monsoon',
      'अफलाइन', 'इन्टरनेट', 'क्लाउड', 'नेटवर्क', 'डेटाबेस', 'सम्पर्क', 'वाइफाइ',
    ],
    title: 'Is MeroSchool 100% offline?',
    titleNe: 'के MeroSchool १००% अफलाइन चल्छ?',
    answer: `**Yes, MeroSchool is 100% offline-first with zero cloud support for dashboard activity.**\n\n• **Zero Internet Needed:** Daily student fee collection, exam broadsheet generation, homeroom attendance, bus pass verification, and report cards run strictly on your local computer's campus database.\n• **Crash-Safe Speed:** Engineered for sub-millisecond query latency (0.2ms – 2ms) and automatic power-cut crash resilience.\n• **No Cloud Gateways:** No dashboard activity relies on cloud servers, online payment portals, or internet messaging gateways.`,
    answerNe: `**हो, MeroSchool ड्यासबोर्डका सबै कार्यहरू शून्य क्लाउड सपोर्टसहित १००% अफलाइन चल्दछन्।**\n\n• **इन्टरनेट आवश्यक नपर्ने:** दैनिक शुल्क संकलन, परीक्षा ब्रोडसिट निर्माण, कक्षा हाजिरी, बस पास प्रमाणीकरण र लब्धाङ्कपत्र छपाइ तपाईंको कार्यालयकै कम्प्युटरको स्थानीय डेटाबेसमा चल्दछन्।\n• **विद्युत अवरोधबाट सुरक्षित गति:** ०.२ms – २ms को अति तीव्र गति र आकस्मिक विद्युत अवरोधबाट डेटा जोगाउने सुरक्षासहित तयार पारिएको छ।\n• **कुनै क्लाउड निर्भरता छैन:** ड्यासबोर्डका कुनै पनि गतिविधि बाहिरी क्लाउड सर्भर वा अनलाइन गेटवेमा निर्भर हुँदैनन्।`,
    suggestedFollowUps: [
      'How do we back up our data?',
      'Can multiple computers connect over LAN?',
      'What are the hardware requirements?',
    ],
    suggestedFollowUpsNe: [
      'हामी डेटा ब्याकअप कसरी गर्ने?',
      'के धेरै कम्प्युटर LAN बाट जोड्न मिल्छ?',
      'कस्तो कम्प्युटर हार्डवेयर चाहिन्छ?',
    ],
    actionLink: {
      label: 'Read Architecture Deep-Dive',
      labelNe: 'प्रविधि र संरचना हेर्नुहोस्',
      path: '/about',
    },
  },

  // 3. Operating Systems & Hardware
  {
    id: 'os-hardware-support',
    category: 'Technical Specifications',
    keywords: [
      'operating system', 'os', 'windows', 'mac', 'macos', 'linux', 'specs', 'requirements', 'hardware', 'ram', 'cpu', 'size', 'installer',
      'अपरेटिङ सिस्टम', 'विन्डोज', 'म्याक', 'लिनक्स', 'हार्डवेयर', 'क्षमता', 'कम्प्युटर', 'र्याम',
    ],
    title: 'Which operating systems & hardware are supported?',
    titleNe: 'कुन–कुन अपरेटिङ सिस्टम र हार्डवेयर सपोर्ट गर्छ?',
    answer: `MeroSchool is a lightweight native desktop application (~15MB package) engineered for low hardware overhead:\n\n• **Windows:** Windows 10 & Windows 11 (64-bit and ARM64) native desktop app.\n• **macOS:** macOS 11.0 Big Sur and later (Universal Apple Silicon M1/M2/M3/M4 & Intel).\n• **Linux:** Debian, Ubuntu, Fedora, Arch, openSUSE.\n• **Minimum Hardware:** 2 GB of RAM, 500 MB free disk space, and any modern dual-core processor. It runs smoothly on standard school desktop PCs and laptops.`,
    answerNe: `MeroSchool अत्यन्त हल्का (~१५ MB) नेटिभ डेस्कटप सफ्टवेयर हो:\n\n• **Windows:** Windows 10 र Windows 11 (६४-बिट र ARM64)।\n• **macOS:** macOS 11.0 Big Sur र सोभन्दा माथि (Apple Silicon M1/M2/M3/M4 र Intel)।\n• **Linux:** Debian, Ubuntu, Fedora, Arch, openSUSE।\n• **न्यूनतम हार्डवेयर:** २ GB RAM, ५०० MB खाली डिस्क स्पेस र सामान्य डुअल-कोर प्रोसेसर। विद्यालयका नियमित डेस्कटप तथा ल्यापटपमा सहजै चल्दछ।`,
    suggestedFollowUps: [
      'Is it 100% offline?',
      'Does it work with barcode scanners?',
      'Can we customize school name and logo?',
    ],
    suggestedFollowUpsNe: [
      'के यो १००% अफलाइन चल्छ?',
      'के MeroSchool ले बारकोड स्क्यानर र थर्मल रसिद प्रिन्टर सपोर्ट गर्छ?',
      'विद्यालयको नाम र लोगो राख्न मिल्छ?',
    ],
    actionLink: {
      label: 'View Platform Specifications',
      labelNe: 'प्लेटफर्म विवरण हेर्नुहोस्',
      path: '/about',
    },
  },

  // 4. Hardware Peripherals (USB Barcode Scanners & ESC/POS Thermal Printers)
  {
    id: 'hardware-peripherals',
    category: 'Hardware & Peripherals',
    keywords: [
      'printer', 'scanner', 'barcode', 'thermal', 'pos', 'receipt', 'cr80', 'pvc', 'hardware', 'usb', 'cash counter', 'epson', 'xprinter', '80mm', '58mm',
      'प्रिन्टर', 'स्क्यानर', 'बारकोड', 'थर्मल', 'रसिद', 'हार्डवेयर', 'परिचयपत्र',
    ],
    title: 'Does MeroSchool work with USB barcode scanners and thermal receipt printers?',
    titleNe: 'के MeroSchool ले बारकोड स्क्यानर र थर्मल रसिद प्रिन्टर सपोर्ट गर्छ?',
    answer: `**Yes! Native Zero-Driver USB Hardware Support:**\n\n• **ESC/POS Thermal Receipt Printers:** Direct hardware-level integration with standard 80mm and 58mm USB thermal printers (Epson, Xprinter, Rongta, TVS) for instant 2-second fee receipts and gate slips without browser print popups.\n• **USB HID Laser Barcode Scanners:** Plug-and-play support for standard 1D/2D laser and optical barcode scanners for library book circulation, student lookup at cash counters, and bus/campus gate verification.\n• **CR80 PVC ID & Bus Passes:** Print standardized CR80 student ID badges and transport bus passes featuring Code-128 barcodes and webcam scholar portraits.`,
    answerNe: `**हो! शून्य अतिरिक्त ड्राइभरमै USB हार्डवेयर सपोर्ट उपलब्ध छ:**\n\n• **ESC/POS थर्मल रसिद प्रिन्टर:** मानक ८०mm र ५८mm USB थर्मल प्रिन्टरहरू (Epson, Xprinter, Rongta, TVS) सँग सिधा जडान भई २ सेकेन्डमै शुल्क रसिद र गेट स्लिप छापिन्छ।\n• **USB HID लेजर बारकोड स्क्यानर:** पुस्तकालय पुस्तक लेनदेन, शुल्क काउन्टरमा विद्यार्थी खोजी र बस/गेट पास जाँचका लागि प्लग-एन्ड-प्ले बारकोड स्क्यानर सपोर्ट गर्दछ।\n• **CR80 PVC परिचय र बस पास:** Code-128 बारकोड र वेबक्याम फोटोसहित CR80 PVC विद्यार्थी परिचयपत्र र बस पास सिधै छाप्न सकिन्छ।`,
    suggestedFollowUps: [
      'How does student fee ledger work?',
      'How does Library Management & book cataloging work?',
      'Book a free campus demo',
    ],
    suggestedFollowUpsNe: [
      'विद्यार्थी शुल्क खाता कसरी काम गर्छ?',
      'पुस्तकालय व्यवस्थापन र पुस्तक लेनदेन कसरी काम गर्छ?',
      'निःशुल्क विद्यालय डेमो बुक गर्नुहोस्',
    ],
    actionLink: {
      label: 'Test Live Receipt Simulator',
      labelNe: 'प्रत्यक्ष रसिद सिमुलेटर हेर्नुहोस्',
      path: '/features#receipt-simulator',
    },
  },

  // 5. Fee Management & Student Ledgers
  {
    id: 'fees-ledgers',
    category: 'Finance & Accounts',
    keywords: [
      'fees', 'fee', 'ledger', 'dues', 'payment', 'discount', 'receipt', 'settlement', 'cash counter', 'daybook', 'tuition', 'account',
      'शुल्क', 'फि', 'खाता', 'बक्यौता', 'छुट', 'नगद', 'लेखा', 'बिलिङ', 'काउन्टर',
    ],
    title: 'How does student fee management and ledger work?',
    titleNe: 'विद्यार्थी शुल्क व्यवस्थापन र खाता कसरी काम गर्छ?',
    answer: `MeroSchool includes a comprehensive **double-entry student account ledger** and cash counter desk:\n\n• **Running Balances:** Tracks monthly tuition, admission, laboratory, bus, and computer fees with exact mathematical running balances.\n• **Immediate Settlement:** Cashiers can collect partial or full settlements, apply authorized concession/discount waivers, and print itemized 80mm/58mm ESC/POS thermal receipts in under two seconds.\n• **Daily Day-Book Cash Drawer:** Every collected fee is synchronized with the Front Desk Day-Book cash drawer, closing out daily balances with an audit trail.\n• **Clearance & Export:** 1-click export of student fee clearance certificates and CSV transaction histories.`,
    answerNe: `MeroSchool मा पूर्ण **दोहोरो प्रविष्टि (Double-Entry) शुल्क खाता** र नगद काउन्टर डेस्क समावेश छ:\n\n• **निरन्तर मौज्दात हिसाब:** मासिक शिक्षण शुल्क, भर्ना, प्रयोगशाला, बस र कम्प्युटर शुल्कको सटीक बक्यौता तथा भुक्तानी विवरण राख्दछ।\n• **तत्काल बिलिङ र रसिद:** आंशिक वा पूर्ण रकम संकलन गर्न, अधिकृत छात्रवृत्ति/छुट लागू गर्न र २ सेकेन्डमै ८०mm/५८mm ESC/POS थर्मल रसिद छाप्न सकिन्छ।\n• **दैनिक डे-बुक (Day-Book):** संकलित प्रत्येक शुल्क दैनिक नगद पुस्तिकामा स्वतः जोडिन्छ र दिनको अन्त्यमा मिलान गर्न मिल्छ।\n• **प्रमाणपत्र र CSV निर्यात:** १-क्लिकमा शुल्क चुक्ता प्रमाणपत्र र CSV विवरण निकाल्न सकिन्छ।`,
    suggestedFollowUps: [
      'Does it work with barcode scanners?',
      'How does master broadsheet work?',
      'Book a free campus demo',
    ],
    suggestedFollowUpsNe: [
      'के MeroSchool ले बारकोड स्क्यानर र थर्मल रसिद प्रिन्टर सपोर्ट गर्छ?',
      'परीक्षा र ब्रोडसिट कसरी काम गर्छ?',
      'निःशुल्क विद्यालय डेमो बुक गर्नुहोस्',
    ],
    actionLink: {
      label: 'Inspect Fee Management Module',
      labelNe: 'शुल्क व्यवस्थापन मोड्युल हेर्नुहोस्',
      path: '/features',
    },
  },

  // 6. Examinations & Broadsheets
  {
    id: 'examinations-broadsheet',
    category: 'Academics & Exams',
    keywords: [
      'exam', 'examinations', 'broadsheet', 'report card', 'gradebook', 'grading', 'marks', 'gpa', 'neb', 'cbse', 'rank', 'terminal',
      'परीक्षा', 'ब्रोडसिट', 'नतिजा', 'लब्धाङ्कपत्र', 'अंक', 'जिपिए', 'ग्रेडिङ', 'प्रवेशपत्र',
    ],
    title: 'How do examinations, broadsheets, and report cards work?',
    titleNe: 'परीक्षा, ब्रोडसिट र लब्धाङ्कपत्र (Report Card) कसरी काम गर्छ?',
    answer: `MeroSchool handles the entire examination lifecycle locally:\n\n• **Master Broadsheet Compiler:** Automatically computes total theory/practical marks, percentages, GPA, grade letter, class rank, and divisional remarks across all subjects.\n• **Grading Standards:** Supports National Examination Board (NEB Nepal), CBSE (India), and international 4.0 GPA scale standards.\n• **Terminal Report Cards:** Generates print-ready student marksheets with school crest, grading criteria legend, attendance records, and principal/homeroom teacher signature blocks.\n• **Admit Cards:** 1-click generation of terminal admit cards and exam hall passes with barcode security and verification codes.`,
    answerNe: `MeroSchool ले सम्पूर्ण परीक्षा प्रक्रिया स्थानीय रूपमै सम्पन्न गर्दछ:\n\n• **मास्टर ब्रोडसिट कम्पाइलर:** सैद्धान्तिक/प्रयोगात्मक अंक, प्रतिशत, GPA, अक्षराङ्क ग्रेड र कक्षा स्थान स्वतः गणना गर्दछ।\n• **ग्रेडिङ मापदण्ड:** नेपालको NEB/SEE CDC प्रणाली, CBSE र ४.० GPA मापदण्ड पूर्ण रूपमा सपोर्ट गर्दछ।\n• **लब्धाङ्कपत्र छपाइ:** विद्यालयको लोगो, ग्रेड व्याख्या, हाजिरी विवरण र हस्ताक्षर स्थान सहितको प्रिन्ट-तयार मार्कसिट बनाउँछ।\n• **प्रवेशपत्र:** बारकोड सुरक्षा र प्रमाणीकरण कोड सहितको परीक्षा प्रवेशपत्र १-क्लिकमै तयार पार्दछ।`,
    suggestedFollowUps: [
      'Can we customize school name and logo?',
      'How does morning attendance work?',
      'Explore all 44 modules',
    ],
    suggestedFollowUpsNe: [
      'विद्यालयको नाम र लोगो राख्न मिल्छ?',
      'दैनिक कक्षा हाजिरी कसरी काम गर्छ?',
      'सबै ४४ मोड्युलहरू हेर्नुहोस्',
    ],
    actionLink: {
      label: 'View Examination Modules',
      labelNe: 'परीक्षा मोड्युलहरू हेर्नुहोस्',
      path: '/features',
    },
  },

  // 7. Daily Attendance & Registers
  {
    id: 'attendance-sms',
    category: 'Attendance & Operations',
    keywords: [
      'attendance', 'roll call', 'absent', 'present', 'parents', 'registers', 'morning',
      'हाजिरी', 'अनुपस्थित', 'उपस्थित', 'रजिस्टर', 'कक्षा',
    ],
    title: 'How does daily attendance and roll-call work offline?',
    titleNe: 'दैनिक कक्षा हाजिरी अफलाइनमा कसरी काम गर्छ?',
    answer: `• **Morning Homeroom Roll-Call:** Class teachers or administrators can mark an entire class as Present, Absent, Tardy, or Excused with 1-click bulk toggle in seconds.\n• **Printable Absence Slips & Registers:** Generate local monthly attendance matrices and printable guardian notice slips completely offline with zero cloud or SMS gateway dependency.\n• **Historical Metrics:** Monthly percentage attendance calculations feed directly into student terminal report cards.`,
    answerNe: `• **शीघ्र कक्षा हाजिरी:** कक्षा शिक्षक वा प्रशासकले १-क्लिकमै सम्पूर्ण कक्षाको उपस्थित, अनुपस्थित, ढिला वा बिदा स्थिति केही सेकेन्डमै अद्यावधिक गर्न सक्छन्।\n• **प्रिन्टयोग्य रजिस्टर र सूचना:** कुनै क्लाउड वा अनलाइन SMS गेटवे बिना नै मासिक हाजिरी तालिका र अभिभावक सूचना स्लिप प्रिन्ट गर्न सकिन्छ।\n• **नतिजासँग आबद्ध:** मासिक हाजिरी प्रतिशत स्वतः विद्यार्थीको त्रैमासिक लब्धाङ्कपत्रमा जोडिन्छ।`,
    suggestedFollowUps: [
      'Is it 100% offline?',
      'How do teacher substitutions work?',
      'Contact software team',
    ],
    suggestedFollowUpsNe: [
      'के यो १००% अफलाइन चल्छ?',
      'शिक्षक सट्टा कक्षा (Substitution) कसरी हुन्छ?',
      'प्राविधिक टोलीलाई सम्पर्क गर्नुहोस्',
    ],
    actionLink: {
      label: 'View Attendance Module',
      labelNe: 'हाजिरी मोड्युल हेर्नुहोस्',
      path: '/features',
    },
  },

  // 8. Timetable & Teacher Substitution Desk
  {
    id: 'timetable-substitution',
    category: 'Academics & Scheduling',
    keywords: [
      'timetable', 'routine', 'schedule', 'substitution', 'teacher leave', 'clash', 'double booking', 'period',
      'समयतालिका', 'रुटिन', 'सट्टा कक्षा', 'शिक्षक', 'घण्टी',
    ],
    title: 'How does class routine and teacher substitution work?',
    titleNe: 'कक्षा रुटिन र शिक्षक सट्टा कक्षा (Substitution) कसरी काम गर्छ?',
    answer: `• **Interactive Class Timetable:** 6-day (Sunday through Friday) periodic grid matrix mapping classes, subjects, room allocations, and teachers.\n• **Double-Booking Prevention:** Algorithmic constraint checker prevents assigning two classes to the same instructor or same room in the same period.\n• **Emergency Substitution Desk:** When a teacher is absent, the system detects free teachers in that exact slot and prioritizes instructors by department relevance and weekly workload.`,
    answerNe: `• **अन्तरक्रियात्मक समयतालिका:** आइतबारदेखि शुक्रबारसम्म ६-दिने घण्टी अनुसार कक्षा, विषय, कोठा र शिक्षक तालिका व्यवस्थापन गर्दछ।\n• **दोहोरो समय जुध्ने रोकथाम:** एउटै घण्टीमा एउटै शिक्षक वा कोठा दुई ठाउँमा पर्न नदिन स्वचालित जाँच प्रणाली छ।\n• **आकस्मिक सट्टा डेस्क:** कुनै शिक्षक अनुपस्थित हुँदा सोही घण्टीमा खाली रहेका शिक्षक पत्ता लगाई विभाग र कार्यभार अनुसार प्राथमिकता दिन्छ।`,
    suggestedFollowUps: [
      'How does leave management work?',
      'Explore all 44 modules',
      'What are the hardware requirements?',
    ],
    suggestedFollowUpsNe: [
      'बिदा व्यवस्थापन कसरी काम गर्छ?',
      'सबै ४४ मोड्युलहरू हेर्नुहोस्',
      'कस्तो कम्प्युटर हार्डवेयर चाहिन्छ?',
    ],
    actionLink: {
      label: 'View Timetable Solver',
      labelNe: 'समयतालिका मोड्युल हेर्नुहोस्',
      path: '/features',
    },
  },

  // 9. Transport & Bus Passes
  {
    id: 'transport-bus-passes',
    category: 'Logistics',
    keywords: [
      'transport', 'bus', 'vehicle', 'fleet', 'route', 'stops', 'bus pass', 'driver', 'pickup', 'cr80',
      'यातायात', 'बस', 'रुट', 'गाडी', 'चालक', 'बस पास', 'स्टप', 'बारकोड बस पास',
    ],
    title: 'How does school bus fleet and transit pass management work?',
    titleNe: 'विद्यालय बस, रुट र यातायात पास व्यवस्थापन कसरी काम गर्छ?',
    answer: `• **Route & Stop Manifests:** Catalogs school bus transit routes, sequential boarding points, morning/afternoon pickup times, and vehicle passenger capacity.\n• **CR80 PVC Bus Passes:** Issues standardized student transit passes featuring Code-128 barcodes verified by USB or wireless barcode scanners during bus boarding.\n• **Fleet Maintenance Log:** Logs oil changes, odometer readings, mechanical repairs, and road tax renewal due dates.`,
    answerNe: `• **रुट र स्टप तालिका:** विद्यालयका बस रुट, क्रमबद्ध पिकेट स्टप, बिहानी/दिउँसो समय र सिट क्षमताको पूर्ण अभिलेख राख्दछ।\n• **CR80 PVC बारकोड बस पास:** बस चढ्दा USB वा वायरलेस बारकोड स्क्यानरले जाँच गर्न मिल्ने Code-128 बारकोड सहितको बस पास जारी गर्छ।\n• **सवारी मर्मत अभिलेख:** मोबिल परिवर्तन, ओडोमिटर, मर्मत खर्च र कर नवीकरण मिति ट्र्याक गर्दछ।`,
    suggestedFollowUps: [
      'Does it work with barcode scanners?',
      'How does library management work?',
      'Explore all 44 modules',
    ],
    suggestedFollowUpsNe: [
      'के MeroSchool ले बारकोड स्क्यानर र थर्मल रसिद प्रिन्टर सपोर्ट गर्छ?',
      'पुस्तकालय व्यवस्थापन कसरी काम गर्छ?',
      'सबै ४४ मोड्युलहरू हेर्नुहोस्',
    ],
    actionLink: {
      label: 'View Transport Module',
      labelNe: 'यातायात मोड्युल हेर्नुहोस्',
      path: '/features',
    },
  },

  // 9b. Leave Management (Staff & Students)
  {
    id: 'leave-management',
    category: 'HR & Attendance',
    keywords: [
      'leave', 'leave management', 'sick leave', 'casual leave', 'medical leave', 'leave request', 'approval', 'staff leave', 'student leave',
      'बिदा', 'बिरामी बिदा', 'स्वीकृति', 'कर्मचारी बिदा', 'विद्यार्थी बिदा',
    ],
    title: 'How does staff and student leave management work?',
    titleNe: 'शिक्षक, कर्मचारी र विद्यार्थी बिदा व्यवस्थापन कसरी काम गर्छ?',
    answer: `MeroSchool includes a unified **Leave Management & Approval Register**:\n\n• **Faculty Leave Quotas:** Track casual, sick, earned, and study leave balances per teacher and administrative employee.\n• **Student Medical & Guardian Leave:** Record excused student absences with parent or doctor notes directly linked to daily roll-call registers.\n• **Principal Approval & Auto-Substitution:** Approved faculty leave automatically alerts the **Teacher Substitution Desk** to assign free-period cover teachers.\n• **Payroll Sync:** Unpaid leave deductions sync cleanly with monthly staff payroll processing.`,
    answerNe: `MeroSchool मा एकीकृत **बिदा व्यवस्थापन तथा स्वीकृति रजिस्टर** समावेश छ:\n\n• **कर्मचारी बिदा कोटा:** प्रत्येक शिक्षक तथा कर्मचारीको भैपरी, बिरामी, घर र अध्ययन बिदाको बाँकी हिसाब राख्दछ।\n• **विद्यार्थी बिदा अभिलेख:** अभिभावक वा चिकित्सकको प्रमाण सहित विद्यार्थीको स्वीकृत अनुपस्थिति सिधै दैनिक हाजिरीमा जोड्दछ।\n• **प्रधानाध्यापक स्वीकृति र सट्टा डेस्क:** शिक्षकको बिदा स्वीकृत हुनासाथ सट्टा कक्षा डेस्कमा खाली शिक्षक खोज्न सूचना पठाउँछ।\n• **तलब मिलान:** बेतलबी बिदाको कट्टी मासिक तलब पानासँग स्वतः मिलान हुन्छ।`,
    suggestedFollowUps: [
      'How do teacher substitutions work?',
      'How does library management work?',
      'Explore all 44 modules',
    ],
    suggestedFollowUpsNe: [
      'शिक्षक सट्टा कक्षा (Substitution) कसरी हुन्छ?',
      'पुस्तकालय व्यवस्थापन कसरी काम गर्छ?',
      'सबै ४४ मोड्युलहरू हेर्नुहोस्',
    ],
    actionLink: {
      label: 'View Leave Management Module',
      labelNe: 'बिदा व्यवस्थापन मोड्युल हेर्नुहोस्',
      path: '/features',
    },
  },

  // 9c. Library Management & Book Circulation
  {
    id: 'library-management',
    category: 'Library & Research',
    keywords: [
      'library', 'library management', 'book', 'books', 'isbn', 'dewey', 'checkout', 'book issue', 'return', 'fine', 'catalog', 'barcode',
      'पुस्तकालय', 'किताब', 'पुस्तक', 'जरिवाना', 'सूची',
    ],
    title: 'How does Library Management & book cataloging work?',
    titleNe: 'पुस्तकालय व्यवस्थापन र पुस्तक लेनदेन कसरी काम गर्छ?',
    answer: `• **Dewey & ISBN Book Cataloging:** Organize textbooks, reference encyclopedias, periodicals, and rack shelf locations cleanly.\n• **Laser Barcode Check-Out & Return:** Scan book barcodes and student CR80 ID cards with any standard USB scanner for instant book issue and return transactions.\n• **Overdue Tracking & Fine Sync:** Tracks borrower due dates and syncs replacement or late fines directly to the student’s fee ledger.`,
    answerNe: `• **Dewey र ISBN पुस्तक सूची:** पाठ्यपुस्तक, सन्दर्भ ग्रन्थ, पत्रपत्रिका र दराज/र्‍याक स्थान व्यवस्थित रूपमा दर्ता गर्दछ।\n• **लेजर बारकोड लेनदेन:** मानक USB स्क्यानरबाट पुस्तक र विद्यार्थीको CR80 परिचयपत्र स्क्यान गरी तुरुन्तै पुस्तक जारी वा फिर्ता गर्न सकिन्छ।\n• **म्याद नाघेको जरिवाना मिलान:** फिर्ता म्याद नाघेमा जरिवाना गणना गरी सिधै विद्यार्थीको शुल्क खातामा जोड्दछ।`,
    suggestedFollowUps: [
      'Does it work with barcode scanners?',
      'How does transport management work?',
      'Explore all 44 modules',
    ],
    suggestedFollowUpsNe: [
      'के MeroSchool ले बारकोड स्क्यानर र थर्मल रसिद प्रिन्टर सपोर्ट गर्छ?',
      'विद्यालय बस र यातायात कसरी काम गर्छ?',
      'सबै ४४ मोड्युलहरू हेर्नुहोस्',
    ],
    actionLink: {
      label: 'View Library Management',
      labelNe: 'पुस्तकालय मोड्युल हेर्नुहोस्',
      path: '/features',
    },
  },

  // 10. Database Backup & Disaster Recovery
  {
    id: 'database-backup',
    category: 'Data Governance',
    keywords: [
      'backup', 'database', 'restore', 'usb', 'flash drive', 'snapshot', 'recovery', 'export', 'data loss',
      'ब्याकअप', 'पुनर्स्थापना', 'युएसबी', 'पेनड्राइभ', 'सुरक्षा', 'स्न्यापसट',
    ],
    title: 'How do we back up our school’s database and financial records?',
    titleNe: 'हामी विद्यालयको डेटाबेस र आर्थिक अभिलेख कसरी ब्याकअप गर्ने?',
    answer: `Inside the **Database & Backup module (/backup)**, you can manage local disaster recovery:\n\n• **1-Click Encrypted Snapshots:** Generates an immediate point-in-time snapshot of your active campus database with zero office downtime.\n• **Direct USB Drive Export:** Save the standalone school backup archive directly to a USB flash drive, external portable hard disk, or local NAS.\n• **Integrity Verification:** Computes cryptographic integrity checksums to ensure your backup hasn't been corrupted or altered.\n• **Zero Export Fees:** You own your database file completely and can copy or migrate it anytime without paying software export lock-in fees.`,
    answerNe: `**Database & Backup मोड्युल (/backup)** बाट तपाईंले स्थानीय ब्याकअप र पुनर्स्थापना सहजै व्यवस्थापन गर्न सक्नुहुन्छ:\n\n• **१-क्लिक स्न्यापसट:** चालु विद्यालय डेटाबेसको तत्काल सुरक्षित प्रतिलिपि कुनै अवरोध बिना तयार पार्छ।\n• **सिधै USB ड्राइभमा निर्यात:** एकल सुरक्षित डेटाबेस ब्याकअप फाइल सिधै USB पेनड्राइभ, बाह्य हार्ड डिस्क वा स्थानीय NAS मा बचत गर्न सकिन्छ।\n• **शुद्धता जाँच:** ब्याकअप फाइल नबिग्रिएको सुनिश्चित गर्न स्वचालित अखण्डता प्रमाणीकरण गर्दछ।\n• **कुनै निर्यात शुल्क नलाग्ने:** डेटा फाइलमाथि विद्यालयकै पूर्ण स्वामित्व रहन्छ।`,
    suggestedFollowUps: [
      'Is our student data private and secure?',
      'Can multiple computers connect over LAN?',
      'Contact software team',
    ],
    suggestedFollowUpsNe: [
      'के हाम्रो विद्यार्थी डेटा गोप्य र सुरक्षित छ?',
      'के धेरै कम्प्युटर LAN बाट जोड्न मिल्छ?',
      'प्राविधिक टोलीलाई सम्पर्क गर्नुहोस्',
    ],
    actionLink: {
      label: 'View Backup Features',
      labelNe: 'ब्याकअप सुविधा हेर्नुहोस्',
      path: '/features',
    },
  },

  // 10b. Academic Sessions, Departments & Campus Events
  {
    id: 'sessions-departments-events',
    category: 'Academics & Structure',
    keywords: [
      'academic session', 'academic year', 'trimester', 'term', 'department', 'departments', 'campus event', 'auditorium', 'symposium', 'batch csv', 'csv import', 'timeline',
      'शैक्षिक सत्र', 'त्रैमासिक', 'विभाग', 'कार्यक्रम', 'सिएसभी', 'आयात',
    ],
    title: 'How do Academic Sessions, Departments, CSV Import & Campus Events work?',
    titleNe: 'शैक्षिक सत्र, विभाग, CSV आयात र विद्यालय कार्यक्रम कसरी काम गर्छन्?',
    answer: `MeroSchool organizes your school structure end-to-end offline:\n\n• **Academic Sessions & Trimesters (/academics):** Switch instantly between Bikram Sambat academic years (Active, Upcoming, Archived) and track trimester grading windows across the sidebar and topbar.\n• **Institutional Departments (/departments):** Maintain Academic, Administrative, and Support divisions with standardized codes, department chairs, faculty counts, and linked subjects.\n• **Batch CSV Import & Progression Timeline (/students):** Onboard student directories cleanly from CSV and inspect each scholar’s chronological multi-year grade progression.\n• **Campus Events Scheduler (/events):** Coordinate science fairs, exams, and auditorium assemblies with venue, organizer, and cohort filters.`,
    answerNe: `MeroSchool ले विद्यालयको सम्पूर्ण संरचना अफलाइनमै व्यवस्थित गर्दछ:\n\n• **शैक्षिक सत्र र त्रैमासिक (/academics):** विक्रम संवत् शैक्षिक वर्षहरू (सक्रिय, आगामी, अभिलेखित) बीच तुरुन्तै स्विच गर्न सकिन्छ।\n• **संस्थागत विभाग (/departments):** शैक्षिक, प्रशासनिक र सहयोगी विभागहरू, विभागीय प्रमुख र सम्बद्ध विषयहरू व्यवस्थित गर्दछ।\n• **सामूहिक CSV आयात र प्रगति विवरण (/students):** Excel/CSV बाट विद्यार्थी विवरण एकसाथ आयात गर्न र बहु-वर्षीय कक्षा उन्नति हेर्न सकिन्छ।\n• **कार्यक्रम तालिका (/events):** विज्ञान प्रदर्शनी, परीक्षा र सभाहरूको स्थान र आयोजक सहित तालिका राख्दछ।`,
    suggestedFollowUps: [
      'What are Cmd+K Search & Database Health Desk?',
      'How do we back up our data?',
      'Explore all 44 modules',
    ],
    suggestedFollowUpsNe: [
      'Cmd+K खोज र डेटाबेस स्वास्थ्य डेस्क के हुन्?',
      'हामी डेटा ब्याकअप कसरी गर्ने?',
      'सबै ४४ मोड्युलहरू हेर्नुहोस्',
    ],
    actionLink: {
      label: 'Explore Academic Modules',
      labelNe: 'शैक्षिक मोड्युलहरू हेर्नुहोस्',
      path: '/features',
    },
  },

  // 10b-2. School Calendar, Holidays, Announcements & Notices
  {
    id: 'school-calendar-holidays-notices',
    category: 'Calendar & Communications',
    keywords: [
      'calendar', 'calender', 'holiday', 'holidays', 'announcement', 'announcements', 'notice', 'notices', 'circular', 'noticeboard', 'vacation', 'ptm', 'bikram sambat',
      'पात्रो', 'बिदा', 'सार्वजनिक बिदा', 'घोषणा', 'सूचना', 'परिपत्र', 'सूचना पाटी',
    ],
    title: 'How do School Calendar, Holidays, Announcements & Notices work?',
    titleNe: 'विद्यालय पात्रो, बिदा, घोषणा र सूचना प्रणाली कसरी काम गर्छ?',
    answer: `MeroSchool unifies your entire campus schedule and communications completely offline:\n\n• **Dual B.S. & A.D. School Calendar:** Track Nepali Bikram Sambat (B.S.) and Gregorian (A.D.) dates side-by-side across all academic sessions.\n• **Public & Institutional Holidays:** Tag statutory holidays, winter/monsoon breaks, and emergency closures—automatically adjusting attendance working-day counts and library book due dates.\n• **Announcements & Notices:** Publish priority-flagged (High, Medium, Normal) notices and parent circulars targeted to All Campus, Parents, Faculty, or Specific Classes.\n• **Printable Noticeboard Circulars:** Export or print clean A4 bulletins for physical campus noticeboards and guardian handouts with zero cloud dependency.`,
    answerNe: `MeroSchool ले विद्यालयको सम्पूर्ण समयतालिका र सूचना प्रणालीलाई पूर्णतः अफलाइनमै एकीकृत गर्छ:\n\n• **दोहोरो वि.सं. र ई.सं. विद्यालय पात्रो:** सबै शैक्षिक सत्रमा नेपाली विक्रम संवत् (वि.सं.) र ईस्वी संवत् (A.D.) मिति सँगै व्यवस्थापन गर्नुहोस्।\n• **सार्वजनिक र विद्यालय बिदा:** सरकारी बिदा, हिउँदे/वर्षे बिदा र आकस्मिक बिदा चिन्ह लगाउनुहोस्—जसले हाजिरी कार्यदिन र पुस्तकालय फिर्ता म्याद स्वतः मिलाउँछ।\n• **घोषणा र आधिकारिक सूचनाहरू:** सम्पूर्ण विद्यालय, अभिभावक, शिक्षक वा विशेष कक्षाका लागि प्राथमिकता सहित घोषणा र परिपत्र जारी गर्नुहोस्।\n• **प्रिन्टयोग्य सूचना बुलेटिन:** क्लाउड निर्भरता बिना नै भौतिक सूचना पाटी र अभिभावकका लागि A4 परिपत्र सिधै प्रिन्ट गर्नुहोस्।`,
    suggestedFollowUps: [
      'How do Academic Sessions, Departments, CSV Import & Campus Events work?',
      'How does morning attendance work?',
      'Explore all 44 modules',
    ],
    suggestedFollowUpsNe: [
      'शैक्षिक सत्र, विभाग, CSV आयात र विद्यालय कार्यक्रम कसरी काम गर्छन्?',
      'दैनिक कक्षा हाजिरी अफलाइनमा कसरी काम गर्छ?',
      'सबै ४४ मोड्युलहरू हेर्नुहोस्',
    ],
    actionLink: {
      label: 'Preview Interactive School Calendar',
      labelNe: 'अन्तरक्रियात्मक विद्यालय पात्रो हेर्नुहोस्',
      path: '/features#school-calendar',
    },
  },

  // 10b-3. RBAC, Payroll, Hostel, Infirmary & Certificates
  {
    id: 'rbac-payroll-hostel-certificates',
    category: 'Operations & Governance',
    keywords: [
      'rbac', 'role', 'roles', 'permission', 'permissions', 'payroll', 'salary', 'payslip', 'hostel', 'boarding', 'mess', 'infirmary', 'health', 'gate pass', 'certificate', 'transfer certificate', 'tc', 'character certificate',
      'भूमिका', 'अनुमति', 'तलब', 'पे-स्लिप', 'छात्रावास', 'होस्टेल', 'स्वास्थ्य', 'गेट पास', 'प्रमाणपत्र', 'चारित्रिक',
    ],
    title: 'How do RBAC permissions, Staff Payroll, Hostel & Certificates work?',
    titleNe: 'भूमिका-आधारित पहुँच (RBAC), तलब, छात्रावास र प्रमाणपत्र कसरी काम गर्छन्?',
    answer: `MeroSchool covers full campus governance and residential operations offline:\n\n• **Role-Based Access Control (RBAC):** Isolates Principal, Cashier/Accountant, Subject Teacher, Librarian, and Transport roles so finance staff cannot edit marks and teachers cannot alter ledgers.\n• **Staff Payroll & Payslips (/payroll):** Computes basic pay, allowances, leave deductions, provident fund, and tax with 1-click printable salary slips.\n• **Hostel, Mess & Infirmary:** Allocates residential wings/beds, posts monthly mess fees straight into student ledgers, and records clinic visits & allergy alerts.\n• **Certificates & Gate Passes:** Issues serialized Transfer (TC), Character, and Bonafide certificates plus 80mm thermal guardian gate dismissal slips.`,
    answerNe: `MeroSchool ले विद्यालय प्रशासन र आवासीय सञ्चालन पूर्णतः अफलाइन समेट्छ:\n\n• **भूमिका-आधारित पहुँच (RBAC):** प्रधानाध्यापक, लेखापाल, विषय शिक्षक, पुस्तकालय प्रमुख र यातायात इन्चार्जको अधिकार अलग–अलग राख्छ।\n• **कर्मचारी तलब र पे-स्लिप (/payroll):** आधारभूत तलब, भत्ता, बिदा कट्टी, सञ्चय कोष र कर गणना गरी १-क्लिकमै पे-स्लिप प्रिन्ट गर्छ।\n• **छात्रावास र स्वास्थ्य कक्ष:** कोठा/खाट बाँडफाँट, विद्यार्थी खातामै जोडिने मासिक मेस बिल र क्लिनिक/एलर्जी अभिलेख राख्छ।\n• **प्रमाणपत्र र गेट पास:** दर्ता नम्बरसहित स्थानान्तरण (TC), चारित्रिक प्रमाणपत्र र ८०mm थर्मल गेट पास जारी गर्छ।`,
    suggestedFollowUps: [
      'How do School Calendar, Holidays, Announcements & Notices work?',
      'How does student fee ledger work?',
      'Explore all 44 modules',
    ],
    suggestedFollowUpsNe: [
      'विद्यालय पात्रो, बिदा, घोषणा र सूचना प्रणाली कसरी काम गर्छ?',
      'विद्यार्थी शुल्क खाता कसरी काम गर्छ?',
      'सबै ४४ मोड्युलहरू हेर्नुहोस्',
    ],
    actionLink: {
      label: 'Explore All 44 Modules',
      labelNe: 'सबै ४४ मोड्युलहरू हेर्नुहोस्',
      path: '/features',
    },
  },

  // 10c. Cmd+K Search, Executive Analytics & Database Health Desk
  {
    id: 'command-search-sqlite-console',
    category: 'Productivity & Engine',
    keywords: [
      'cmd+k', 'ctrl+k', 'quick search', 'global search', 'quick create', 'command palette', 'analytics', 'reports', 'retention', 'database health', 'integrity check', 'dark mode', 'nepali', 'profile',
      'विश्लेषण', 'रिपोर्ट', 'खोज', 'डार्क मोड', 'नेपाली', 'प्रोफाइल',
    ],
    title: 'What are Cmd+K Search, Executive Analytics & the Database Health Desk?',
    titleNe: 'Cmd+K खोज, विश्लेषणात्मक रिपोर्ट र डेटाबेस स्वास्थ्य डेस्क के हुन्?',
    answer: `Every MeroSchool dashboard includes built-in productivity tools:\n\n• **Cmd+K / Ctrl+K Global Search:** Press Cmd+K anywhere to jump across students, admission numbers, faculty, and modules in milliseconds—paired with a 14-workflow Quick Create launcher.\n• **Executive Analytics & Reports (/dashboard, /reports):** View 6M/1Y/ALL enrollment growth curves, collection vs. expenditure charts, 5-year retention trends, and departmental GPA bars with 1-click CSV export.\n• **Database Health, Audit & Optimization Desk (/settings, /backup):** Inspect live record counts, run preset consistency audits, verify data integrity, and reclaim disk space with 1-click storage compaction.\n• **Personal Profile & Bilingual UI (/profile):** Manage password security, Light/Dark theme sync, and English / नेपाली regional preferences.`,
    answerNe: `प्रत्येक MeroSchool ड्यासबोर्डमा उच्च-क्षमताका उपकरणहरू उपलब्ध छन्:\n\n• **Cmd+K / Ctrl+K विश्वव्यापी खोज:** जहाँबाट पनि विद्यार्थी, भर्ना नम्बर, शिक्षक र मोड्युलहरू मिलिसेकेन्डमै खोज्न र १४ द्रुत कार्यहरू सुरु गर्न सकिन्छ।\n• **कार्यकारी विश्लेषण र रिपोर्ट (/dashboard, /reports):** भर्ना वृद्धि, संकलन बनाम खर्च ग्राफ, ५-वर्षे निरन्तरता र विभागीय GPA CSV निर्यात सहित हेर्न सकिन्छ।\n• **डेटाबेस स्वास्थ्य र मर्मत डेस्क (/settings, /backup):** प्रत्यक्ष अभिलेख संख्या, पूर्वनिर्मित डेटा अडिट, शुद्धता जाँच र १-क्लिक भण्डारण सफाइ गर्न सकिन्छ।\n• **प्रोफाइल र द्विभाषी भाषा (/profile):** पासवर्ड सुरक्षा, Light/Dark थिम र English / नेपाली छनोट गर्न मिल्छ।`,
    suggestedFollowUps: [
      'How do we back up our data?',
      'Explore all 44 modules',
      'Book a free campus demo',
    ],
    suggestedFollowUpsNe: [
      'हामी डेटा ब्याकअप कसरी गर्ने?',
      'सबै ४४ मोड्युलहरू हेर्नुहोस्',
      'निःशुल्क विद्यालय डेमो बुक गर्नुहोस्',
    ],
    actionLink: {
      label: 'View All 44 Modules',
      labelNe: 'सबै ४४ मोड्युलहरू हेर्नुहोस्',
      path: '/features',
    },
  },

  // 11. Multi-PC Local Campus Networking
  {
    id: 'multi-pc-networking',
    category: 'Networking',
    keywords: [
      'multi pc', 'network', 'lan', 'wifi', 'ethernet', 'smb', 'nas', 'multiple computers', 'local network', 'sync', 'server',
      'इथरनेट', 'धेरै कम्प्युटर', 'बहु-पीसी', 'नेटवर्क', 'राउटर',
    ],
    title: 'Can multiple computers in the school share the same database?',
    titleNe: 'के विद्यालयका धेरै कम्प्युटरहरूले एउटै डेटाबेस प्रयोग गर्न सक्छन्?',
    answer: `**Yes!** MeroSchool supports multi-computer local campus operation without requiring the public internet:\n\n• **Shared Local Storage:** You can store the primary school database file on a shared local campus network folder, accessible by account desks and principal computers.\n• **Local Host Mode:** Run MeroSchool on a central reception desktop acting as the host on your campus LAN/Wi-Fi router.\n• **Zero Internet Latency:** Transactions occur over your high-speed local school network at zero cloud hosting cost.`,
    answerNe: `**हो!** सार्वजनिक इन्टरनेट बिना नै विद्यालय परिसरभित्र धेरै कम्प्युटरबाट एउटै डेटाबेस चलाउन सकिन्छ:\n\n• **साझा स्थानीय भण्डारण:** मुख्य विद्यालय डेटाबेस फाइललाई विद्यालयको स्थानीय नेटवर्क फोल्डरमा राखी लेखा काउन्टर र प्रधानाध्यापकको कम्प्युटरबाट प्रयोग गर्न सकिन्छ।\n• **स्थानीय होस्ट मोड:** विद्यालयको LAN वा Wi-Fi राउटरमार्फत मुख्य कार्यालय पीसीलाई स्थानीय होस्ट बनाएर शिक्षक तथा कर्मचारी कम्प्युटर जोड्न सकिन्छ।\n• **शून्य क्लाउड खर्च:** स्थानीय नेटवर्कमा अत्यन्त छिटो र बिना मासिक शुल्क चल्दछ।`,
    suggestedFollowUps: [
      'How does student fee ledger work?',
      'How do we back up our data?',
      'Contact software team',
    ],
    suggestedFollowUpsNe: [
      'विद्यार्थी शुल्क खाता कसरी काम गर्छ?',
      'हामी डेटा ब्याकअप कसरी गर्ने?',
      'प्राविधिक टोलीलाई सम्पर्क गर्नुहोस्',
    ],
    actionLink: {
      label: 'Request Network Setup Help',
      labelNe: 'नेटवर्क सेटअप सहायता माग्नुहोस्',
      path: '/contact',
    },
  },

  // 12. Custom School Setup & Settings
  {
    id: 'school-customization',
    category: 'Customization',
    keywords: [
      'customize', 'logo', 'crest', 'school name', 'address', 'currency', 'nepali calendar', 'bikram sambat', 'ad', 'bs',
      'लोगो', 'नाम', 'ठेगाना', 'मुद्रा', 'पात्रो', 'विक्रम संवत्', 'अनुकूलन',
    ],
    title: 'Can we customize our school name, logo crest, and report cards?',
    titleNe: 'के हामी विद्यालयको नाम, लोगो र लब्धाङ्कपत्र अनुकूलन गर्न सक्छौं?',
    answer: `**Yes, completely!** Under the Settings module (/settings):\n\n• **Institution Branding:** Upload your school crest/logo, enter your school's official legal name, affiliation/registration code, and address.\n• **Automatic Branded Header:** Your school name and crest automatically appear on all generated fee receipts, report cards, admit cards, and student ID badges.\n• **Dual Calendar:** Switch between Bikram Sambat (B.S. Baisakh–Chaitra) and Gregorian (A.D. January–December).\n• **Currency Configuration:** Set currency symbol and formatting (Rs. NPR, INR, USD, etc.).`,
    answerNe: `**अवश्य, पूर्ण रूपमा!** Settings मोड्युल (/settings) बाट:\n\n• **संस्थाको पहिचान:** विद्यालयको लोगो/प्रतीक चिह्न, आधिकारिक नाम, दर्ता नम्बर र ठेगाना सेट गर्न सकिन्छ।\n• **स्वचालित ब्रान्डेड हेडर:** सबै शुल्क रसिद, लब्धाङ्कपत्र, प्रवेशपत्र र परिचयपत्रमा तपाईंको विद्यालयको नाम र लोगो स्वतः छापिन्छ।\n• **दोहोरो पात्रो:** विक्रम संवत् (वि.सं. वैशाख–चैत्र) र ईस्वी संवत् (A.D.) दुवै पात्रो प्रयोग गर्न मिल्छ।\n• **मुद्रा सेटिङ:** रुपैयाँ (रु. / NPR) वा अन्य मुद्रा र अंक ढाँचा छनोट गर्न सकिन्छ।`,
    suggestedFollowUps: [
      'How does the pricing/license work?',
      'Explore all 44 modules',
      'Book a free campus demo',
    ],
    suggestedFollowUpsNe: [
      'मूल्य र इजाजतपत्र कसरी काम गर्छ?',
      'सबै ४४ मोड्युलहरू हेर्नुहोस्',
      'निःशुल्क विद्यालय डेमो बुक गर्नुहोस्',
    ],
    actionLink: {
      label: 'Explore Customization Features',
      labelNe: 'अनुकूलन सुविधाहरू हेर्नुहोस्',
      path: '/features',
    },
  },

  // 13. Pricing & Licensing
  {
    id: 'pricing-licensing',
    category: 'Licensing',
    keywords: [
      'pricing', 'price', 'cost', 'subscription', 'monthly fee', 'license', 'free', 'buy', 'purchase', 'cloud fee',
      'मूल्य', 'खर्च', 'पैसा', 'शुल्क', 'इजाजतपत्र', 'लाइसेन्स', 'मासिक',
    ],
    title: 'How much does MeroSchool cost and is there a monthly cloud fee?',
    titleNe: 'MeroSchool को लागत कति पर्छ र के मासिक क्लाउड शुल्क लाग्छ?',
    answer: `• **Zero Monthly Cloud Server Fees:** Unlike cloud SaaS providers that charge monthly recurring hosting fees per student, MeroSchool runs entirely on your own hardware.\n• **Perpetual Software License:** Once deployed on your computers, you have permanent operational autonomy.\n• **Free Implementation Consultation:** Our engineering team provides free setup assistance for school deployments, CSV student imports, USB barcode scanner pairing, and receipt printer configuration.`,
    answerNe: `• **शून्य मासिक क्लाउड शुल्क:** प्रति-विद्यार्थी मासिक होस्टिङ शुल्क लिने अनलाइन क्लाउड सफ्टवेयरभन्दा फरक, MeroSchool पूर्णतः तपाईंको आफ्नै कम्प्युटरमा चल्दछ।\n• **स्थायी सफ्टवेयर इजाजतपत्र:** एकपटक जडान गरेपछि विद्यालयले दीर्घकालीन रूपमा स्वायत्त प्रयोग गर्न पाउँछ।\n• **निःशुल्क जडान परामर्श:** विद्यालयमा जडान, CSV विद्यार्थी आयात, बारकोड स्क्यानर र थर्मल रसिद प्रिन्टर सेटअपमा हाम्रो टोलीले निःशुल्क सहयोग गर्दछ।`,
    suggestedFollowUps: [
      'How do I contact the MeroSchool engineering team?',
      'Is our student data private and secure?',
      'Explore all 44 modules',
    ],
    suggestedFollowUpsNe: [
      'MeroSchool टोलीलाई कसरी सम्पर्क गर्ने?',
      'के हाम्रो विद्यार्थी डेटा गोप्य र सुरक्षित छ?',
      'सबै ४४ मोड्युलहरू हेर्नुहोस्',
    ],
    actionLink: {
      label: 'Read License Agreement',
      labelNe: 'इजाजतपत्र सर्तहरू पढ्नुहोस्',
      path: '/terms',
    },
  },

  // 14. Data Privacy & Sovereignty
  {
    id: 'privacy-policy',
    category: 'Privacy',
    keywords: [
      'privacy', 'security', 'data leak', 'telemetry', 'harvesting', 'student data', 'gdpr', 'safety', 'who owns data',
      'गोपनीयता', 'सुरक्षा', 'डेटा स्वामित्व', 'नियन्त्रण', 'गोप्य',
    ],
    title: 'Is our student data private and secure?',
    titleNe: 'के हाम्रो विद्यार्थी डेटा गोप्य र सुरक्षित छ?',
    answer: `**100% Data Sovereignty Guarantee:**\n\n• **Zero Remote Telemetry:** The MeroSchool software contains zero spyware, third-party analytics trackers, or remote telemetry backdoors.\n• **Local Hard Drive Storage:** All student bio-data, academic grades, and financial ledgers stay strictly on your school's physical hard drive.\n• **No Vendor Lock-In:** We cannot read, broker, sell, or lock your student records because they never touch our servers.`,
    answerNe: `**१००% डेटा सार्वभौमिकताको सुनिश्चितता:**\n\n• **शून्य बाह्य ट्र्याकिङ:** MeroSchool सफ्टवेयरमा कुनै तेस्रो-पक्ष ट्र्याकर वा बाहिरी टेलिमेट्री हुँदैन।\n• **स्थानीय हार्ड ड्राइभ भण्डारण:** विद्यार्थी विवरण, नतिजा र आर्थिक खाताहरू विद्यालयकै कम्प्युटरको हार्ड ड्राइभमा सुरक्षित रहन्छन्।\n• **विक्रेता बन्देज छैन:** तपाईंको डेटा कहिल्यै हाम्रो सर्भरमा नआउने भएकाले डेटामाथि विद्यालयकै पूर्ण स्वामित्व रहन्छ।`,
    suggestedFollowUps: [
      'How do we back up our data?',
      'Contact software team',
      'Explore all 44 modules',
    ],
    suggestedFollowUpsNe: [
      'हामी डेटा ब्याकअप कसरी गर्ने?',
      'प्राविधिक टोलीलाई सम्पर्क गर्नुहोस्',
      'सबै ४४ मोड्युलहरू हेर्नुहोस्',
    ],
    actionLink: {
      label: 'Read Full Privacy Policy',
      labelNe: 'पूर्ण गोपनीयता नीति पढ्नुहोस्',
      path: '/privacy',
    },
  },

  // 15. Contact & Support Coordinates
  {
    id: 'contact-support',
    category: 'Support',
    keywords: [
      'contact', 'support', 'email', 'phone', 'help', 'call', 'address', 'location', 'kathmandu', 'office', 'whatsapp',
      'सम्पर्क', 'सहायता', 'इमेल', 'फोन', 'ठेगाना', 'कार्यालय', 'ह्वाट्सएप', 'मद्दत',
    ],
    title: 'How do I contact the MeroSchool engineering team?',
    titleNe: 'MeroSchool इन्जिनियरिङ टोलीलाई कसरी सम्पर्क गर्ने?',
    answer: `You can reach our core technical and deployment engineers directly:\n\n• **Official Support Email:** [${SCHOOL_CONTACT.email}](mailto:${SCHOOL_CONTACT.email})\n• **Landline Helplines:** [${SCHOOL_CONTACT.phone}](tel:${SCHOOL_CONTACT.phone})\n• **Mobile / WhatsApp:** [${SCHOOL_CONTACT.phoneMobile}](tel:${SCHOOL_CONTACT.phoneMobile})\n• **Software HQ:** ${SCHOOL_CONTACT.address.full}\n• **Support Desk Hours:** ${SCHOOL_CONTACT.hours.weekdays} (${SCHOOL_CONTACT.hours.saturday})\n• **Support Extensions:** Ext. 101 (Desktop Setup), Ext. 102 (Scanners & Printers / Local LAN), Ext. 103 (Custom Modules & Onboarding), Ext. 104 (Accounts & Licensing).`,
    answerNe: `तपाईं हाम्रो मुख्य प्राविधिक तथा जडान टोलीलाई सिधै सम्पर्क गर्न सक्नुहुन्छ:\n\n• **आधिकारिक इमेल:** [${SCHOOL_CONTACT.email}](mailto:${SCHOOL_CONTACT.email})\n• **ल्यान्डलाइन हेल्पलाइन:** [${SCHOOL_CONTACT.phone}](tel:${SCHOOL_CONTACT.phone})\n• **मोबाइल / WhatsApp:** [${SCHOOL_CONTACT.phoneMobile}](tel:${SCHOOL_CONTACT.phoneMobile})\n• **मुख्य कार्यालय:** काठमाडौं, नेपाल (${SCHOOL_CONTACT.address.full})\n• **कार्यालय समय:** आइतबार–शुक्रबार बिहान ८:००–बेलुका ६:०० (शनिबार: इमेल सहायता)\n• **सम्पर्क एक्सटेन्सन:** Ext. 101 (सेटअप), Ext. 102 (स्क्यानर र प्रिन्टर / स्थानीय LAN), Ext. 103 (विद्यालय अनबोर्डिङ), Ext. 104 (लेखा र इजाजतपत्र)।`,
    suggestedFollowUps: [
      'Book a free campus demo',
      'Explore all 44 modules',
      'Is it 100% offline?',
    ],
    suggestedFollowUpsNe: [
      'निःशुल्क विद्यालय डेमो बुक गर्नुहोस्',
      'सबै ४४ मोड्युलहरू हेर्नुहोस्',
      'के यो १००% अफलाइन चल्छ?',
    ],
    actionLink: {
      label: 'Open Support Desk',
      labelNe: 'सहायता डेस्क खोल्नुहोस्',
      path: '/contact',
    },
  },

  // 16. Rapid 4-Step Deployment
  {
    id: 'deployment-steps',
    category: 'Deployment & Setup',
    keywords: [
      'how to deploy', 'installation steps', 'how to install', 'deployment', 'setup steps', 'setup process', 'implement', 'how to start', 'get started', 'onboarding',
      'जडान', 'सुरुवात', 'सेटअप', 'प्रक्रिया', 'अनबोर्डिङ',
    ],
    title: 'How do schools deploy MeroSchool in 4 steps?',
    titleNe: 'विद्यालयले ४ चरणमा MeroSchool कसरी सुरु गर्न सक्छ?',
    answer: `Deploying MeroSchool takes under 10 minutes with zero IT complexity:\n\n1. **Super Admin Provisioning:** Our Super Admin provisions your institution's official account.\n2. **Configure Crest & Calendars:** Upload school logo, pick Bikram Sambat (B.S.) or Gregorian (A.D.) calendar, and set class fee structures.\n3. **Plug in Peripherals & Connect LAN:** Connect standard USB barcode scanners and 80mm thermal receipt printers with zero drivers, import students via CSV, and optionally link office desks over local LAN.\n4. **Run 100% Offline:** Conduct morning attendance, 2-second fee receipts, and broadsheets with 0.2ms latency, backing up to USB in one click.`,
    answerNe: `जटिल IT प्रक्रिया बिना नै ४ सजिला चरणमा MeroSchool सुरु गर्न सकिन्छ:\n\n१. **सुपर एडमिन खाता सिर्जना:** हाम्रो सुपर एडमिनले तपाईंको विद्यालयको आधिकारिक खाता तयार गरिदिन्छ।\n२. **लोगो र पात्रो सेटिङ:** विद्यालयको लोगो अपलोड गर्नुहोस्, विक्रम संवत् (वि.सं.) वा ईस्वी संवत् छान्नुहोस् र शुल्क संरचना तय गर्नुहोस्।\n३. **उपकरण जडान र LAN:** शून्य ड्राइभरमै मानक USB बारकोड स्क्यानर र ८०mm थर्मल रसिद प्रिन्टर जोड्नुहोस्, CSV आयात गर्नुहोस् र चाहिनेमा कार्यालयका कम्प्युटर LAN बाट जोड्नुहोस्।\n४. **१००% अफलाइन सञ्चालन:** ०.२ms गतिमा दैनिक हाजिरी, २-सेकेन्डको शुल्क रसिद र ब्रोडसिट चलाउनुहोस् र १-क्लिकमै USB ब्याकअप लिनुहोस्।`,
    suggestedFollowUps: [
      'Which operating systems are supported?',
      'Does it work with barcode scanners?',
      'Can multiple computers connect over LAN?',
    ],
    suggestedFollowUpsNe: [
      'कुन–कुन अपरेटिङ सिस्टम सपोर्ट गर्छ?',
      'के MeroSchool ले बारकोड स्क्यानर र थर्मल रसिद प्रिन्टर सपोर्ट गर्छ?',
      'के धेरै कम्प्युटर LAN बाट जोड्न मिल्छ?',
    ],
    actionLink: {
      label: 'Explore Features',
      labelNe: 'सुविधाहरू हेर्नुहोस्',
      path: '/features',
    },
  },

  // 19. Examination & Grading Standards
  {
    id: 'grading-standards-info',
    category: 'Examinations',
    keywords: [
      'cdc letter grading', 'grading standards', 'grading scale', 'neb see letter grading', 'theory practical split', 'cbse icse cgpa', 'distinction division marks', 'grading standards supported',
      'अक्षराङ्कन', 'जिपिए मापदण्ड', 'सिडिसी', 'एनइबी', 'प्रयोगात्मक',
    ],
    title: 'Which academic grading standards are supported?',
    titleNe: 'कुन–कुन शैक्षिक ग्रेडिङ मापदण्डहरू सपोर्ट गर्छ?',
    answer: `MeroSchool’s broadsheet calculation engine supports:\n\n• **Nepal NEB & SEE CDC Standard:** 8-tier letter grading (A+ to NG) with automated 75% theory and 25% internal/practical marks weighting.\n• **CBSE & ICSE CGPA:** 10-point GPA scale with formative and summative terminal calculations.\n• **Traditional Percentage & Honors:** Distinction (≥80%), First Division (≥60%), and custom GPA conversions.\n• **Automated Broadsheet Export:** Instant batch report cards and printable broadsheet matrices with school crest watermarks.`,
    answerNe: `MeroSchool को ब्रोडसिट गणना इन्जिनले निम्न मापदण्डहरू सपोर्ट गर्दछ:\n\n• **नेपाल NEB र SEE CDC मापदण्ड:** ७५% सैद्धान्तिक र २५% आन्तरिक/प्रयोगात्मक भार सहित ८-तहको अक्षराङ्कन (A+ देखि NG सम्म)।\n• **CBSE र ICSE CGPA:** १०-अंकीय GPA स्केल र त्रैमासिक मूल्याङ्कन गणना।\n• **परम्परागत प्रतिशत र श्रेणी:** विशिष्ट श्रेणी (≥८०%), प्रथम श्रेणी (≥६०%) र अनुकूलन GPA रूपान्तरण।\n• **स्वचालित ब्रोडसिट निर्यात:** विद्यालयको लोगो वाटरमार्क सहित सामूहिक लब्धाङ्कपत्र र प्रिन्ट-तयार ब्रोडसिट।`,
    suggestedFollowUps: [
      'How does student fee ledger work?',
      'How do examinations, broadsheets, and report cards work?',
      'Explore all 44 modules',
    ],
    suggestedFollowUpsNe: [
      'विद्यार्थी शुल्क खाता कसरी काम गर्छ?',
      'परीक्षा र ब्रोडसिट कसरी काम गर्छ?',
      'सबै ४४ मोड्युलहरू हेर्नुहोस्',
    ],
    actionLink: {
      label: 'View Module Catalog',
      labelNe: 'मोड्युल सूची हेर्नुहोस्',
      path: '/features',
    },
  },

  // 20. Campus LAN & Multi-PC Setup
  {
    id: 'lan-network-setup',
    category: 'Architecture',
    keywords: [
      'lan', 'local network', 'multi pc', 'multiple computers', 'share database', 'ethernet', 'router', 'host pc', 'campus network', 'wi-fi network',
      'लोकल नेटवर्क', 'इथरनेट', 'धेरै पीसी', 'मुख्य कम्प्युटर',
    ],
    title: 'Can multiple computers in a school connect over LAN?',
    titleNe: 'के विद्यालयका धेरै कम्प्युटरहरू स्थानीय LAN बाट जोडिन सक्छन्?',
    answer: `**Yes! MeroSchool supports Multi-PC campus LAN connectivity with zero internet required:**\n\n• **Host / Counter 1:** Houses the primary school database safely in crash-safe local storage.\n• **Connected Workstations:** Staff room PCs, bursar counters, and principal desks connect over your campus Ethernet or local Wi-Fi router.\n• **Simultaneous Multi-Desk Work:** Teachers can enter terminal marks while cashiers print fee receipts simultaneously without blocking.\n• **Zero External Bandwidth:** Zero internet data leaves your institution, ensuring continuous operation during fiber cuts.`,
    answerNe: `**हो! इन्टरनेट बिना नै विद्यालयको स्थानीय LAN मार्फत बहु-कम्प्युटर सञ्चालन सम्भव छ:**\n\n• **मुख्य होस्ट / काउन्टर १:** विद्यालयको मुख्य डेटाबेस सुरक्षित स्थानीय भण्डारणमा राख्दछ।\n• **जडान गरिएका कम्प्युटरहरू:** शिक्षक कक्ष, लेखा काउन्टर र प्रधानाध्यापक डेस्क इथरनेट वा स्थानीय Wi-Fi राउटरबाट जोडिन्छन्।\n• **एकैसाथ कार्य सञ्चालन:** शिक्षकले परीक्षा अंक प्रविष्ट गर्दागर्दै लेखापालले अवरोध बिना शुल्क रसिद छाप्न सक्छन्।\n• **बाह्य इन्टरनेट नचाहिने:** डेटा विद्यालय परिसर बाहिर नजाने भएकाले फाइबर कटौती हुँदा पनि काम रोकिँदैन।`,
    suggestedFollowUps: [
      'How do we back up our data?',
      'Which operating systems are supported?',
      'Contact software team',
    ],
    suggestedFollowUpsNe: [
      'हामी डेटा ब्याकअप कसरी गर्ने?',
      'कुन–कुन अपरेटिङ सिस्टम सपोर्ट गर्छ?',
      'प्राविधिक टोलीलाई सम्पर्क गर्नुहोस्',
    ],
    actionLink: {
      label: 'Read Architecture Deep-Dive',
      labelNe: 'प्रविधि र संरचना हेर्नुहोस्',
      path: '/about',
    },
  },

  // 21. Architectural Feature Comparison (MeroSchool vs Generic Cloud ERP)
  {
    id: 'feature-comparison-cloud-vs-desktop',
    category: 'Architecture',
    keywords: [
      'feature comparison', 'versus cloud', 'vs cloud', 'compare', 'generic cloud', 'cloud vs desktop', 'why desktop erp', 'cloud erp comparison', 'head to head',
      'तुलना', 'क्लाउड बनाम डेस्कटप', 'अन्तर', 'फाइदा',
    ],
    title: 'How does MeroSchool compare to Generic Cloud School ERP?',
    titleNe: 'सामान्य क्लाउड ईआरपीको तुलनामा MeroSchool किन उत्कृष्ट छ?',
    answer: `**Head-to-Head: MeroSchool Desktop ERP vs. Generic Cloud School ERP**:\n\n• **Zero Internet Downtime:** 100% offline-first local operation vs. cloud ERPs that freeze completely during ISP cuts or stormy weather.\n• **Sub-Millisecond Speed:** Instant local ledger transactions vs. slow server wait times and loading spinners.\n• **Hardware & POS Direct:** Direct ESC/POS 80mm thermal printing & USB barcode scanning vs. slow browser Ctrl+P print popups and tab focus loss.\n• **100% Campus Sovereignty:** Scholar and accounting records stay on school hardware vs. shared third-party cloud servers.\n• **Zero SaaS Tax:** Perpetual ownership with zero monthly per-student subscription fees vs. perpetual recurring billing.\n• **Disaster Recovery:** 1-click portable database backup in 3 seconds vs. slow vendor exports.\n• **Native Desktop Autonomy:** Dedicated desktop apps for Windows, macOS, and Linux without relying on a web browser tab.`,
    answerNe: `**प्रत्यक्ष तुलना: MeroSchool डेस्कटप ईआरपी बनाम सामान्य क्लाउड ईआरपी**:\n\n• **शून्य इन्टरनेट अवरोध:** इन्टरनेट काटिँदा क्लाउड सफ्टवेयर ठप्प हुन्छन्, तर MeroSchool १००% अफलाइन स्थानीय प्रणालीमा निरन्तर चल्दछ।\n• **अति तीव्र गति:** क्लाउडको सर्भर पर्खाइको सट्टा स्थानीय डेटाबेसमा १ms भन्दा कम समयमा कारोबार हुन्छ।\n• **प्रत्यक्ष हार्डवेयर र POS जडान:** ब्राउजरको Ctrl+P पपअपको सट्टा सिधै ESC/POS ८०mm थर्मल रसिद प्रिन्टर र USB बारकोड स्क्यानर चल्दछ।\n• **१००% डेटा स्वामित्व:** विद्यार्थी र आर्थिक विवरण बाहिरी सर्भरमा नभई विद्यालयकै हार्डवेयरमा रहन्छन्।\n• **शून्य मासिक क्लाउड शुल्क:** प्रति-विद्यार्थी मासिक शुल्क बिना स्थायी स्वामित्व मिल्दछ।\n• **३ सेकेन्डमा ब्याकअप:** १-क्लिकमै पोर्टेबल डेटाबेस ब्याकअप USB मा सुरक्षित गर्न सकिन्छ।`,
    suggestedFollowUps: [
      'Is it 100% offline?',
      'Can multiple computers connect over LAN?',
      'Which operating systems are supported?',
    ],
    suggestedFollowUpsNe: [
      'के यो १००% अफलाइन चल्छ?',
      'के धेरै कम्प्युटर LAN बाट जोड्न मिल्छ?',
      'कुन–कुन अपरेटिङ सिस्टम सपोर्ट गर्छ?',
    ],
    actionLink: {
      label: 'View Full Comparison Table',
      labelNe: 'पूर्ण तुलना तालिका हेर्नुहोस्',
      path: '/features',
    },
  },

  // 22. Request Free Demo / On-Site Campus Demonstration
  {
    id: 'request-free-demo',
    category: 'Demonstrations',
    keywords: [
      'request demo', 'request for demo', 'request live demo', 'request free on-site demo', 'on site demo', 'book demo', 'schedule demo', 'school visit', 'campus demonstration', 'live demo', 'free demo', 'hardware demo', 'try demo',
      'डेमो', 'प्रदर्शन', 'निःशुल्क डेमो', 'बुक', 'परीक्षण', 'अवलोकन',
    ],
    title: 'How can we request a free live demo or on-site school visit?',
    titleNe: 'हामी निःशुल्क प्रत्यक्ष डेमो वा विद्यालय भ्रमण कसरी माग गर्न सक्छौं?',
    answer: `**Yes! You can request a 100% Free On-Site Campus Demo or 1-on-1 Live Video Walkthrough**:\n\n• **Free On-Site Campus Demo:** Our implementation engineers visit your school in person with a pre-configured demonstration laptop, USB laser barcode scanner, and 80mm ESC/POS thermal receipt printer. We simulate real fee billing, attendance, and broadsheet report cards with your principal and accounts team.\n• **1-on-1 Interactive Video Demo:** A private 30-minute Zoom or Google Meet walkthrough tailored to your curriculum, grading standard (NEB, CBSE, or percentage), and fee structure.\n• **Zero Cost & Zero Obligation:** 100% free evaluation so your administration can make decisions on real facts.\n• **Fast-Track WhatsApp / Phone:** Contact our demo desk directly at **${SCHOOL_CONTACT.phoneMobile}** or book online in 30 seconds.`,
    answerNe: `**तपाईं १००% निःशुल्क विद्यालय परिसर प्रत्यक्ष डेमो वा १-मा-१ भिडियो प्रदर्शन माग गर्न सक्नुहुन्छ:**\n\n• **विद्यालय परिसरमै प्रत्यक्ष डेमो:** हाम्रा इन्जिनियरहरू प्रि-कन्फिगर गरिएको डेमो ल्यापटप, USB लेजर बारकोड स्क्यानर र ८०mm ESC/POS थर्मल रसिद प्रिन्टर लिएर तपाईंको विद्यालयमै आउनुहुन्छ र शुल्क बिलिङ, हाजिरी तथा ब्रोडसिटको प्रत्यक्ष अभ्यास देखाउनुहुन्छ।\n• **३० मिनेटको अनलाइन भिडियो डेमो:** तपाईंको विद्यालयको पाठ्यक्रम (NEB, CBSE वा प्रतिशत) र शुल्क संरचना अनुसार निजी डेमो सत्र।\n• **कुनै शुल्क वा बाध्यता छैन:** निर्णय लिनुअघि आफ्नै आँखाले सफ्टवेयर जाँच गर्न सक्नुहुन्छ।\n• **तत्काल सम्पर्क:** डेमोका लागि **${SCHOOL_CONTACT.phoneMobile}** मा सिधै कल/WhatsApp गर्नुहोस् वा ३० सेकेन्डमा अनलाइन फारम भर्नुहोस्।`,
    suggestedFollowUps: [
      'Does it work with barcode scanners?',
      'Which operating systems are supported?',
      'Explore all 44 modules',
    ],
    suggestedFollowUpsNe: [
      'के MeroSchool ले बारकोड स्क्यानर र थर्मल रसिद प्रिन्टर सपोर्ट गर्छ?',
      'कुन–कुन अपरेटिङ सिस्टम सपोर्ट गर्छ?',
      'सबै ४४ मोड्युलहरू हेर्नुहोस्',
    ],
    actionLink: {
      label: 'Book Free Campus Demo',
      labelNe: 'निःशुल्क विद्यालय डेमो बुक गर्नुहोस्',
      path: '/contact?type=demo',
    },
  },
];

function localizeEntry(entry: ChatbotEntry, lang: ChatbotLanguage): ChatbotEntry {
  const isNe = lang === 'ne';
  return {
    ...entry,
    title: isNe && entry.titleNe ? entry.titleNe : entry.title,
    answer: isNe && entry.answerNe ? entry.answerNe : entry.answer,
    suggestedFollowUps:
      isNe && entry.suggestedFollowUpsNe?.length
        ? entry.suggestedFollowUpsNe
        : entry.suggestedFollowUps,
    actionLink: entry.actionLink
      ? {
          ...entry.actionLink,
          label: isNe && entry.actionLink.labelNe ? entry.actionLink.labelNe : entry.actionLink.label,
        }
      : undefined,
  };
}

// Local NLP matching helper (supports English and Nepali queries)
export function matchWebsiteKnowledge(query: string, lang: ChatbotLanguage = 'en'): ChatbotEntry | null {
  const clean = query.toLowerCase().trim();
  if (!clean) return null;

  // 1. Direct greetings (English & Nepali)
  if (
    /^(hi|hello|hey|namaste|namaskar|good morning|good afternoon|good evening|greetings)\b/i.test(clean) ||
    /^(नमस्ते|नमस्कार|हाइ|हेलो|सुप्रभात|शुभ बिहानी)/.test(clean)
  ) {
    return localizeEntry(
      {
        id: 'greeting',
        category: 'Welcome',
        keywords: ['hi', 'hello', 'नमस्ते'],
        title: 'Namaste! Welcome to MeroSchool',
        titleNe: 'नमस्ते! MeroSchool मा स्वागत छ',
        answer: `Hello! I am the **MeroSchool Offline Knowledge Assistant**.\n\nI run 100% locally in your browser with zero external server calls and have complete knowledge of our desktop school ERP platform.\n\nHow can I help you today? You can ask me about:\n• **Offline Data Security & Zero Cloud Fees**\n• **Supported Operating Systems (Windows, macOS, Linux)**\n• **Barcode Scanners & Thermal Receipt Printers**\n• **All 44 Modules (Sessions, Fees, Leave, Library, Transport, Broadsheets, Database Health Desk)**\n• **Multi-PC Campus LAN Networking**\n• **Database Backups & USB Snapshots**\n• **Technical Support & Deployment Assistance**`,
        answerNe: `नमस्ते! म **MeroSchool अफलाइन ज्ञान सहायक** हुँ।\n\nम तपाईंको ब्राउजरमै **कुनै बाह्य सर्भर जडान बिना १००% स्थानीय रूपमा** चल्छु र MeroSchool डेस्कटप विद्यालय ERP बारे पूर्ण जानकारी दिन्छु।\n\nआज म तपाईंलाई कसरी सहयोग गर्न सक्छु? तपाईं यी विषयमा सोध्न सक्नुहुन्छ:\n• **अफलाइन डेटा सुरक्षा र शून्य क्लाउड शुल्क**\n• **अपरेटिङ सिस्टम सपोर्ट (Windows, macOS, Linux)**\n• **बारकोड स्क्यानर र थर्मल रसिद प्रिन्टर**\n• **सबै ४४ मोड्युलहरू (शैक्षिक सत्र, शुल्क, बिदा, पुस्तकालय, यातायात, ब्रोडसिट, डेटाबेस स्वास्थ्य डेस्क)**\n• **बहु-कम्प्युटर स्थानीय LAN सञ्जाल**\n• **डेटाबेस ब्याकअप र USB स्न्यापसट**\n• **प्राविधिक सहायता र विद्यालय डेमो**`,
        suggestedFollowUps: [
          'Is it 100% offline?',
          'Which operating systems are supported?',
          'Does it work with barcode scanners?',
          'How does student fee ledger work?',
        ],
        suggestedFollowUpsNe: [
          'के यो १००% अफलाइन चल्छ?',
          'कुन–कुन अपरेटिङ सिस्टम सपोर्ट गर्छ?',
          'के MeroSchool ले बारकोड स्क्यानर र थर्मल रसिद प्रिन्टर सपोर्ट गर्छ?',
          'विद्यार्थी शुल्क खाता कसरी काम गर्छ?',
        ],
      },
      lang
    );
  }

  // 2. Tokenize user query preserving Unicode letters/numbers (English + Devanagari)
  const queryTokens = clean
    .replace(/[^\p{L}\p{N}\s+]/gu, ' ')
    .split(/\s+/)
    .filter((w) => w.length >= 2);

  let bestEntry: ChatbotEntry | null = null;
  let highestScore = 0;

  for (const entry of WEBSITE_KNOWLEDGE_BASE) {
    let score = 0;

    // Exact title match boost (covers clicking localized suggested follow-up pills)
    if (entry.title.toLowerCase() === clean || entry.titleNe?.toLowerCase() === clean) {
      score += 100;
    }

    // Check exact keyword phrases
    for (const kw of entry.keywords) {
      if (clean.includes(kw.toLowerCase())) {
        score += kw.split(/\s+/).length * 5;
      }
    }

    // Check token matches against keywords, English/Nepali titles, and answers
    const searchTitle = `${entry.title} ${entry.titleNe ?? ''}`.toLowerCase();
    const searchAnswer = `${entry.answer} ${entry.answerNe ?? ''}`.toLowerCase();

    for (const token of queryTokens) {
      if (searchTitle.includes(token)) {
        score += 3;
      }
      for (const kw of entry.keywords) {
        if (kw.toLowerCase().includes(token)) {
          score += 2;
        }
      }
      if (searchAnswer.includes(token)) {
        score += 1;
      }
    }

    if (score > highestScore) {
      highestScore = score;
      bestEntry = entry;
    }
  }

  // Minimum score threshold
  if (highestScore >= 3 && bestEntry) {
    return localizeEntry(bestEntry, lang);
  }

  // Fallback response if no specific keyword scored high enough
  return localizeEntry(
    {
      id: 'fallback',
      category: 'Help',
      keywords: [],
      title: 'MeroSchool Knowledge Base Search',
      titleNe: 'MeroSchool ज्ञान आधार खोज',
      answer: `I searched our entire website knowledge base for **"${query}"**, but couldn't find an exact match.\n\nMeroSchool is a 100% offline desktop school ERP designed for Windows, Linux, and macOS campus computers.\n\nFeel free to explore our popular topics below or contact our support desk directly at **[${SCHOOL_CONTACT.email}](mailto:${SCHOOL_CONTACT.email})** or **${SCHOOL_CONTACT.phone}**.`,
      answerNe: `मैले **"${query}"** का लागि वेबसाइटको सम्पूर्ण ज्ञान आधारमा खोजेँ, तर सटीक मेल फेला परेन।\n\nMeroSchool Windows, Linux र macOS कम्प्युटरहरूका लागि निर्मित १००% अफलाइन विद्यालय डेस्कटप ERP हो।\n\nतलका लोकप्रिय विषयहरू छान्नुहोस् वा हाम्रो सहायता टोलीलाई सिधै **[${SCHOOL_CONTACT.email}](mailto:${SCHOOL_CONTACT.email})** वा **${SCHOOL_CONTACT.phone}** मा सम्पर्क गर्नुहोस्।`,
      suggestedFollowUps: [
        'What is MeroSchool?',
        'Is it 100% offline?',
        'Which operating systems are supported?',
        'How does student fee ledger work?',
        'How do we back up our data?',
      ],
      suggestedFollowUpsNe: [
        'MeroSchool के हो?',
        'के यो १००% अफलाइन चल्छ?',
        'कुन–कुन अपरेटिङ सिस्टम सपोर्ट गर्छ?',
        'विद्यार्थी शुल्क खाता कसरी काम गर्छ?',
        'हामी डेटा ब्याकअप कसरी गर्ने?',
      ],
      actionLink: {
        label: 'Contact Technical Support Desk',
        labelNe: 'प्राविधिक सहायता डेस्कमा सम्पर्क गर्नुहोस्',
        path: '/contact',
      },
    },
    lang
  );
}
