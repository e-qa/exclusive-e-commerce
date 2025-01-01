import Link from 'next/link';

const Logo = () => {
  return (
    <div>
      <Link href={'/'} className="capitalize text-3xl flex flex-col font-bold">
        exclusive
      </Link>
    </div>
  );
};

export default Logo;
