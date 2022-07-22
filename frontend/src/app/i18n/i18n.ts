import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import { de } from "../../resources/translations"; //frage fehler

export const initi18n = () => {
  return i18next
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      compatibilityJSON: "v3",
      lng: "de",
      resources: {
        de: {
          translation: de,
        },
      },
      interpolation: {
        escapeValue: false, // react already safes from xss =>
        // https://www.i18next.com/translation-function/interpolation#unescape
      },
    });
};
