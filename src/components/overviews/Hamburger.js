import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";

const Hamburger = ({ setHam }) => {
  const { user } = useContext(AuthContext);
  return (
    <div
      id='hamburger'
      className='hamburger bg-danger w-100 d-flex bg-white align-items-center justify-content-center'
      style={{ height: "100px", width: "375px", fontSize: "10px" }}>
      <div className='col h-100 d-flex align-items-center justify-content-start flex-column pt-2 text-decoration-underline'>
        <Link
          to='/exchange'
          className='text-dark text-decoration-none'
          onClick={() => setHam(false)}>
          <p>KAYA Exchange</p>
        </Link>

        {!user ? (
          <Link
            to='/loginregister'
            className='text-dark text-decoration-none'
            onClick={() => setHam(false)}>
            <p>Sign-in / Sign-up</p>
          </Link>
        ) : null}

        <Link
          to='/contactus'
          className='text-dark text-decoration-none'
          onClick={() => setHam(false)}>
          <p>Contact Us</p>
        </Link>
      </div>
      <div
        className='bg-secondary'
        style={{ width: "1px", height: "80%" }}></div>
      <div className='col h-100 d-flex align-items-center justify-content-start flex-column pt-2 text-decoration-underline'>
        <Link
          to='/mall'
          className='text-dark text-decoration-none'
          onClick={() => setHam(false)}>
          <p>KAYA Mall</p>
        </Link>
        <Link
          to='/user'
          className='text-dark text-decoration-none'
          onClick={() => setHam(false)}>
          <p>User Profile</p>
        </Link>
      </div>
    </div>
  );
};

export default Hamburger;
