import React from "react";

const ProductInform = () => {
  return (
    <>
      <div className='d-flex justify-content-between bg-white'>
        <div className='d-flex flex-column justify-content-center align-items-start ps-3'>
          <p
            style={{ marginBottom: "-1px", marginTop: "11px" }}
            className='fw-bold fs-5'>
            Product Name
          </p>
          <p className='text-warning fw-bold fs-6'>30 KYC</p>
        </div>

        <div className='d-flex flex-column justify-content-center align-items-end pe-3'>
          <p
            style={{
              marginBottom: "-1px",
              marginTop: "-2px",
              fontSize: "12px",
            }}>
            Amount : 120
          </p>
        </div>
      </div>
    </>
  );
};

export default ProductInform;
