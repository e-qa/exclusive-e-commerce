import { FaRegHeart, FaRegUserCircle } from 'react-icons/fa';
import { IoCallOutline } from 'react-icons/io5';
import { MdOutlineShoppingCart } from 'react-icons/md';

const Links = () => {
  return (
    <div className="flex items-center gap-10">
      <div className="flex items-center gap-3">
        <IoCallOutline size={40} />
        <div className="flex flex-col">
          <span className="text-xs text-slate-400 font-bold">CALL US NOW</span>
          <a href="#" className="text-base">
            +944 123 456 67 89
          </a>
        </div>
      </div>

      <div className="flex gap-3">
        <button>
          <FaRegUserCircle size={30} />
        </button>
        <button>
          <FaRegHeart size={30} />
        </button>
        <button>
          <MdOutlineShoppingCart size={30} />
        </button>
      </div>
    </div>
  );
};

export default Links;
