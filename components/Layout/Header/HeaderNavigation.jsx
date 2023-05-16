'use client';

import React from 'react';
// components
import Link from '/components/client/Link';
import SelectLang from './SelectLang';
// tools
import { useLang, getLoca } from '/tools/client/loca';
// styles
import styles from './_css/HeaderNavigation.module.scss';


/* ------------------------------------------
  Header on all pages
------------------------------------------ */
const HeaderNavigation = ({
  dico
}) => {
  // retrieve the language
  const lang = useLang();

  const hrefResource =
    lang === 'en'
    ? 'https://docs.proabono.com/'
    : 'https://docs.proabono.com/' + lang;

  return (
    <div className={styles.navigation}>
      <nav className={styles.nav}>
        <Link href="/why">
          {getLoca(dico, 'To.Page.Why')}
        </Link>
      </nav>
      <nav className={styles.nav}>
        <a href={hrefResource} target="_blank">
          {getLoca(dico, 'To.Ext.Doc')}
        </a>
      </nav>
      <nav className={styles.nav}>
        <Link href="/pricing">
          {getLoca(dico, 'To.Page.Pricing')}
        </Link>
      </nav>
      <nav className={styles.buttonPrimary}>
        <a href="https://via.proabono.com/Auth/Welcome">
          {getLoca(dico, 'To.Ext.SignUp')}
        </a>
      </nav>
      <nav className={styles.buttonSecondary}>
        <a href="https://via.proabono.com/Auth/Login">
          {getLoca(dico, 'To.Ext.SignIn')}
        </a>
      </nav>
      <SelectLang className={styles.select} />
    </div>
  );
};

export default HeaderNavigation;
