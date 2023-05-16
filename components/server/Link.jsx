'server only';

import React from 'react';
// components
import Link from 'next/link';
// tools
import { lang as langSet } from '/tools/server/loca';


/* ------------------------------------------
  Header on all pages
------------------------------------------ */
const LinkEx = ({
  href,
  lang,
  ...props
}) => (
  <Link
    href={'/' + (lang ?? langSet) + href}
    {...props}
  />
);

export default LinkEx;
