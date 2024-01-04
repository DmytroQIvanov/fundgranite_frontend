import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";

i18n
  .use(initReactI18next)
  .use(Backend)
  .init({
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    // resources: {},
    backend: {
      // loadPath: "/assets/locale/{{lng}}/translate.json",
      // loadPath: "/public/locales/{{lng}}/translate.json",
      // loadPath: "/locales/{{lng}}/{{ns}}.json",
      loadPath: "/locales/{{lng}}/translation.json",
    },
  });

export default i18n;
