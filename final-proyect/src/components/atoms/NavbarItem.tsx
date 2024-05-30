import { Link } from "react-router-dom";

interface NavbarItemProps {
  label: string;
  path: string;
  isClickable: boolean;
}

const NavbarItem = ({ label, path, isClickable = false }: NavbarItemProps) => {
  return (
    <>
      {isClickable ? (
        <li className="navbar_item">
          <Link to={path}>{label}</Link>
        </li>
      ) : (
        <li className="navbar_item">{label}</li>
      )}
    </>
  );
};

export default NavbarItem;
