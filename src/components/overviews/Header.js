import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import Hamburger from "./Hamburger";
import { AuthContext } from "../../context/authContext";
import { removeToken } from "../../services/localStorage";

const Header = () => {
  const [ham, setHam] = useState(false);
  const { user, setUser } = useContext(AuthContext);
  const history = useHistory();

  const handleClickLogout = (e) => {
    e.preventDefault();
    removeToken();
    setUser(null);
    history.push("/");
  };

  return (
    <div>
      <div
        id='header'
        className='w-100 bg-warning d-flex align-items-center justify-content-between'
        style={{ height: "50px" }}>
        <div className='d-flex align-items-center h-100'>
          <i
            class='bi bi-list px-2'
            style={{ fontSize: "30px" }}
            onClick={() => {
              ham === false ? setHam(true) : setHam(false);
            }}></i>

          <Link to='/' className='text-decoration-none'>
            <p className='fs-16 pt-3 text-dark '>KAYA</p>
          </Link>
        </div>

        {!user ? (
          <div className='d-flex align-items-center h-100 px-2'>
            <Link
              to='/loginregister'
              className='text-dark text-decoration-none'>
              <p style={{ fontSize: "11px" }} className='px-2 pt-3'>
                Sign-in / Sign-up
              </p>
            </Link>
          </div>
        ) : user.username === "admin01" ||
          user.username === "admin02" ||
          user.username === "admin03" ? (
          <div className='d-flex align-items-center h-100 px-2'>
            <Link to='/backhome' className='text-dark text-decoration-none'>
              <p style={{ fontSize: "11px" }} className='px-2 pt-3'>
                Admin Home
              </p>
            </Link>

            <Link
              to='/loginregister'
              className='text-dark text-decoration-none'>
              <p
                style={{ fontSize: "11px" }}
                className='px-2 pt-3'
                onClick={handleClickLogout}>
                Logout
              </p>
            </Link>
          </div>
        ) : (
          <div className='d-flex align-items-center h-100'>
            <Link
              to='/loginregister'
              className='text-dark text-decoration-none'>
              <p
                style={{ fontSize: "11px" }}
                className='px-2 pt-3'
                onClick={handleClickLogout}>
                Logout
              </p>
            </Link>
            <Link to='/user' className='text-dark text-decoration-none'>
              <i
                class='bi bi-person-circle px-2'
                style={{ fontSize: "20px" }}></i>
            </Link>
            <Link to='/cart' className='text-dark text-decoration-none'>
              <i
                class='bi bi-cart-fill ps-2 pe-3'
                style={{ fontSize: "20px" }}></i>
            </Link>
          </div>
        )}
      </div>
      {ham ? <Hamburger setHam={setHam} /> : null}
    </div>
  );
};

export default Header;
