import React from "react";
import Login from "../components/LoginRegister/Login";
import Register from "../components/LoginRegister/Register";

const LoginRegister = () => {
  return (
    <div className='w-100 d-flex justify-content-center py-4 bg-white'>
      <div id='card' className='w-75 bg-white rounded-3 shadow'>
        <div
          id='loginTop'
          className='w-100  bg-warning rounded-top
            d-flex justify-content-center align-items-center pt-3'
          style={{ height: "45px" }}>
          <p className='fw-bold fs-6'>Login</p>
        </div>
        <Login />
        <div
          id='registerTop'
          className='w-100  bg-warning 
            d-flex justify-content-center align-items-center pt-3'
          style={{ height: "45px" }}>
          <p className='fw-bold fs-6'>Register</p>
        </div>
        <Register />
        <div
          id='forgotPasswordTop'
          className='w-100  bg-warning 
            d-flex justify-content-center align-items-center pt-3'
          style={{ height: "45px" }}>
          <p className='fw-bold fs-6'>Forgot Password</p>
        </div>
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
      </div>
    </div>
  );
};

export default LoginRegister;
