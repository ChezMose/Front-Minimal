/* ------------------------------------------
  Redirect to given pathname with given locale
------------------------------------------ */
export const toLocalPath = (pathName, locale) => {
  // if no pathname, go home
  if (!pathName)
    return '/';
  // split the pathname
  const segments = pathName.split('/');
  // force our local
  segments[1] = locale;
  // make it a pathname again
  return segments.join('/');
};
