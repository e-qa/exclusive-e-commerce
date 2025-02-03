import { Product } from '@prisma/client';
import Image from 'next/image';
import Link from 'next/link';
import { FaRegHeart } from 'react-icons/fa';

const ProductsList = ({ products }: { products: Product[] }) => {
  return (
    <div className="flex flex-col gap-5">
      {products.map((product) => (
        <div
          key={product.id}
          className="flex items-center justify-center p-4 border shadow-md lg:mr-10 sm:mr-0"
        >
          <div className="relative w-28 h-28 sm:w-40 sm:h-40 lg:w-60 lg:h-60">
            <Link href={`products/${product.id}`}>
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                className="absolute object-cover rounded-md"
              />
            </Link>
          </div>

          <div className="flex flex-col items-start w-full m-4">
            <div className="flex items-center justify-between w-full">
              <Link
                href={`products/${product.id}`}
                className="text-sm font-medium sm:text-base lg:text-lg"
              >
                {product.name}
              </Link>
              <FaRegHeart className="text-xl text-gray-600 hover:text-red-500 transition-colors duration-200" />
            </div>
            <p className="mt-1 text-base font-bold text-gray-800 sm:text-lg lg:text-xl">
              ${product.price}
            </p>
            <p>{product.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
