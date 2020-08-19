import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import backend from "i18next-xhr-backend";
import { reactI18nextModule } from "react-i18next";

import navbarEN from '../Localization/locales/en/navbar.json';
import navbarFR from '../Localization/locales/fr/navbar.json';
import navbarAR from '../Localization/locales/ar/navbar.json';
import homeEN from '../Localization/locales/en/home.json';
import homeFR from '../Localization/locales/fr/home.json';
import homeAR from '../Localization/locales/ar/home.json';

 // the translations
const resources = {
  // Namspaces
  en: {
    navbar: navbarEN,
    home : homeEN
  },
  fr: {
    navbar: navbarFR,
    home: homeFR
  },
  ar: {
    navbar: navbarAR,
    home: homeAR
  }
};

i18n
  .use(detector)
  .use(backend)
  .use(reactI18nextModule) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",
    // Set default namespace
    defaultNS: "navbar",
    fallbackLng: "en", // use en if detected lng is not available

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;