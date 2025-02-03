import Links from './Links';
import Logo from './Logo';
import NavSearch from './NavSearch';
import { Suspense } from 'react';

interface NavbarCenterProps {
  toggleMenu: () => void;
}

const NavbarCenter = ({ toggleMenu }: NavbarCenterProps) => {
  return (
    <div className="container py-7 bg-white">
      <div className="flex justify-between items-center">
        <Logo toggleMenu={toggleMenu} />
        <Suspense>
          <NavSearch />
        </Suspense>
        <Links />
      </div>
    </div>
  );
};

export default NavbarCenter;
