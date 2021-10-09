import React from "react";
import Login from "../components/LoginRegister/Login";
import Register from "../components/LoginRegister/Register";
import { useState } from "react";
import Forgot from "../components/LoginRegister/Forgot";

const LoginRegister = () => {
  const [login, setLogin] = useState(1);
  const [register, setRegister] = useState(0);
  const [forgot, setForgot] = useState(0);
  return (
    <div
      className='w-100 d-flex justify-content-center py-4 bg-white'
      style={{ minHeight: "712px" }}>
      <div id='card' className='w-75 h-100 bg-white rounded-3 shadow'>
        <div
          id='loginTop'
          className='w-100  bg-warning rounded-top
            d-flex justify-content-center align-items-center pt-3'
          style={{ height: "45px" }}
          onClick={(e) => {
            login === 0 ? setLogin(1) : setLogin(0);
          }}>
          <p className='fw-bold fs-6'>Login</p>
        </div>
        {login ? <Login /> : null}

        <div
          id='registerTop'
          className='w-100  bg-warning 
            d-flex justify-content-center align-items-center pt-3'
          style={{ height: "45px" }}
          onClick={(e) => {
            register === 0 ? setRegister(1) : setRegister(0);
          }}>
          <p className='fw-bold fs-6'>Register</p>
        </div>
        {register ? (
          <Register setLogin='setLogin' setRegister='setRegister' />
        ) : null}

        <div
          id='forgotPasswordTop'
          className='w-100  bg-warning 
            d-flex justify-content-center align-items-center pt-3'
          style={{ height: "45px" }}
          onClick={(e) => {
            forgot === 0 ? setForgot(1) : setForgot(0);
          }}>
          <p className='fw-bold fs-6'>Forgot Password</p>
        </div>
        {forgot ? <Forgot /> : null}
      </div>
    </div>
  );
};

export default LoginRegister;
