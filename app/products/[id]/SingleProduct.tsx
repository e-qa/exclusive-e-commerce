'use client';
import Image from 'next/image';
import Images from './Images';
import { useState } from 'react';
import { Product } from '@prisma/client';

const SingleProduct = ({ product }: { product: Product }) => {
  const [mainImage, setMainImage] = useState(product.images[0]);
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="relative w-full h-[500px]">
            <Image
              src={mainImage}
              alt={product.name}
              fill
              className="object-cover rounded-xl shadow-xl"
            />
          </div>
          <div className="flex justify-start">
            <Images product={product} setMainImage={setMainImage} />
          </div>
        </div>

        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-gray-900">{product.name}</h1>
          <p className="text-2xl font-semibold text-blue-600">
            ${product.price.toFixed(2)}
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            {product.description}
          </p>
          <p className="text-md text-gray-500">
            Stock: {product.stock} available
          </p>

          <div className="flex gap-4 mt-6">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-all">
              Add to Cart
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-all">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
