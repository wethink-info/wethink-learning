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
import tabsEN from '../Localization/locales/en/tabs.json';
import tabsFR from '../Localization/locales/fr/tabs.json';
import tabsAR from '../Localization/locales/ar/tabs.json';
import partnersEN from '../Localization/locales/en/partners&testimonials.json';
import partnersFR from '../Localization/locales/fr/partners&testimonials.json';
import partnersAR from '../Localization/locales/ar/partners&testimonials.json';
import widgetEN from '../Localization/locales/en/widgetAboveFooter.json';
import widgetFR from '../Localization/locales/fr/widgetAboveFooter.json';
import widgetAR from '../Localization/locales/ar/widgetAboveFooter.json';
import footerEN from '../Localization/locales/en/footer.json';
import footerFR from '../Localization/locales/fr/footer.json';
import footerAR from '../Localization/locales/ar/footer.json';
import loginEN from '../Localization/locales/en/login.json';
import loginFR from '../Localization/locales/fr/login.json';
import loginAR from '../Localization/locales/ar/login.json';


 // the translations
const resources = {
  // Namspaces
  en: {
    navbar: navbarEN,
    home : homeEN,
    tabs : tabsEN,
    partners: partnersEN,
    widget: widgetEN,
    footer : footerEN,
    auth : loginEN

  },
  fr: {
    navbar: navbarFR,
    home: homeFR,
    tabs: tabsFR,
    partners: partnersFR,
    widget: widgetFR,
    footer : footerFR,
    auth : loginFR

  },
  ar: {
    navbar: navbarAR,
    home: homeAR,
    tabs: tabsAR,
    partners: partnersAR,
    widget: widgetAR,
    footer : footerAR,
    auth : loginAR

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