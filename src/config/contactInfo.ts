/**
 * Centralized Contact, Architecture & Desktop Distribution Information
 * MeroSchool is a fully offline desktop app (Windows, Linux, macOS)
 * built with React, Tauri, and SQLite.
 */

export const SCHOOL_CONTACT = {
  // Software Identity & Desktop Specifications
  appName: 'MeroSchool',
  institutionName: 'MeroSchool',
  fullName: 'MeroSchool Desktop ERP',
  shortName: 'MeroSchool',
  tagline: 'Modern, Offline-First Desktop School Management System for Windows, Linux & macOS',
  descriptor: 'Fully offline school management desktop software built with React, Tauri, and SQLite',
  version: '2.4.0',
  license: 'Perpetual Institutional / On-Premise',
  techStack: {
    frontend: 'React 19 & Tailwind CSS',
    desktopRuntime: 'Tauri v2 (Rust Native Core)',
    databaseEngine: 'Embedded SQLite (WAL Mode)',
    platforms: ['Windows 10/11 (x64/ARM64)', 'macOS (Apple Silicon & Intel)', 'Linux (Debian/Ubuntu/Fedora/Arch)'],
  },

  // Centralized Support & Vendor Email
  email: 'meroschool.np@gmail.com',

  // Departmental Email Directory for Software Assistance
  emails: {
    primary: 'meroschool.np@gmail.com',
    info: 'meroschool.np@gmail.com',
    support: 'meroschool.np@gmail.com',
    sales: 'meroschool.np@gmail.com',
    principal: 'meroschool.np@gmail.com',
    accounts: 'meroschool.np@gmail.com',
    privacy: 'meroschool.np@gmail.com',
  },

  // Software Support & Deployment Helplines
  phone: '+977-1-4412890',
  phoneAlt: '+977-1-4412891',
  phoneMobile: '+977-9841234567',
  phoneHotline: '+977-1-4412890 (Ext. 101 / 102)',
  phonesDisplay: '+977-1-4412890 / +977-9841234567',

  // Desktop Software Team Extensions
  extensions: [
    { department: 'Desktop Installation & Setup', ext: '101', phone: '+977-1-4412890' },
    { department: 'Technical Support & Local LAN', ext: '102', phone: '+977-1-4412890' },
    { department: 'Custom Modules & School Onboarding', ext: '103', phone: '+977-1-4412891' },
    { department: 'Accounts & Institutional Licensing', ext: '104', phone: '+977-1-4412891' },
    { department: 'Direct Mobile Hotline', ext: 'Mob', phone: '+977-9841234567' },
  ],

  // Technology Headquarters Coordinates
  address: {
    street: 'Ward No. 4, Baluwatar',
    city: 'Kathmandu',
    province: 'Bagmati Province',
    country: 'Nepal',
    landmark: 'Baluwatar Tech Corridor',
    full: 'Ward No. 4, Baluwatar, Kathmandu, Bagmati Province, Nepal',
  },

  // Support & Development Desk Hours
  hours: {
    weekdays: 'Sunday – Friday: 8:00 AM – 6:00 PM (NPT)',
    cashCounter: 'Sunday – Friday: 9:00 AM – 5:00 PM',
    assemblyTime: '9:00 AM',
    classDismissal: '5:00 PM',
    coCurricularDismissal: '6:00 PM',
    saturday: 'Emergency Offline Support via Email',
  },

  // Desktop Native Installers & Releases
  downloads: {
    windows: {
      os: 'Windows 10 / 11 (64-bit)',
      msi: 'MeroSchool_2.4.0_x64_en-US.msi',
      exe: 'MeroSchool-Setup-2.4.0.exe',
      size: '14.8 MB',
      recommended: true,
      arch: 'x64 & ARM64',
    },
    mac: {
      os: 'macOS 11.0+ (Big Sur, Monterey, Ventura, Sonoma, Sequoia)',
      dmg: 'MeroSchool_2.4.0_universal.dmg',
      size: '16.4 MB',
      recommended: false,
      arch: 'Apple Silicon (M1/M2/M3/M4) & Intel',
    },
    linux: {
      os: 'Linux (Ubuntu, Debian, Fedora, Arch, openSUSE)',
      deb: 'meroschool_2.4.0_amd64.deb',
      appImage: 'MeroSchool-2.4.0.AppImage',
      size: '15.2 MB',
      recommended: false,
      arch: 'x86_64 / amd64',
    },
  },

  // Legacy compatibility fields
  schoolCode: 'MS-SCHOOL-01',
  affiliation: 'National Examination Board (NEB)',
  foundedYearBS: 2042,
  foundedYearAD: 1985,
  website: 'https://meroschool.pages.dev',
  canonicalUrl: 'https://meroschool.pages.dev',
} as const;

export type SchoolContactInfo = typeof SCHOOL_CONTACT;
