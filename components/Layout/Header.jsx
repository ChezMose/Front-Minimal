// components
import HeaderClient from './Header/HeaderClient';
// tools
import { lang, getDico } from '/components/_loca';


/* ------------------------------------------
  Header on all pages
------------------------------------------ */
const Header = async (props) => {
  // get the localization for that component
  const dico = await getDico(lang, 'Comp.Appbar');

  return (
    <HeaderClient
      dico={dico}
      {...props}
    />
  );
};

export default Header;
