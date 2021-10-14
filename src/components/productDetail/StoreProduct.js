import React from "react";
import Popularcard from "../home/PopularCard";
import Popularproduct from "../home/PopularProduct";

const StoreProduct = ({ store, product }) => {
  const storeName = store.find((item) => item.id === product.storeId);
  console.log("store", store);
  console.log("product", product);
  console.log(storeName);
  return (
    <div className='w-100 bg-dark d-flex' style={{ height: "120px" }}>
      <img src={storeName.image} className='h-100 w-25 bg-success'></img>
      <div className='h-100 w-50 bg-white d-flex flex-column pt-3 px-2'>
        <p className='fs-6 fw-bold '>{storeName.name}</p>
        <p
          className='text-warning fw-bold'
          style={{ fontSize: "13px", marginTop: "-12px" }}>
          {storeName.address}
        </p>
        <p className='text-secondary' style={{ fontSize: "13px" }}>
          {storeName.hashtag}
        </p>
      </div>
      <a href={storeName.contact} className='h-100 w-25'>
        <div className='h-100 w-100 bg-warning d-flex flex-column justify-content-center align-items-center pt-3'>
          <i class='bi bi-chat-left-dots-fill' style={{ fontSize: "20px" }}></i>
          <p className='text-dark text-center' style={{ fontSize: "13px" }}>
            Contact
            <br />
            Us
          </p>
        </div>
      </a>
    </div>
  );
};

export default StoreProduct;
