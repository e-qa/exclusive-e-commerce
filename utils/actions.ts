import db from '@/utils/db';

export const getFeaturedProducts = async () => {
  const products = await db.product.findMany({
    where: {
      isFeatured: true,
    },
  });
  return products;
};
