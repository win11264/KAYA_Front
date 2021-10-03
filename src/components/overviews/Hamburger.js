import React from "react";

const Hamburger = () => {
  return (
    <div
      id='hamburger'
      className='hamburger bg-danger w-100 d-flex bg-white align-items-center justify-content-center'
      style={{ height: "100px", width: "375px", fontSize: "10px" }}>
      <div className='col h-100 d-flex align-items-center justify-content-start flex-column pt-2 text-decoration-underline'>
        <p>KAYA Exchange</p>
        <p>Sign-in / Sign-up</p>
        <p>Contact Us</p>
      </div>
      <div
        className='bg-secondary'
        style={{ width: "1px", height: "80%" }}></div>
      <div className='col h-100 d-flex align-items-center justify-content-start flex-column pt-2 text-decoration-underline'>
        <p>KAYA Mall</p>
        <p>User Profile</p>
      </div>
    </div>
  );
};

export default Hamburger;
