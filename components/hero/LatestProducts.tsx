import { getLatestProducts } from '@/utils/actions';
import ProductsGrid from '../products/ProductsGrid';

const LatestProducts = async () => {
  const products = await getLatestProducts();

  return (
    <div className="container">
      <h4 className="text-4xl my-10">Latest Products</h4>
      <ProductsGrid products={products} />
    </div>
  );
};

export default LatestProducts;
