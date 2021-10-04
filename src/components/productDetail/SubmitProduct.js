import React from "react";

const SubmitProduct = () => {
  return (
    <div
      className='w-100 bg-white d-flex justify-content-center'
      style={{ height: "60px" }}>
      <button
        type='button'
        className='btn btn-warning d-flex justify-content-center m-2'
        style={{ width: "150px" }}>
        <p>Add to Cart</p>
        <i class='bi bi-cart-fill mx-2'></i>
      </button>
      <button
        type='button'
        className='btn btn-success d-flex justify-content-center m-2'
        style={{ width: "150px" }}>
        <p>Buy Now</p>
        <i class='bi bi-cash-coin mx-2'></i>
      </button>
    </div>
  );
};

export default SubmitProduct;
