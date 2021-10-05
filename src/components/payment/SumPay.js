import React from "react";

const SumPay = () => {
  return (
    <div className=' w-100 bg-white d-flex' style={{ height: "100px" }}>
      <div
        className=' h-100 bg-white d-flex
flex-column justify-content-center align-items-center rounded-end'
        style={{ width: "100%" }}>
        <p className='fs-6 fw-bold' style={{ marginBottom: "-3px" }}>
          Balance
        </p>
        <p
          className='text-warning fw-bold fs-3'
          style={{ marginBottom: "6px" }}>
          1200 KYC
        </p>
      </div>
      <div
        className=' h-100 bg-white d-flex
flex-column justify-content-center align-items-center rounded-end'
        style={{ width: "100%" }}>
        <p className='fs-6 fw-bold' style={{ marginBottom: "-3px" }}>
          Total Expense
        </p>
        <p
          className='text-warning fw-bold fs-3'
          style={{ marginBottom: "6px" }}>
          999 KYC
        </p>
      </div>
    </div>
  );
};

export default SumPay;
