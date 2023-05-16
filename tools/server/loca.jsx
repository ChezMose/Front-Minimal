import 'server-only';

// tools
import { locales, getLoca } from '/tools/shared/loca';

/* ---------------------
  Get working language
--------------------- */
export let lang = undefined;

/* ---------------------
  Store working language
  Usage: to be called in the global layout
--------------------- */
export const setLang = (locale) => { lang = locale; };

/* ---------------------
  Export shared tools
--------------------- */
export {
  locales,
  getLoca,
};

/* ---------------------
  Retrieve a dictionary with the requested localizations
--------------------- */
export const getDicoFrom = async (source, locale, ...codes) => {
  // if no source, return an empty dico
  if (!source)
    return {};

  // get the loca loader
  let byLang = source[locale];
  // if none
  if (!byLang)
    // fallback on english
    byLang = source.en;

  // import the localizations
  let result = await byLang();

  // if we have codes
  if (codes && codes.length) {
    // full code
    let codeFull = '';
    // loop over the codes
    for (let i = 0; i < codes.length; i++) {
      // get the code
      const code = codes[i];
      // full code
      codeFull +=
        i > 0
        ? '.' + code
        : code;

      // look for that nested dico
      result = result[code];
      // if not found, return an empty dico
      if (!result)
        return { key: codeFull };
    }
    // store the full code
    result.key = codeFull;
  }
  return result;
};


/* ---------------------
  Get the meta given a page code and a context
--------------------- */
export const getMeta = async (
  { params: { lang } },
  source,
  code
) => {
  // get the meta
  const meta = await getDicoFrom(source, lang, code, 'meta');
  // add the metadata base to build the url
  return {
    metadataBase: process.env.URL_HOST,
    ...meta,
  }
};
