import ProductsContainer from '@/components/products/ProductsContainer';
import { getAllProducts } from '@/utils/actions';

const ProductsPage = async ({
  searchParams,
}: {
  searchParams: Promise<{
    layout?: string;
    search?: string;
    category?: 'MEN' | 'WOMEN';
  }>;
}) => {
  const params = await searchParams;
  const { layout = 'grid', search = '', category } = params;
  const products = await getAllProducts({ search, category });
  return (
    <ProductsContainer layout={layout} search={search} products={products} />
  );
};

export default ProductsPage;
