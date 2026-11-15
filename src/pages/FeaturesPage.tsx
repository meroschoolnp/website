import React, { useState, useMemo, useDeferredValue, lazy, Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Search,
  DollarSign,
  FileSpreadsheet,
  CalendarCheck,
  Bus,
  Sliders,
  FlaskConical,
  Printer,
  Users,
  CheckCircle,
  ArrowRight,
  ShieldCheck,
  Monitor,
  GraduationCap,
  BookOpen,
  Award,
  Wallet,
  Receipt,
  Library,
  Megaphone,
  BarChart3,
  Building2,
  Settings,
  Calendar,
  QrCode,
  UserPlus,
  Briefcase,
  FileBadge,
  Layers,
  ArrowUpRight,
  HardDrive,
  Sparkles,
  CalendarOff,
  BedDouble,
  HeartPulse,
  ClipboardCheck,
  DoorOpen,
  Database,
  Terminal,
  LayoutDashboard,
  CalendarDays,
  Upload,
  KeyRound,
  Building,
  X,
} from 'lucide-react';
import { SEO } from '@/src/components/SEO';
import { AppImage } from '@/src/components/AppImage';
import { useLanguage } from '@/src/context/LanguageContext';
import { MODULES_NE } from '@/src/data/modulesNe';
import { ArchitectureComparisonSection } from '@/src/components/ArchitectureComparisonSection';
import { SchoolCalendarShowcase } from '@/src/components/SchoolCalendarShowcase';
import { DeliverablesAndOnboardingSection } from '@/src/components/DeliverablesAndOnboardingSection';
import desktopPosTerminalImg from '@/src/assets/images/desktop_pos_terminal_1794561642933.jpg';

const ThermalReceiptSimulator = lazy(() =>
  import('@/src/components/ThermalReceiptSimulator').then((m) => ({
    default: m.ThermalReceiptSimulator,
  }))
);

export interface ModuleItem {
  id: string;
  category: 'academics' | 'students' | 'examinations' | 'finance' | 'logistics' | 'governance';
  categoryLabel: string;
  title: string;
  route: string;
  icon: React.ComponentType<{ className?: string }>;
  kicker: string;
  description: string;
  capabilities: string[];
  desktopIntegration: string;
}

