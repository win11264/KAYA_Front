import React from "react";
import { useLocation } from "react-router-dom";
import Popularcard from "../components/home/PopularCard";
import Popularproduct from "../components/home/PopularProduct";
import ProductDes from "../components/productDetail/ProductDes";
import ProductImg from "../components/productDetail/ProductImg";
import ProductInform from "../components/productDetail/ProductInform";
import StoreProduct from "../components/productDetail/StoreProduct";
import SubmitProduct from "../components/productDetail/SubmitProduct";

const ProductDetail = () => {
  const location = useLocation();
  console.log(location);

  const state = location.state;
  // console.log("state", state.store);

  // const storeName = store.find((item) => item.id === product.storeId);

  return (
    <div>
      <ProductImg img={state.product.image} />
      <ProductInform top={state.product} />
      <StoreProduct store={state.store} product={state.product} />
      <ProductDes info={state.product.information} />
      <SubmitProduct />
    </div>
  );
};

export default ProductDetail;
