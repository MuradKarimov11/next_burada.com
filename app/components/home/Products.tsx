import { products } from "@/utils/Products";
import Heading from "../general/Heading";
import ProductCart from "./ProductCart";

const Products = () => {
  return (
    <div>
      <Heading text="Tüm Ürünler" />
      <div className="flex items-center flex-wrap gap-3 md:gap-10 px-3 md:px-10">
        {products.map((product) => (
          <ProductCart key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
