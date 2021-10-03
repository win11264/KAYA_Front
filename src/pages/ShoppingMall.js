import React from "react";
import PartnerCard from "../components/home/PartnerCard";
import Promotion from "../components/home/Promotion";
import SearchBar from "../components/overviews/SearchBar";
import MallTop from "../components/shoppingMall/MallTop";
import PartnerList from "../components/shoppingMall/PartnerList";

const ShoppingMall = () => {
  return (
    <div>
      <SearchBar />
      <MallTop />
      <Promotion pro='pro1' />
      <PartnerList />
    </div>
  );
};

export default ShoppingMall;
