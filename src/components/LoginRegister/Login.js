import React from "react";

const Login = () => {
  return (
    <form
      className=' d-flex justify-content-center align-items-center flex-column bg-white'
      style={{ height: "170px" }}>
      <input
        className='my-2  w-75 ps-2 border border-warning rounded shadow-sm'
        id='usernameInput'
        placeholder='Username'
        style={{ fontSize: "14px", height: "30px" }}
      />
      <input
        className='my-2  w-75 ps-2 border border-warning rounded shadow-sm'
        id='passwordInput'
        placeholder='Password'
        style={{ fontSize: "14px", height: "30px" }}
      />

      <button
        className='w-75 bg-warning border border-warning rounded shadow-sm text-center my-2'
        style={{ fontSize: "14px", height: "30px" }}>
        Login
      </button>
    </form>
  );
};

export default Login;
