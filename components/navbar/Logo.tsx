import Link from 'next/link';
import { GiHamburgerMenu } from 'react-icons/gi';
import Button from '../button/Button';

const Logo = () => {
  return (
    <div className="flex items-center gap-5">
      <div className="block lg:hidden">
        <Button
          type="button"
          onClick={() => {
            console.log('hello');
          }}
        >
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
