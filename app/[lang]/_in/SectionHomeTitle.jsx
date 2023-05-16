// tools
import { getLoca } from '/tools/server/loca';
// styles
import styles from './_css/SectionHomeTitle.module.scss';

/* ------------------------------
  Home page header
------------------------------ */
const SectionHomeTitle = ({
  lang,
  dico,
}) => (
  <div className={styles.sectionTitle}>
    <div className={styles.content}>
      <h1 className={styles.title}>
        {getLoca(dico, 'Welcome')}
      </h1>
    </div>
  </div>
);

export default SectionHomeTitle;
