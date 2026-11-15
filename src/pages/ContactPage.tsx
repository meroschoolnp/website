import React, { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { toast } from "sonner";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  ChevronDown,
} from "lucide-react";
import { SCHOOL_CONTACT } from "@/src/config/contactInfo";
import { SEO } from "@/src/components/SEO";
import { useLanguage } from "@/src/context/LanguageContext";
import {
  TOPIC_CONFIGS,
  CONTACT_FAQS,
  InquiryTopic,
} from "@/src/data/contactData";

const isValidEmail = (value: string): boolean =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
const isValidPhone = (value: string): boolean =>
  value.replace(/\D/g, "").length >= 7;

const resolveInitialTopic = (params: URLSearchParams): InquiryTopic => {
  const type = params.get("type");
  const mode = params.get("mode");
  if (type === "support") return "support";
  if (type === "demo" || params.get("demo") === "true") {
    return mode === "video" ? "video_demo" : "onsite_demo";
  }
  return "general";
};

export const ContactPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const { isNepali, pick } = useLanguage();

  const [contactForm, setContactForm] = useState({
    topic: resolveInitialTopic(searchParams) as InquiryTopic,
    fullName: "",
    schoolName: "",
    phone: "",
    email: "",
    message: "",
  });

  const [submittedRef, setSubmittedRef] = useState<string | null>(null);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);
  const [formErrors, setFormErrors] = useState<{
    phone?: string;
    email?: string;
  }>({});

  useEffect(() => {
    const type = searchParams.get("type");
    if (
      type === "support" ||
      type === "demo" ||
      searchParams.get("demo") === "true"
    ) {
      setContactForm((prev) => ({
        ...prev,
        topic: resolveInitialTopic(searchParams),
      }));
    }
  }, [searchParams]);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !contactForm.fullName.trim() ||
      !contactForm.phone.trim() ||
      !contactForm.message.trim()
    ) {
      toast.error(
        pick(
          "Please fill in your name, phone number, and message.",
          "कृपया तपाईंको नाम, फोन नम्बर र सन्देश भर्नुहोस्।",
        ),
      );
      return;
    }

    const errors: { phone?: string; email?: string } = {};
    if (!isValidPhone(contactForm.phone)) {
      errors.phone = pick(
        "Enter a valid 7+ digit mobile or landline number.",
        "मान्य ७+ अंकको मोबाइल वा ल्यान्डलाइन नम्बर लेख्नुहोस्।",
      );
    }
    if (contactForm.email.trim() && !isValidEmail(contactForm.email)) {
      errors.email = pick(
        "Enter a valid email address (e.g. name@school.edu.np).",
        "मान्य इमेल ठेगाना लेख्नुहोस् (जस्तै: name@school.edu.np)।",
      );
    }
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      toast.error(
        pick(
          "Please check the highlighted contact details.",
          "कृपया रातो चिन्ह लगाइएका विवरण जाँच गर्नुहोस्।",
        ),
      );
      return;
    }
    setFormErrors({});

    const selected = TOPIC_CONFIGS[contactForm.topic];
    const refNo = `${selected.prefix}-${Math.floor(10000 + Math.random() * 90000)}`;

    try {
      const stored = JSON.parse(
        localStorage.getItem("meroschool_website_enquiries") || "[]",
      );
      stored.unshift({
        referenceNo: refNo,
        type: selected.type,
        schoolName: contactForm.schoolName.trim() || "General Inquiry",
        contactPerson: contactForm.fullName.trim(),
        role: "Contact Inquiry",
        phone: contactForm.phone.trim(),
        email: contactForm.email.trim() || "inquiry@school.edu.np",
        city: "Nepal",
        message: `[${selected.label}] ${contactForm.message.trim()}`,
        submittedAt: new Date().toISOString(),
      });
      localStorage.setItem(
        "meroschool_website_enquiries",
        JSON.stringify(stored.slice(0, 50)),
      );
    } catch {
      // Local storage fallback
    }

    setSubmittedRef(refNo);
    toast.success(
      pick(
        "Thank you! Your message has been received.",
        "धन्यवाद! तपाईंको सन्देश प्राप्त भएको छ।",
      ),
    );
  };

  const faqs = useMemo(
    () =>
      CONTACT_FAQS.map((f) => ({
        q: isNepali ? f.qNe : f.qEn,
        a: isNepali ? f.aNe : f.aEn,
      })),
    [isNepali]
  );

  return (
    <div className="space-y-16 lg:space-y-24 pb-16">
      <SEO
        title={pick(
          "Book Free Demo & Contact Desk",
          "निःशुल्क डेमो र सम्पर्क डेस्क",
        )}
        description={pick(
          "Book a 100% free on-site campus demo or video walkthrough of MeroSchool offline desktop ERP. Call our Kathmandu desk or email meroschool.np@gmail.com.",
          "१००% निःशुल्क विद्यालय डेमो वा प्रत्यक्ष भिडियो डेमो बुक गर्नुहोस्। काठमाडौं डेस्कमा फोन वा meroschool.np@gmail.com मा इमेल गर्नुहोस्।",
        )}
        keywords={pick(
          "MeroSchool contact, book school ERP demo, free campus walkthrough Kathmandu, school software support email, offline ERP demo Nepal",
          "MeroSchool सम्पर्क, निःशुल्क विद्यालय डेमो, विद्यालय सफ्टवेयर सहायता, अफलाइन ईआरपी डेमो",
        )}
        canonicalPath="/contact"
        breadcrumbs={[
          { name: pick("Home", "गृहपृष्ठ"), path: "/" },
          { name: pick("Contact & Demo", "सम्पर्क र डेमो"), path: "/contact" },
        ]}
        structuredData={[
          {
            "@type": "ContactPage",
            name: pick(
              "Contact & Demo Desk — MeroSchool",
              "सम्पर्क तथा डेमो डेस्क — MeroSchool",
            ),
            inLanguage: isNepali ? "ne" : "en",
            mainEntity: {
              "@type": "Organization",
              name: SCHOOL_CONTACT.appName,
              email: SCHOOL_CONTACT.email,
              telephone: SCHOOL_CONTACT.phone,
              address: {
                "@type": "PostalAddress",
                streetAddress: SCHOOL_CONTACT.address.street,
                addressLocality: SCHOOL_CONTACT.address.city,
                addressRegion: SCHOOL_CONTACT.address.province,
                addressCountry: "NP",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: SCHOOL_CONTACT.phoneMobile,
                email: SCHOOL_CONTACT.email,
                contactType: "customer support",
                availableLanguage: ["English", "Nepali"],
              },
            },
          },
          {
            "@type": "FAQPage",
            inLanguage: isNepali ? "ne" : "en",
            mainEntity: faqs.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.a,
              },
            })),
          },
        ]}
      />
      {/* 1. Header */}
      <section className="pt-6 sm:pt-10 lg:pt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-3 sm:space-y-4">
          <div className="text-xs sm:text-sm font-semibold text-indigo-600 dark:text-indigo-400">
            {pick("Contact & Demo Desk", "सम्पर्क तथा डेमो डेस्क")}
          </div>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.12] text-balance">
            {pick(
              "Get in Touch with MeroSchool",
              "MeroSchool टोलीसँग सम्पर्क गर्नुहोस्",
            )}
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            {isNepali ? (
              <>
                निःशुल्क विद्यालय डेमो (थर्मल प्रिन्टर र बारकोड स्क्यानरसहित),
                प्राविधिक सहायता वा सामान्य जानकारीका लागि हामीलाई सन्देश
                पठाउनुहोस्।
              </>
            ) : (
              <>
                Send us a quick message for a free campus demo (with thermal
                printers & barcode scanners), technical assistance, or any
                general question about MeroSchool.
              </>
            )}
          </p>
        </div>
      </section>

      {/* 2. Contact Details & General Contact Form (Horizontal Split on Desktop) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Contact Details */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-start gap-4 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="min-w-0 flex-1 space-y-1">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  {pick("Software HQ", "मुख्य कार्यालय")}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {pick(
                    SCHOOL_CONTACT.address.full,
                    "वडा नं. ४, बालुवाटार, काठमाडौं, बागमती प्रदेश, नेपाल",
                  )}
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-start gap-4 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div className="min-w-0 flex-1 space-y-1">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  {pick("Demo Helplines", "डेमो तथा सहायता फोन")}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-mono break-words">
                  <a
                    href={`tel:${SCHOOL_CONTACT.phone}`}
                    className="hover:underline block"
                  >
                    {SCHOOL_CONTACT.phone}
                  </a>
                  <a
                    href={`tel:${SCHOOL_CONTACT.phoneMobile}`}
                    className="hover:underline font-bold text-emerald-600 dark:text-emerald-400 block mt-0.5"
                  >
                    {SCHOOL_CONTACT.phoneMobile}{" "}
                    {pick("(WhatsApp Demo Desk)", "(व्हाट्सएप डेमो डेस्क)")}
                  </a>
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-start gap-4 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="min-w-0 flex-1 space-y-1">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  {pick("Official Support Email", "आधिकारिक सहायता इमेल")}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {pick("Technical & Sales:", "प्राविधिक र बिक्री:")}{" "}
                  <a
                    href={`mailto:${SCHOOL_CONTACT.email}`}
                    className="text-indigo-600 dark:text-indigo-400 font-mono font-bold hover:underline break-all"
                  >
                    {SCHOOL_CONTACT.email}
                  </a>
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-start gap-4 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div className="min-w-0 flex-1 space-y-1">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  {pick("Support & Demo Hours", "सम्पर्क र डेमो समय")}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  <span className="block">
                    {isNepali
                      ? "आइतबार–शुक्रबार: बिहान ८:०० – साँझ ६:०० बजे (NPT)"
                      : SCHOOL_CONTACT.hours.weekdays}
                  </span>
                  <span className="block mt-0.5">
                    {isNepali
                      ? "शनिबार: इमेलमार्फत आकस्मिक अफलाइन सहायता"
                      : SCHOOL_CONTACT.hours.saturday}
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Right: General Contact Form */}
          <div className="lg:col-span-7">
            {submittedRef ? (
              <div className="p-6 sm:p-8 rounded-3xl border border-emerald-200 dark:border-emerald-900/60 bg-emerald-50/50 dark:bg-emerald-950/30 space-y-5 shadow-xs">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                      {pick("Message Received", "सन्देश प्राप्त भयो")}
                    </h2>
                    <p className="text-xs text-slate-600 dark:text-slate-400">
                      {pick("Reference #:", "सन्दर्भ नम्बर:")}{" "}
                      <strong className="font-mono tabular-nums text-emerald-700 dark:text-emerald-300">
                        {submittedRef}
                      </strong>
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {isNepali ? (
                    <>
                      धन्यवाद, <strong>{contactForm.fullName}</strong>! हाम्रो
                      टोलीले छिट्टै <strong>{contactForm.phone}</strong> मार्फत
                      सम्पर्क गर्नेछ।
                    </>
                  ) : (
                    <>
                      Thank you, <strong>{contactForm.fullName}</strong>! Our
                      team will reach out shortly at{" "}
                      <strong>{contactForm.phone}</strong>
                      {contactForm.email.trim()
                        ? ` or ${contactForm.email.trim()}`
                        : ""}
                      .
                    </>
                  )}
                </p>

                <div className="flex flex-wrap gap-3 pt-1">
                  <a
                    href={`https://wa.me/${SCHOOL_CONTACT.phoneMobile.replace(/\D/g, "")}?text=Hello%20MeroSchool,%20reference%20${submittedRef}%20from%20${encodeURIComponent(contactForm.fullName)}.`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors min-h-[42px]"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>
                      {pick("Chat on WhatsApp", "WhatsApp मा कुरा गर्नुहोस्")}
                    </span>
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmittedRef(null);
                      setContactForm({
                        topic: "general",
                        fullName: "",
                        schoolName: "",
                        phone: "",
                        email: "",
                        message: "",
                      });
                    }}
                    className="px-4 py-2.5 rounded-xl text-xs font-semibold bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer min-h-[42px]"
                  >
                    {pick("Send Another Message", "अर्को सन्देश पठाउनुहोस्")}
                  </button>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleContactSubmit}
                className="p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-5 shadow-xs"
              >
                <div className="space-y-1 border-b border-slate-100 dark:border-slate-800 pb-4">
                  <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                    {pick("Send Us a Message", "हामीलाई सन्देश पठाउनुहोस्")}
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    {pick(
                      "Fill out the form below for a free school demo, pricing details, or support.",
                      "निःशुल्क विद्यालय डेमो, मूल्य विवरण वा सहायताका लागि तलको साधारण फारम भर्नुहोस्।",
                    )}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5 sm:col-span-2">
                    <label
                      htmlFor="contact-topic"
                      className="text-xs font-semibold text-slate-700 dark:text-slate-300"
                    >
                      {pick("Subject / Inquiry Type", "विषय / अनुरोध प्रकार")}
                    </label>
                    <select
                      id="contact-topic"
                      value={contactForm.topic}
                      onChange={(e) =>
                        setContactForm({
                          ...contactForm,
                          topic: e.target.value as InquiryTopic,
                        })
                      }
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-indigo-500 min-h-[44px]"
                    >
                      <option value="general">
                        {pick("General Inquiry", "सामान्य जानकारी / सोधपुछ")}
                      </option>
                      <option value="onsite_demo">
                        {pick(
                          "Request Free Campus Demo",
                          "निःशुल्क विद्यालय डेमो माग",
                        )}
                      </option>
                      <option value="video_demo">
                        {pick(
                          "Schedule Live Video Walkthrough",
                          "प्रत्यक्ष भिडियो डेमो समय",
                        )}
                      </option>
                      <option value="support">
                        {pick(
                          "Technical or Hardware Support",
                          "प्राविधिक वा हार्डवेयर सहायता",
                        )}
                      </option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-name"
                      className="text-xs font-semibold text-slate-700 dark:text-slate-300"
                    >
                      {pick("Your Name *", "तपाईंको नाम *")}
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder={pick(
                        "e.g. Narayan P. Bhattarai",
                        "उदा. नारायण प्र. भट्टराई",
                      )}
                      value={contactForm.fullName}
                      onChange={(e) =>
                        setContactForm({
                          ...contactForm,
                          fullName: e.target.value,
                        })
                      }
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-indigo-500 min-h-[44px]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-phone"
                      className="text-xs font-semibold text-slate-700 dark:text-slate-300"
                    >
                      {pick("Phone / WhatsApp *", "फोन / WhatsApp नम्बर *")}
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      required
                      aria-invalid={Boolean(formErrors.phone)}
                      placeholder={pick("e.g. 9841234567", "उदा. 9841234567")}
                      value={contactForm.phone}
                      onChange={(e) => {
                        setContactForm({
                          ...contactForm,
                          phone: e.target.value,
                        });
                        if (formErrors.phone)
                          setFormErrors((prev) => ({
                            ...prev,
                            phone: undefined,
                          }));
                      }}
                      className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border bg-white dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 min-h-[44px] ${
                        formErrors.phone
                          ? "border-rose-500 focus:ring-rose-500"
                          : "border-slate-300 dark:border-slate-700 focus:ring-indigo-500"
                      }`}
                    />
                    {formErrors.phone && (
                      <p className="text-[11px] text-rose-600 dark:text-rose-400">
                        {formErrors.phone}
                      </p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-email"
                      className="text-xs font-semibold text-slate-700 dark:text-slate-300"
                    >
                      {pick("Email Address", "इमेल ठेगाना")}
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      aria-invalid={Boolean(formErrors.email)}
                      placeholder="e.g. principal@school.edu.np"
                      value={contactForm.email}
                      onChange={(e) => {
                        setContactForm({
                          ...contactForm,
                          email: e.target.value,
                        });
                        if (formErrors.email)
                          setFormErrors((prev) => ({
                            ...prev,
                            email: undefined,
                          }));
                      }}
                      className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border bg-white dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 min-h-[44px] ${
                        formErrors.email
                          ? "border-rose-500 focus:ring-rose-500"
                          : "border-slate-300 dark:border-slate-700 focus:ring-indigo-500"
                      }`}
                    />
                    {formErrors.email && (
                      <p className="text-[11px] text-rose-600 dark:text-rose-400">
                        {formErrors.email}
                      </p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-school"
                      className="text-xs font-semibold text-slate-700 dark:text-slate-300"
                    >
                      {pick(
                        "School / Institution (Optional)",
                        "विद्यालय / संस्थाको नाम (ऐच्छिक)",
                      )}
                    </label>
                    <input
                      id="contact-school"
                      type="text"
                      placeholder={pick(
                        "e.g. Valley View Secondary School",
                        "उदा. भ्याली भ्यू माध्यमिक विद्यालय",
                      )}
                      value={contactForm.schoolName}
                      onChange={(e) =>
                        setContactForm({
                          ...contactForm,
                          schoolName: e.target.value,
                        })
                      }
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-indigo-500 min-h-[44px]"
                    />
                  </div>

                  <div className="sm:col-span-2 space-y-1.5">
                    <label
                      htmlFor="contact-message"
                      className="text-xs font-semibold text-slate-700 dark:text-slate-300"
                    >
                      {pick("Message *", "सन्देश *")}
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={4}
                      placeholder={pick(
                        "Tell us how we can help — demo request, school size, questions, or support...",
                        "हामी तपाईंलाई कसरी सहयोग गर्न सक्छौं लेख्नुहोस् — डेमो अनुरोध, प्रश्न वा सहायता...",
                      )}
                      value={contactForm.message}
                      onChange={(e) =>
                        setContactForm({
                          ...contactForm,
                          message: e.target.value,
                        })
                      }
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl text-xs sm:text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition-colors cursor-pointer flex items-center justify-center gap-2 min-h-[44px]"
                >
                  <Send className="w-4 h-4" />
                  <span>{pick("Send Message", "सन्देश पठाउनुहोस्")}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 4. Frequently Asked Questions Accordion */}
      <section className="perf-section max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center space-y-2">
          <div className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            {pick("Desktop Software FAQ", "डेस्कटप सफ्टवेयर FAQ")}
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
            {pick("Frequently Asked Questions", "बारम्बार सोधिने प्रश्नहरू")}
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = expandedFaq === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-xs"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setExpandedFaq(isOpen ? null : idx)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 text-xs sm:text-sm font-semibold text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${
                      isOpen ? "rotate-180 text-indigo-600" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-4 text-xs text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
