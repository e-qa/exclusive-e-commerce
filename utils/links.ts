type NavLink = {
  href: string;
  label: string;
};

export const links: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/products?category=MEN', label: 'Men' },
  { href: '/products?category=WOMEN', label: 'Women' },
  { href: '/contact', label: 'Contact' },
];
