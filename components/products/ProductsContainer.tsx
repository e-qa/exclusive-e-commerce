'use client';

import React, { useState } from 'react';
import ProductsGrid from './ProductsGrid';
import ProductsList from './ProductsList';
import { FaThList } from 'react-icons/fa';
import { IoGridSharp } from 'react-icons/io5';
import { Product } from '@prisma/client';
import Link from 'next/link';

const ProductsContainer = ({
  layout: initialLayout,
  search,
  products,
}: {
  layout: string;
  search: string;
  products: Product[];
}) => {
  const [layout, setLayout] = useState(initialLayout);
  const totalProducts = products.length;
  const searchTerm = search ? `&search=${search}` : '';

  return (
    <div className="container mt-10">
      <div className="flex justify-between gap-2 mb-5 mr-11">
        <div>
          <h5>
            {totalProducts} Product{totalProducts > 1 && 's'}
          </h5>
        </div>
        <div className="flex gap-2">
          <Link
            type="button"
            href={`/products?layout=grid${searchTerm}`}
            onClick={() => setLayout('grid')}
            className={layout === 'grid' ? 'opacity-80' : ''}
          >
            <IoGridSharp size={20} />
          </Link>
          <Link
            href={`/products?layout=list${searchTerm}`}
            type="button"
            onClick={() => setLayout('list')}
            className={layout === 'list' ? 'opacity-80' : ''}
          >
            <FaThList size={20} />
          </Link>
        </div>
      </div>
      {products.length === 0 ? (
        <h5 className="text-2xl mt-16">
          Sorry, no products matched your search...
        </h5>
      ) : layout === 'grid' ? (
        <ProductsGrid products={products} />
      ) : (
        <ProductsList products={products} />
      )}
    </div>
  );
};

export default ProductsContainer;
