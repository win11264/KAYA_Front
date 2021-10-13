import React, { useContext, useState } from "react";
import AddProductForm from "../../components/backhome/backProduct/AddProductForm";
import ProductItem from "../../components/backhome/backProduct/ProductItem";

import { ProductListContext } from "../../context/productContext";
import { StoreListContext } from "../../context/storeContext";

const BackProduct = () => {
  const [add, setAdd] = useState(0);
  const { productList, setProductList } = useContext(ProductListContext);
  const { storeList } = useContext(StoreListContext);

  const handleAdd = (e) => {
    if (add === 1) {
      setAdd(0);
    } else {
      setAdd(1);
    }
  };

  const storeOption = storeList.map((item) => {
    return (
      <option key={item.id} value={item.id}>
        {item.name}
      </option>
    );
  });

  const productOption = productList.map((item) => {
    return (
      <option key={item.id} value={item.id}>
        {item.name}
      </option>
    );
  });

  console.log(productOption);

  return (
    <div
      className='w-100 bg-white d-flex flex-column align-items-center justify-content-center py-4'
      style={{ minHeight: "712px" }}>
      <p>Most Popular Product</p>

      <div
        className='w-75 bg-white shadow rounded-3 my-2'
        style={{ height: "100px" }}>
        <form
          className='d-flex flex-column  h-100
        align-items-start justify-content-center py-2 px-3 fontSize'>
          <div className='my-1'>
            <label className='pe-2'>No. 1</label>
            <select>{productOption}</select>
          </div>

          <div className='my-1'>
            <label className='pe-2'>No. 2</label>
            <select>{productOption}</select>
          </div>

          <div className='my-1'>
            <label className='pe-2'>No. 3</label>
            <select>{productOption}</select>
          </div>
        </form>
      </div>

      <p>Product List</p>

      {!add && (
        <button className='btn btn-success fontSize' onClick={handleAdd}>
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

      {productList.map((item) => {
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
