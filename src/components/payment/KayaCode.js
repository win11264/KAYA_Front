import React from "react";

const KayaCode = () => {
  return (
    <div
      className='w-100 bg-warning d-flex 
    justify-content-center align-items-center'
      style={{ height: "50px" }}>
      <form>
        <label>KAYA Code</label>
        <input
          type='text'
          className='h-50 ms-3 bg-white rounded-3 border-white'
          style={{ width: "200px" }}
        />
      </form>
    </div>
  );
};

export default KayaCode;
