import 'server-only'

// tools
import { getDico } from './loca';


/* ---------------------
  Get the meta given a page code and a context
--------------------- */
export const getMeta = async (
  { params: { lang } },
  code
) => {
  // get the meta
  const meta = await getDico(lang, code, 'meta');
  // add the metadata base to build the url
  return {
    metadataBase: process.env.URL_HOST,
    ...meta,
  }
}
