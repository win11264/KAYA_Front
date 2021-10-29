import React, { useContext, useState } from "react";
import AddProductForm from "../../components/backhome/backProduct/AddProductForm";
import ProductItem from "../../components/backhome/backProduct/ProductItem";

import { ProductListContext } from "../../context/productContext";
import { StoreListContext } from "../../context/storeContext";

const BackProduct = () => {
  const [add, setAdd] = useState("");
  const { productList, setProductList } = useContext(ProductListContext);
  const { storeList } = useContext(StoreListContext);

  const handleAdd = e => {
    if (add === 1) {
      setAdd("");
    } else {
      setAdd(1);
    }
  };

  const storeOption = storeList.map(item => {
    return (
      <option key={item.id} value={item.id}>
        {item.name}
      </option>
    );
  });

  const storeCheck = storeList.map(item => {
    return item.id;
  });

  console.log(`storeCheck`, storeCheck);

  const check = productList.filter(item => storeCheck.includes(item.storeId));
  console.log(`check`, check);

  console.log("store option", storeOption);

  const productOption = productList.map(item => {
    return (
      <option key={item.id} value={item.id}>
        {item.name}
      </option>
    );
  });

  const productSort = check.sort(function (a, b) {
    return b.id - a.id;
  });

  return (
    <div
      className="w-100 bg-white d-flex flex-column align-items-center justify-content-start py-4"
      style={{ minHeight: "712px" }}
    >
      <p>Product List</p>
      {!add && (
        <button className="btn btn-success fontSize" onClick={handleAdd}>
          +
        </button>
      )}
      {add && (
        <AddProductForm
          storeList={storeList}
          setAdd={setAdd}
          productList={productList}
          setProductList={setProductList}
          storeOption={storeOption}
        />
      )}
      {productSort.map(item => {
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
      })}
    </div>
  );
};

export default BackProduct;
