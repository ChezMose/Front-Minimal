// components
import Header from '/components/Layout/Header';
import Footer from '/components/Layout/Footer';
// tools
import { fontBase, fontAlt, fontMenu } from '/tools/server/fonts';
import { setLang, locales } from '/tools/server/loca';
// styles
import '/styles/default.scss'
import styles from './_css/layout.module.scss'


/* -----------------------------------
  Base layout for all pages
----------------------------------- */
const RootLayout = ({
  params: { lang },
  children
}) => {
  // store the language for later use
  setLang(lang);

  return (
    <html
      className={`${fontBase.variable} ${fontAlt.variable} ${fontMenu.variable}`}
      lang={lang}
    >
      <body>
        <Header className={styles.header} />
        <div className={styles.content}>
          {children}
        </div>
        <Footer className={styles.footer} />
      </body>
    </html>
  );
};

/* ------------------------------
  Static
------------------------------ */
export const generateStaticParams = () =>
  locales.map((locale) => ({ lang: locale }));

export default RootLayout;
