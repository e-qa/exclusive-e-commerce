import { links } from '@/utils/links';
import Link from 'next/link';

const NavbarResponsive = () => {
  return (
    <div className="lg:hidden bg-secondary text-white p-5">
      <ul className="space-y-4">
        {links.map((link) => {
          return (
            <li key={link.label} className="text-sm">
              <Link href={link.href}>{link.label}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavbarResponsive;
