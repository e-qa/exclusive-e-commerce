import db from '@/utils/db';

export const getFeaturedProducts = async () => {
  const products = await db.product.findMany({
    where: {
      isFeatured: true,
    },
  });
  return products;
};

export const getLatestProducts = async () => {
  const products = await db.product.findMany({
    where: {
      isLatest: true,
    },
  });
  return products;
};

export const getAllProducts = async ({
  search = '',
  category,
}: {
  search?: string;
  category?: 'MEN' | 'WOMEN';
}) => {
  return db.product.findMany({
    where: {
      AND: [
        {
          OR: [{ name: { contains: search, mode: 'insensitive' } }],
        },
        category ? { category } : {},
      ],
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
};
