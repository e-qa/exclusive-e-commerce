import { Product } from '@prisma/client';
import Image from 'next/image';
import { FaRegHeart } from 'react-icons/fa';

const ProductsGrid = ({ products }: { products: Product[] }) => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 grid-rows-2 sm:grid-cols-1 content-center gap-3">
      {products.map((product) => (
        <div
          key={product.id}
          className="flex flex-col items-center justify-center p-4 border shadow-md lg:mr-10 sm:mr-0"
        >
          <div className="relative w-28 h-28 sm:w-40 sm:h-40 lg:w-40 lg:h-40">
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              className="absolute object-cover rounded-md"
            />
          </div>

          <div className="flex flex-col items-start w-full mt-4">
            <div className="flex items-center justify-between w-full">
              <h4 className="text-sm font-medium sm:text-base lg:text-lg">
                {product.name}
              </h4>
              <FaRegHeart className="text-xl text-gray-600 hover:text-red-500 transition-colors duration-200" />
            </div>
            <p className="mt-1 text-base font-bold text-gray-800 sm:text-lg lg:text-xl">
              ${product.price}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsGrid;
