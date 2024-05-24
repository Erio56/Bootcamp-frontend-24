interface NavbarItemProps {
   label: string
}

const NavbarItem: React.FC<NavbarItemProps> = ( { label }:NavbarItemProps ) => {

   return (
      <li>{label}</li>
   )
}

export default NavbarItem;