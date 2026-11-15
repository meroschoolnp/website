import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, ShieldCheck, CheckCircle, Monitor, HardDrive } from 'lucide-react';
import { SCHOOL_CONTACT } from '@/src/config/contactInfo';
import { SEO } from '@/src/components/SEO';
import { useLanguage } from '@/src/context/LanguageContext';

export const TermsOfServicePage: React.FC = () => {
  const { isNepali, pick } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 space-y-8 sm:space-y-10">
      <SEO
        title={pick(
          'Desktop Software License & Terms',
          'डेस्कटप सफ्टवेयर इजाजतपत्र र सर्त'
        )}
        description={pick(
          'Review the perpetual desktop license, offline usage rights, 100% school data ownership, and backup terms for MeroSchool on Windows, Linux, and macOS.',
          'Windows, Linux र macOS का लागि MeroSchool डेस्कटप ईआरपीको स्थायी सफ्टवेयर इजाजतपत्र, अफलाइन सञ्चालन अधिकार र स्थानीय डेटाबेस स्वामित्वका सर्तहरू पढ्नुहोस्।'
        )}
        keywords={pick(
          'MeroSchool license terms, perpetual school software license, offline school ERP terms, campus database ownership agreement',
          'MeroSchool इजाजतपत्र सर्त, स्थायी विद्यालय सफ्टवेयर इजाजतपत्र, अफलाइन ईआरपी सम्झौता'
        )}
        canonicalPath="/terms"
        breadcrumbs={[
          { name: pick('Home', 'गृहपृष्ठ'), path: '/' },
          { name: pick('Terms of Service', 'सेवाका सर्तहरू'), path: '/terms' },
        ]}
        structuredData={{
          '@type': 'WebPage',
          name: pick('MeroSchool Desktop Software License Agreement', 'MeroSchool डेस्कटप सफ्टवेयर इजाजतपत्र सम्झौता'),
          inLanguage: isNepali ? 'ne' : 'en',
        }}
      />
      {/* Header */}
      <div className="space-y-3 border-b border-slate-200 dark:border-slate-800 pb-6">
        <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-indigo-600 dark:text-indigo-400">
          <FileText className="w-4 h-4 shrink-0" />
          <span>{pick('Desktop Software License & Terms of Service', 'डेस्कटप सफ्टवेयर इजाजतपत्र र सेवाका सर्तहरू')}</span>
        </div>
        <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white text-balance">
          {pick('MeroSchool Desktop Software License Agreement', 'MeroSchool डेस्कटप सफ्टवेयर इजाजतपत्र सम्झौता')}
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
          {isNepali
            ? `संस्करण v${SCHOOL_CONTACT.version} · विश्वव्यापी डेस्कटप संस्करण (Windows, Linux, macOS)।`
            : `Release v${SCHOOL_CONTACT.version} · Universal Desktop Edition (Windows, Linux, macOS).`}
        </p>
      </div>

      {/* Content */}
      <div className="space-y-8 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-base font-bold text-slate-900 dark:text-white">
            {pick('1. Software License Grant & Installation Rights', '१. सफ्टवेयर इजाजतपत्र र जडान अधिकार')}
          </h2>
          <p>
            {pick(
              'MeroSchool grants your educational institution a non-exclusive, perpetual license to install, activate, and execute the MeroSchool desktop software on desktop and laptop computers located on your campus premises across Windows, Linux, and macOS operating systems.',
              'MeroSchool ले तपाईंको शैक्षिक संस्थालाई विद्यालय परिसरभित्र रहेका Windows, Linux र macOS डेस्कटप तथा ल्यापटप कम्प्युटरहरूमा MeroSchool डेस्कटप सफ्टवेयर जडान, सक्रिय र सञ्चालन गर्ने स्थायी अधिकार प्रदान गर्दछ।'
            )}
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-bold text-slate-900 dark:text-white">
            {pick('2. Local Database & Institutional Data Ownership', '२. स्थानीय डेटाबेस र संस्थागत डेटा स्वामित्व')}
          </h2>
          <p>
            {pick(
              "You retain 100% unrestricted ownership of your institution's local campus database files, student profiles, exam broadsheets, and financial ledgers. MeroSchool claims zero proprietary ownership over records entered into the desktop application.",
              'विद्यालयको स्थानीय डेटाबेस फाइल, विद्यार्थी विवरण, परीक्षा ब्रोडसिट र आर्थिक खातामाथि तपाईंको १००% स्वतन्त्र स्वामित्व रहन्छ। डेस्कटप सफ्टवेयरमा प्रविष्ट गरिएका विवरणमाथि MeroSchool को कुनै स्वामित्व दाबी रहँदैन।'
            )}
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-bold text-slate-900 dark:text-white">
            {pick('3. Offline Autonomy & Zero Cloud Dependency', '३. अफलाइन स्वायत्तता र शून्य क्लाउड निर्भरता')}
          </h2>
          <p>
            {pick(
              'The software is engineered to operate without external network connectivity. You are not required to maintain an active internet connection to process fees, record daily attendance, print CR80 PVC passes, or compile report cards.',
              'यो सफ्टवेयर बाहिरी नेटवर्क बिना नै चल्ने गरी तयार गरिएको छ। शुल्क संकलन, दैनिक हाजिरी, CR80 PVC कार्ड छपाइ वा लब्धाङ्कपत्र तयार पार्न सक्रिय इन्टरनेट अनिवार्य छैन।'
            )}
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-bold text-slate-900 dark:text-white">
            {pick('4. Backup & Disaster Recovery Responsibility', '४. ब्याकअप र डेटा सुरक्षा दायित्व')}
          </h2>
          <p>
            {isNepali ? (
              <>
                MeroSchool ले विद्यालयको डेटा बाहिरी क्लाउड सर्भरमा नराख्ने भएकाले स्थानीय अफलाइन
                डेटाबेसको नियमित ब्याकअप राख्ने दायित्व विद्यालय स्वयंको हुनेछ। USB वा स्थानीय ड्राइभमा सुरक्षित
                कपी राख्न सफ्टवेयरभित्रै १-क्लिक स्न्यापसट टुल उपलब्ध छ।
              </>
            ) : (
              <>
                Because MeroSchool does not store your school’s data on remote cloud servers, your
                institution is responsible for maintaining regular backups of your local offline
                campus database. The software provides built-in 1-click snapshot export tools to assist you in saving
                copies to USB flash drives or local network backup drives.
              </>
            )}
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-bold text-slate-900 dark:text-white">
            {pick('5. Technical Support & Contact', '५. प्राविधिक सहायता र सम्पर्क')}
          </h2>
          <p>
            {isNepali ? (
              <>
                सफ्टवेयर जडान सहायता र अद्यावधिक सहयोग MeroSchool इन्जिनियरिङ टोलीले प्रदान गर्दछ।
                सम्पर्कका लागि{' '}
                <a
                  href={`mailto:${SCHOOL_CONTACT.email}`}
                  className="text-indigo-600 font-mono font-bold underline"
                >
                  {SCHOOL_CONTACT.email}
                </a>{' '}
                वा {SCHOOL_CONTACT.phonesDisplay} मा सम्पर्क गर्नुहोस्।
              </>
            ) : (
              <>
                Software deployment assistance, bug fixes, and feature updates are provided by the
                MeroSchool engineering team. For inquiries, contact{' '}
                <a
                  href={`mailto:${SCHOOL_CONTACT.email}`}
                  className="text-indigo-600 font-mono font-bold underline"
                >
                  {SCHOOL_CONTACT.email}
                </a>{' '}
                or call {SCHOOL_CONTACT.phonesDisplay}.
              </>
            )}
          </p>
          <div className="pt-2 flex flex-wrap gap-3 text-xs font-semibold">
            <Link to="/privacy" className="text-indigo-600 dark:text-indigo-400 hover:underline">
              {pick('Read Privacy & Data Sovereignty Policy →', 'गोपनीयता र डेटा स्वामित्व नीति पढ्नुहोस् →')}
            </Link>
            <Link to="/contact?type=demo" className="text-slate-600 dark:text-slate-300 hover:underline">
              {pick('Request Free Campus Demo →', 'निःशुल्क विद्यालय डेमो माग गर्नुहोस् →')}
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};
