// components
import Image from 'next/image';
import SectionHomeTitle from './_in/SectionHomeTitle';
import SectionHomeCard from './_in/SectionHomeCard';
// tools
import { setLang, getDico, getMeta } from './_loca';
// styles
import styles from '/styles/page.module.scss';


/* ------------------------------
  Page
------------------------------ */
const Home = async ({
  params: { lang },
}) => {
  // store the language for later use
  setLang(lang);
  // get loca for that page
  const dico = await getDico();

  return (
    <>
      <Image
        className={styles.back}
        src="/backs/back-home.svg"
        alt="Background"
        width={1000}
        height={500}
      />
      <main className={styles.container}>
        <SectionHomeTitle
          lang={lang}
          dico={dico}
        />
        <SectionHomeCard
          lang={lang}
          dico={dico}
        />
        <div className={styles.log}>{lang}</div>
      </main>
    </>
  )
}

/* ------------------------------
  Meta
------------------------------ */
export const generateMetadata = getMeta;

export default Home;
