import React from 'react';
import { translations, DEFAULT_LANG } from './translations/index.js';

export const LanguageContext = React.createContext({
  language: DEFAULT_LANG,
  setLanguage: () => {},
});

export const useTranslation = () => {
  const ctx = React.useContext(LanguageContext);
  if (!ctx) throw new Error('useTranslation must be used within a LanguageProvider');

  const lang = ctx.language || DEFAULT_LANG;

  const t = (key) => {
    const parts = key.split('.');
    let node = translations[lang];
    for (const p of parts) {
      node = node?.[p];
      if (node == null) return key;
    }
    return typeof node === 'string' ? node : key;
  };

  return { ...ctx, t };
};