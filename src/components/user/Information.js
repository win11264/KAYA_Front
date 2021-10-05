import React from "react";

const Information = () => {
  return (
    <div className='w-100'>
      <div
        className='w-100 bg-dark d-flex px-2 pt-3
    justify-content-between align-items-center'
        style={{ height: "50px" }}>
        <p className='fw-bold text-white'>User Information</p>
        <p className='text-secondary'>Edit</p>
      </div>
      <form className=' d-flex justify-content-center align-items-center flex-column bg-white py-2'>
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
        <div className='d-flex py-1' style={{ marginLeft: "-105px" }}>
          <button
            className='btn btn-warning text-dark mx-2'
            style={{ fontSize: "10px" }}>
            1
          </button>
          <button
            className='btn btn-dark text-white mx-2'
            style={{ fontSize: "10px" }}>
            2
          </button>
          <button
            className='btn btn-dark text-white mx-2'
            style={{ fontSize: "10px" }}>
            3
          </button>
          <button
            className='btn btn-success text-white mx-2'
            style={{ fontSize: "10px" }}>
            +
          </button>
        </div>

        <textarea
          className='w-75 border border-warning rounded shadow-sm ps-2 my-2'
          placeholder='Home Address'
          rows='3'
          style={{ fontSize: "14px" }}></textarea>
        <div className='d-flex py-1' style={{ marginLeft: "-105px" }}>
          <button
            className='btn btn-warning text-dark mx-2'
            style={{ fontSize: "10px" }}>
            1
          </button>
          <button
            className='btn btn-dark text-white mx-2'
            style={{ fontSize: "10px" }}>
            2
          </button>
          <button
            className='btn btn-dark text-white mx-2'
            style={{ fontSize: "10px" }}>
            3
          </button>
          <button
            className='btn btn-success text-white mx-2'
            style={{ fontSize: "10px" }}>
            +
          </button>
        </div>

        <input
          className='my-2  w-75 ps-2 border border-warning rounded shadow-sm'
          id='emailInput'
          placeholder='Email Address'
          style={{ fontSize: "14px", height: "30px" }}
        />
        <div className='d-flex py-1' style={{ marginLeft: "-105px" }}>
          <button
            className='btn btn-warning text-dark mx-2'
            style={{ fontSize: "10px" }}>
            1
          </button>
          <button
            className='btn btn-dark text-white mx-2'
            style={{ fontSize: "10px" }}>
            2
          </button>
          <button
            className='btn btn-dark text-white mx-2'
            style={{ fontSize: "10px" }}>
            3
          </button>
          <button
            className='btn btn-success text-white mx-2'
            style={{ fontSize: "10px" }}>
            +
          </button>
        </div>
        <input
          className='my-2  w-75 ps-2 border border-warning rounded shadow-sm'
          id='usernameInput'
          placeholder='Mobile No.'
          style={{ fontSize: "14px", height: "30px" }}
        />

        <button
          className='w-75 bg-warning border border-warning rounded shadow-sm text-center my-2'
          style={{ fontSize: "14px", height: "30px" }}>
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default Information;
