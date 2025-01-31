import { getSingleProduct } from '@/utils/actions';
import SingleProduct from './SingleProduct';

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const product = await getSingleProduct(id);
  return <SingleProduct product={product} />;
};

export default page;
