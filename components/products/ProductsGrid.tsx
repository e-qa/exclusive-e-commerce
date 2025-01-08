import { Product } from '@prisma/client';
import Image from 'next/image';
import { FaRegHeart } from 'react-icons/fa';

const ProductsGrid = ({ products }: { products: Product[] }) => {
  return (
    <div className="grid grid-cols-3 grid-rows-2 content-center">
      {products.map((product) => {
        return (
          <div
            key={product.id}
            className="flex flex-col items-center justify-center mt-5"
          >
            <div className="relative w-80 h-80">
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                className="absolute object-cover"
              />
            </div>

            <div className="flex flex-col justify-start w-80">
              <div className="flex items-center justify-between mt-2">
                <h4>{product.name}</h4>
                <FaRegHeart className="text-xl" />
              </div>
              <p className="font-bold">${product.price}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductsGrid;