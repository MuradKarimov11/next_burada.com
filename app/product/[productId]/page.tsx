import DetailClient from "@/app/components/detail/DetailClient";
import { DetailProps } from "@/types/detailProps";
import { products } from "@/utils/Products";
import React from "react";

const Detail = ({ params }: { params: DetailProps }) => {
  const { productId } = params;

  const product = products.find((product) => product.id == productId);

  return (
    <div>
      <DetailClient product={product} />
    </div>
  );
};

export default Detail;
