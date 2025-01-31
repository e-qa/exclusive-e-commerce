import { Product } from '@prisma/client';
import Image from 'next/image';

const Images = ({
  product,
  setMainImage,
}: {
  product: Product;
  setMainImage: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <div className="flex gap-4 mt-6 justify-center">
      {product.images.map((image, index) => (
        <div key={index} className="relative w-20 h-20 cursor-pointer">
          <Image
            src={image}
            alt={`Thumbnail ${index + 1}`}
            fill
            className="object-cover rounded-lg shadow-md transition-all hover:opacity-80"
            onClick={() => setMainImage(image)}
          />
        </div>
      ))}
    </div>
  );
};

export default Images;
