import React from "react";

const CardEdit = () => {
  return (
    <div
      className='w-100 bg-sucess d-flex justify-content-center align-items-center'
      style={{ height: "30px", marginTop: "-10px" }}>
      <form>
        <button
          className='btn btn-warning pt-1 '
          style={{ fontSize: "10px", width: "15px", height: "22px" }}>
          -
        </button>
        <input style={{ fontSize: "10px" }} className='w-25' />
        <button
          className='btn btn-warning pt-1'
          style={{ fontSize: "10px", width: "15px", height: "22px" }}>
          +
        </button>
        <button
          className='btn btn-danger pt-1 mx-1 fw-bold ps-2 '
          style={{ fontSize: "10px", width: "50px", height: "22px" }}>
          Delete
        </button>
      </form>
    </div>
  );
};

export default CardEdit;
