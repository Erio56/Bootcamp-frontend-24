import NavbarItem from "../atoms/NavbarItem"
import NavbarLogo from "../atoms/NavbarLogo";

const NavbarElements = () => {

   return (
      
      <menu>
         <NavbarLogo/>
         <NavbarItem label={"Game"}/>
         <NavbarItem label={"Langs"}/>
         <NavbarItem label={"Pokédex"}/>
      </menu>
   )
}

export default NavbarElements;