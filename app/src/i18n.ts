import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en/translation.json";
import th from "./locales/th/translation.json";
import zh from "./locales/zh/translation.json";

const defaultLanguage = "zh";
const storageKey = "lang";

if (localStorage.getItem(storageKey) === null) {
    localStorage.setItem(storageKey, defaultLanguage);
}

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: en },
            th: { translation: th },
            zh: { translation: zh }
        },
        lng: localStorage.getItem(storageKey) || defaultLanguage,
        fallbackLng: defaultLanguage,
        interpolation: {
            escapeValue: false
        }
    })

export default i18n;