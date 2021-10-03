import React from "react";

const Quicklink = (props) => {
  return (
    <div
      className='w-50 bg-white d-flex align-items-center justify-content-center'
      style={{ height: "200px" }}>
      <div
        className='bg-white shadow-sm w-75 h-75 rounded-3 d-flex flex-column 
        align-items-center justify-content-center '
        id={`quick${props.id}`}>
        <p
          className='text-wrap text-white fw-bold fs-3'
          style={{ marginBottom: "-5px", textShadow: "1px 1px 2px #000000" }}>
          {props.title}
        </p>
        <p className='text-wrap text-white fw-bold fs-3'>{props.subtitle}</p>
      </div>
    </div>
  );
};

export default Quicklink;
