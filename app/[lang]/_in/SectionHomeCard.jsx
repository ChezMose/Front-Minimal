// components
import Link from '/components/server/Link';
// tools
import { getLoca } from '/tools/server/loca';
// styles
import styles from './_css/SectionHomeCard.module.scss';

/* ------------------------------
  Home page header
------------------------------ */
const SectionHomeCard = ({
  lang,
  dico,
}) => (
  <Link
    lang={lang}
    href="/why"
    className={styles.card}
  >
    <h2>{getLoca(dico, 'Card', 'Title')}</h2>
    <p>{getLoca(dico, 'Card', 'Text')}</p>
  </Link>
);

export default SectionHomeCard;
