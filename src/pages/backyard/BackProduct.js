import React, { useContext, useState } from "react";
import AddProductForm from "../../components/backhome/backProduct/AddProductForm";
import { ProductListContext } from "../../context/productContext";

const BackProduct = () => {
  const [add, setAdd] = useState(0);
  const { productList, setProductList } = useContext(ProductListContext);

  const handleAdd = (e) => {
    if (add === 1) {
      setAdd(0);
    } else {
      setAdd(1);
    }
  };

  return (
    <div
      className='w-100 bg-white d-flex flex-column align-items-center justify-content-center py-4'
      style={{ minHeight: "712px" }}>
      <p>Most Popular Product</p>

      <div
        className='w-75 bg-white shadow rounded-3 my-2'
        style={{ height: "100px" }}>
        <form
          className='d-flex flex-column  h-100
        align-items-start justify-content-center py-2 px-3 fontSize'>
          <div className='my-1'>
            <label className='pe-2'>No. 1</label>
            <select>
              <option>Product A</option>
              <option>Product B</option>
              <option>Product C</option>
            </select>
          </div>

          <div className='my-1'>
            <label className='pe-2'>No. 2</label>
            <select>
              <option>Product A</option>
              <option>Product B</option>
              <option>Product C</option>
            </select>
          </div>

          <div className='my-1'>
            <label className='pe-2'>No. 3</label>
            <select>
              <option>Product A</option>
              <option>Product B</option>
              <option>Product C</option>
            </select>
          </div>
        </form>
      </div>

      <p>Product List</p>

      {!add && (
        <button className='btn btn-success fontSize' onClick={handleAdd}>
          +
        </button>
      )}

      {add && (
        <AddProductForm setAdd={setAdd} setProductList={setProductList} />
      )}
      <div
        className='w-75 bg-warning shadow rounded-3 my-2
        d-flex 
        align-items-start justify-content-center '
        style={{ height: "200px" }}>
        <div className='w-25 h-100 bg-success rounded-start'></div>
        <div className='w-75 h-100 py-2 px-3 fontSize'>
          <div className='my-1'>
            <span className='pe-2'>Name :</span>
            <span className='pe-2'>Product A</span>
          </div>
          <div className='my-1'>
            <span className='pe-2'>Partner :</span>
            <span className='pe-2'>B Store</span>
          </div>
          <div className='my-1'>
            <span className='pe-2'>Price :</span>
            <span className='pe-2'>120 KYC</span>
          </div>
          <div className='my-1'>
            <span className='pe-2'>Amount :</span>
            <span className='pe-2'>100</span>
          </div>
          <div className='my-1'>
            <span className='pe-2'>Sale :</span>
            <span className='pe-2'>15</span>
          </div>

          <div className='mt-2'>
            <button className='btn btn-success fontSize'>Submit</button>
            <button className='btn btn-danger fontSize ms-2'>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackProduct;
