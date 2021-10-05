import React from "react";

const AddressSelect = () => {
  return (
    <div>
      <div
        className='w-100 bg-warning d-flex justify-content-center align-items-center'
        style={{ height: "40px" }}>
        <form>
          <label>Address Option</label>
          <select
            id='filter'
            name='filter'
            className='rounded mx-2'
            style={{ width: "40px", fontSize: "14px" }}>
            <option value='name'>1</option>
            <option value='price'>2</option>
            <option value='sale'>3</option>
            <option value='date'>4</option>
          </select>
        </form>
      </div>

      <div
        className='w-100 px-3 py-3'
        style={{ height: "120px", backgroundColor: "lightgray" }}>
        <p className='text-break w-100'>
          53 Rongmueang Road , Rongmueang Sub-District, Pathumwan District,
          Bangkok, 10330
        </p>
      </div>
    </div>
  );
};

export default AddressSelect;
