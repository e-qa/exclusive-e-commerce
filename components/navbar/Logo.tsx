'use client';
import Link from 'next/link';
import { GiHamburgerMenu } from 'react-icons/gi';
import Button from '../button/Button';

interface LogoProps {
  toggleMenu?: () => void;
}

const Logo = ({ toggleMenu }: LogoProps) => {
  return (
    <div className="flex items-center gap-5">
      <div className="flex lg:hidden">
        <Button type="button" onClick={toggleMenu}>
          <GiHamburgerMenu />
        </Button>
      </div>
      <Link
        href={'/'}
        className="capitalize text-2xl lg:text-3xl flex flex-col font-bold"
      >
        exclusive
      </Link>
    </div>
  );
};

export default Logo;
