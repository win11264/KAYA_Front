import React, { useContext } from "react";
import Popularproduct from "../components/home/PopularProduct";
import Promotion from "../components/home/Promotion";
import SearchBar from "../components/overviews/SearchBar";
import MallTop from "../components/shoppingMall/MallTop";
import PartnerList from "../components/shoppingMall/PartnerList";
import { ProductListContext } from "../context/productContext";
import { StoreListContext } from "../context/storeContext";

import AllProduct from "../components/shoppingMall/AllProduct";

const ShoppingMall = () => {
  const { productList, setProductList } = useContext(ProductListContext);
  const { storeList } = useContext(StoreListContext);

  return (
    <div className="bg-white" style={{ minHeight: "712px" }}>
      {/* <SearchBar /> */}
      <MallTop />
      {/* <Promotion pro='pro1' /> */}
      {/* <PartnerList />
      <Popularproduct /> */}

      <AllProduct />
    </div>
  );
};

export default ShoppingMall;
