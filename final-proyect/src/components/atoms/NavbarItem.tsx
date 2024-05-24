interface NavbarItemProps {
   label: string
}

const NavbarItem = ( { label }:NavbarItemProps ) => {

   return (
      <li className="navbar_item">{label}</li>
   )
}

export default NavbarItem;