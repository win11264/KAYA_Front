import React from "react";

const BackHomeBtn = ({ title }) => {
  return (
    <button
      className='w-75 bg-warning border border-warning rounded shadow-sm text-center my-2 '
      style={{ fontSize: "14px", height: "30px" }}>
      {title}
    </button>
  );
};

export default BackHomeBtn;
