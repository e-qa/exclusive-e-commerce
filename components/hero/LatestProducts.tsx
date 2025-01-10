import { getLatestProducts } from '@/utils/actions';
import ProductsGrid from '../products/ProductsGrid';

const LatestProducts = async () => {
  const products = await getLatestProducts();

  return (
    <div className="container">
      <h2 className="text-4xl my-10">Latest Products</h2>
      <ProductsGrid products={products} />
    </div>
  );
};

export default LatestProducts;
