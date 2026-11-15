import React, { useState, useEffect, useMemo, lazy, Suspense } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import {
  Sun,
  Moon,
  Menu,
  X,
  ArrowRight,
  Phone,
  Mail,
  ChevronUp,
  MessageSquare,
  Languages,
} from "lucide-react";
import { useTheme } from "@/src/context/ThemeContext";
import { useLanguage } from "@/src/context/LanguageContext";
import { SCHOOL_CONTACT } from "@/src/config/contactInfo";
import {
  PRIMARY_NAV_LINKS,
  FOOTER_PLATFORM_LINKS,
  FOOTER_LEGAL_LINKS,
} from "@/src/config/navigation";

const LazyWebsiteChatbot = lazy(() =>
  import("./WebsiteChatbot").then((m) => ({ default: m.WebsiteChatbot })),
);

export const Layout: React.FC = () => {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const { lang, isNepali, setLang, pick } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [chatbotMounted, setChatbotMounted] = useState(false);

  // Monitor scroll offset for smooth scroll to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 360);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Defer mounting chatbot chunk until browser idle
  useEffect(() => {
    if (chatbotMounted) return;
    const win = window as Window & {
      requestIdleCallback?: (
        cb: () => void,
        opts?: { timeout: number },
      ) => number;
      cancelIdleCallback?: (id: number) => void;
    };
    if (typeof win.requestIdleCallback === "function") {
      const id = win.requestIdleCallback(() => setChatbotMounted(true), {
        timeout: 1800,
      });
      return () => win.cancelIdleCallback?.(id);
    }
    const timer = window.setTimeout(() => setChatbotMounted(true), 1200);
    return () => window.clearTimeout(timer);
  }, [chatbotMounted]);

  // Smooth scroll to hash target or top and close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    if (location.hash) {
      const targetId = location.hash.slice(1);
      const scrollToHash = () => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          return true;
        }
        return false;
      };
      if (!scrollToHash()) {
        const timer = window.setTimeout(scrollToHash, 120);
        return () => window.clearTimeout(timer);
      }
      return;
    }
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [location.pathname, location.hash]);

  const navLinks = useMemo(
    () =>
      PRIMARY_NAV_LINKS.map((link) => ({
        label: isNepali ? link.labelNe : link.labelEn,
        path: link.path,
      })),
    [isNepali]
  );

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
      {/* Top Header */}
      <header className="sticky top-0 z-40 w-full bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4 lg:gap-8">
          {/* Brand Logo */}
          <Link
            to="/"
            className="inline-flex items-center gap-2.5 text-slate-900 dark:text-white whitespace-nowrap shrink-0 group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 rounded-lg"
          >
            <img
              src="/icon-64.png"
              alt="MeroSchool"
              width={30}
              height={30}
              decoding="async"
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg object-contain border border-slate-200/80 dark:border-slate-800 transition-transform duration-200 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <span className="font-display text-lg font-bold tracking-tight text-slate-900 dark:text-white">
              MeroSchool
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav
            aria-label={pick("Primary navigation", "मुख्य नेभिगेसन")}
            className="hidden lg:flex items-center gap-6 xl:gap-7 text-sm font-medium"
          >
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`whitespace-nowrap shrink-0 transition-colors py-1 relative focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-600 rounded-sm ${
                    active
                      ? "text-indigo-600 dark:text-indigo-400 font-semibold"
                      : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  {link.label}
                  {active && (
                    <span
                      aria-hidden="true"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600 dark:bg-indigo-400"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Header Controls: Language Switcher + Theme Toggle + Action */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Language Toggle */}
            <div
              role="group"
              aria-label={pick("Select language", "भाषा छान्नुहोस्")}
              className="inline-flex items-center p-0.5 rounded-xl bg-slate-100 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shrink-0"
            >
              <button
                type="button"
                onClick={() => setLang("en")}
                aria-pressed={lang === "en"}
                title="English"
                className={`px-2 py-1 text-[11px] font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap min-h-[30px] ${
                  lang === "en"
                    ? "bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-2xs"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLang("ne")}
                aria-pressed={lang === "ne"}
                title="नेपाली"
                className={`px-2 py-1 text-[11px] font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap min-h-[30px] ${
                  lang === "ne"
                    ? "bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-2xs"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                नेपाली
              </button>
            </div>

            {/* Theme Toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              className="p-2 rounded-xl text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer min-w-[38px] min-h-[38px] flex items-center justify-center"
              aria-label={pick("Toggle visual theme", "थिम परिवर्तन गर्नुहोस्")}
              title={
                theme === "dark"
                  ? pick(
                      "Switch to light mode",
                      "उज्यालो मोडमा स्विच गर्नुहोस्",
                    )
                  : pick(
                      "Switch to dark mode",
                      "अँध्यारो मोडमा स्विच गर्नुहोस्",
                    )
              }
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </button>

            <Link
              to="/contact?type=demo"
              className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 transition-colors whitespace-nowrap shrink-0 cursor-pointer min-h-[38px]"
            >
              <span>{pick("Book Free Demo", "निःशुल्क डेमो")}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer min-w-[38px] min-h-[38px] flex items-center justify-center"
              aria-label={pick(
                "Toggle navigation menu",
                "नेभिगेसन मेनु खोल्नुहोस्",
              )}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 pt-3 pb-6 space-y-3 shadow-xl">
            <div className="flex flex-col space-y-1">
              {[
                ...navLinks,
                { label: pick("FAQs", "प्रश्नोत्तर"), path: "/faqs" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2.5 rounded-lg text-sm font-medium min-h-[44px] flex items-center ${
                    isActive(link.path)
                      ? "bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 font-semibold"
                      : "text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between px-1">
              <span className="text-xs font-medium text-slate-600 dark:text-slate-400 flex items-center gap-1.5">
                <Languages className="w-3.5 h-3.5" />
                <span>{pick("Language / भाषा", "भाषा / Language")}</span>
              </span>
              <div className="inline-flex items-center p-0.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <button
                  type="button"
                  onClick={() => setLang("en")}
                  className={`px-3 py-1 text-xs font-semibold rounded-lg cursor-pointer ${
                    lang === "en"
                      ? "bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400"
                      : "text-slate-600 dark:text-slate-400"
                  }`}
                >
                  English
                </button>
                <button
                  type="button"
                  onClick={() => setLang("ne")}
                  className={`px-3 py-1 text-xs font-semibold rounded-lg cursor-pointer ${
                    lang === "ne"
                      ? "bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400"
                      : "text-slate-600 dark:text-slate-400"
                  }`}
                >
                  नेपाली
                </button>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-2">
              <Link
                to="/contact?type=demo"
                className="w-full py-2.5 rounded-xl text-xs font-semibold text-center text-white bg-indigo-600 hover:bg-indigo-700 transition-colors cursor-pointer flex items-center justify-center gap-2 min-h-[44px]"
              >
                <span>
                  {pick(
                    "Request Free On-Site Demo",
                    "निःशुल्क विद्यालय डेमो माग गर्नुहोस्",
                  )}
                </span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Main Outlet */}
      <main className="flex-1 overflow-x-hidden">
        <div key={location.pathname} className="animate-page-enter">
          <Outlet />
        </div>
      </main>

      {/* Footer */}
      <footer className="perf-section border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-600 dark:text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-slate-200 dark:border-slate-800">
            {/* Brand & Summary */}
            <div className="md:col-span-5 space-y-3">
              <Link to="/" className="inline-flex items-center gap-2.5">
                <img
                  src="/icon-64.png"
                  alt="MeroSchool"
                  width={28}
                  height={28}
                  loading="lazy"
                  decoding="async"
                  className="w-7 h-7 rounded-lg object-contain border border-slate-200 dark:border-slate-800"
                  referrerPolicy="no-referrer"
                />
                <span className="font-display text-base font-bold text-slate-900 dark:text-white tracking-tight">
                  MeroSchool
                </span>
              </Link>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm">
                {pick(
                  "Modern school management software designed for performance, reliability, and full offline-first data ownership.",
                  "उत्कृष्ट गति, विश्वसनीयता र पूर्ण अफलाइन डेटा स्वामित्वसहितको आधुनिक विद्यालय व्यवस्थापन सफ्टवेयर।",
                )}
              </p>
            </div>

            {/* Platform Links */}
            <div className="md:col-span-3 space-y-2.5">
              <h4 className="text-xs font-semibold text-slate-900 dark:text-white">
                {pick("Platform", "प्लेटफर्म")}
              </h4>
              <ul className="grid grid-cols-2 md:grid-cols-1 gap-2 text-xs">
                {FOOTER_PLATFORM_LINKS.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                      {isNepali ? link.labelNe : link.labelEn}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Direct Support */}
            <div className="md:col-span-4 space-y-2.5">
              <h4 className="text-xs font-semibold text-slate-900 dark:text-white">
                {pick("Demo & Support Desk", "डेमो र सहायता डेस्क")}
              </h4>
              <ul className="space-y-2 text-xs">
                <li className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400 shrink-0" />
                  <a
                    href={`mailto:${SCHOOL_CONTACT.email}`}
                    className="hover:underline font-mono font-semibold text-indigo-600 dark:text-indigo-400"
                  >
                    {SCHOOL_CONTACT.email}
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400 shrink-0" />
                  <a
                    href={`tel:${SCHOOL_CONTACT.phone}`}
                    className="hover:underline font-mono tabular-nums"
                  >
                    {SCHOOL_CONTACT.phonesDisplay}
                  </a>
                </li>
                <li className="pt-1 text-slate-500 dark:text-slate-400">
                  {pick(
                    `${SCHOOL_CONTACT.address.city}, ${SCHOOL_CONTACT.address.country}`,
                    "काठमाडौं, नेपाल",
                  )}{" "}
                  <span aria-hidden="true">·</span>{" "}
                  {pick("Windows, macOS & Linux", "Windows, macOS र Linux")}
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400">
            <div>
              &copy; {new Date().getFullYear()}{" "}
              {pick("MeroSchool Software", "MeroSchool सफ्टवेयर")}
            </div>

            <nav
              aria-label={pick("Footer legal and access", "फुटर लिंकहरू")}
              className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5"
            >
              {FOOTER_LEGAL_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  {isNepali ? link.labelNe : link.labelEn}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </footer>

      {/* Floating Scroll to Top */}
      {showScrollTop && (
        <button
          type="button"
          onClick={() =>
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
          }
          className="fixed bottom-22 right-6 z-30 p-2.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 shadow-lg hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-indigo-600 dark:hover:text-indigo-400 transition-transform duration-150 hover:scale-105 active:scale-95 cursor-pointer flex items-center justify-center"
          aria-label={pick(
            "Scroll smoothly to top of page",
            "माथि स्क्रोल गर्नुहोस्",
          )}
          title={pick("Back to top", "माथि जानुहोस्")}
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}

      {/* Lazy Chatbot */}
      {chatbotMounted ? (
        <Suspense fallback={null}>
          <LazyWebsiteChatbot />
        </Suspense>
      ) : (
        <button
          type="button"
          onClick={() => setChatbotMounted(true)}
          aria-label={pick(
            "Open MeroSchool knowledge assistant",
            "MeroSchool सहायता च्याट खोल्नुहोस्",
          )}
          className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 px-4 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold shadow-lg transition-colors cursor-pointer"
        >
          <MessageSquare className="w-4 h-4" />
          <span className="hidden sm:inline">
            {pick("Ask Assistant", "सहायक सोध्नुहोस्")}
          </span>
        </button>
      )}
    </div>
  );
};

export const PublicLayout = Layout;
