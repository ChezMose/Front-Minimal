import 'server-only'

// fonts
import {
  Manrope,
  IBM_Plex_Sans,
  Poppins,
} from 'next/font/google';


/* -----------------------------------
  Default font of the site
----------------------------------- */
export const fontBase = Manrope({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-base',
});

/* -----------------------------------
  Alternative font of the site
----------------------------------- */
export const fontAlt = IBM_Plex_Sans({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-alt',
});

/* -----------------------------------
  Fonts for menu
----------------------------------- */
export const fontMenu = Poppins({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-menu',
});
