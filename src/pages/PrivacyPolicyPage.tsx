import React from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, HardDrive, Database } from "lucide-react";
import { SCHOOL_CONTACT } from "@/src/config/contactInfo";
import { SEO } from "@/src/components/SEO";
import { useLanguage } from "@/src/context/LanguageContext";

export const PrivacyPolicyPage: React.FC = () => {
  const { isNepali, pick } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 space-y-8 sm:space-y-10">
      <SEO
        title={pick(
          "Offline Privacy & Data Ownership",
          "अफलाइन गोपनीयता र डेटा स्वामित्व",
        )}
        description={pick(
          "MeroSchool stores all student, exam, and financial records locally on your campus computer with zero cloud servers, zero telemetry, and complete school ownership.",
          "MeroSchool ले सम्पूर्ण विद्यार्थी, परीक्षा र आर्थिक विवरण बिना क्लाउड सर्भर र टेलिमेट्री तपाईंको विद्यालयकै कम्प्युटरमा पूर्ण स्वामित्वसहित सुरक्षित राख्दछ।",
        )}
        keywords={pick(
          "MeroSchool privacy policy, offline school data ownership, zero telemetry school ERP, local campus database privacy, student record security",
          "MeroSchool गोपनीयता नीति, अफलाइन विद्यालय डेटा स्वामित्व, स्थानीय डेटाबेस सुरक्षा",
        )}
        canonicalPath="/privacy"
        breadcrumbs={[
          { name: pick("Home", "गृहपृष्ठ"), path: "/" },
          { name: pick("Privacy Policy", "गोपनीयता नीति"), path: "/privacy" },
        ]}
        structuredData={{
          "@type": "WebPage",
          name: pick(
            "MeroSchool Desktop Software Privacy Policy",
            "MeroSchool डेस्कटप सफ्टवेयर गोपनीयता नीति",
          ),
          inLanguage: isNepali ? "ne" : "en",
        }}
      />
      {/* Header */}
      <div className="space-y-3 border-b border-slate-200 dark:border-slate-800 pb-6">
        <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-indigo-600 dark:text-indigo-400">
          <ShieldCheck className="w-4 h-4 shrink-0" />
          <span>
            {pick(
              "Desktop Software Privacy & Data Sovereignty Guarantee",
              "डेस्कटप सफ्टवेयर गोपनीयता र डेटा स्वामित्व ग्यारेन्टी",
            )}
          </span>
        </div>
        <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white text-balance">
          {pick(
            "MeroSchool Desktop Software Privacy Policy",
            "MeroSchool डेस्कटप सफ्टवेयर गोपनीयता नीति",
          )}
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
          {isNepali
            ? `संस्करण ${SCHOOL_CONTACT.version} · अफलाइन डेस्कटप संस्करण (Windows, Linux, macOS)।`
            : `Version ${SCHOOL_CONTACT.version} · Offline Desktop Edition (Windows, Linux, macOS).`}
        </p>
      </div>

      {/* Policy Clauses */}
      <div className="space-y-8 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <HardDrive className="w-4 h-4 text-emerald-500" />
            <span>
              {pick(
                "1. 100% Offline-First Architecture & Zero Data Harvesting",
                "१. १००% अफलाइन संरचना र शून्य डेटा संकलन",
              )}
            </span>
          </h2>
          {isNepali ? (
            <>
              <p>
                MeroSchool एक १००% अफलाइन डेस्कटप सफ्टवेयर हो। बाहिरी सर्भरमा
                विद्यार्थी अभिलेख राख्ने अनलाइन पोर्टलभन्दा फरक, MeroSchool ले{" "}
                <strong>
                  सम्पूर्ण विद्यार्थी विवरण, हाजिरी लग, परीक्षा अंक र आर्थिक
                  कारोबार सफ्टवेयर जडान गरिएको स्थानीय कम्प्युटर वा विद्यालयकै
                  नेटवर्क ड्राइभमा मात्र सुरक्षित राख्दछ।
                </strong>
              </p>
              <p>
                MeroSchool विकास टोलीले{" "}
                <strong>
                  कुनै पनि बाहिरी निगरानी सर्भर, एनालिटिक्स ट्र्याकर वा
                  टेलिमेट्री
                </strong>{" "}
                सञ्चालन गर्दैन। तपाईंको संस्थाको डेटा कहिल्यै कम्प्युटर बाहिर
                जाँदैन।
              </p>
            </>
          ) : (
            <>
              <p>
                MeroSchool is a 100% offline desktop application. Unlike
                cloud-based SaaS school portals that store student records on
                remote servers, MeroSchool stores{" "}
                <strong>
                  all student demographic information, attendance logs, exam
                  marks, and financial transactions strictly on the local
                  machine or campus network drive where it is installed.
                </strong>
              </p>
              <p>
                The MeroSchool development team operates{" "}
                <strong>
                  no remote surveillance servers, analytics trackers, or
                  telemetry backdoors.
                </strong>{" "}
                Your institutional data never leaves your computer.
              </p>
            </>
          )}
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Database className="w-4 h-4 text-indigo-600" />
            <span>
              {pick(
                "2. Local Database Ownership",
                "२. स्थानीय डेटाबेस स्वामित्व",
              )}
            </span>
          </h2>
          <p>
            {pick(
              "All application data is recorded in a crash-safe local campus database built for concurrency and fault tolerance. As the school administrator, you hold complete, unencumbered ownership of this database:",
              "सबै विवरण सुरक्षित र विद्युत अवरोध सहन सक्ने स्थानीय अफलाइन डेटाबेसमा राखिन्छ। विद्यालय प्रशासकका रूपमा यस डेटाबेसमाथि तपाईंको पूर्ण स्वामित्व रहन्छ:",
            )}
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
            {isNepali ? (
              <>
                <li>
                  तपाईं जुनसुकै बेला सुरक्षित ब्याकअप फाइल USB पेनड्राइभमा कपी
                  गर्न सक्नुहुन्छ।
                </li>
                <li>
                  अतिरिक्त शुल्क बिना नै स्थानीय ब्याकअप लिन वा नयाँ कम्प्युटरमा
                  सार्न सकिन्छ।
                </li>
                <li>
                  कुनै बाहिरी कम्पनीले तपाईंको शैक्षिक वा आर्थिक अभिलेख रोक्न
                  सक्दैन।
                </li>
              </>
            ) : (
              <>
                <li>
                  You can copy or duplicate your encrypted backup file onto USB
                  flash drives anytime.
                </li>
                <li>
                  You can run automated local scheduled backups or migrate to
                  new computer hardware without paying export fees.
                </li>
                <li>
                  No external party or vendor can hold your academic transcripts
                  or ledger history hostage.
                </li>
              </>
            )}
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-bold text-slate-900 dark:text-white">
            {pick(
              "3. Zero Cloud Support & 100% Offline Dashboard Activity",
              "३. शून्य क्लाउड सपोर्ट र १००% अफलाइन ड्यासबोर्ड सञ्चालन",
            )}
          </h2>
          {isNepali ? (
            <>
              <p>
                MeroSchool बहु-संस्थागत प्लेटफर्म हो जहाँ सुपर एडमिनले विद्यालय
                खाता तयार गरिदिन्छ र विद्यालयकै हार्डवेयरमा लगइन गरिन्छ। लगइन
                गरिसकेपछि{" "}
                <strong>
                  ड्यासबोर्डका कुनै पनि कार्यमा क्लाउड सर्भर, बाहिरी SMS गेटवे
                  वा अनलाइन भुक्तानी प्रणाली प्रयोग हुँदैन
                </strong>
                :
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
                <li>
                  सम्पूर्ण शुल्क संकलन, हाजिरी, ब्रोडसिट र प्रतिवेदन पूर्ण रूपमा
                  अफलाइन चल्दछन्।
                </li>
                <li>
                  दैनिक सञ्चालनका क्रममा कुनै पृष्ठभूमि इन्टरनेट जडान प्रयोग
                  हुँदैन।
                </li>
                <li>
                  MeroSchool सर्भरले विद्यालयको दैनिक अभिलेख भण्डारण वा अध्ययन
                  गर्दैन।
                </li>
              </ul>
            </>
          ) : (
            <>
              <p>
                MeroSchool is a multi-institution platform where school accounts
                are provisioned by Super Admin and signed into on local school
                hardware. Once logged in,{" "}
                <strong>
                  zero dashboard activity uses cloud servers, external SMS
                  gateways, or online payment processors
                </strong>
                :
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
                <li>
                  All fee collections, attendance registers, broadsheets, and
                  reports run strictly offline.
                </li>
                <li>
                  No background internet connections or external server
                  transmissions occur during operation.
                </li>
                <li>
                  MeroSchool servers never store, intercept, sync, or broker
                  your school’s operational records.
                </li>
              </ul>
            </>
          )}
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-bold text-slate-900 dark:text-white">
            {pick(
              "4. Absolute Prohibition on Data Commercialization",
              "४. डेटाको व्यावसायिक प्रयोगमा पूर्ण निषेध",
            )}
          </h2>
          <p>
            {pick(
              "Because MeroSchool does not collect student, parent, or financial records, it is technically impossible for us to sell, lease, monetize, or disclose student data to commercial advertising networks, ed-tech brokers, or marketing entities.",
              "MeroSchool ले विद्यार्थी, अभिभावक वा आर्थिक विवरण संकलन नै नगर्ने भएकाले हामीबाट त्यस्ता विवरण बिक्री, भाडा वा विज्ञापन प्रयोजनका लागि कसैलाई उपलब्ध गराइने कुनै सम्भावना रहँदैन।",
            )}
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-bold text-slate-900 dark:text-white">
            {pick(
              "5. Hardware & Peripheral Access",
              "५. हार्डवेयर र उपकरण पहुँच",
            )}
          </h2>
          <p>
            {pick(
              "MeroSchool interacts natively with connected desktop peripherals (USB barcode laser scanners, webcams for scholar ID card photo capture, and ESC/POS thermal printers) exclusively when you initiate relevant actions inside the application. No audio, video, or scan stream is ever broadcast to any network.",
              "तपाईंले सम्बन्धित कार्य सुरु गर्दा मात्र MeroSchool ले कम्प्युटरमा जोडिएका USB बारकोड स्क्यानर, वेबक्याम र थर्मल प्रिन्टरसँग स्थानीय रूपमा समन्वय गर्दछ। कुनै पनि अडियो, भिडियो वा स्क्यान नेटवर्कमा पठाइँदैन।",
            )}
          </p>
        </section>

        <section className="space-y-3 pt-4 border-t border-slate-200 dark:border-slate-800">
          <h2 className="text-base font-bold text-slate-900 dark:text-white">
            {pick(
              "6. Technical Privacy & Governance Inquiries",
              "६. गोपनीयता र सुरक्षासम्बन्धी सम्पर्क",
            )}
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            {pick(
              "For questions regarding software security, offline verification, or data policies:",
              "सफ्टवेयर सुरक्षा, अफलाइन प्रमाणीकरण वा गोपनीयता नीतिसम्बन्धी जिज्ञासाका लागि:",
            )}
          </p>
          <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 font-mono text-xs space-y-1">
            <div>
              {pick(
                "MeroSchool Desktop Software Team",
                "MeroSchool डेस्कटप सफ्टवेयर टोली",
              )}
            </div>
            <div>
              {pick(
                SCHOOL_CONTACT.address.full,
                "वडा नं. ४, बालुवाटार, काठमाडौं, बागमती प्रदेश, नेपाल",
              )}
            </div>
            <div>
              {pick("Email:", "इमेल:")}{" "}
              <a
                href={`mailto:${SCHOOL_CONTACT.email}`}
                className="text-indigo-600 dark:text-indigo-400 hover:underline"
              >
                {SCHOOL_CONTACT.email}
              </a>{" "}
              · {pick("Phone:", "फोन:")}{" "}
              <a
                href={`tel:${SCHOOL_CONTACT.phone}`}
                className="hover:underline"
              >
                {SCHOOL_CONTACT.phone}
              </a>
            </div>
          </div>
          <div className="pt-2 flex flex-wrap gap-3 text-xs font-semibold">
            <Link
              to="/terms"
              className="text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              {pick(
                "Read License & Terms of Service →",
                "इजाजतपत्र र सेवाका सर्तहरू पढ्नुहोस् →",
              )}
            </Link>
            <Link
              to="/contact?type=support"
              className="text-slate-600 dark:text-slate-300 hover:underline"
            >
              {pick("Contact Support Desk →", "सहायता डेस्कमा सम्पर्क →")}
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};
