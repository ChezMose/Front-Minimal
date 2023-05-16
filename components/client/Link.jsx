'use client';

import React from 'react';
// components
import Link from 'next/link';
// tools
import { useLang } from '/tools/client/loca';


/* ------------------------------------------
  Header on all pages
------------------------------------------ */
const LinkEx = ({
  href,
  ...props
}) => {
  // retrieve the language
  const lang = useLang();

  return (
    <Link
      href={'/' + lang + href}
      {...props}
    />
  );
};

export default LinkEx;
