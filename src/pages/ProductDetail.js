import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import Popularcard from "../components/home/PopularCard";
import Popularproduct from "../components/home/PopularProduct";
import ProductDes from "../components/productDetail/ProductDes";
import ProductImg from "../components/productDetail/ProductImg";
import ProductInform from "../components/productDetail/ProductInform";
import StoreProduct from "../components/productDetail/StoreProduct";
import SubmitProduct from "../components/productDetail/SubmitProduct";
import { CartContext } from "../context/cartContext";

const ProductDetail = () => {
  const location = useLocation();
  // console.log(location);
  const { cart, setCart } = useContext(CartContext);
  console.log("product", location.state.product);
  const state = location.state;
  console.log("state", state);

  // const storeName = store.find((item) => item.id === product.storeId);
  // console.log("cart", cart);
  // console.log("product", state.product);
  return (
    <div>
      <ProductImg img={state.product.image} />
      <ProductInform top={state.product} />
      <StoreProduct store={state.store} product={state.product} />
      <ProductDes info={state.product.information} />
      <SubmitProduct cart={cart} setCart={setCart} product={state.product} />
    </div>
  );
};

export default ProductDetail;
