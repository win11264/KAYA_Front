import React from "react";

const ExcCard = ({ title, rate }) => {
  return (
    <div
      className='rounded shadow bg-white my-2 d-flex'
      style={{ width: "90%", height: "150px" }}>
      <div
        id='KayaImg'
        className='h-100 bg-success rounded-start'
        style={{ width: "30%" }}></div>
      <div
        className=' h-100 bg-white ps-3 d-flex
      flex-column justify-content-center rounded-end'
        style={{ width: "70%" }}>
        <p className='fs-5 fw-bold' style={{ marginBottom: "-3px" }}>
          {title}
        </p>
        <p
          className='text-warning'
          style={{ marginBottom: "6px", fontSize: "13px" }}>
          {rate} KYC / Piece
        </p>
        <form className='d-flex flex-column'>
          <div>
            <label style={{ fontSize: "12px" }}>Image :</label>
            <input
              className='ms-2 w-75 mb-1'
              type='file'
              style={{ fontSize: "8px" }}
            />
          </div>
          <div>
            <label style={{ fontSize: "12px" }}>Amount :</label>
            <input
              className='my-2 ms-2  w-50 ps-2 border border-warning rounded shadow-sm'
              style={{ fontSize: "14px", height: "24px" }}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ExcCard;
