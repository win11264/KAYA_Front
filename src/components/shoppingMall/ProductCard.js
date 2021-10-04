import React from "react";

const ProductCard = () => {
  return (
    <div
      style={{ height: "150px", width: "330px" }}
      className='bg-white d-flex rounded-2 my-2 shadow-sm'>
      <div className='h-100 pro1 rounded-start' style={{ width: "50%" }}></div>
      <div className='h-100 bg-success rounded-end' style={{ width: "50%" }}>
        <div
          className='w-100 h-100 bg-white ps-3 d-flex
        flex-column justify-content-center rounded-end'>
          <p className='fs-5 fw-bold'>Name</p>
          <p className='fs-6 text-warning' style={{ marginTop: "-15px" }}>
            Store Name
          </p>

          <p className='fs-5 fw-bold text-dark' style={{ marginTop: "-5px" }}>
            120 KYC
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
