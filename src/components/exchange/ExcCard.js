import React from "react";

const ExcCard = ({ title, rate }) => {
  return (
    <div
      className='rounded shadow bg-white my-2 d-flex'
      style={{ width: "90%", height: "150px" }}>
      <div
        className='w-100 h-100 bg-white ps-3 d-flex
      flex-column justify-content-center rounded-end'>
        <form className='d-flex flex-column my-4'>
          <select
            className=' w-75 mb-1 border border-warning rounded shadow-sm'
            type='file'
            style={{ fontSize: "12px", height: "22px" }}>
            <option>Plastic Bottle</option>
            <option>Plastic Bag</option>
            <option>Paper</option>
            <option>Aluminium Can</option>
          </select>

          <p
            className='text-warning'
            style={{ marginBottom: "6px", fontSize: "13px" }}>
            {rate} KYC / Piece
          </p>
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

            <i class='bi bi-x-square-fill fs-4 text-danger ms-2'></i>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ExcCard;
