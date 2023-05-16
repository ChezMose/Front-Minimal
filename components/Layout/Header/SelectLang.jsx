'use client';

import React from 'react';
// components
import Link from 'next/link';
// tools
import { locales, useLang } from '/tools/client/loca';
import { toLocalPath } from '/tools/shared/url';
import { usePathname } from 'next/navigation'
// styles
import styles from './_css/SelectLang.module.scss';


/* ------------------------------------------
  Header on all pages
------------------------------------------ */
const SelectLang = ({
  className = '',
}) => {
  // retrieve the current path
  const pathName = usePathname()

  // current language
  const lang = useLang();
  // retrieve the language
  const [isOpened, setIsOpened] = React.useState(false);

  // the dialog
  const dialog =
    isOpened
    ? (
      <div className={styles.dialog}>
        <ul>
          {locales.map((locale) => (
            <li key={locale}>
              <Link href={toLocalPath(pathName, locale)}>
                {locale}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    )
    : null

  return (
    <div className={`${className} ${styles.selectLang}`}>
      <button
        className={styles.button}
        onClick={() => setIsOpened((before) => !before)}
      >
        {lang}
      </button>
      {dialog}
    </div>
  );
};

export default SelectLang;
