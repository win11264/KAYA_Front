import React from "react";

const CartSum = () => {
  return (
    <div
      className='rounded shadow bg-white my-2 d-flex'
      style={{ width: "90%", height: "150px" }}>
      <div
        className=' h-100 bg-white d-flex
  flex-column justify-content-center align-items-center rounded-end'
        style={{ width: "100%" }}>
        <p className='fs-5 fw-bold' style={{ marginBottom: "-3px" }}>
          Total
        </p>
        <p
          className='text-warning fw-bold fs-1'
          style={{ marginBottom: "6px" }}>
          999 KYC
        </p>
        <button
          type='button'
          class='btn btn-success'
          style={{ fontSize: "12px", width: "150px" }}>
          Confirm Order
        </button>
      </div>
    </div>
  );
};

export default CartSum;
