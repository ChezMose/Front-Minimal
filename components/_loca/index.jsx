import 'server-only';

// tools
import {
  lang,
  locales,
  getLoca,
  getDicoFrom,
} from '/tools/server/loca';

/* --------------------------------
  Import languages only when required
-------------------------------- */
const all = {
  en: () => import('./en.json').then((module) => module.default),
  fr: () => import('./fr.json').then((module) => module.default),
};

/* ---------------------
  Export shared tools
--------------------- */
export {
  lang,
  locales,
  getLoca,
};

/* ---------------------
  Retrieve a dictionary with the requested localizations
--------------------- */
export const getDico = async (locale, ...codes) =>
  getDicoFrom(all, locale, ...codes);
