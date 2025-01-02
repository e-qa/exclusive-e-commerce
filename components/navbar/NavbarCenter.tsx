import Links from './Links';
import Logo from './Logo';
import NavSearch from './NavSearch';

const NavbarCenter = () => {
  return (
    <div className="container py-7">
      <div className="flex justify-between items-center">
        <Logo />
        <NavSearch />
        <Links />
      </div>
    </div>
  );
};

export default NavbarCenter;
