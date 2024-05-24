import NavbarItem from "../atoms/NavbarItem";

const NavbarElements = () => {

   return (
      
      <menu className="navbar_items">
         <NavbarItem label={"Game"}/>
         <NavbarItem label={"Langs"}/>
         <NavbarItem label={"Pokédex"}/>
      </menu>
   )
}

export default NavbarElements;