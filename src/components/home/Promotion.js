import React from "react";

const Promotion = (props) => {
  return (
    <div style={{ height: "170px" }} className='d-flex'>
      <i
        class='bi bi-arrow-left-circle-fill'
        style={{
          position: "absolute",
          zIndex: "2",
          marginLeft: "7px",
          marginTop: "80px",
        }}></i>
      <div
        style={{ position: "relative", zIndex: "1" }}
        className={`w-50 h-100 bg-warning ${props.pro}`}></div>
      <div
        className='w-50 h-100 bg-white ps-3 d-flex
      flex-column justify-content-center'
        style={{ position: "relative", zIndex: "1" }}>
        <p className='fs-5 fw-bold'>Creamy Mug</p>
        <p className='fs-6 text-warning' style={{ marginTop: "-15px" }}>
          Greenery Inc.
        </p>

        <p className='fs-5 fw-bold text-danger' style={{ marginTop: "-5px" }}>
          99 KYC
        </p>

        <p
          className='fs-6 text-secondary 
        text-decoration-line-through'
          style={{ marginTop: "-20px" }}>
          130 KYC
        </p>
        <p
          className='text-secondary '
          style={{ marginTop: "-5px", fontSize: "10px" }}>
          Due Date : 10 / 11 / 21
        </p>
      </div>
      <i
        class='bi bi-arrow-right-circle-fill'
        style={{
          position: "absolute",
          zIndex: "2",
          marginLeft: "350px",
          marginTop: "80px",
        }}></i>
    </div>
  );
};

export default Promotion;
