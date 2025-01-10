import { getFeaturedProducts } from '@/utils/actions';
import ProductsGrid from '../products/ProductsGrid';
import FeaturedCarousel from './FeaturedCarousel';

const FeaturedProducts = async () => {
  const products = await getFeaturedProducts();

  return (
    <div className="container">
      <div className="block lg:flex items-center pt-5">
        <div className="w-full lg:w-4/6">
          <ProductsGrid products={products} />
        </div>

        <aside className="h-full lg:w-2/6 hidden lg:flex flex-col">
          <FeaturedCarousel />
        </aside>
      </div>
    </div>
  );
};

export default FeaturedProducts;
