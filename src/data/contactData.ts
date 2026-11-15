export type InquiryTopic = 'general' | 'onsite_demo' | 'video_demo' | 'support';
export type EnquiryType = 'general_contact' | 'onsite_demo' | 'video_demo' | 'support_ticket';

export interface TopicConfig {
  prefix: string;
  type: EnquiryType;
  label: string;
  labelNe: string;
}

export const TOPIC_CONFIGS: Record<InquiryTopic, TopicConfig> = {
  general: {
    prefix: 'MS-MSG',
    type: 'general_contact',
    label: 'General Inquiry',
    labelNe: 'सामान्य सोधपुछ',
  },
  onsite_demo: {
    prefix: 'DEMO-ONSITE',
    type: 'onsite_demo',
    label: 'Free Campus Demo',
    labelNe: 'निःशुल्क विद्यालय डेमो',
  },
  video_demo: {
    prefix: 'DEMO-VIDEO',
    type: 'video_demo',
    label: 'Live Video Demo',
    labelNe: 'प्रत्यक्ष भिडियो डेमो',
  },
  support: {
    prefix: 'MS-DESK',
    type: 'support_ticket',
    label: 'Technical & Hardware Support',
    labelNe: 'प्राविधिक तथा हार्डवेयर सहायता',
  },
};

export interface ContactFaq {
  qEn: string;
  qNe: string;
  aEn: string;
  aNe: string;
}

