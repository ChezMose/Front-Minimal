'use-client';

// tools
import { useParams } from 'next/navigation';
import { getLoca } from '/tools/shared/loca';

/* ---------------------
  All available locales
--------------------- */
export const locales = ['en', 'fr'];

/* ---------------------
  Export shared tools
--------------------- */
export {
  getLoca
};

/* ---------------------
  Get the curernt language
--------------------- */
export const useLang = () => {
  const { lang } = useParams();

  return lang;
}
