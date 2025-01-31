'use client';
import { IoSearchSharp } from 'react-icons/io5';
import Button from '../button/Button';
import { useSearchParams, useRouter } from 'next/navigation';
import { useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';

const NavSearch = () => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');

  const handleSearch = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      params.set('search', value);
      setSearch(value);
    } else {
      params.delete('search');
      setSearch('');
    }

    replace(`/products?${params.toString()}`);
  }, 500);

  const handleSelect = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set('category', value);
      setCategory(value);
    } else {
      params.delete('category');
      setCategory('');
    }

    replace(`/products?${params.toString()}`);
  }, 500);

  return (
    <form className="xl:w-[35rem] w-[22rem] lg:flex hidden">
      <input
        type="search"
        placeholder="Search..."
        name="search"
        id="search"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          handleSearch(e.target.value);
        }}
        className="border w-full bg-slate-100 rounded-l-xl p-2"
      />
      <select
        name="category"
        id="category"
        value={category}
        className="border-y w-24 bg-slate-100 text-slate-400 p-2"
        onChange={(e) => {
          setCategory(e.target.value);
          handleSelect(e.target.value);
        }}
      >
        <option value="">All</option>
        <option value="MEN">Men</option>
        <option value="WOMEN">Women</option>
      </select>
      <Button type="submit" className="border rounded-r-xl bg-slate-100 p-2">
        <IoSearchSharp size={20} />
      </Button>
    </form>
  );
};

export default NavSearch;
