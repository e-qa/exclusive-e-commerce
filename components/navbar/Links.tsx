import { IoCallOutline } from 'react-icons/io5';
import { CiLogin, CiLogout } from 'react-icons/ci';
import {
  SignedIn,
  SignedOut,
  SignOutButton,
  SignUpButton,
} from '@clerk/nextjs';
import { FaRegHeart } from 'react-icons/fa';
import { MdOutlineShoppingCart } from 'react-icons/md';
import Link from 'next/link';

const Links = () => {
  return (
    <div className="flex items-center gap-10">
      <div className="hidden items-center gap-3 lg:flex">
        <IoCallOutline size={40} />
        <div className="flex flex-col">
          <span className="text-xs text-slate-400 font-bold">CALL US NOW</span>
          <a href="#" className="text-base font-bold">
            +944 123 456 67 89
          </a>
        </div>
      </div>
      <SignedOut>
        <SignUpButton mode="modal">
          <button>
            <CiLogin className="text-2xl lg:text-3xl" />
          </button>
        </SignUpButton>
      </SignedOut>
      <SignedIn>
        <div className="flex gap-3">
          <SignOutButton>
            <Link href={'/'}>
              <CiLogout className="text-2xl lg:text-3xl" />
            </Link>
          </SignOutButton>
          <button>
            <FaRegHeart className="text-2xl lg:text-3xl" />
          </button>
          <button>
            <MdOutlineShoppingCart className="text-2xl lg:text-3xl" />
          </button>
        </div>
      </SignedIn>
    </div>
  );
};

export default Links;
