import React from "react";
import Popularcard from "../components/home/PopularCard";
import Popularproduct from "../components/home/PopularProduct";
import ProductDes from "../components/productDetail/ProductDes";
import ProductImg from "../components/productDetail/ProductImg";
import ProductInform from "../components/productDetail/ProductInform";
import StoreProduct from "../components/productDetail/StoreProduct";
import SubmitProduct from "../components/productDetail/SubmitProduct";

const ProductDetail = () => {
  return (
    <div>
      <ProductImg />
      <ProductInform />
      <StoreProduct />
      <ProductDes />
      <SubmitProduct />
    </div>
  );
};

export default ProductDetail;
