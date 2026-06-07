import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationKO from './locales/ko/translation.json';
import translationEN from './locales/en/translation.json';
import translationZH from './locales/zh/translation.json';
import translationJA from './locales/ja/translation.json';
import translationRU from './locales/ru/translation.json';
import translationMN from './locales/mn/translation.json';
import translationVI from './locales/vi/translation.json';

const resources = {
  ko: { translation: translationKO },
  en: { translation: translationEN },
  zh: { translation: translationZH },
  ja: { translation: translationJA },
  ru: { translation: translationRU },
  mn: { translation: translationMN },
  vi: { translation: translationVI },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ko', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
