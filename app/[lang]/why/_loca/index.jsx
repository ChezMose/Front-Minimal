import 'server-only';

// tools
import {
  lang,
  setLang,
  locales,
  getLoca,
  getDicoFrom,
  getMeta as getMetaFrom,
} from '/tools/server/loca';

/* ------------------------------
  Page code
------------------------------ */
const codePage = 'Page.Why';

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
  setLang,
  locales,
  getLoca,
};

/* ---------------------
  Retrieve a dictionary with the requested localizations
--------------------- */
export const getDico = async (...codes) =>
  getDicoFrom(all, lang, codePage, ...codes);

/* ---------------------
  Get the meta for the page
--------------------- */
export const getMeta = async (context) =>
  getMetaFrom(context, all, codePage);
