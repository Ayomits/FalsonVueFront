/**
 * Хуйня для переводов
 */

import { createI18n } from "vue-i18n";
import en from "@locales/en.json";
import ru from "@locales/ru.json";

const getLocale = () => {
  const locale = localStorage.getItem("locale") || "ru";
  return locale;
};

const i18n = createI18n({
  locale: getLocale(),
  messages: {
    en,
    ru,
  },
});

export default i18n;
