import React from "react";

const Register = () => {
  return (
    <form
      className=' d-flex justify-content-center align-items-center flex-column bg-white'
      style={{ height: "480px" }}>
      <input
        className='my-2  w-75 ps-2 border border-warning rounded shadow-sm'
        id='firstNameInput'
        placeholder='First Name'
        style={{ fontSize: "14px", height: "30px" }}
      />
      <input
        className='my-2  w-75 ps-2 border border-warning rounded shadow-sm'
        id='lastNameInput'
        placeholder='Last Name'
        style={{ fontSize: "14px", height: "30px" }}
      />
      <input
        type='date'
        className='my-2  w-75 ps-2 border border-warning rounded shadow-sm '
        id='dateInput'
        style={{ fontSize: "14px", height: "30px", color: "gray" }}
      />
      <textarea
        className='w-75 border border-warning rounded shadow-sm ps-2 my-2'
        placeholder='Home Address'
        rows='3'
        style={{ fontSize: "14px" }}></textarea>
      <input
        className='my-2  w-75 ps-2 border border-warning rounded shadow-sm'
        id='emailInput'
        placeholder='Email Address'
        style={{ fontSize: "14px", height: "30px" }}
      />
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
      <input
        className='my-2  w-75 ps-2 border border-warning rounded shadow-sm'
        id='confirmPasswordInput'
        placeholder='Confirm Password'
        style={{ fontSize: "14px", height: "30px" }}
      />
      <button
        className='w-75 bg-warning border border-warning rounded shadow-sm text-center my-2'
        style={{ fontSize: "14px", height: "30px" }}>
        Create Account
      </button>
    </form>
  );
};

export default Register;
