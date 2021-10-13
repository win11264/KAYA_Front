import React from "react";

const ProductDes = ({ info }) => {
  return (
    <div
      className='w-100 px-3 py-3'
      style={{ height: "200px", backgroundColor: "lightgray" }}>
      <p className='fw-bold'>Product Information :</p>
      <p className='text-break w-100'>{info}</p>
    </div>
  );
};

export default ProductDes;
