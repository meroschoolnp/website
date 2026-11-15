import React from "react";
import {
  ShieldCheck,
  Receipt,
  BookOpen,
  Bus,
} from "lucide-react";

export type RoleId = "principal" | "bursar" | "teacher" | "logistics";
export interface RoleWorkflow {
  id: RoleId;
  titleEn: string;
  titleNe: string;
  subtitleEn: string;
  subtitleNe: string;
  accessScopeEn: string;
  accessScopeNe: string;
  icon: React.ComponentType<{ className?: string }>;
  dailyTasks: {
    taskEn: string;
    taskNe: string;
    detailEn: string;
    detailNe: string;
    metricEn: string;
    metricNe: string;
  }[];
  guardrailEn: string;
  guardrailNe: string;
}

export const ROLE_WORKFLOWS: RoleWorkflow[] = [
  {
    id: "principal",
    titleEn: "Principal & Administration",
    titleNe: "प्रधानाध्यापक र प्रशासन",
    subtitleEn:
      "Full campus visibility, calendar governance, and staff approvals",
    subtitleNe:
      "सम्पू्र्ण विद्यालय निगरानी, पात्रो व्यवस्थापन र कर्मचारी स्वीकृति",
    accessScopeEn: "RBAC Level · Institutional Admin",
    accessScopeNe: "पहुँच तह · संस्थागत प्रशासक",
    icon: ShieldCheck,
    dailyTasks: [
      {
        taskEn: "Morning Attendance & Leave Approvals",
        taskNe: "बिहानी हाजिरी र बिदा स्वीकृति",
        detailEn:
          "Review campus-wide class attendance percentages, approve faculty casual/sick leave requests, and trigger automatic substitute teacher assignments.",
        detailNe:
          "सम्पूर्ण कक्षाको दैनिक हाजिरी प्रतिशत हेर्नुहोस्, शिक्षक बिदा स्वीकृत गर्नुहोस् र स्वचालित सट्टा शिक्षक मिलान गर्नुहोस्।",
        metricEn: "< 60 sec review",
        metricNe: "< ६० सेकेन्डमा समीक्षा",
      },
      {
        taskEn: "School Calendar, Holidays & Official Notices",
        taskNe: "विद्यालय पात्रो, बिदा र आधिकारिक सूचना",
        detailEn:
          "Publish B.S./A.D. public holidays, parent announcements, exam circulars, and printable noticeboard bulletins offline.",
        detailNe:
          "वि.सं./ई.सं. सार्वजनिक बिदा, अभिभावक घोषणा, परीक्षा परिपत्र र प्रिन्टयोग्य सूचना बुलेटिन अफलाइनमै जारी गर्नुहोस्।",
        metricEn: "B.S. & A.D. synced",
        metricNe: "वि.सं. र ई.सं. समन्वित",
      },
      {
        taskEn: "Executive Analytics & Vault Backups",
        taskNe: "कार्यकारी विश्लेषण र भल्ट ब्याकअप",
        detailEn:
          "Inspect 6M/1Y fee collection vs. expense trends, check database integrity, and export encrypted backups to USB.",
        detailNe:
          "शुल्क संकलन र खर्चको तुलनात्मक चार्ट हेर्नुहोस्, डेटाबेस शुद्धता जाँच्नुहोस् र USB मा इन्क्रिप्टेड ब्याकअप लिनुहोस्।",
        metricEn: "3 sec USB snapshot",
        metricNe: "३ सेकेन्डमा USB ब्याकअप",
      },
    ],
    guardrailEn:
      "Every fee waiver, grade modification, and certificate issuance is logged with timestamp and operator ID in your local campus database.",
    guardrailNe:
      "प्रत्येक शुल्क छुट, अंक संशोधन र प्रमाणपत्र छपाइ स्थानीय विद्यालय डेटाबेसमा मिति र प्रयोगकर्ता आईडीसहित सुरक्षित रहन्छ।",
  },
  {
    id: "bursar",
    titleEn: "Bursar & Cash Counter",
    titleNe: "लेखापाल र नगद काउन्टर",
    subtitleEn:
      "High-speed fee settlements, Day-Book closing, and staff payroll",
    subtitleNe: "तीव्र शुल्क बिलिङ, दैनिक डे-बुक मिलान र कर्मचारी तलब",
    accessScopeEn: "RBAC Level · Finance & Cash Desk",
    accessScopeNe: "पहुँच तह · लेखा तथा नगद डेस्क",
    icon: Receipt,
    dailyTasks: [
      {
        taskEn: "Barcode Lookup & Sub-2s Receipt Printing",
        taskNe: "बारकोड खोजी र २ सेकेन्डमै रसिद छपाइ",
        detailEn:
          "Scan scholar CR80 ID cards or search by admission number, settle partial or full monthly dues, and spool 80mm ESC/POS receipts.",
        detailNe:
          "विद्यार्थी परिचयपत्र स्क्यान वा दर्ता नम्बरबाट खोजी गरी आंशिक/पूर्ण शुल्क असुली र ८०mm थर्मल रसिद प्रिन्ट गर्नुहोस्।",
        metricEn: "120+ receipts / min",
        metricNe: "प्रति मिनेट १२०+ रसिद",
      },
      {
        taskEn: "Currency Denomination & Shift Closing",
        taskNe: "नोट गणना र सिफ्ट नगद मिलान",
        detailEn:
          "Reconcile physical drawer cash notes against Cash, Bank Transfer, Card POS, and Cheque journals before closing the office counter.",
        detailNe:
          "कार्यालय बन्द गर्नुअघि नगद घर्राको नोट विवरणलाई नगद, बैंक, कार्ड र चेक अभिलेखसँग सटीक मिलान गर्नुहोस्।",
        metricEn: "Zero ledger drift",
        metricNe: "शून्य हिसाब अन्तर",
      },
      {
        taskEn: "Monthly Staff Payroll & Expenses Ledger",
        taskNe: "मासिक तलब र विद्यालय खर्च खाता",
        detailEn:
          "Calculate faculty basic pay, allowances, leave deductions, and tax withholdings while logging vendor bills and bus fuel expenses.",
        detailNe:
          "शिक्षकको आधारभूत तलब, भत्ता, बिदा कट्टी र कर गणना गरी कर्मचारी पे-स्लिप र विद्यालय खर्च भौचर तयार पार्नुहोस्।",
        metricEn: "1-click payslips",
        metricNe: "१-क्लिकमा पे-स्लिप",
      },
    ],
    guardrailEn:
      "Strict privilege isolation ensures finance operators cannot alter examination marks, broadsheets, or grading scales.",
    guardrailNe:
      "कडा अधिकार विभाजनले लेखा शाखाले परीक्षा अंक, ब्रोडसिट वा ग्रेडिङ मापदण्ड परिवर्तन गर्न नसक्ने सुरक्षा दिन्छ।",
  },
  {
    id: "teacher",
    titleEn: "Teachers & Exam Controller",
    titleNe: "शिक्षक र परीक्षा नियन्त्रक",
    subtitleEn:
      "Keyboard marks entry, NEB/CBSE broadsheets, and class routines",
    subtitleNe: "द्रुत अंक प्रविष्टि, NEB/CBSE ब्रोडसिट र कक्षा तालिका",
    accessScopeEn: "RBAC Level · Academic & Grading",
    accessScopeNe: "पहुँच तह · शैक्षिक तथा परीक्षा",
    icon: BookOpen,
    dailyTasks: [
      {
        taskEn: "Keyboard-Driven Theory & Practical Gradebook",
        taskNe: "किबोर्डमैत्री सैद्धान्तिक र प्रयोगात्मक अंक प्रविष्टि",
        detailEn:
          "Enter marks rapidly across subjects using arrow keys with automatic full-mark validation and real-time GPA letter conversion.",
        detailNe:
          "पूर्णाङ्क सीमा जाँच र तत्काल अक्षराङ्क रूपान्तरणसहित किबोर्डबाटै छिटो परीक्षा अंक प्रविष्ट गर्नुहोस्।",
        metricEn: "0.2 ms autosave",
        metricNe: "०.२ ms अटो-सेभ",
      },
      {
        taskEn: "Master Broadsheet & Batch Report Cards",
        taskNe: "मास्टर ब्रोडसिट र सामूहिक लब्धाङ्कपत्र",
        detailEn:
          "Compile class ranks, subject toppers, pass/fail analytics, and print-ready A4 transcripts with institutional crest watermarks.",
        detailNe:
          "कक्षा स्थान, विषयगत उत्कृष्ट नतिजा र विद्यालयको वाटरमार्कसहित ब्याच लब्धाङ्कपत्र एउटै PDF/प्रिन्टमा तयार पार्नुहोस्।",
        metricEn: "1,200+ in 1 batch",
        metricNe: "१ ब्याचमा १,२००+ नतिजा",
      },
      {
        taskEn: "Admit Cards, Homework & Lesson Plans",
        taskNe: "प्रवेशपत्र, गृहकार्य र पाठ योजना",
        detailEn:
          "Generate QR-verified exam hall tickets (flagging fee dues automatically) and track unit-by-unit syllabus coverage.",
        detailNe:
          "बक्यौता शुल्क जाँचसहित QR कोड भएको परीक्षा प्रवेशपत्र बनाउनुहोस् र पाठ योजना प्रगति अभिलेख राख्नुहोस्।",
        metricEn: "2 or 4 per A4 page",
        metricNe: "प्रति A4 २ वा ४ टिकट",
      },
    ],
    guardrailEn:
      "Staff-room PCs connect over local campus LAN so multiple teachers score concurrently without internet or cloud lag.",
    guardrailNe:
      "शिक्षक कक्षका कम्प्युटरहरू स्थानीय LAN मा जोडिने हुँदा इन्टरनेट बिना नै धेरै शिक्षकले एकैसाथ अंक भर्न सक्छन्।",
  },
  {
    id: "logistics",
    titleEn: "Librarian, Transport & Hostel",
    titleNe: "पुस्तकालय, यातायात र छात्रावास",
    subtitleEn:
      "Barcode book circulation, bus seat manifests, and gate security",
    subtitleNe: "बारकोड पुस्तक लेनदेन, बस सिट सूची र गेट सुरक्षा",
    accessScopeEn: "RBAC Level · Campus Logistics",
    accessScopeNe: "पहुँच तह · क्याम्पस सेवा",
    icon: Bus,
    dailyTasks: [
      {
        taskEn: "ISBN Barcode Book Issue & Overdue Sync",
        taskNe: "ISBN बारकोड पुस्तक लेनदेन र जरिवाना मिलान",
        detailEn:
          "Scan ISBN book labels and student CR80 cards via USB wedge to check books in/out in seconds and sync late fines to fee ledgers.",
        detailNe:
          "USB बारकोड स्क्यानरबाट पुस्तक र विद्यार्थी परिचयपत्र स्क्यान गरी तुरुन्त लेनदेन र ढिलाइ जरिवाना शुल्क खातामा जोड्नुहोस्।",
        metricEn: "1-sec scan checkout",
        metricNe: "१ सेकेन्डमा लेनदेन",
      },
      {
        taskEn: "School Bus Routes & CR80 Transit Passes",
        taskNe: "विद्यालय बस रुट र CR80 बस पास",
        detailEn:
          "Enforce seat capacities across routes, log fuel & maintenance schedules, and issue barcoded PVC passes for boarding checks.",
        detailNe:
          "सिट क्षमताभन्दा बढी बुकिङ रोक्नुहोस्, सवारी मर्मत अभिलेख राख्नुहोस् र बारकोड PVC बस पास जारी गर्नुहोस्।",
        metricEn: "100% seat compliance",
        metricNe: "१००% सिट नियन्त्रण",
      },
      {
        taskEn: "Hostel Beds, Infirmary & Thermal Gate Passes",
        taskNe: "छात्रावास, स्वास्थ्य कक्ष र थर्मल गेट पास",
        detailEn:
          "Allocate boarding rooms and mess fees, log infirmary visits/allergies, and print 80mm early-dismissal guardian gate slips.",
        detailNe:
          "छात्रावास कोठा/मेस शुल्क व्यवस्थापन, प्राथमिक उपचार लग र ८०mm थर्मल गेट-पास रसिद प्रिन्ट गर्नुहोस्।",
        metricEn: "Unified campus ledger",
        metricNe: "एकीकृत विद्यालय खाता",
      },
    ],
    guardrailEn:
      "All library fines, hostel boarding charges, and bus route fees post directly into the single student ledger with zero duplicate typing.",
    guardrailNe:
      "पुस्तकालय जरिवाना, छात्रावास शुल्क र बस भाडा दोहोरो प्रविष्टि बिना नै एउटै विद्यार्थी खातामा स्वतः जोडिन्छ।",
  },
];
