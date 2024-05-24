import NavbarItem from "./NavbarItem";

const NavbarLogo = () => {

   return (
      <div className="navbar_logo">
         <img src="assets/pokemon_logo.svg" alt="poke_logo" height={60} />
         <NavbarItem label="Frontend Final Project"/>
      </div>
   )
}


export default NavbarLogo;