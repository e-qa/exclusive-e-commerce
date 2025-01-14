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
      {products.length === 0 ? (
        <h5 className="text-2xl mt-16">
          Sorry, no products matched your search...
        </h5>
      ) : (
        <ProductsGrid products={products} />
      )}
    </div>
  );
};

export default ProductsContainer;
