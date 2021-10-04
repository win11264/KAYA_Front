import React from "react";
import PopularCard from "../home/PopularCard";
import ProductCard from "./ProductCard";

const AllProduct = () => {
  return (
    <div className='w-100 bg-white'>
      <div
        className='w-100 bg-dark d-flex justify-content-center align-items-center'
        style={{ height: "50px" }}>
        <label className='text-white fw-bold mx-2' for='cars'>
          Filter By :
        </label>
        <select
          id='filter'
          name='filter'
          className='rounded mx-2'
          style={{ width: "80px", fontSize: "14px" }}>
          <option value='name'>Name</option>
          <option value='price'>Price</option>
          <option value='sale'>Sale</option>
          <option value='date'>Date</option>
        </select>
      </div>
      <div className='w-100 d-flex justify-content-center align-items-center flex-column pt-4'>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <p
          className='pt-2 fw-bold text-center text-secondary'
          style={{ fontSize: "12px" }}>
          - See more -
        </p>
      </div>
    </div>
  );
};

export default AllProduct;
