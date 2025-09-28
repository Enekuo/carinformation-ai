import React from 'react';
import { translations, DEFAULT_LANG } from './translations/index.jsx';

export const LanguageContext = React.createContext(null);

export const LanguageProvider = ({ children, initial = DEFAULT_LANG }) => {
  const [language, setLanguage] = React.useState(initial);
  const value = React.useMemo(() => ({ language, setLanguage }), [language]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useTranslation = () => {
  const ctx = React.useContext(LanguageContext);
  // Fallback seguro si no hay Provider (evita pantalla en blanco)
  if (!ctx) {
    const t = (k) => {
      const parts = k.split('.');
      let node = translations[DEFAULT_LANG];
      for (const p of parts) {
        node = node?.[p];
        if (node == null) return k;
      }
      return typeof node === 'string' ? node : k;
    };
    return { language: DEFAULT_LANG, setLanguage: () => {}, t };
  }

  const { language } = ctx;
  const t = (key) => {
    const parts = key.split('.');
    let node = translations[language] ?? translations[DEFAULT_LANG];
    for (const p of parts) {
      node = node?.[p];
      if (node == null) return key;
    }
    return typeof node === 'string' ? node : key;
  };

  return { ...ctx, t };
};