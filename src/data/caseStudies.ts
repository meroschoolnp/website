export interface CaseStudy {
  name: string;
  nameNe: string;
  role: string;
  roleNe: string;
  institution: string;
  institutionNe: string;
  location: string;
  locationNe: string;
  category: "schools" | "colleges" | "operations";
  challenge: string;
  challengeNe: string;
  outcome: string;
  outcomeNe: string;
  quote: string;
  quoteNe: string;
  metric: string;
  metricNe: string;
  rating: number;
}

export type CaseStudyFilterId = "all" | "schools" | "colleges" | "operations";

export interface CaseStudyFilter {
  id: CaseStudyFilterId;
  labelEn: string;
  labelNe: string;
}

export const CASE_STUDY_FILTERS: CaseStudyFilter[] = [
  { id: "all", labelEn: "All Institutions", labelNe: "सबै संस्थाहरू" },
  { id: "schools", labelEn: "K-12 Secondary Schools", labelNe: "माध्यमिक विद्यालयहरू" },
  { id: "colleges", labelEn: "+2 & Science Colleges", labelNe: "+२ र विज्ञान कलेजहरू" },
  { id: "operations", labelEn: "Fleet & Operations", labelNe: "यातायात र सञ्चालन" },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    name: "Narayan Prasad Bhattarai",
    nameNe: "नारायण प्रसाद भट्टराई",
    role: "Principal & Executive Director",
    roleNe: "प्रधानाध्यापक तथा कार्यकारी निर्देशक",
    institution: "Siddhartha Model Secondary School",
    institutionNe: "सिद्धार्थ मोडल माध्यमिक विद्यालय",
    location: "Kathmandu",
    locationNe: "काठमाडौं",
    category: "schools",
    challenge: "3-hour cloud portal outages during term peak intake week",
    challengeNe: "शैक्षिक सत्रको भीडभाडमा ३ घण्टासम्म क्लाउड पोर्टल अवरुद्ध",
    outcome: "0 minutes unplanned downtime over 24 consecutive months",
    outcomeNe: "लगातार २४ महिनामा ० मिनेट अनपेक्षित डाउनटाइम",
    quote:
      "During intake peak week, our previous cloud portal froze for three straight hours due to server bandwidth limits. Switching to MeroSchool removed every network dependency—fee collection and broadsheet marks entry run locally on our office PCs without lag.",
    quoteNe:
      "भर्ना र बिलिङको मुख्य हप्तामा हाम्रो पुरानो क्लाउड पोर्टल सर्भर ब्यान्डविथका कारण लगातार तीन घण्टा अड्कियो। MeroSchool मा सरेपछि नेटवर्क निर्भरता पूर्णतः हट्यो—शुल्क संकलन र ब्रोडसिट अंक प्रविष्टि बिना कुनै ढिलाइ कार्यालयकै पीसीमा चल्छ।",
    metric: "0 min downtime in 2 yrs",
    metricNe: "२ वर्षमा ० मिनेट डाउनटाइम",
    rating: 5,
  },
  {
    name: "Sunita Shrestha",
    nameNe: "सुनिता श्रेष्ठ",
    role: "Chief Accountant & Bursar",
    roleNe: "मुख्य लेखापाल",
    institution: "Valley View Higher Secondary Academy",
    institutionNe: "भ्याली भ्यु उच्च माध्यमिक एकेडेमी",
    location: "Lalitpur",
    locationNe: "ललितपुर",
    category: "schools",
    challenge:
      "Morning tuition queues stalling over slow web receipt rendering",
    challengeNe: "ढिलो वेब रसिद खुल्ने समस्याले बिहानी शुल्क लाइन जाम",
    outcome: "80mm ESC/POS receipts printed in under 2 seconds per parent",
    outcomeNe: "प्रति अभिभावक २ सेकेन्डमै ८०mm थर्मल रसिद प्रिन्ट",
    quote:
      "The running student account ledger and daily cash Day-Book transformed our counter speed. When parents queue up in the morning, we settle invoices and print itemized thermal slips in under two seconds—even when the fiber line drops.",
    quoteNe:
      "विद्यार्थीको चालु खाता र दैनिक नगद डे-बुकले हाम्रो काउन्टरको गति नै बदलिदियो। बिहान अभिभावकको भीड हुँदा फाइबर लाइन काटे पनि २ सेकेन्डभन्दा कम समयमै रसिद छापेर दिन सकिन्छ।",
    metric: "< 2s cash settlement",
    metricNe: "< २ सेकेन्ड नगद फर्छ्यौट",
    rating: 5,
  },
  {
    name: "Dr. Ramesh K. Adhikari",
    nameNe: "डा. रमेश के. अधिकारी",
    role: "Academic Coordinator",
    roleNe: "शैक्षिक संयोजक",
    institution: "Himalayan Science & Management College",
    institutionNe: "हिमालयन साइन्स एण्ड म्यानेजमेन्ट कलेज",
    location: "Pokhara",
    locationNe: "पोखरा",
    category: "colleges",
    challenge: "Manual weekend Excel reconciliation across 1,200 +2 scholars",
    challengeNe: "१,२०० +२ विद्यार्थीको एक्सेल मिलानमा पूरा सप्ताहन्त खर्च",
    outcome: "NEB letter grades, ranks & transcripts compiled in one click",
    outcomeNe: "एकै क्लिकमा NEB ग्रेड, श्रेणी र लब्धाङ्कपत्र तयार",
    quote:
      "Compiling terminal broadsheets for 1,200 Science and Management scholars used to consume an entire weekend of spreadsheet formulas. With MeroSchool, GPA calculations, subject toppers, and batch report cards generate instantly from local campus storage.",
    quoteNe:
      "१,२०० विज्ञान र व्यवस्थापन संकायका विद्यार्थीको नतिजा तयार पार्न पहिले एक्सेल फर्मुलामा पूरा सप्ताहन्त बित्थ्यो। MeroSchool बाट स्थानीय भण्डारणमार्फत GPA, विषयगत उत्कृष्ट नतिजा र सामूहिक लब्धाङ्कपत्र तत्काल बन्छन्।",
    metric: "1,200 transcripts in 1 click",
    metricNe: "१ क्लिकमा १,२०० लब्धाङ्कपत्र",
    rating: 5,
  },
  {
    name: "Dinesh Manandhar",
    nameNe: "दिनेश मानन्धर",
    role: "Head of IT & Systems Administrator",
    roleNe: "आईटी प्रमुख तथा प्रणाली प्रशासक",
    institution: "Prabhat Model Higher Secondary School",
    institutionNe: "प्रभात मोडल उच्च माध्यमिक विद्यालय",
    location: "Bhaktapur",
    locationNe: "भक्तपुर",
    category: "colleges",
    challenge: "Escaping recurring per-student cloud SaaS renewal hikes",
    challengeNe: "प्रतिविद्यार्थी बढ्दै जाने क्लाउड नवीकरण शुल्कको भार",
    outcome: "Rs. 0 monthly hosting bills with automated USB backup vault",
    outcomeNe: "रु. ० मासिक होस्टिङ खर्च र १-क्लिक USB भल्ट ब्याकअप",
    quote:
      "The architecture respects school autonomy. Our installer footprint is tiny, RAM overhead stays low on existing Windows 10 desktops, and backing up the full institutional database takes one click straight to an external USB drive.",
    quoteNe:
      "यो संरचनाले विद्यालयको स्वायत्तताको सम्मान गर्छ। इन्स्टलर सानो छ, पुरानो Windows 10 कम्प्युटरमा पनि थोरै RAM मा चल्छ र पूरा विद्यालयको डेटाबेस बाहिरी USB ड्राइभमा एकै क्लिकमा ब्याकअप हुन्छ।",
    metric: "Rs. 0 monthly cloud bills",
    metricNe: "रु. ० मासिक क्लाउड बिल",
    rating: 5,
  },
  {
    name: "Bimala Thapa",
    nameNe: "बिमला थापा",
    role: "Fleet Transit & Transport Supervisor",
    roleNe: "यातायात तथा बस सुपरभाइजर",
    institution: "Everest Public School",
    institutionNe: "एभरेष्ट पब्लिक स्कूल",
    location: "Kathmandu",
    locationNe: "काठमाडौं",
    category: "operations",
    challenge: "Paper bus rosters leading to missed stops and seat overbooking",
    challengeNe: "कागजी बस सूचीका कारण स्टप छुट्ने र सिट ओभरबुक हुने समस्या",
    outcome: "14 bus routes standardized with Code-128 CR80 PVC bus passes",
    outcomeNe: "Code-128 CR80 PVC बस पाससहित १४ रुट व्यवस्थित",
    quote:
      "Printing CR80 plastic bus passes with Code-128 linear barcodes brought industrial precision to our morning fleet. Conductors verify route assignments reliably and capacity thresholds prevent accidental vehicle overbooking.",
    quoteNe:
      "Code-128 बारकोड भएको CR80 प्लास्टिक बस पासले हाम्रो बिहानी यातायातमा व्यवस्थित अनुशासन ल्याएको छ। सहचालकले रुट सजिलै प्रमाणित गर्न सक्छन् र सिट क्षमताभन्दा बढी विद्यार्थी राखिँदैन।",
    metric: "14 bus routes synchronized",
    metricNe: "१४ बस रुट व्यवस्थित",
    rating: 5,
  },
  {
    name: "Gopal Krishna Regmi",
    nameNe: "गोपाल कृष्ण रेग्मी",
    role: "Vice Principal (Administration)",
    roleNe: "सहायक प्रधानाध्यापक (प्रशासन)",
    institution: "Mount View Secondary English School",
    institutionNe: "माउन्ट भ्यु सेकेन्डरी इङ्ग्लिस स्कूल",
    location: "Chitwan",
    locationNe: "चितवन",
    category: "operations",
    challenge: "8:00 AM timetable scrambling during sudden teacher leave",
    challengeNe:
      "आकस्मिक शिक्षक बिदा हुँदा बिहान ८ बजे कक्षा तालिका मिलाउन अन्योल",
    outcome: "Automated free-period faculty matching completed in under 60s",
    outcomeNe: "६० सेकेन्डभित्रै खाली पिरियड भएका शिक्षकको स्वचालित मिलान",
    quote:
      "The teacher substitution desk eliminates morning homeroom confusion. When faculty call in sick at 8:00 AM, the system highlights every available teacher sharing free slots and department expertise in seconds.",
    quoteNe:
      "शिक्षक सट्टा (Substitution) डेस्कले बिहानी कक्षाको अन्योल हटाइदिएको छ। बिहान शिक्षक बिरामी परेमा प्रणालीले केही सेकेन्डमै खाली समय र सम्बन्धित विषयका उपलब्ध शिक्षक देखाउँछ।",
    metric: "60s morning substitution",
    metricNe: "६० सेकेन्डमा सट्टा शिक्षक",
    rating: 5,
  },
  {
    name: "Shyam Sundar Yadav",
    nameNe: "श्याम सुन्दर यादव",
    role: "Hostel Warden & Boarding Coordinator",
    roleNe: "छात्रावास वार्डेन तथा आवासीय संयोजक",
    institution: "Janaki Residential Academy",
    institutionNe: "जानकी आवासीय एकेडेमी",
    location: "Janakpur",
    locationNe: "जनकपुर",
    category: "operations",
    challenge: "Separate mess registers causing missed boarding fee entries",
    challengeNe: "छुट्टै मेस रजिस्टरका कारण आवासीय शुल्क हिसाबमा छुटफुट",
    outcome: "420 hostel beds & monthly mess dues unified in student ledgers",
    outcomeNe: "४२० छात्रावास सिट र मासिक मेस बिल विद्यार्थी खातामै एकीकृत",
    quote:
      "Before MeroSchool, our hostel mess register and front-office fee book were managed on separate Excel sheets. Now bed allocation, infirmary allergy notes, and monthly boarding dues appear inside the exact same student ledger.",
    quoteNe:
      "MeroSchool अघि हाम्रो छात्रावास मेस रजिस्टर र शुल्क खाता फरक एक्सेल फाइलमा थिए। अहिले कोठा बाँडफाँट, स्वास्थ्य नोट र मासिक आवास शुल्क एउटै विद्यार्थी खातामा स्वतः जोडिन्छ।",
    metric: "420 beds unified offline",
    metricNe: "४२० सिट अफलाइन एकीकृत",
    rating: 5,
  },
  {
    name: "Kabita Gurung",
    nameNe: "कविता गुरुङ",
    role: "Primary Wing Head",
    roleNe: "प्राथमिक तह प्रमुख",
    institution: "Annapurna Sunrise Boarding School",
    institutionNe: "अन्नपूर्ण सनराइज बोर्डिङ स्कूल",
    location: "Butwal",
    locationNe: "बुटवल",
    category: "schools",
    challenge: "Manual holiday counting & delayed printed parent circulars",
    challengeNe: "बिदा दिन हातैले गन्नुपर्ने र अभिभावक परिपत्र छपाइमा ढिलाइ",
    outcome: "B.S./A.D. calendar, holidays & notice circulars ready in 1 click",
    outcomeNe: "१-क्लिकमै वि.सं./ई.सं. पात्रो, बिदा र सूचना परिपत्र तयार",
    quote:
      "Tracking Bikram Sambat public holidays alongside Gregorian dates used to cause errors in monthly attendance percentages. With the unified school calendar and notice desk, holidays automatically adjust working days and parent notices print cleanly.",
    quoteNe:
      "विक्रम संवत् र ईस्वी मिति मिलाएर सार्वजनिक बिदा गन्दा मासिक हाजिरीमा गल्ती हुन्थ्यो। एकीकृत विद्यालय पात्रो र सूचना डेस्कले कार्यदिन स्वतः मिलाउँछ र परिपत्र तुरुन्त प्रिन्ट हुन्छ।",
    metric: "Zero attendance calendar errors",
    metricNe: "हाजिरी पात्रो गल्ती शून्य",
    rating: 5,
  },
];
