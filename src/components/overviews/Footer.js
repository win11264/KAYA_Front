import React from "react";

const Footer = () => {
  return (
    <div
      className='w-100 bg-warning 
  d-flex flex-column align-items-center justify-content-center'
      style={{ height: "50px" }}>
      <p className='fw-bold' style={{ fontSize: "10px", marginTop: "15px" }}>
        Contact Us :
      </p>
      <p style={{ fontSize: "10px", marginTop: "-15px" }}>
        winthitisan@gmail.com / 086 - 368 - 7138
      </p>
    </div>
  );
};

export default Footer;
