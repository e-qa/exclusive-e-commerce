import { getFeaturedProducts } from '@/utils/actions';
import ProductsGrid from '../products/ProductsGrid';

const FeaturedProducts = async () => {
  const products = await getFeaturedProducts();
  return (
    <div className="container">
      <ProductsGrid products={products} />
    </div>
  );
};

export default FeaturedProducts;
