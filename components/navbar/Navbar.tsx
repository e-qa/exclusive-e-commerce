'use client';

import { useState } from 'react';
import Banner from './Banner';
import NavbarBottom from './NavbarBottom';
import NavbarCenter from './NavbarCenter';
import NavbarResponsive from './NavbarResponsive';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <Banner />
      <NavbarCenter toggleMenu={() => setIsMenuOpen(!isMenuOpen)} />
      <NavbarBottom />
      {isMenuOpen && <NavbarResponsive />}
    </>
  );
};

export default Navbar;
