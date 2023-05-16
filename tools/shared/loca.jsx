/* ---------------------
  All available locales
--------------------- */
export const locales = ['en', 'fr'];
/* ---------------------
  Default locale
--------------------- */
export const localeDefault = 'en';

/* ---------------------
  Retrieve a localization from a dictionary
--------------------- */
export const getLoca = (dico, ...codes) => {
  // if no dico, reject
  if (!dico)
    return '[empty dico]';

  // if no code, reject
  if (!(codes && codes.length))
    return '[need code]';

  let result = dico;
  let codeFull = (dico.key + '.' ?? '');

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
    // if not found, reject
    if (!result)
      return codeFull;
  }

  return (
    // if the result is an object, then we have an issue
    (typeof result === 'object')
    ? JSON.stringify(result)
    : result
  );
};
