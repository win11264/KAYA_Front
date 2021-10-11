import React from "react";

const AddProductForm = ({ setAdd, setProductList }) => {
  //   const handleSubmitAdd = async e => {
  //     e.preventDefault()
  //     const res = await axios.post('/product',{})
  // }
  return (
    <div
      className='w-75 bg-white shadow rounded-3 my-2'
      style={{ height: "350px" }}>
      <form
        className='d-flex flex-column  h-100
        align-items-start justify-content-center py-2 px-3 fontSize'>
        <div className='my-1'>
          <label className='pe-2'>Name :</label>
          <input className='' style={{ width: "150px" }} placeholder='200' />
        </div>
        <div className='my-1'>
          <label className='pe-2'>Partner</label>
          <select>
            <option>Partner A</option>
            <option>Partner B</option>
            <option>Partner C</option>
          </select>
        </div>
        <div className='my-1'>
          <label className='pe-2'>Price :</label>
          <input className='' style={{ width: "150px" }} placeholder='200' />
        </div>
        <div className='my-1'>
          <label className='pe-2'>Amount :</label>
          <input className='' style={{ width: "150px" }} placeholder='200' />
        </div>

        <div className='my-1'>
          <label className='pe-2'>Detail :</label>
        </div>
        <div className='my-1'>
          <textarea
            className=''
            style={{ width: "250px" }}
            placeholder='Product Information'
          />
        </div>
        <div className='my-1'>
          <label className='pe-2'>Address :</label>
          <input className='' style={{ width: "150px" }} placeholder='200' />
        </div>

        <div className='my-1'>
          <label className='pe-2'>Image :</label>
          <input type='file' className='w-75' />
        </div>

        <div className='mt-2'>
          <button className='btn btn-success fontSize'>Submit</button>
          <button
            className='btn btn-danger fontSize ms-2'
            onClick={() => setAdd(0)}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProductForm;
