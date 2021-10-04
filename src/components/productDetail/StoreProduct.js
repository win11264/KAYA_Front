import React from "react";
import Popularcard from "../home/PopularCard";
import Popularproduct from "../home/PopularProduct";

const StoreProduct = () => {
  return (
    <div className='w-100 bg-dark d-flex' style={{ height: "120px" }}>
      <div className='h-100 w-25 bg-success'></div>
      <div className='h-100 w-50 bg-white d-flex flex-column pt-3 px-2'>
        <p className='fs-6 fw-bold '>Store Name</p>
        <p
          className='text-warning fw-bold'
          style={{ fontSize: "13px", marginTop: "-12px" }}>
          Pathumwan, Bangkok
        </p>
        <p className='text-secondary' style={{ fontSize: "13px" }}>
          #recycle #furniture #japan
        </p>
      </div>
      <div className='h-100 w-25 bg-warning d-flex flex-column justify-content-center align-items-center pt-3'>
        <i class='bi bi-chat-left-dots-fill' style={{ fontSize: "20px" }}></i>
        <p className='text-dark text-center' style={{ fontSize: "13px" }}>
          Contact
          <br />
          Us
        </p>
      </div>
    </div>
  );
};

export default StoreProduct;
