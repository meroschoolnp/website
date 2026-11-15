export interface FaqCategory {
  id: string;
  labelEn: string;
  labelNe: string;
}

export const FAQ_CATEGORIES: FaqCategory[] = [
  { id: "all", labelEn: "All FAQs", labelNe: "सबै प्रश्नहरू" },
  { id: "offline", labelEn: "Offline & Local Storage", labelNe: "अफलाइन र स्थानीय भण्डारण" },
  { id: "hardware", labelEn: "Hardware & Printers", labelNe: "हार्डवेयर र प्रिन्टर" },
  { id: "customization", labelEn: "School Customization", labelNe: "विद्यालय अनुकूलन" },
  { id: "installation", labelEn: "Platforms & Onboarding", labelNe: "प्लेटफर्म र अनबोर्डिङ" },
  { id: "licensing", labelEn: "Licensing & Pricing", labelNe: "इजाजतपत्र र मूल्य" },
];

export interface FaqItem {
  id: string;
  q: string;
  qNe: string;
  category: string;
  a: string;
  aNe: string;
}

export const FAQ_ITEMS: FaqItem[] = [
    {
      id: "demo",
      q: "Can we request a free live demo or on-site school visit before deciding?",
      qNe: "निर्णय गर्नुअघि के हामी निःशुल्क प्रत्यक्ष डेमो वा विद्यालयमै भ्रमणको अनुरोध गर्न सक्छौं?",
      category: "licensing",
      a: "Yes. We offer 100% Free On-Site Campus Demonstrations and 1-on-1 Remote Video Walkthroughs. For on-site demos, our implementation engineers visit your school with pre-configured laptops, USB laser barcode scanners, and 80mm ESC/POS thermal printers so your principal, accountant, and exam controller can test real transactions on campus.",
      aNe: "हो। हामी १००% निःशुल्क विद्यालयमै गएर प्रत्यक्ष डेमो तथा १-अन-१ भिडियो डेमो प्रदान गर्दछौं। विद्यालय भ्रमणका क्रममा हाम्रा इन्जिनियरहरू ल्यापटप, USB लेजर बारकोड स्क्यानर र ८०mm थर्मल प्रिन्टरसहित आएर प्रधानाध्यापक, लेखापाल र परीक्षा नियन्त्रकलाई वास्तविक परीक्षण गराउनुहुन्छ।",
    },
    {
      id: "platform-model",
      q: "Is MeroSchool an individual school portal or a multi-school platform?",
      qNe: "MeroSchool कुनै एक विद्यालयको मात्र पोर्टल हो कि बहु-विद्यालय प्लेटफर्म हो?",
      category: "licensing",
      a: "MeroSchool is NOT an individual school admission website. It is a multi-institution platform where our Super Admin provisions an institutional account for each school. Once your administrator signs in, your entire school dashboard runs 100% offline locally on campus storage with zero cloud support.",
      aNe: "MeroSchool कुनै एक विद्यालयको भर्ना वेबसाइट होइन। यो बहु-संस्थागत प्लेटफर्म हो जहाँ हाम्रो सुपर एडमिनले प्रत्येक विद्यालयको खाता सिर्जना गरिदिन्छ। प्रशासकले लगइन गरेपछि सम्पूर्ण विद्यालय ड्यासबोर्ड बिना क्लाउड सपोर्ट स्थानीय डेटाबेसमा १००% अफलाइन चल्दछ।",
    },
    {
      id: "offline",
      q: "Does MeroSchool require an internet connection or cloud support?",
      qNe: "के MeroSchool चलाउन इन्टरनेट जडान वा क्लाउड सपोर्ट आवश्यक पर्छ?",
      category: "offline",
      a: "No. Every dashboard activity — student records, double-entry fee ledgers, exam marks, daily roll-call attendance, and printable report cards — executes 100% offline on your local campus database with zero cloud servers, zero external SMS APIs, and zero remote gateways.",
      aNe: "पर्दैन। विद्यार्थी अभिलेख, दोहोरो प्रविष्टि शुल्क खाता, परीक्षा अंक, दैनिक हाजिरी र प्रिन्टयोग्य लब्धाङ्कपत्र लगायत ड्यासबोर्डका प्रत्येक कार्य क्लाउड सर्भर बिना नै स्थानीय डेटाबेसमा १००% अफलाइन चल्दछन्।",
    },
    {
      id: "storage-protection",
      q: "How does MeroSchool store and protect our school’s data?",
      qNe: "MeroSchool ले विद्यालयको डेटा कसरी भण्डारण र सुरक्षित गर्दछ?",
      category: "offline",
      a: "All data is stored locally in a crash-safe offline campus database built for concurrent multi-desk work and power-cut resilience. Student records and financial books never leave campus hardware, ensuring complete institutional data sovereignty.",
      aNe: "सम्पूर्ण डेटा धेरै डेस्कमा एकसाथ चल्न सक्ने र विद्युत अवरोध सहन सक्ने स्थानीय अफलाइन डेटाबेसमा भण्डारण हुन्छ। विद्यार्थी विवरण र आर्थिक खाता विद्यालयको कम्प्युटर बाहिर कहिल्यै नजाने हुँदा डेटा पूर्ण सुरक्षित रहन्छ।",
    },
    {
      id: "backup",
      q: "How do we back up our school’s database and financial records?",
      qNe: "विद्यालयको डेटाबेस र आर्थिक अभिलेखको ब्याकअप कसरी लिने?",
      category: "offline",
      a: "Inside the Database & Backup vault, you can create a verified encrypted backup snapshot with one click and copy it directly to a USB flash drive, external hard drive, or campus NAS without internet.",
      aNe: "डेटाबेस र ब्याकअप भल्टभित्र एकै क्लिकमा प्रमाणित सुरक्षित ब्याकअप स्न्यापसट बनाएर इन्टरनेट बिना नै सिधै USB पेनड्राइभ, बाहिरी हार्ड ड्राइभ वा स्थानीय NAS मा कपी गर्न सकिन्छ।",
    },
    {
      id: "csv-migration",
      q: "How do we migrate existing students from Excel or CSV spreadsheets?",
      qNe: "हामीले पहिले राखेका Excel वा CSV का विद्यार्थी विवरण कसरी सार्ने?",
      category: "installation",
      a: "Our engineering team provides turnkey onboarding assistance, and MeroSchool supports structured Excel/CSV bulk import mapping for student directories, class sections, guardian contacts, and opening tuition balances so your staff never have to re-type years of history manually.",
      aNe: "हाम्रो प्राविधिक टोलीले सुरुवाती डेटा सार्न पूर्ण सहयोग गर्दछ। MeroSchool मा Excel/CSV मार्फत विद्यार्थी विवरण, कक्षा-सेक्सन, अभिभावक सम्पर्क र अघिल्लो बाँकी शुल्क एकसाथ आयात (Bulk Import) गर्न मिल्ने हुँदा हातैले पुनः टाइप गर्नुपर्दैन।",
    },
    {
      id: "os-support",
      q: "Which operating systems does MeroSchool support?",
      qNe: "MeroSchool कुन–कुन अपरेटिङ सिस्टम (OS) मा चल्दछ?",
      category: "installation",
      a: "MeroSchool runs natively on Windows 10 & 11 (64-bit and ARM64), macOS 11.0+ (Universal Apple Silicon M-series & Intel), and modern Linux distributions (Debian, Ubuntu, Fedora, Arch, openSUSE).",
      aNe: "MeroSchool Windows 10 र 11 (६४-बिट र ARM64), macOS 11.0+ (Apple Silicon M-series र Intel) तथा आधुनिक Linux वितरणहरू (Debian, Ubuntu, Fedora, Arch, openSUSE) मा नेटिभ रूपमा चल्दछ।",
    },
    {
      id: "customization",
      q: "Can we customize the school name, logo, address, and report cards?",
      qNe: "के हामी विद्यालयको नाम, लोगो, ठेगाना र लब्धाङ्कपत्र अनुकूलन गर्न सक्छौं?",
      category: "customization",
      a: "Yes. In Settings, your administrator uploads your institution crest, configures school name and registration numbers, chooses Bikram Sambat (B.S.) or Gregorian (A.D.) calendars, sets NEB / CBSE / Percentage grading scales, and customizes fee headings.",
      aNe: "सकिन्छ। सेटिङमा गएर विद्यालयको लोगो, नाम र दर्ता नम्बर राख्न, विक्रम सम्वत् (वि.सं.) वा ईस्वी (ई.सं.) पात्रो रोज्न, NEB / CBSE / प्रतिशत ग्रेडिङ प्रणाली मिलाउन र शुल्क शीर्षकहरू अनुकूलन गर्न सकिन्छ।",
    },
    {
      id: "hardware",
      q: "Does MeroSchool support barcode scanners and POS thermal printers?",
      qNe: "के MeroSchool ले बारकोड स्क्यानर र POS थर्मल प्रिन्टर सपोर्ट गर्छ?",
      category: "hardware",
      a: "Yes. Standard USB barcode laser scanners work immediately as keyboard wedges without drivers. ESC/POS 80mm and 58mm thermal receipt printers connect directly for under-2-second fee receipts, alongside CR80 PVC printers for student ID cards and bus passes.",
      aNe: "गर्छ। सामान्य USB बारकोड लेजर स्क्यानर अतिरिक्त ड्राइभर बिना नै तुरुन्त चल्दछन्। २ सेकेन्डमै शुल्क रसिद निकाल्न ८०mm र ५८mm थर्मल प्रिन्टर तथा परिचयपत्र र बस पासका लागि CR80 PVC प्रिन्टर सिधै जडान हुन्छन्।",
    },
    {
      id: "specs",
      q: "What are the hardware requirements to run MeroSchool?",
      qNe: "MeroSchool चलाउन कस्तो कम्प्युटर क्षमता (Hardware Requirements) चाहिन्छ?",
      category: "installation",
      a: "Thanks to its lightweight native desktop design (~15 MB footprint), MeroSchool runs smoothly on any campus desktop or laptop with 2 GB+ RAM running Windows 10+, macOS 11+, or Linux.",
      aNe: "हल्का नेटिभ डेस्कटप संरचना (~१५ MB आकार) का कारण Windows 10+, macOS 11+ वा Linux भएका र २ GB+ RAM रहेका कुनै पनि विद्यालय डेस्कटप वा ल्यापटपमा सहजै चल्दछ।",
    },
    {
      id: "cloud-fees",
      q: "Are there monthly recurring cloud hosting fees?",
      qNe: "के यसमा मासिक क्लाउड होस्टिङ वा सर्भर शुल्क लाग्दछ?",
      category: "licensing",
      a: "No. Because your database resides on school-owned hardware rather than rented cloud infrastructure, there are zero monthly per-student server bills or forced subscription escalations.",
      aNe: "लाग्दैन। तपाईंको डेटाबेस भाडाको क्लाउड सर्भरको सट्टा विद्यालयकै हार्डवेयरमा रहने भएकाले प्रतिविद्यार्थी मासिक सर्भर शुल्क वा जबरजस्ती नवीकरण खर्च हुँदैन।",
    },
    {
      id: "multi-pc",
      q: "Can multiple computers in the school access the local database?",
      qNe: "के विद्यालयका धेरै कम्प्युटरहरूले एउटै स्थानीय डेटाबेस प्रयोग गर्न सक्छन्?",
      category: "offline",
      a: "Yes. Connect administration, accounts, library, and exam computers over your existing local campus Wi-Fi router or Gigabit Ethernet LAN—enabling seamless multi-counter coordination with zero internet.",
      aNe: "सक्छन्। प्रशासन, लेखा, पुस्तकालय र परीक्षा शाखाका कम्प्युटरहरूलाई विद्यालयकै स्थानीय Wi-Fi राउटर वा इथरनेट LAN मार्फत जोडेर इन्टरनेट बिना नै एकसाथ काम गर्न सकिन्छ।",
    },
    {
      id: "calendar-notices",
      q: "How does the School Calendar handle holidays, announcements, and notices?",
      qNe: "विद्यालय पात्रोले बिदा, घोषणा र आधिकारिक सूचनाहरू कसरी व्यवस्थापन गर्छ?",
      category: "customization",
      a: "MeroSchool includes a dual Bikram Sambat (B.S.) and Gregorian (A.D.) School Calendar synced with Campus Announcements and Notices. Marking public or seasonal holidays automatically updates attendance working-day counters and library book return dates, while noticeboard bulletins and parent circulars can be printed offline in one click.",
      aNe: "MeroSchool मा घोषणा र सूचनासँग जोडिएको दोहोरो विक्रम संवत् (वि.सं.) र ईस्वी संवत् (A.D.) विद्यालय पात्रो छ। सार्वजनिक वा मौसमी बिदा चिह्नित गर्दा हाजिरी कार्यदिन र पुस्तकालय फिर्ता मिति स्वतः मिलान हुन्छन् र सूचना बुलेटिन १-क्लिकमै प्रिन्ट गर्न सकिन्छ।",
    },
    {
      id: "power-cut-safety",
      q: "What happens if electricity cuts off suddenly while billing fees or entering marks?",
      qNe: "शुल्क बिलिङ वा अंक प्रविष्टि गरिरहँदा अचानक बत्ती गएमा डेटा सुरक्षित रहन्छ?",
      category: "offline",
      a: "Yes. MeroSchool uses crash-safe atomic disk saves so every completed fee receipt or mark entry is safely committed—sudden power cuts or PC restarts will not corrupt your ledgers or lose saved transactions.",
      aNe: "सुरक्षित रहन्छ। MeroSchool ले सुरक्षित स्थानीय सेभ प्रणाली प्रयोग गर्छ। सेभ भइसकेका प्रत्येक रसिद र परीक्षा अंक सुरक्षित रहने हुँदा बत्ती जाँदा डेटा बिग्रने जोखिम हुँदैन।",
    },
    {
      id: "rbac-audit",
      q: "Can we restrict what cashiers, teachers, and librarians can view or edit?",
      qNe: "के लेखापाल, शिक्षक र पुस्तकालय प्रमुखका लागि अलग–अलग पहुँच सीमा तोक्न मिल्छ?",
      category: "offline",
      a: "Yes. Built-in Role-Based Access Control (RBAC) separates Super Admin, Principal, Cashier/Accountant, Subject Teacher, Librarian, and Transport In-Charge roles. Cashiers cannot modify exam scores, teachers cannot alter financial accounts, and every sensitive action is recorded in local audit logs.",
      aNe: "मिल्छ। अन्तर्निर्मित भूमिका-आधारित पहुँच नियन्त्रण (RBAC) ले प्रधानाध्यापक, लेखापाल, विषय शिक्षक, पुस्तकालय प्रमुख र यातायात इन्चार्जको अधिकार अलग राख्छ। लेखापालले परीक्षा अंक बदल्न नसक्ने र शिक्षकले आर्थिक खाता चलाउन नसक्ने सुरक्षा व्यवस्था छ।",
    },
    {
      id: "hostel-payroll",
      q: "Does MeroSchool also handle staff payroll, hostel boarding, and infirmary logs?",
      qNe: "के MeroSchool मा कर्मचारी तलब, छात्रावास (Hostel) र स्वास्थ्य कक्ष अभिलेख पनि समावेश छ?",
      category: "customization",
      a: "Yes. All 44 modules are included out of the box—covering monthly faculty payroll with printable payslips, hostel wing/bed occupancy with automated mess billing linked to student ledgers, campus infirmary visit/allergy logs, and thermal reception gate passes.",
      aNe: "हो। प्रिन्ट गर्न मिल्ने तलब पे-स्लिप, छात्रावास कोठा/मेस बिलिङ, विद्यार्थी स्वास्थ्य कक्ष तथा एलर्जी विवरण र थर्मल गेट पाससहित सबै ४४ मोड्युल एउटै प्याकेजमा समावेश छन्।",
    },
  ];
