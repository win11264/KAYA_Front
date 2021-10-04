import React from "react";
import Popularproduct from "../components/home/PopularProduct";
import Promotion from "../components/home/Promotion";
import SearchBar from "../components/overviews/SearchBar";
import MallTop from "../components/shoppingMall/MallTop";
import PartnerList from "../components/shoppingMall/PartnerList";

import AllProduct from "../components/shoppingMall/AllProduct";

const ShoppingMall = () => {
  return (
    <div>
      <SearchBar />
      <MallTop />
      <Promotion pro='pro1' />
      <PartnerList />
      <Popularproduct />
      <AllProduct />
    </div>
  );
};

export default ShoppingMall;
