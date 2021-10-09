import React from "react";

const BackPromo = () => {
  return (
    <div
      className='w-100 bg-white d-flex flex-column align-items-center justify-content-start py-4'
      style={{ minHeight: "712px" }}>
      <p>Promotion</p>
      <button className='btn btn-success fontSize'>+</button>
      <div
        className='w-75 bg-white shadow rounded-3 my-2'
        style={{ height: "160px" }}>
        <form
          className='d-flex flex-column  h-100
        align-items-start justify-content-center py-2 px-3 fontSize'>
          <div className='my-1'>
            <label className='pe-2'>Product :</label>
            <select>
              <option>Product A</option>
              <option>Product B</option>
              <option>Product C</option>
            </select>
          </div>

          <div className='my-1'>
            <label className='pe-2'>Discount Price :</label>
            <input className='w-25' placeholder='200' />
            <span className='ps-2'>KYC</span>
          </div>

          <div className='my-1'>
            <label className='pe-2'>Due Date :</label>
            <input type='date' />
          </div>

          <div className='mt-2'>
            <button className='btn btn-success fontSize'>Submit</button>
            <button className='btn btn-danger fontSize ms-2'>Cancel</button>
          </div>
        </form>
      </div>
      <div
        className='w-75 bg-warning fw-bold shadow rounded-3 my-2 d-flex flex-column
        align-items-start justify-content-center py-2 px-3 fontSize '
        style={{ height: "160px" }}>
        <div className='my-1'>
          <span className='pe-2'>Product :</span>
          <span className=''>A</span>
        </div>

        <div className='my-1'>
          <span className='pe-2'>Discount Price :</span>
          <span className=''>150</span>
          <span className='ps-2'>KYC</span>
        </div>

        <div className='my-1'>
          <span className='pe-2'>Due Date :</span>
          <span className=''>2021-09-22</span>
        </div>

        <div className='mt-2'>
          <button className='btn btn-success fontSize'>Edit</button>
          <button className='btn btn-danger fontSize ms-2'>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default BackPromo;