export const CONTACT_FAQS: ContactFaq[] = [
  {
    qEn: 'Can we request a free live demo or on-site school visit before deciding?',
    qNe: 'निर्णय गर्नुअघि के हामी निःशुल्क प्रत्यक्ष डेमो वा विद्यालयमै भ्रमण माग गर्न सक्छौं?',
    aEn: 'Yes, 100%! We provide free on-site campus visits where our engineers bring pre-configured demonstration laptops, 80mm thermal receipt printers, and USB barcode scanners directly to your front office. You can also schedule a 1-on-1 private live video walkthrough via Zoom or Google Meet for your principal and administrative team.',
    aNe: 'हो, १००% निःशुल्क! हाम्रो इन्जिनियरिङ टोली प्रि-कन्फिगर गरिएको डेमो ल्यापटप, ८०mm थर्मल रसिद प्रिन्टर र USB बारकोड स्क्यानरसहित तपाईंको कार्यालयमै आएर प्रत्यक्ष प्रदर्शन गर्दछ। प्रधानाध्यापक र प्रशासन टोलीका लागि Zoom वा Google Meet मार्फत १-अन-१ भिडियो डेमो पनि मिलाउन सकिन्छ।',
  },
  {
    qEn: 'Does MeroSchool support barcode scanners and POS thermal printers?',
    qNe: 'के MeroSchool ले बारकोड स्क्यानर र POS थर्मल प्रिन्टर सपोर्ट गर्छ?',
    aEn: 'Yes! MeroSchool connects natively via USB HID keyboard emulation to any standard 1D/2D laser barcode scanner for instant student lookup and library circulation, plus direct ESC/POS 80mm and 58mm thermal receipt printing for 2-second cash counter fee slips and CR80 PVC bus/ID passes.',
    aNe: 'हो! MeroSchool ले शून्य अतिरिक्त ड्राइभरमै कुनै पनि मानक USB HID लेजर बारकोड स्क्यानरबाट विद्यार्थी खोजी र पुस्तकालय पुस्तक लेनदेन सपोर्ट गर्छ, र ८०mm/५८mm ESC/POS थर्मल रसिद प्रिन्टर तथा CR80 PVC बस/परिचयपत्र छपाइ सिधै सञ्चालन गर्दछ।',
  },
  {
    qEn: 'Does the MeroSchool dashboard require an internet connection or cloud support?',
    qNe: 'के MeroSchool ड्यासबोर्ड चलाउन इन्टरनेट वा क्लाउड सपोर्ट चाहिन्छ?',
    aEn: 'No. After Super Admin creates your school account, your school signs in and operates 100% offline. Every dashboard activity — student records, fee ledgers, exam marks, and daily attendance — executes locally on your campus computer with zero cloud support.',
    aNe: 'पर्दैन। सुपर एडमिनले विद्यालयको खाता सिर्जना गरिदिएपछि विद्यालयले लगइन गरेर १००% अफलाइन चलाउँछ। विद्यार्थी अभिलेख, शुल्क खाता, परीक्षा अंक र हाजिरी सबै बिना क्लाउड सपोर्ट विद्यालयकै कम्प्युटरमा चल्दछन्।',
  },
  {
    qEn: 'Which operating systems does MeroSchool support?',
    qNe: 'MeroSchool कुन–कुन अपरेटिङ सिस्टममा चल्दछ?',
    aEn: 'MeroSchool natively supports Windows 10 & 11 (64-bit and ARM64), macOS 11.0+ (Universal DMG for Apple Silicon M1/M2/M3/M4 & Intel), and all modern Linux distributions (Debian, Ubuntu, Fedora, Arch, openSUSE).',
    aNe: 'MeroSchool Windows 10 र 11 (६४-बिट र ARM64), macOS 11.0+ (Apple Silicon र Intel) तथा आधुनिक Linux वितरणहरू (Debian, Ubuntu, Fedora, Arch, openSUSE) मा नेटिभ रूपमा चल्दछ।',
  },
  {
    qEn: 'How do we back up our school’s database and financial records?',
    qNe: 'हामी विद्यालयको डेटाबेस र आर्थिक अभिलेखको ब्याकअप कसरी लिन्छौं?',
    aEn: 'Inside the app under the Database & Backup module (/backup), you can generate a complete, encrypted campus backup snapshot with one click. You can save this backup directly to a USB flash drive, external hard drive, or local network NAS.',
    aNe: 'एपभित्रको Database & Backup मोड्युल (/backup) बाट एकै क्लिकमा सुरक्षित ब्याकअप स्न्यापसट बनाएर USB पेनड्राइभ, बाहिरी हार्ड ड्राइभ वा स्थानीय NAS मा सुरक्षित राख्न सकिन्छ।',
  },
  {
    qEn: 'Can we customize the school name, logo, address, and report cards?',
    qNe: 'के हामी विद्यालयको नाम, लोगो, ठेगाना र लब्धाङ्कपत्र अनुकूलन गर्न सक्छौं?',
    aEn: 'Absolutely. MeroSchool is an offline ERP designed for any school. In the Settings module, you can upload your school’s crest/logo, enter your school name and address, choose your grading standard (NEB, CBSE, GPA), and configure custom fee structures.',
    aNe: 'अवश्य सकिन्छ। MeroSchool हरेक विद्यालयका लागि अनुकूलित गर्न सकिने अफलाइन ईआरपी हो। Settings मा विद्यालयको लोगो, नाम, ठेगाना, ग्रेडिङ प्रणाली (NEB, CBSE, GPA) र शुल्क संरचना सहजै सेट गर्न सकिन्छ।',
  },
  {
    qEn: 'What are the hardware requirements to run MeroSchool?',
    qNe: 'MeroSchool चलाउन कस्तो कम्प्युटर हार्डवेयर आवश्यक पर्छ?',
    aEn: 'MeroSchool is an extremely lightweight (~15MB installer) native desktop app. It runs smoothly on any desktop or laptop with at least 2 GB of RAM and Windows 10, macOS 11+, or Linux.',
    aNe: 'MeroSchool अत्यन्त हल्का (~१५ MB इन्स्टलर) नेटिभ डेस्कटप एप हो। कम्तीमा २ GB RAM र Windows 10, macOS 11+ वा Linux भएको कुनै पनि डेस्कटप वा ल्यापटपमा सहजै चल्दछ।',
  },
  {
    qEn: 'Does MeroSchool include a School Calendar for holidays, announcements, and notices?',
    qNe: 'के MeroSchool मा बिदा, घोषणा र सूचनाका लागि विद्यालय पात्रो समावेश छ?',
    aEn: 'Yes. The built-in dual Bikram Sambat (B.S.) and Gregorian (A.D.) School Calendar manages public holidays, seasonal breaks, parent announcements, official notices, and campus events—automatically adjusting attendance working days and printing A4 noticeboard circulars offline.',
    aNe: 'हो। अन्तर्निर्मित दोहोरो वि.सं. र ई.सं. विद्यालय पात्रोले सार्वजनिक बिदा, मौसमी बिदा, अभिभावक घोषणा, आधिकारिक सूचना र विद्यालय कार्यक्रम व्यवस्थापन गर्छ र प्रिन्टयोग्य A4 सूचना परिपत्र तयार पार्छ।',
  },
  {
    qEn: 'Can multiple school computers connect over local LAN without internet?',
    qNe: 'के इन्टरनेट बिना नै विद्यालयका धेरै कम्प्युटरहरू स्थानीय LAN बाट जोडिन सक्छन्?',
    aEn: 'Yes. Reception cashiers, staff-room teachers, and the library desk can connect concurrently over your school’s existing local Wi-Fi or Gigabit Ethernet LAN with zero internet dependency.',
    aNe: 'सक्छन्। लेखा काउन्टर, शिक्षक कक्ष र पुस्तकालयका कम्प्युटरहरू इन्टरनेट बिना नै विद्यालयको स्थानीय Wi-Fi वा इथरनेट LAN मार्फत एकसाथ चल्न सक्छन्।',
  },
];
