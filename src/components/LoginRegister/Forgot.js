import React from "react";

const Forgot = () => {
  return (
    <form
      className=' d-flex justify-content-center align-items-center flex-column bg-white rounded-bottom'
      style={{ height: "160px" }}>
      <p className='w-75 my-2' style={{ fontSize: "14px" }}>
        We will send you a password to your email
      </p>
      <input
        className='my-2  w-75 ps-2 border border-warning rounded shadow-sm'
        id='passwordInput'
        placeholder='Password'
        style={{ fontSize: "14px", height: "30px" }}
      />

      <button
        className='w-75 bg-warning border border-warning rounded shadow-sm text-center mt-2 mb-3 shadow-sm'
        style={{ fontSize: "14px", height: "30px" }}>
        Submit
      </button>
    </form>
  );
};

export default Forgot;
