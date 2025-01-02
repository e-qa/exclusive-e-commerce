import { links } from '@/utils/links';
import Link from 'next/link';

const NavbarBottom = () => {
  return (
    <div className="bg-secondary text-white py-5 lg:block hidden">
      <div className="container">
        <ul className="flex gap-10">
          {links.map((link) => {
            return (
              <li key={link.label} className="text-base">
                <Link href={link.href}>{link.label}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default NavbarBottom;
