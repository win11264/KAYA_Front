import React from "react";

const Top = (props) => {
  return (
    <div
      id='loginTop'
      className='w-100  bg-warning rounded-top
          d-flex justify-content-center align-items-center pt-3'
      style={{ height: "45px" }}>
      <p className='fw-bold fs-6'>{props.name}</p>
    </div>
  );
};

export default Top;