export const FeaturesPage: React.FC = () => {
  const navigate = useNavigate();
  const { isNepali, pick } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: pick('All 44 Modules', 'सबै ४४ मोड्युलहरू') },
    { id: 'academics', label: pick('Academics, Leave & Routine', 'शैक्षिक, बिदा र तालिका') },
    { id: 'students', label: pick('Students, Staff & Health', 'विद्यार्थी, कर्मचारी र स्वास्थ्य') },
    { id: 'examinations', label: pick('Examinations & Grading', 'परीक्षा र मूल्याङ्कन प्रणाली') },
    { id: 'finance', label: pick('Student Ledgers & POS Cash', 'विद्यार्थी खाता र POS नगद') },
    { id: 'logistics', label: pick('Events, Transport & Library', 'कार्यक्रम, यातायात र पुस्तकालय') },
    { id: 'governance', label: pick('Analytics, Database & Search', 'विश्लेषण, डेटाबेस र खोज') },
  ];

  const allModules: ModuleItem[] = [
    // 1. ACADEMICS
    {
      id: 'mod-academics',
      category: 'academics',
      categoryLabel: 'Academics, Leave & Routine',
      title: 'Academic Sessions & Trimester Lifecycle',
      route: '/academics',
      icon: GraduationCap,
      kicker: 'Multi-Year Calendar',
      description:
        'Manage institutional academic years (e.g., 2081–2082 B.S.), trimester grading windows, and session status transitions (Active, Upcoming, Archived) with sidebar quick switching.',
      capabilities: [
        'Instant 1-click active academic year switching across topbar & sidebar',
        'Trimester & evaluation cutoff window tracking per session',
        'Historical archived year preservation for alumni transcript lookups',
      ],
      desktopIntegration: 'Global session filter scoping all local campus records',
    },
    {
      id: 'mod-departments',
      category: 'academics',
      categoryLabel: 'Academics, Leave & Routine',
      title: 'Institutional Departments & Coordinators',
      route: '/departments',
      icon: Building,
      kicker: 'Faculty Divisions',
      description:
        'Organize Academic disciplines, Administrative units, and Support divisions with standardized department codes (ENG, SCI, MATH, CS), coordinator leads, and assigned faculty counts.',
      capabilities: [
        'Classification across Academic, Administrative, and Support units',
        'Live roll-up of assigned teaching staff and linked syllabus courses',
        'Department code directory exported cleanly to CSV',
      ],
      desktopIntegration: 'Relational links across Teachers, Subjects & Payroll',
    },
    {
      id: 'mod-classes',
      category: 'academics',
      categoryLabel: 'Academics & Timetable',
      title: 'Classes & Section Management',
      route: '/classes',
      icon: Layers,
      kicker: 'Academic Structure',
      description:
        'Define institutional class tiers from Nursery to Grade 12 (+2 Science & Management). Configure class sections, maximum seat quotas, homeroom teacher assignments, and academic streams.',
      capabilities: [
        'Stream partitioning (+2 Science, Management, Humanities)',
        'Class capacity limits and enrollment thresholds',
        'Direct mapping with subject syllabus matrices',
      ],
      desktopIntegration: 'Instant local record filtering by academic year',
    },
    {
      id: 'mod-subjects',
      category: 'academics',
      categoryLabel: 'Academics & Timetable',
      title: 'Subject Syllabus & Departmental Hierarchy',
      route: '/subjects',
      icon: BookOpen,
      kicker: 'Curriculum Catalog',
      description:
        'Catalog core, elective, and vocational subjects with full credit hour metrics, theory/practical breakdown percentages, pass marks, and departmental chair assignments.',
      capabilities: [
        'Theory (75%) vs Practical (25%) assessment split tracking',
        'Elective grouping with student-level enrollment tagging',
        'Curriculum codes aligned with NEB and CBSE standards',
      ],
      desktopIntegration: 'Local relation linking subjects to examination gradebooks',
    },
    {
      id: 'mod-timetable',
      category: 'academics',
      categoryLabel: 'Academics & Timetable',
      title: 'Class Timetable Matrix & Routine Planner',
      route: '/timetable',
      icon: Sliders,
      kicker: 'Weekly Scheduling',
      description:
        'Conflict-free master timetable grid for classes, laboratories, and faculty. Visual day-by-day period matrices with period duration intervals, lunch bell timings, and room collision prevention.',
      capabilities: [
        'Interactive grid view for Sunday through Friday timetables',
        'Instant detection of room double-booking and teacher clashes',
        'Printable class routine charts for student homerooms',
      ],
      desktopIntegration: 'Algorithmic constraint checking running locally in sub-millisecond time',
    },
    {
      id: 'mod-substitution',
      category: 'academics',
      categoryLabel: 'Academics & Timetable',
      title: 'Teacher Substitution & Arrangement Desk',
      route: '/timetable',
      icon: Briefcase,
      kicker: 'Daily Staff Adjustments',
      description:
        'Emergency absence management. When a teacher takes sick leave, the system instantly identifies available teachers who have free periods during that exact slot and shares subject department relevance.',
      capabilities: [
        'Automated free-period teacher recommendations based on load',
        'Conflict prevention rejecting teachers already in class',
        'Historical substitution logs with completion tracking',
      ],
      desktopIntegration: 'Local schedule cross-referencing without network delay',
    },
    {
      id: 'mod-calendar',
      category: 'academics',
      categoryLabel: 'Academics, Leave & Routine',
      title: 'School Calendar: Holidays, Announcements & Notices',
      route: '/calendar',
      icon: Calendar,
      kicker: 'Holidays, Notices & Announcements',
      description:
        'Dual-calendar scheduler supporting Nepali Bikram Sambat (B.S.) and Gregorian (A.D.). Manage public & institutional holidays, campus announcements, official notices, term exams, and parent-teacher assemblies.',
      capabilities: [
        'Public holiday tagging, winter/monsoon breaks & automatic working day calculation',
        'Unified announcement, notice, exam & co-curricular event categories',
        'Printable campus noticeboard bulletins, holiday lists & local archive',
      ],
      desktopIntegration: 'Native B.S./A.D. converter synced with Attendance & Library due dates',
    },
    {
      id: 'mod-attendance',
      category: 'academics',
      categoryLabel: 'Academics, Leave & Routine',
      title: 'Daily Roll-Call & Biometric Attendance Desk',
      route: '/attendance',
      icon: ClipboardCheck,
      kicker: 'Homeroom Tracking',
      description:
        'High-speed daily student and staff attendance registers. Mark whole homerooms Present, Absent, Late, or On Leave in under 60 seconds and enforce minimum exam eligibility thresholds.',
      capabilities: [
        'Bulk 1-click class roll-call & tardy logging',
        'Monthly student attendance percentages synced to report cards',
        'Printable daily absentee summary & guardian notices offline',
      ],
      desktopIntegration: 'Zero-latency local register tables without SMS dependencies',
    },
    {
      id: 'mod-leave',
      category: 'academics',
      categoryLabel: 'Academics, Leave & Routine',
      title: 'Leave Management & Approval Register',
      route: '/contact?type=demo',
      icon: CalendarOff,
      kicker: 'Staff & Student Leave',
      description:
        'Centralized leave management for teaching staff, administrative personnel, and students. Track casual, sick, earned, and medical leave quotas alongside principal approval workflows.',
      capabilities: [
        'Faculty leave balances (Casual, Sick, Medical, Study Leave)',
        'Student medical & guardian leave note logging with attachments',
        'Auto-flags approved faculty leave inside Teacher Substitution Desk',
      ],
      desktopIntegration: 'Offline leave quota ledger synced with Payroll & Timetable',
    },
    {
      id: 'mod-homework',
      category: 'academics',
      categoryLabel: 'Academics, Leave & Routine',
      title: 'Homework Diaries, Assignments & Lesson Plans',
      route: '/contact?type=demo',
      icon: FileSpreadsheet,
      kicker: 'Classroom Delivery',
      description:
        'Log unit-by-unit teacher lesson plans, daily homework schedules, and practical assignment submissions per subject and section for academic audits.',
      capabilities: [
        'Syllabus coverage tracking by chapter and teaching hours',
        'Printable weekly homework & practical work schedules',
        'Internal formative assessment marks handoff to Gradebook',
      ],
      desktopIntegration: 'Local coursework logs per academic term',
    },

    // 2. STUDENTS, STAFF & HEALTH
    {
      id: 'mod-teachers',
      category: 'students',
      categoryLabel: 'Students, Staff & Health',
      title: 'Faculty Profiles & Departmental Directory',
      route: '/teachers',
      icon: Briefcase,
      kicker: 'Human Resources',
      description:
        'Maintain comprehensive profiles for teaching and non-teaching staff including qualifications, contract terms, subject specializations, and assigned homerooms.',
      capabilities: [
        'Department-wise staffing matrix and weekly period loads',
        'Direct connection to Teacher Leave & Payroll registers',
        'Printable faculty rosters and ID credentials',
      ],
      desktopIntegration: 'Confidential staff records protected on local disk',
    },
    {
      id: 'mod-students',
      category: 'students',
      categoryLabel: 'Students & Enrollment',
      title: 'Student Directory & Multi-Tab Dossiers',
      route: '/students',
      icon: Users,
      kicker: 'Scholar Information System',
      description:
        'Comprehensive scholar dossiers with 8-digit registration numbers (YYYY####), Nepal Province/District/Local Unit mapping, previous school history, guardians, and 6-view ledger drawers.',
      capabilities: [
        '7-tab profile drawer (Personal, Timeline, Guardians, Attendance, Fees, Results, Docs)',
        'Direct partial/full fee collection modal inside student profiles',
        'Exportable student directory in CSV and print formats',
      ],
      desktopIntegration: 'Instant full-text search across thousands of scholars',
    },
    {
      id: 'mod-csv-timeline',
      category: 'students',
      categoryLabel: 'Students, Staff & Health',
      title: 'Batch CSV Import & Academic Progression Timeline',
      route: '/students',
      icon: Upload,
      kicker: 'Onboarding & History',
      description:
        'Migrate existing student rosters in batches via validated CSV templates and inspect each scholar’s chronological grade-by-grade progression timeline with historical promotion records.',
      capabilities: [
        'Validated CSV batch upload mapping names, classes, sections & guardians',
        'Multi-year Student Academic Timeline tracking grade progression & prior schools',
        'Zero manual re-typing when onboarding new institutions offline',
      ],
      desktopIntegration: 'Offline CSV importer & batch student record loader',
    },
    {
      id: 'mod-admissions',
      category: 'students',
      categoryLabel: 'Students & Enrollment',
      title: 'Campus Enrollment & Intake Register',
      route: '/admissions',
      icon: UserPlus,
      kicker: 'Internal School Intake',
      description:
        'Internal offline register for authenticated schools to record new scholar applications, diagnostic entrance test scores, and section assignments directly at the front office — zero online web forms.',
      capabilities: [
        'Unique local intake reference tracking (e.g., ENR-2082-XXXX)',
        'Stage workflow: Pending, Under Review, Interview, Enrolled',
        'Automatic roll-number assignment on local confirmation',
      ],
      desktopIntegration: '100% offline intake register stored locally on campus',
    },
    {
      id: 'mod-idcards',
      category: 'students',
      categoryLabel: 'Students & Enrollment',
      title: 'Student ID Cards Studio & Generator',
      route: '/id-cards',
      icon: QrCode,
      kicker: 'Biometric Badges',
      description:
        'Design and print high-resolution CR80 student identification cards. Includes student photo, barcode or QR code, blood group, emergency contact, and institutional crest.',
      capabilities: [
        'Batch generation for entire classes and sections in 1 click',
        'Standard 85.6mm × 54mm CR80 PVC card dimension layout',
        'Direct printing to thermal and dye-sublimation PVC card printers',
      ],
      desktopIntegration: 'Native print driver integration with PVC card machines',
    },
    {
      id: 'mod-admitcards',
      category: 'students',
      categoryLabel: 'Students & Enrollment',
      title: 'Admit Cards & Exam Hall Tickets Desk',
      route: '/admit-cards',
      icon: FileBadge,
      kicker: 'Examination Access',
      description:
        'Generate official hall tickets for Terminal Examinations, Pre-Board, and Board test sessions. Includes student photo, exam timetable schedule, roll numbers, and principal signature stamp.',
      capabilities: [
        'Fee dues verification: Flag scholars with overdue account balances',
        'Batch printing with 2 or 4 admit cards per A4 page',
        'QR verification code for exam invigilator inspection',
      ],
      desktopIntegration: 'Instant PDF generation and high-speed multi-ticket printing',
    },
    {
      id: 'mod-certificates',
      category: 'students',
      categoryLabel: 'Students & Enrollment',
      title: 'Academic Certificates Studio',
      route: '/certificates',
      icon: Award,
      kicker: 'Credentials & Credentials',
      description:
        'Issue verifiable institutional certificates: Character Certificates, Transfer Certificates (TC), Bonafide Proof, and Merit Awards with official serial number registers.',
      capabilities: [
        'Customizable templates with institutional watermark and border',
        'Audit log tracking every issued certificate and reprint count',
        'Print-ready high-resolution typographic formatting',
      ],
      desktopIntegration: 'High-resolution print-ready rendering for crisp diplomas',
    },
    {
      id: 'mod-promotions',
      category: 'students',
      categoryLabel: 'Students & Enrollment',
      title: 'Annual Academic Promotions & Roll-Over',
      route: '/promotions',
      icon: ArrowUpRight,
      kicker: 'Session Roll-Over',
      description:
        'End-of-year batch promotion wizard. Review terminal exam results and attendance criteria, then bulk promote scholars to the next grade level while archiving academic history.',
      capabilities: [
        'Conditional rules: Filter by GPA pass marks and minimum attendance',
        'Bulk class section re-allocation for the new session',
        'Complete rollback safety mechanism in case of administrative error',
      ],
      desktopIntegration: 'Crash-safe batch promotion ensuring zero data loss',
    },
    {
      id: 'mod-health',
      category: 'students',
      categoryLabel: 'Students, Staff & Health',
      title: 'Student Infirmary & Health Records',
      route: '/contact?type=demo',
      icon: HeartPulse,
      kicker: 'Medical & Safety',
      description:
        'Track campus clinic visits, annual health checkups, blood group matrices, allergy alerts, and emergency medical contacts right alongside scholar dossiers.',
      capabilities: [
        'Campus infirmary visit log with medication & rest notes',
        'Severe allergy and chronic medical flag highlights',
        'Immunization tracking and instant guardian call sheet',
      ],
      desktopIntegration: 'Private offline medical logs isolated on school hardware',
    },

    // 3. EXAMINATIONS & GRADING
    {
      id: 'mod-exams',
      category: 'examinations',
      categoryLabel: 'Examinations & Grading',
      title: 'Terminal Examination Schedules & Halls',
      route: '/examinations',
      icon: CalendarCheck,
      kicker: 'Exam Logistics',
      description:
        'Schedule First Terminal, Mid-Term, Pre-Board, and Annual Board exams. Configure subject exam dates, start/end timings, total marks, and seating room allocations.',
      capabilities: [
        'Subject-by-subject examination timetable creator',
        'Invigilator duty roster assignment',
        'Exam status workflow: Upcoming, In Progress, Grading, Published',
      ],
      desktopIntegration: 'Instant schedule broadcast across the local desktop workspace',
    },
    {
      id: 'mod-gradebook',
      category: 'examinations',
      categoryLabel: 'Examinations & Grading',
      title: 'Gradebook & Formative Marks Entry Desk',
      route: '/gradebook',
      icon: FileSpreadsheet,
      kicker: 'Teacher Scoring Grid',
      description:
        'Fast marks entry grid for subject teachers. Enter theory, practical, assignment, and terminal exam scores with automatic real-time total and letter grade conversion.',
      capabilities: [
        'Keyboard-driven rapid marks entry (arrow keys and enter)',
        'Validation rules preventing marks greater than full marks',
        'Attendance and conduct remarks input per student',
      ],
      desktopIntegration: 'Zero-latency scoring grid with instant autosave to local disk',
    },
    {
      id: 'mod-broadsheet',
      category: 'examinations',
      categoryLabel: 'Examinations & Grading',
      title: 'Master Broadsheet Compilation Matrix',
      route: '/broadsheet',
      icon: Layers,
      kicker: 'Institutional Analysis',
      description:
        'Compile multi-subject examination broadsheets for entire classes. Displays full subject breakdown, total marks obtained, GPA, class rank, and division honors in one view.',
      capabilities: [
        'Calculates Class Rank (1st, 2nd, 3rd) and Subject Toppers',
        'Pass/Fail summary statistics and grade distribution graphs',
        'Export master broadsheet to Excel (.xlsx) and printable ledger sheets',
      ],
      desktopIntegration: 'Local parallel computation calculating 1,000+ student ranks instantly',
    },
    {
      id: 'mod-reportcards',
      category: 'examinations',
      categoryLabel: 'Examinations & Grading',
      title: 'Terminal Report Cards & Transcript Generator',
      route: '/report-cards',
      icon: GraduationCap,
      kicker: 'Scholastic Transcripts',
      description:
        'Generate official progress report cards aligned with National Examination Board (NEB) standards. Includes GPA, Letter Grades, Highest Class Marks, Attendance %, and Teacher Remarks.',
      capabilities: [
        'Batch export and printing for whole classes in single PDF document',
        'Institutional branding: crest, registration numbers, and signatures',
        'Clean, audit-ready layout suitable for parents and board inspectors',
      ],
      desktopIntegration: 'Fast local print-ready formatting without cloud delays',
    },
    {
      id: 'mod-gradingscale',
      category: 'examinations',
      categoryLabel: 'Examinations & Grading',
      title: 'Grading Scales & GPA Matrix Configurator',
      route: '/grading-scale',
      icon: Sliders,
      kicker: 'Evaluation Rules',
      description:
        'Customize grading scales for your institution. Configure NEB 9-point scale (A+, A, B+, B, C+, C, D, NG), CBSE grading, or custom 4.0 GPA percentage thresholds.',
      capabilities: [
        'Percentage range boundaries (e.g. 90-100% = A+, GPA 4.0)',
        'Grade point multiplier configuration per subject credit hour',
        'Non-Graded (NG) policy flags for failed subjects',
      ],
      desktopIntegration: 'Stored in local settings and applied across all exam calculations',
    },

    // 4. FINANCE & LEDGERS
    {
      id: 'mod-fees',
      category: 'finance',
      categoryLabel: 'Student Ledgers & POS Cash',
      title: 'Student Account Ledgers & 6-View Fee Matrix',
      route: '/fees',
      icon: DollarSign,
      kicker: 'Double-Entry Accounting',
      description:
        'Itemized running ledger and monthly installment schedule per scholar. Inspect fee heads, tuition matrices, payment timelines, concession waivers, and cleared history cleanly.',
      capabilities: [
        '6-view scholar ledger desk (Ledger, Matrix, Heads, Timeline, History, Cleared)',
        'Supports partial or full settlements with live remaining due calculation',
        'Discount vouchers and need-based scholarship deductions',
      ],
      desktopIntegration: 'Verified double-entry ledger preventing duplicate billing',
    },
    {
      id: 'mod-cash',
      category: 'finance',
      categoryLabel: 'Student Ledgers & POS Cash',
      title: 'Daily Cash Counter & Denomination Day-Book',
      route: '/cash-counter',
      icon: Printer,
      kicker: 'Front-Desk Point of Sale',
      description:
        'High-speed cashier settlement terminal. Real-time cash drawer tracking, physical currency denomination tallies, opening/closing shift balancing, and instant ESC/POS thermal receipts.',
      capabilities: [
        'Direct ESC/POS 80mm and 58mm thermal receipt printing',
        'Physical cash denomination breakdown & shift variance reconciliation',
        'Automatic Day-Book journal entries synchronized with fee ledgers',
      ],
      desktopIntegration: 'Hardware serial/USB connection to thermal POS receipt printers',
    },
    {
      id: 'mod-expenses',
      category: 'finance',
      categoryLabel: 'Student Ledgers & POS Cash',
      title: 'School Expenses & Operational Finance',
      route: '/expenses',
      icon: Receipt,
      kicker: 'Institutional Outflows',
      description:
        'Track school expenditures across categories: Lab Equipment, Bus Fuel & Maintenance, Building Utilities, Event Supplies, Stationery, and Teacher Welfare.',
      capabilities: [
        'Voucher attachment and vendor invoice numbers',
        'Category-wise expenditure budgets and monthly expense summaries',
        'Cash drawer outflow sync with daily cashier registers',
      ],
      desktopIntegration: 'Instant financial balance sheets stored locally on campus',
    },
    {
      id: 'mod-payroll',
      category: 'finance',
      categoryLabel: 'Student Ledgers & POS Cash',
      title: 'Staff Payroll & Salary Payslip Generator',
      route: '/payroll',
      icon: Wallet,
      kicker: 'Faculty Compensation',
      description:
        'Monthly payroll processor for teaching and non-teaching staff. Calculates basic pay, allowances (Dearness, Housing), provident fund deductions, tax withholding, and printable payslips.',
      capabilities: [
        'Batch salary voucher generation for all faculty',
        'Printable salary slips with institutional seal and itemized perks',
        'Salary status tracker: Paid, Processing, Pending Bank Transfer',
      ],
      desktopIntegration: 'Confidential staff salary data protected 100% on local computer',
    },

    // 5. LOGISTICS, TRANSPORT, LIBRARY & HOSTEL
    {
      id: 'mod-transport',
      category: 'logistics',
      categoryLabel: 'Transport, Library & Hostel',
      title: 'Transport Management & CR80 PVC Bus Passes',
      route: '/transport',
      icon: Bus,
      kicker: 'Fleet Logistics & Safety',
      description:
        'End-to-end transport management for school bus fleets, sequential pickup/drop stops, route fee tiers, driver/conductor rosters, and Code-128 barcoded CR80 bus passes.',
      capabilities: [
        'Seat capacity enforcement preventing vehicle overbooking',
        'USB laser barcode scanner validation desk for boarding checks',
        'Vehicle maintenance logs, mileage tracking, and insurance renewals',
      ],
      desktopIntegration: 'Direct integration with USB laser barcode scanner wedges',
    },
    {
      id: 'mod-library',
      category: 'logistics',
      categoryLabel: 'Transport, Library & Hostel',
      title: 'Library Management & Barcode Circulation',
      route: '/library',
      icon: Library,
      kicker: 'Books & Research',
      description:
        'Complete library management software for school reading rooms and +2 reference halls. Catalog books by ISBN/Dewey code and process issue/return scans in seconds.',
      capabilities: [
        'Dewey Decimal, ISBN cataloging, and rack shelf indexing',
        'Student & faculty borrowing quotas with instant barcode issue/return',
        'Overdue fine calculation synced with student fee ledgers',
      ],
      desktopIntegration: 'Instant barcode scanner wedge support for hands-free book circulation',
    },
    {
      id: 'mod-hostel',
      category: 'logistics',
      categoryLabel: 'Transport, Library & Hostel',
      title: 'Hostel, Dormitory & Cafeteria Management',
      route: '/contact?type=demo',
      icon: BedDouble,
      kicker: 'Boarding Operations',
      description:
        'Manage residential boarding houses, room & bed occupancy maps, hostel warden rosters, visitor night-out logs, and recurring mess charges linked with fee ledgers.',
      capabilities: [
        'Wing, floor, room, and bed allocation with vacancy alerts',
        'Monthly mess & boarding billing synced directly to student accounts',
        'Warden night roll-call and approved leave-pass verification',
      ],
      desktopIntegration: 'Unified boarding & tuition ledger records inside campus database',
    },
    {
      id: 'mod-inventory',
      category: 'logistics',
      categoryLabel: 'Transport, Library & Hostel',
      title: 'Science & Robotics Laboratory Asset Manager',
      route: '/inventory',
      icon: FlaskConical,
      kicker: 'Laboratory & Store Inventory',
      description:
        'Catalog laboratory apparatus, chemistry reagents, sports gear, and furniture across Physics, Chemistry, Biology, and Computer laboratories.',
      capabilities: [
        'Chemical reagent expiry alerts and hazardous safety notices',
        'Equipment borrowing and faculty return logs',
        'Minimum stock threshold warnings to replenish reagents',
      ],
      desktopIntegration: 'Offline asset auditing directly from classroom laptops',
    },
    {
      id: 'mod-gatepass',
      category: 'logistics',
      categoryLabel: 'Transport, Library & Hostel',
      title: 'Campus Gate Pass & Visitor Register',
      route: '/contact?type=demo',
      icon: DoorOpen,
      kicker: 'Front-Gate Security',
      description:
        'Digitize campus gate security with guardian-verified early-dismissal scholar gate passes and timestamped visitor check-in badges printed on 80mm thermal paper.',
      capabilities: [
        'Verified guardian ID check for early student dismissal',
        'Visitor purpose log with time-in/time-out tracking',
        'Instant 80mm thermal gate slip printing',
      ],
      desktopIntegration: 'Thermal gate-pass slip printing from reception workstation',
    },
    {
      id: 'mod-notices',
      category: 'logistics',
      categoryLabel: 'Events, Transport & Library',
      title: 'Campus Announcements, Notices & Broadcast Circulars',
      route: '/notices',
      icon: Megaphone,
      kicker: 'Announcements & Bulletins',
      description:
        'Publish official campus announcements, holiday declarations, examination advisories, and emergency weather notices with priority flags (High, Medium, Normal) linked to the school calendar.',
      capabilities: [
        'Targeted audiences: All Campus, Parents, Faculty, or Specific Classes',
        'Printable bulletin notices & holiday circulars for physical campus boards',
        'Categorized local notice & announcement archive with instant PDF/print export',
      ],
      desktopIntegration: '100% offline announcement & notice desk synced with School Calendar',
    },
    {
      id: 'mod-events',
      category: 'logistics',
      categoryLabel: 'Events, Transport & Library',
      title: 'Campus Events & Auditorium Venue Scheduler',
      route: '/events',
      icon: CalendarDays,
      kicker: 'Event Coordination',
      description:
        'Plan and schedule science fairs, annual symposiums, parent-teacher conferences, and sports meets with date/time slots, auditorium venues, organizer credits, and attendee cohorts.',
      capabilities: [
        'Venue and hall allocation tracking across campus auditoriums',
        'Organizer assignment and target student/faculty cohort filters',
        'Synchronized with main institutional notices & academic calendar',
      ],
      desktopIntegration: 'Local event register accessible from Quick Create',
    },

    // 6. GOVERNANCE & OFFLINE DATABASE
    {
      id: 'mod-backup',
      category: 'governance',
      categoryLabel: 'Database, Backup & Network',
      title: 'Offline Backup Vault & USB Snapshot Desk',
      route: '/backup',
      icon: HardDrive,
      kicker: 'Data Sovereignty',
      description:
        'Complete database disaster recovery tools. Generate 1-click encrypted campus snapshots, verify cryptographic integrity checksums, and backup to USB flash drives or external drives.',
      capabilities: [
        'Instant snapshot creation with zero office downtime',
        'Restore from previous snapshots with complete safety validation',
        'Export portable backup archive or standalone school database file',
      ],
      desktopIntegration: 'Native file-system access to USB drives and local storage folders',
    },
    {
      id: 'mod-schools',
      category: 'governance',
      categoryLabel: 'Database, Backup & Network',
      title: 'Multi-School Network & Branch Management',
      route: '/schools',
      icon: Building2,
      kicker: 'Multi-Campus ERP',
      description:
        'Manage multiple campus locations or sister branches from a single installation. View aggregated scholar counts, staff directories, and academic performance across campuses.',
      capabilities: [
        'Branch-level isolation with centralized governance oversight',
        'Custom institutional codes per branch location',
        'Independent or unified fee structures and academic calendars',
      ],
      desktopIntegration: 'Unified campus architecture supporting multi-branch institutions',
    },
    {
      id: 'mod-reports',
      category: 'governance',
      categoryLabel: 'Database, Backup & Network',
      title: 'Executive Reports & Statistical Analytics',
      route: '/reports',
      icon: BarChart3,
      kicker: 'Business Intelligence',
      description:
        'Interactive administrative dashboards with charts and tables: Monthly fee collection vs overdue trends, terminal GPA distributions, attendance patterns, and staff workload ratios.',
      capabilities: [
        'Interactive visual charts (Bar, Line, and Distribution charts)',
        'Audit-ready financial statements for board meetings',
        'Export any analytics table to CSV or printable format',
      ],
      desktopIntegration: 'Smooth offline charts rendering without server lag',
    },
    {
      id: 'mod-users',
      category: 'governance',
      categoryLabel: 'Database, Backup & Network',
      title: 'Role-Based Access Control (RBAC) & Users',
      route: '/users',
      icon: ShieldCheck,
      kicker: 'Security Governance',
      description:
        'Define institutional roles: Super Admin, Principal, Cashier / Accountant, Subject Teacher, Librarian, and Transport In-Charge. Enforce granular permissions across every module.',
      capabilities: [
        'Strict privilege isolation: Cashiers cannot alter student exam marks',
        'Encrypted password protection and local credential storage',
        'Audit log tracking every user login and record modification',
      ],
      desktopIntegration: 'Strict local permission guards securing sensitive modules',
    },
    {
      id: 'mod-dashboard-overview',
      category: 'governance',
      categoryLabel: 'Analytics, Database & Search',
      title: 'Executive Dashboard & Live Campus Overview',
      route: '/dashboard',
      icon: LayoutDashboard,
      kicker: 'Principal Command View',
      description:
        'Unified administrative overview displaying live 6M/1Y/ALL enrollment growth curves, fee collection vs. expenditure trends, weekly attendance metrics, grade exam averages, and actionable faculty/invoice tables.',
      capabilities: [
        'Multi-horizon interactive visual charts (Enrollment, Finance, Attendance, Grades)',
        'Filterable inline faculty workload and overdue invoice quick-action queues',
        '1-click CSV dataset exports directly from dashboard cards',
      ],
      desktopIntegration: 'Instant local aggregation across all campus records',
    },
    {
      id: 'mod-command-search',
      category: 'governance',
      categoryLabel: 'Analytics, Database & Search',
      title: 'Cmd+K Global Search & 14-Action Quick Create Hub',
      route: '/dashboard',
      icon: Search,
      kicker: 'Keyboard Productivity',
      description:
        'Press Cmd+K (or Ctrl+K) anywhere inside the dashboard to search across students, admission numbers, faculty, and modules in milliseconds, paired with a 14-workflow Quick Create modal and unread notification bell.',
      capabilities: [
        'Instant search across scholars, registration IDs, teachers & navigation modules',
        '14-shortcut Quick Create drawer (Fees, Cash Desk, Library, Bus Pass, Substitution, USB Backup)',
        'Built-in topbar notification feed with unread badges & direct deep links',
      ],
      desktopIntegration: 'Zero-latency local search indexing across all records',
    },
    {
      id: 'mod-sqlite-console',
      category: 'governance',
      categoryLabel: 'Analytics, Database & Search',
      title: 'Database Health, Audit & Optimization Desk',
      route: '/settings',
      icon: Terminal,
      kicker: 'System Maintenance',
      description:
        'Inspect live campus record counts across departments, run read-only preset diagnostic audits, verify cross-record consistency checks, and reclaim disk space via 1-click storage compaction.',
      capabilities: [
        'Interactive record audit desk with table views & preset consistency checks',
        'Cross-record data integrity & reference consistency verification',
        '1-click storage compaction & factory demo reset guard',
      ],
      desktopIntegration: 'Direct local maintenance of your school database file',
    },
    {
      id: 'mod-profile',
      category: 'governance',
      categoryLabel: 'Analytics, Database & Search',
      title: 'Staff Profile, Password Security & Bilingual UI',
      route: '/profile',
      icon: KeyRound,
      kicker: 'Personal Governance',
      description:
        'Manage institutional user credentials, update account passwords, inspect active session metadata, toggle Light/Dark mode, and switch between English & नेपाली regional preferences.',
      capabilities: [
        'Self-service password updates & local session verification card',
        'Persistent Light/Dark workspace theme switching synced to local storage',
        'English & नेपाली (B.S. & A.D.) regional date/language preference controls',
      ],
      desktopIntegration: 'Zero-cloud local preference & credential store',
    },
    {
      id: 'mod-settings',
      category: 'governance',
      categoryLabel: 'Analytics, Database & Search',
      title: 'Institutional Branding & System Preferences',
      route: '/settings',
      icon: Settings,
      kicker: 'Custom Configuration',
      description:
        'Customize MeroSchool for your specific institution. Upload your school crest, enter official legal name and affiliation code, set default currency (Rs. NPR, INR, USD), and configure calendar standards.',
      capabilities: [
        'Branded headers on all printed fee vouchers, ID cards, and report cards',
        'Nepali Bikram Sambat (B.S.) or Gregorian (A.D.) calendar mode',
        '100% offline configuration with zero cloud or external service dependencies',
      ],
      desktopIntegration: 'Single source of truth configuration persisted in local campus settings',
    },
  ];

  const deferredQuery = useDeferredValue(searchQuery);

  const localizedModules = useMemo(() => {
    if (!isNepali) return allModules;
    return allModules.map((m) => {
      const ne = MODULES_NE[m.id];
      if (!ne) return m;
      return {
        ...m,
        categoryLabel: ne.categoryLabel,
        title: ne.title,
        kicker: ne.kicker,
        description: ne.description,
        capabilities: ne.capabilities,
        desktopIntegration: ne.desktopIntegration,
      };
    });
  }, [allModules, isNepali]);

  const filteredModules = useMemo(() => {
    const q = deferredQuery.trim().toLowerCase();
    return localizedModules.filter((m) => {
      const matchesCategory =
        activeCategory === 'all' || m.category === activeCategory;
      if (!matchesCategory) return false;
      if (!q) return true;
      const orig = allModules.find((o) => o.id === m.id);
      const ne = MODULES_NE[m.id];
      return (
        m.title.toLowerCase().includes(q) ||
        m.description.toLowerCase().includes(q) ||
        m.kicker.toLowerCase().includes(q) ||
        m.capabilities.some((c) => c.toLowerCase().includes(q)) ||
        (orig
          ? orig.title.toLowerCase().includes(q) ||
            orig.description.toLowerCase().includes(q) ||
            orig.kicker.toLowerCase().includes(q) ||
            orig.capabilities.some((c) => c.toLowerCase().includes(q))
          : false) ||
        (ne
          ? ne.title.toLowerCase().includes(q) ||
            ne.description.toLowerCase().includes(q)
          : false)
      );
    });
  }, [localizedModules, allModules, activeCategory, deferredQuery]);

  return (
    <div className="space-y-16 lg:space-y-24 pb-16">
      <SEO
        title={pick(
          'All 44 School ERP Modules & Features',
          'सबै ४४ विद्यालय मोड्युल र सुविधाहरू'
        )}
        description={pick(
          'Explore 44 offline school modules: fee ledgers, ESC/POS receipts, NEB/CBSE broadsheets, B.S./A.D. school calendar, holidays, notices, library, and USB backup.',
          '४४ अफलाइन विद्यालय मोड्युल हेर्नुहोस्: शुल्क खाता, थर्मल रसिद, NEB/CBSE ब्रोडसिट, वि.सं./ई.सं. विद्यालय पात्रो, बिदा, सूचना, पुस्तकालय र USB ब्याकअप।'
        )}
        keywords={pick(
          '44 school ERP modules, school calendar holidays notices announcements, double-entry fee ledger, NEB CBSE report cards, library barcode management, CR80 bus pass, leave management, MeroSchool',
          '४४ विद्यालय मोड्युल, विद्यालय पात्रो बिदा सूचना, विद्यार्थी शुल्क खाता, लब्धाङ्कपत्र, पुस्तकालय बारकोड, बस पास, बिदा व्यवस्थापन'
        )}
        canonicalPath="/features"
        breadcrumbs={[
          { name: pick('Home', 'गृहपृष्ठ'), path: '/' },
          { name: pick('Features', 'विशेषताहरू'), path: '/features' },
        ]}
        structuredData={{
          '@type': 'CollectionPage',
          name: pick('MeroSchool 44 Offline School Modules', 'MeroSchool ४४ अफलाइन विद्यालय मोड्युलहरू'),
          mainEntity: {
            '@type': 'ItemList',
            numberOfItems: allModules.length,
            itemListElement: allModules.slice(0, 12).map((mod, idx) => ({
              '@type': 'ListItem',
              position: idx + 1,
              name: mod.title,
              description: mod.description,
            })),
          },
        }}
      />
      {/* 1. Header Section */}
      <section className="pt-6 sm:pt-10 lg:pt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-3 sm:space-y-4">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-indigo-600 dark:text-indigo-400">
            <Monitor className="w-4 h-4 shrink-0" />
            <span>{pick('Complete Module Catalog', 'सम्पूर्ण मोड्युल सूची')}</span>
            <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
            <span className="font-mono text-xs tabular-nums">
              {allModules.length} {pick('Integrated Features', 'एकीकृत सुविधाहरू')}
            </span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.12] text-balance">
            {pick(
              'Everything Built into MeroSchool Offline Desktop ERP',
              'MeroSchool अफलाइन डेस्कटप ERP भित्र समेटिएका सम्पूर्ण सुविधाहरू'
            )}
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            {isNepali ? (
              <>
                हरेक सुविधा तपाईंको कम्प्युटरकै स्थानीय अफलाइन डेटाबेसमा पूर्ण रूपमा चल्छ। विद्यार्थी शुल्क खाता, बिदा व्यवस्थापन, पुस्तकालय लेनदेन, यातायात व्यवस्थापन, ब्रोडसिट, छात्रावास कोठा र स्थानीय ब्याकअप समेट्ने सबै {allModules.length} विशेष मोड्युलहरू हेर्नुहोस्।
              </>
            ) : (
              <>
                Every feature runs completely offline on your computer&apos;s local campus database. Explore
                all {allModules.length} specialized modules covering student fee ledgers, leave management, library circulation, transport management, broadsheets, hostel rooms, and local backups.
              </>
            )}
          </p>

          {/* On-Site Demo Invitation Banner */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-4 rounded-2xl bg-indigo-50/80 dark:bg-indigo-950/40 border border-indigo-200/80 dark:border-indigo-800/60 text-xs">
            <div className="flex flex-wrap items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
              <span className="font-semibold text-slate-900 dark:text-white">
                {isNepali
                  ? `यी सबै ${allModules.length} मोड्युलहरू विद्यालयमै प्रत्यक्ष हेर्न चाहनुहुन्छ?`
                  : `Want to see these ${allModules.length} modules live in your school?`}
              </span>
              <span className="text-slate-600 dark:text-slate-300">
                {pick(
                  'Our engineers visit your campus with demonstration laptops, USB laser barcode scanners, and 80mm thermal receipt printers.',
                  'हाम्रा इन्जिनियरहरू डेमो ल्यापटप, USB लेजर बारकोड स्क्यानर र 80mm थर्मल रसिद प्रिन्टरसहित तपाईंको विद्यालयमै आउनुहुन्छ।'
                )}
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-2 shrink-0">
              <a
                href="#receipt-simulator"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-indigo-700 dark:text-indigo-300 bg-white dark:bg-slate-900 border border-indigo-200 dark:border-indigo-800 hover:bg-indigo-50 dark:hover:bg-slate-800 transition-colors whitespace-nowrap"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>{pick('Try Receipt Simulator', 'रसिद सिमुलेटर')}</span>
              </a>
              <button
                type="button"
                onClick={() => navigate('/contact?type=demo')}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 transition-colors cursor-pointer shadow-xs whitespace-nowrap"
              >
                <span>{pick('Request Free Demo', 'निःशुल्क डेमो माग्नुहोस्')}</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Interactive Search & Category Filter Controls */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        {/* Search Bar */}
        <div className="relative max-w-lg">
          <Search className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
          <input
            type="text"
            placeholder={pick(
              'Search all 44 modules (e.g. calendar, holiday, announcement, notices, fees)...',
              'सबै ४४ मोड्युल खोज्नुहोस् (उदा. पात्रो, बिदा, घोषणा, सूचना, शुल्क)...'
            )}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-10 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-indigo-500 shadow-xs min-h-[42px]"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              aria-label={pick('Clear module search', 'खोज मेटाउनुहोस्')}
              className="absolute right-2.5 top-2.5 p-1 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Category Filter Pills (Horizontal Scrolling on Small Viewports) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 pt-1 border-b border-slate-200 dark:border-slate-800">
          {categories.map((c) => {
            const count =
              c.id === 'all'
                ? allModules.length
                : allModules.filter((m) => m.category === c.id).length;
            const isSelected = activeCategory === c.id;
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => setActiveCategory(c.id)}
                className={`whitespace-nowrap shrink-0 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-colors cursor-pointer flex items-center gap-2 min-h-[38px] ${
                  isSelected
                    ? 'bg-indigo-600 text-white font-semibold shadow-xs'
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                <span>{c.label}</span>
                <span
                  className={`px-1.5 py-0.2 rounded-full text-[10px] font-mono ${
                    isSelected
                      ? 'bg-indigo-700 text-indigo-100'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-500'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* 3. Detailed Modules Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredModules.map((m) => {
            const Icon = m.icon;
            return (
              <div
                key={m.id}
                className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-4 shadow-xs hover:border-indigo-300 dark:hover:border-indigo-700 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 text-right">
                      {m.categoryLabel}
                    </span>
                  </div>

                  <div>
                    <div className="text-[11px] font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                      {m.kicker}
                    </div>
                    <h3 className="font-display text-base font-bold text-slate-900 dark:text-white mt-0.5">
                      {m.title}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {m.description}
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
                    <div className="font-semibold text-[11px] text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                      {pick('Core Capabilities:', 'मुख्य विशेषताहरू:')}
                    </div>
                    <ul className="space-y-1 text-slate-600 dark:text-slate-400">
                      {m.capabilities.map((c, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <div className="text-[10px] font-mono text-slate-500 truncate max-w-[180px]">
                    {m.desktopIntegration}
                  </div>
                  <button
                    type="button"
                    onClick={() => navigate(`/contact?type=demo&module=${encodeURIComponent(m.title)}`)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline cursor-pointer"
                  >
                    <span>{pick('Request in Demo', 'डेमोमा हेर्नुहोस्')}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {filteredModules.length === 0 && (
          <div className="p-12 text-center rounded-2xl border border-dashed border-slate-300 dark:border-slate-700 space-y-3">
            <Search className="w-8 h-8 text-slate-400 mx-auto" />
            <h4 className="text-sm font-bold text-slate-700 dark:text-slate-300">
              {pick('No matching modules found', 'मिल्दो मोड्युल भेटिएन')}
            </h4>
            <p className="text-xs text-slate-500">
              {pick(
                'Try searching with different terms like "ledger", "exam", "attendance", or "bus".',
                'कृपया "शुल्क", "परीक्षा", "हाजिरी", वा "बस" जस्ता फरक शब्दहरू राखेर खोज्नुहोस्।'
              )}
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="px-3 py-1.5 rounded-lg bg-indigo-600 text-white text-xs font-medium cursor-pointer"
            >
              {pick('Reset Filters', 'फिल्टर रिसेट गर्नुहोस्')}
            </button>
          </div>
        )}
      </section>

      {/* 3b. Interactive School Calendar, Holidays, Announcements & Notices Showcase */}
      <SchoolCalendarShowcase />

      {/* 4. Academic Standards & Grading System Compliance */}
      <section className="perf-section max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-8 shadow-xs">
          <div className="max-w-3xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-indigo-600 dark:text-indigo-400 font-mono uppercase tracking-wider">
              <GraduationCap className="w-4 h-4" />
              <span>{pick('Standardized Examination Architecture', 'मानकीकृत परीक्षा प्रणाली')}</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
              {pick(
                'Full Compatibility with National & International Grading',
                'राष्ट्रिय तथा अन्तर्राष्ट्रिय ग्रेडिङ मापदण्डसँग पूर्ण अनुकूलता'
              )}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {pick(
                'MeroSchool’s broadsheet calculation engine is parameterized for the statutory requirements of education boards across South Asia and worldwide.',
                'MeroSchool को ब्रोडसिट गणना इन्जिन नेपाल र दक्षिण एसियाली शिक्षा बोर्डहरूको आधिकारिक मापदण्डअनुसार तयार पारिएको छ।'
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 space-y-3">
              <div className="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400 uppercase">
                {pick('Nepal NEB / SEE Standard', 'नेपाल NEB / SEE मापदण्ड')}
              </div>
              <h3 className="font-display text-sm font-bold text-slate-900 dark:text-white">
                {pick('Letter Grading (A+ to NG)', 'अक्षराङ्क पद्धति (A+ देखि NG)')}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {pick(
                  'Complies with Curriculum Development Centre (CDC) and NEB guidelines. Automatically converts combined 75% theory and 25% internal/practical marks into Grade Points (GP) and final letter grades.',
                  'पाठ्यक्रम विकास केन्द्र (CDC) र NEB निर्देशिकाअनुरूप। ७५% सैद्धान्तिक र २५% आन्तरिक/प्रयोगात्मक अंकलाई स्वतः Grade Point (GP) र अक्षराङ्क ग्रेडमा रूपान्तरण गर्दछ।'
                )}
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 space-y-3">
              <div className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase">
                {pick('CBSE & ICSE GPA Matrix', 'CBSE र ICSE GPA तालिका')}
              </div>
              <h3 className="font-display text-sm font-bold text-slate-900 dark:text-white">
                {pick('10-Point CGPA Scale', '१०-अंकीय CGPA मापदण्ड')}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {pick(
                  'Full support for formative and summative terminal assessments, scholastic grade points, positional subject ranks, and automated pass/fail credit hour thresholds.',
                  'निरन्तर तथा त्रैमासिक मूल्याङ्कन, विषयगत श्रेणी क्रम र उत्तीर्ण/अनुत्तीर्ण क्रेडिट आवर सीमाको पूर्ण समर्थन।'
                )}
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 space-y-3">
              <div className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400 uppercase">
                {pick('Traditional Percentage & Honors', 'परम्परागत प्रतिशत र डिभिजन')}
              </div>
              <h3 className="font-display text-sm font-bold text-slate-900 dark:text-white">
                {pick('Distinction & Division Ranks', 'विशिष्ट र श्रेणी विभाजन')}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {pick(
                  'Customizable mark weighting, distinction tiers (≥80%), first division (≥60%), grace mark allowances, and printable batch report cards with school crest watermarks.',
                  'अनुकूलित अंक भार, विशिष्ट श्रेणी (≥८०%), प्रथम श्रेणी (≥६०%), ग्रेस अंक सुविधा र विद्यालयको वाटरमार्कसहित ब्याच लब्धाङ्कपत्र प्रिन्टिङ।'
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Hardware Studio Intro + Interactive Thermal Receipt Simulator */}
      <section id="receipt-simulator" className="perf-section max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs">
          <div className="lg:col-span-6 space-y-3">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              {pick('Hardware Peripheral Integration', 'प्रत्यक्ष हार्डवेयर जडान')}
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
              {pick(
                'Direct USB ESC/POS Thermal Printers & Laser Barcode Scanners',
                'प्रत्यक्ष USB ESC/POS थर्मल प्रिन्टर र लेजर बारकोड स्क्यानर'
              )}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {pick(
                'Unlike cloud portals trapped behind browser print dialogs, MeroSchool talks directly to your front-office hardware: 80mm/58mm thermal cash receipt printers, CR80 PVC ID printers, and USB barcode wedges.',
                'ब्राउजरको प्रिन्ट पपअपमा अड्किने क्लाउड पोर्टलभन्दा फरक, MeroSchool सिधै तपाईंको काउन्टर हार्डवेयर—80mm/58mm थर्मल रसिद प्रिन्टर, CR80 PVC कार्ड प्रिन्टर र USB बारकोड स्क्यानरसँग जोडिन्छ।'
              )}
            </p>
          </div>
          <div className="lg:col-span-6">
            <AppImage
              src={desktopPosTerminalImg}
              alt={pick(
                'MeroSchool front-office counter equipped with an 80mm ESC/POS thermal receipt printer, USB laser barcode scanner, and laminated student ID card',
                '80mm ESC/POS थर्मल रसिद प्रिन्टर, USB लेजर बारकोड स्क्यानर र विद्यार्थी परिचयपत्र सहितको MeroSchool काउन्टर'
              )}
              aspectClass="aspect-[4/3]"
              caption={pick(
                'Turnkey counter setup verified during every on-site campus demonstration.',
                'हरेक प्रत्यक्ष विद्यालय डेमोमा परीक्षण गरिने सम्पूर्ण काउन्टर सेटअप।'
              )}
            />
          </div>
        </div>

        <Suspense
          fallback={
            <div className="h-[520px] rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 flex items-center justify-center text-xs font-mono text-slate-500">
              {pick('Loading interactive ESC/POS receipt simulator...', 'अन्तरक्रियात्मक ESC/POS रसिद सिमुलेटर लोड हुँदैछ...')}
            </div>
          }
        >
          <ThermalReceiptSimulator />
        </Suspense>
      </section>

      <DeliverablesAndOnboardingSection />

      <ArchitectureComparisonSection totalModules={allModules.length} />
    </div>
  );
};
