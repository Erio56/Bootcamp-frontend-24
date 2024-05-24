interface NavbarItemProps {
   label: string
}

const NavbarItem = ( { label }:NavbarItemProps ) => {

   return (
      <li>{label}</li>
   )
}

export default NavbarItem;