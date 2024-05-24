import NavbarLogo from "../atoms/NavbarLogo";
import NavbarElements from "../molecules/NavbarElements";

const Navbar = () => {
   
   return (
      <div className="navbar">
         <NavbarLogo/>
         <NavbarElements/>
      </div>
   )

}


export default Navbar;