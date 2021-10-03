import React from "react";

const Popularcard = ({ rank, title, store, price }) => {
  return (
    <div
      style={{ height: "150px" }}
      className='w-100 bg-white d-flex border-bottom
    border-dark'>
      <div
        className='h-100 bg-dark text-white fw-bold fs-2 d-flex 
        justify-content-center align-items-center'
        style={{ width: "15%" }}>
        <p>{rank}</p>
      </div>
      <div className='h-100 pro1' style={{ width: "40%" }}></div>
      <div className='h-100 bg-success' style={{ width: "45%" }}>
        <div
          className='w-100 h-100 bg-white ps-3 d-flex
      flex-column justify-content-center'>
          <p className='fs-5 fw-bold'>{title}</p>
          <p className='fs-6 text-warning' style={{ marginTop: "-15px" }}>
            {store}
          </p>

          <p className='fs-5 fw-bold text-dark' style={{ marginTop: "-5px" }}>
            {price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Popularcard;
