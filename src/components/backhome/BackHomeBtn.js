import React from "react";
import { Link } from "react-router-dom";

const BackHomeBtn = ({ title, link }) => {
  return (
    <Link to={link} className='w-75'>
      <button
        className='w-100 bg-warning border border-warning rounded shadow-sm text-center my-4 '
        style={{ fontSize: "14px", height: "50px" }}>
        {title}
      </button>
    </Link>
  );
};

export default BackHomeBtn;
