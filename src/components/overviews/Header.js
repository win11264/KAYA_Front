import React from "react";

const Header = () => {
  return (
    <div
      id='header'
      className='w-100 bg-warning d-flex align-items-center justify-content-between'
      style={{ height: "50px" }}>
      <div className='d-flex align-items-center h-100'>
        <i class='bi bi-list px-2' style={{ fontSize: "30px" }}></i>
        <p className='fs-16 pt-3'>KAYA</p>
      </div>

      <div className='d-flex align-items-center h-100'>
        <p style={{ fontSize: "11px" }} className='px-2 pt-3'>
          Sign-in / Sign-up
        </p>
        <i class='bi bi-person-circle px-2' style={{ fontSize: "20px" }}></i>
        <i class='bi bi-cart-fill ps-2 pe-3' style={{ fontSize: "20px" }}></i>
      </div>
    </div>
  );
};

export default Header;
