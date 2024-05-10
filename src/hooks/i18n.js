import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import AR from "../locales/ar/translation.json";
i18n
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: "en",
    detection: {
      order: [
        "cookie",
        "htmlTag",
        "localStorage",
        "sessionStorage",
        "navigator",
        "path",
        "subdomain",
      ],
      caches: ["cookie"],
    },

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      ar: {
        translation: AR,
      },
    },

    // backend: { loadPath: "../locales/{{lng}}/translation.json" },
  });

export default i18n;
