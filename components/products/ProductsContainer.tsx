import { getAllProducts } from '@/utils/actions';
import ProductsGrid from './ProductsGrid';

const ProductsContainer = async ({
  layout,
  search,
}: {
  layout: string;
  search: string;
}) => {
  const products = await getAllProducts({ search });

  return (
    <div className="container mt-10">
      <ProductsGrid products={products} />
    </div>
  );
};

export default ProductsContainer;
