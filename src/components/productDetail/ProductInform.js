import React from "react";

const ProductInform = ({ top }) => {
  return (
    <>
      <div className='d-flex justify-content-between bg-white'>
        <div className='d-flex flex-column justify-content-center align-items-start ps-3'>
          <p
            style={{ marginBottom: "-1px", marginTop: "11px" }}
            className='fw-bold fs-5'>
            {top.name}
          </p>
          <p className='text-warning fw-bold fs-6'>{top.price} KYC</p>
        </div>

        <div className='d-flex flex-column justify-content-center align-items-end pe-3'>
          <p
            style={{
              marginBottom: "-1px",
              marginTop: "-2px",
              fontSize: "12px",
            }}>
            Amount : {top.amount}
          </p>
        </div>
      </div>
    </>
  );
};

export default ProductInform;
