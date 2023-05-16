// components
import Image from 'next/image';
// tools
import { setLang, getDico, getMeta, getLoca } from './_loca';
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
  // get the localization for that page
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
        {getLoca(dico, "Default")}
      </main>
    </>
  )
}

/* ------------------------------
  Meta
------------------------------ */
export const generateMetadata = getMeta;

export default Home;
