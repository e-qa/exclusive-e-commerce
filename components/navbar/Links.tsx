import { FaRegHeart, FaRegUserCircle } from 'react-icons/fa';
import { IoCallOutline } from 'react-icons/io5';
import { MdOutlineShoppingCart } from 'react-icons/md';

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

      <div className="flex gap-3">
        <button>
          <FaRegUserCircle className="text-2xl lg:text-3xl" />
        </button>
        <button>
          <FaRegHeart className="text-2xl lg:text-3xl" />
        </button>
        <button>
          <MdOutlineShoppingCart className="text-2xl lg:text-3xl" />
        </button>
      </div>
    </div>
  );
};

export default Links;
