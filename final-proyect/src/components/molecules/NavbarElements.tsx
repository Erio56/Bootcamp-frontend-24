import NavbarItem from "../atoms/NavbarItem";

const NavbarElements = () => {

   return (
      <menu className="navbar_items">
         <NavbarItem label={"Game"} path={"/"} isClickable={true}/>
         <NavbarItem label={"Langs"} path={"languages"} isClickable={true}/>
         <NavbarItem label={"Pokédex"} path={"pokedex"} isClickable={true}/>
      </menu>
   )
}

export default NavbarElements;