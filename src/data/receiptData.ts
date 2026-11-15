export interface ReceiptSample {
  id: string;
  receiptNo: string;
  studentName: string;
  studentNameNe: string;
  admissionNo: string;
  grade: string;
  gradeNe: string;
  dateBs: string;
  dateAd: string;
  cashier: string;
  paymentMode: string;
  paymentModeNe: string;
  items: {
    label: string;
    labelNe: string;
    amount: number;
  }[];
  discount: number;
}

export const SAMPLE_RECEIPTS: ReceiptSample[] = [
  {
    id: "tuition",
    receiptNo: "POS-2082-0418",
    studentName: "Aarav Bikram Shah",
    studentNameNe: "आरव विक्रम शाह",
    admissionNo: "20820142",
    grade: "Grade 10 · Section A",
    gradeNe: "कक्षा १० · सेक्सन A",
    dateBs: "2082-01-18",
    dateAd: "2025-05-01",
    cashier: "Counter 01 (Sunita S.)",
    paymentMode: "Cash Drawer",
    paymentModeNe: "नगद काउन्टर",
    items: [
      {
        label: "Baisakh Monthly Tuition",
        labelNe: "वैशाख मासिक शिक्षण शुल्क",
        amount: 4500,
      },
      {
        label: "Computer & Robotics Lab",
        labelNe: "कम्प्युटर तथा रोबोटिक्स ल्याब",
        amount: 850,
      },
      {
        label: "School Bus (Route R-04)",
        labelNe: "स्कुल बस (रुट R-04)",
        amount: 1800,
      },
      {
        label: "Terminal Exam Fee",
        labelNe: "त्रैमासिक परीक्षा शुल्क",
        amount: 400,
      },
    ],
    discount: 500,
  },
  {
    id: "admission",
    receiptNo: "POS-2082-0419",
    studentName: "Prakriti Gurung",
    studentNameNe: "प्रकृति गुरुङ",
    admissionNo: "20820389",
    grade: "Grade 11 Science · Section B",
    gradeNe: "कक्षा ११ विज्ञान · सेक्सन B",
    dateBs: "2082-01-18",
    dateAd: "2025-05-01",
    cashier: "Counter 02 (Ramesh K.)",
    paymentMode: "Bank Transfer / Voucher",
    paymentModeNe: "बैंक भौचर / ट्रान्सफर",
    items: [
      {
        label: "Annual Registration & ID",
        labelNe: "वार्षिक दर्ता र परिचयपत्र",
        amount: 3500,
      },
      {
        label: "Physics & Chem Lab Deposit",
        labelNe: "भौतिक र रसायन ल्याब धरौटी",
        amount: 2500,
      },
      {
        label: "Baisakh Tuition Installment",
        labelNe: "वैशाख शिक्षण किस्ता",
        amount: 6200,
      },
    ],
    discount: 1000,
  },
];
