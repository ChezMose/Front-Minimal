'use client';

import React from 'react';
// components
import Image from 'next/image';
import Link from '/components/client/Link';
import HeaderNavigation from './HeaderNavigation';
// styles
import styles from './_css/HeaderClient.module.scss';


/* ------------------------------------------
  Constants
------------------------------------------ */
const scrollTrigger = 200;

/* ------------------------------------------
  Header on all pages
------------------------------------------ */
const HeaderClient = ({
  className,
  // the localizations
  dico,
}) => {
  /* ----------- STICKING LOGIC ----------- */
  // sticking state
  const [isSticking, setIsSticking] = React.useState(false);

  // scroll event handler
  const onScroll = () => {
    // check if scrolled
    setIsSticking(window.scrollY >= scrollTrigger);
  }

  // scroll magic
  React.useEffect(() => {
    // if the page is loaded or refreshed in the middle
    if (window.scrollY >= scrollTrigger)
      // force sticking mode
      setIsSticking(true);

    // track scrolling
    window.addEventListener('scroll', onScroll, true);
    // clean-up
    return () => window.removeEventListener('scroll', onScroll, true);
  }, []);

  // css modifier if sticking to the top
  const ifSticking =
    isSticking
    ? styles.sticking
    : '';


  /* ----------- RENDER ----------- */

  // Note that we cannot have the src property be a variable
  // because of NExt.js Optimization process
  const brand = (
    isSticking
    ? (
      <Image
        className={styles.brand}
        src="/images/brand.svg"
        alt="ProAbono"
        width={180}
        height={36}
      />
    )
    : (
      <Image
        className={styles.brand}
        src="/images/brand-white.svg"
        alt="ProAbono"
        width={180}
        height={36}
      />
    ));

  // final css
  const css = `${className} ${styles.header} ${ifSticking}`;

  return (
    <header className={css}>
      <div className={styles.content}>
        <Link href="/">
          {brand}
        </Link>
        <HeaderNavigation dico={dico} />
      </div>
    </header>
  );
};

export default HeaderClient;
