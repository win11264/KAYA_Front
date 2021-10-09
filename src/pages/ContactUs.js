import React from "react";

const ContactUs = () => {
  return (
    <div
      className='w-100 bg-white d-flex flex-column 
    align-items-center justify-content-center'
      style={{ minHeight: "712px" }}>
      <div
        className='w-75 d-flex flex-column 
    align-items-center justify-content-center text-center my-2 mt-4'>
        <h5>Address</h5>
        <p className='text-break w-75'>
          53 Rongmueang Road Rongmueang Sub-District Pathumwan District Bangkok
          10330
        </p>
      </div>

      <div
        className='w-75 d-flex flex-column 
    align-items-center justify-content-center text-center my-2'>
        <h5>Email Address</h5>
        <p className='text-break w-75'>winthitisan@gmail.com</p>
      </div>

      <div
        className='w-75 d-flex flex-column 
    align-items-center justify-content-center text-center my-2'>
        <h5>Mobile Number</h5>
        <p className='text-break w-75'>086-368-7138</p>
      </div>

      <div
        className='w-75 d-flex flex-column 
    align-items-center justify-content-center text-center my-2 mb-4'>
        <h5>Social Media</h5>
        <div className='d-flex  align-items-center justify-content-center'>
          <i class='bi bi-facebook fs-5 mx-2'></i>
          <span>Thitisan Kawinvasin</span>
        </div>

        <div className='d-flex  align-items-center justify-content-center'>
          <i class='bi bi-instagram fs-5 mx-2'></i>
          <span>winn.ph</span>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
