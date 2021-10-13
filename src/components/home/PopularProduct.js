import React, { useContext } from "react";
import { ProductListContext } from "../../context/productContext";
import { StoreListContext } from "../../context/storeContext";

import Popularcard from "./PopularCard";

const Popularproduct = () => {
  const { productList, setProductList } = useContext(ProductListContext);
  const { storeList } = useContext(StoreListContext);

  return (
    <div style={{ height: "500px" }}>
      <div className='bg-warning' style={{ height: "50px" }}>
        <p className='fs-5 pt-2 fw-bold text-center'>KAYA Mall Top Chart</p>
      </div>
      {/* {productList.map((item) => {
        return (
          <ProductItem
            productList={productList}
            setProductList={setProductList}
            key={item.id}
            list={item}
            productList={productList}
            storeList={storeList}
            storeOption={storeOption}
          />
          
        );
      })} */}

      {productList.map((item) => {
        return <Popularcard productList={productList} rank='1' />;
      })}
      {productList.map((item) => {
        return <Popularcard productList={productList} rank='2' />;
      })}
      {productList.map((item) => {
        return <Popularcard productList={productList} rank='3' />;
      })}
    </div>
  );
};

export default Popularproduct;
