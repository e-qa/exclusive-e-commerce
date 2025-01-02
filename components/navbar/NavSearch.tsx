import { IoSearchSharp } from 'react-icons/io5';
import Button from '../button/Button';

const NavSearch = () => {
  return (
    <form className="xl:w-[35rem] w-[22rem]  flex">
      <input
        type="search"
        placeholder="Search..."
        name=""
        id=""
        className="border w-full bg-slate-100 rounded-l-xl p-2"
      />
      <select
        name=""
        id=""
        className=" border-y w-24 bg-slate-100 text-slate-400 p-2"
      >
        <option value="defatul">All</option>
        <option value="">Men</option>
        <option value="">Women</option>
      </select>
      <Button type="submit" className="border rounded-r-xl bg-slate-100 p-2">
        <IoSearchSharp size={20} />
      </Button>
    </form>
  );
};

export default NavSearch;
