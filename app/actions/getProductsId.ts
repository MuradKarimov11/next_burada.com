import prisma from "@/libs/prismadb";

import { IParams } from "@/types/iProductParams";

export default async function getProductsId(params: IParams) {
  const { productId } = params;
  const product = await prisma.product.findUnique({
    where: {
      id: productId,
    },
    include: {
      reviews: {
        include: {
          user: true,
        },
        orderBy: {
          createdDate: "desc",
        },
      },
    },
  });
  if (!product) {
    return null;
  }
  return product;
}
