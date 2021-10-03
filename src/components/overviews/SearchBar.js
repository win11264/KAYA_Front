import React from "react";

const SearchBar = () => {
  return (
    <div className='w-100 bg-dark d-flex ' style={{ height: "50px" }}>
      <form className='d-flex ms-3 justify-content-center align-items-center'>
        <label className='text-white ' style={{ fontSize: "12px" }}>
          What are you looking for?
        </label>
        <input
          className='ms-3 ps-2 border rounded shadow-sm'
          style={{ fontSize: "14px", height: "22px", width: "150px" }}
        />
        <button type='button' className='btn bg-dark border-none'>
          <i class='bi bi-search text-white'></i>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
