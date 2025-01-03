import Links from './Links';
import Logo from './Logo';
import NavSearch from './NavSearch';

interface NavbarCenterProps {
  toggleMenu: () => void;
}

const NavbarCenter = ({ toggleMenu }: NavbarCenterProps) => {
  return (
    <div className="container py-7">
      <div className="flex justify-between items-center">
        <Logo toggleMenu={toggleMenu} /> <NavSearch />
        <Links />
      </div>
    </div>
  );
};

export default NavbarCenter;
