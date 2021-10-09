import React from "react";

const BackPartner = () => {
  return (
    <div
      className='w-100 bg-white d-flex flex-column align-items-center  py-4'
      style={{ minHeight: "712px" }}>
      <p>Partner</p>

      <button className='btn btn-success fontSize'>+</button>
      <div
        className='w-75 bg-white shadow rounded-3 my-2'
        style={{ height: "200px" }}>
        <form
          className='d-flex flex-column  h-100
        align-items-start justify-content-center py-2 px-3 fontSize'>
          <div className='my-1'>
            <label className='pe-2'>Name :</label>
            <input className='' style={{ width: "150px" }} placeholder='200' />
          </div>
          <div className='my-1'>
            <label className='pe-2'>Address :</label>
            <input className='' style={{ width: "150px" }} placeholder='200' />
          </div>

          <div className='my-1 d-flex align-items-start justify-content- '>
            <label className='px-1 mt-1'>#</label>
            <input className='' style={{ width: "60px" }} placeholder='Food' />
            <label className='px-1 mt-1'>#</label>
            <input className='' style={{ width: "60px" }} placeholder='Farm' />
            <label className='px-1 mt-1'>#</label>
            <input
              className=''
              style={{ width: "60px" }}
              placeholder='Healthy'
            />
          </div>

          <div className='my-1'>
            <label className='pe-2'>Logo :</label>
            <input type='file' className='w-75' />
          </div>

          <div className='mt-2'>
            <button className='btn btn-success fontSize'>Submit</button>
            <button className='btn btn-danger fontSize ms-2'>Cancel</button>
          </div>
        </form>
      </div>
      <div
        className='w-75 bg-warning shadow rounded-3 my-2
        d-flex flex-column  align-items-start 
        justify-content-center py-2 px-3 fontSize'
        style={{ height: "200px" }}>
        <div className='my-1'>
          <span className='pe-2'>Name :</span>
          <span className=''>A Store</span>
        </div>

        <div className='my-1'>
          <span className='pe-2'>Adress :</span>
          <span className=''>Bangkok, Thailand</span>
        </div>

        <div className='my-1 d-flex align-items-start justify-content- '>
          <span className='px-1 mt-1'>#</span>
          <span className='px-1 mt-1'>Food</span>
          <span className='px-1 mt-1'>#</span>
          <span className='px-1 mt-1'>Farm</span>
          <span className='px-1 mt-1'>#</span>
          <span className='px-1 mt-1'>Healthy</span>
        </div>

        <div className='my-1'>
          <span className='pe-2'>Logo :</span>
          <span className=''>ALogo.jpg</span>
        </div>

        <div className='mt-2'>
          <button className='btn btn-success fontSize'>Edit</button>
          <button className='btn btn-danger fontSize ms-2'>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default BackPartner;
