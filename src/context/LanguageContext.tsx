import React, { createContext, useContext, useState, useCallback, useMemo, useEffect } from 'react';

export type AppLang = 'en' | 'ne';

const STORAGE_KEY = 'meroschool_app_lang';

function readInitialLang(): AppLang {
  if (typeof window === 'undefined') return 'en';
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY) || window.localStorage.getItem('meroschool_public_lang');
    return stored === 'ne' ? 'ne' : 'en';
  } catch {
    return 'en';
  }
}

interface LanguageContextValue {
  lang: AppLang;
  isNepali: boolean;
  setLang: (next: AppLang) => void;
  toggleLang: () => void;
  pick: <T>(enValue: T, neValue: T) => T;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: 'en',
  isNepali: false,
  setLang: () => {},
  toggleLang: () => {},
  pick: (enValue) => enValue,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<AppLang>(readInitialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((next: AppLang) => {
    setLangState(next);
    if (typeof window !== 'undefined') {
      try {
        window.localStorage.setItem(STORAGE_KEY, next);
      } catch {
        // Ignore storage errors
      }
    }
  }, []);

  const toggleLang = useCallback(() => {
    setLang(lang === 'en' ? 'ne' : 'en');
  }, [lang, setLang]);

  const pick = useCallback(
    <T,>(enValue: T, neValue: T): T => (lang === 'ne' ? neValue : enValue),
    [lang]
  );

  const value = useMemo<LanguageContextValue>(
    () => ({
      lang,
      isNepali: lang === 'ne',
      setLang,
      toggleLang,
      pick,
    }),
    [lang, setLang, toggleLang, pick]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export function useLanguage(): LanguageContextValue {
  return useContext(LanguageContext);
}

// Backwards compatibility aliases
export const usePublicLanguage = useLanguage;
export const PublicLanguageProvider = LanguageProvider;
