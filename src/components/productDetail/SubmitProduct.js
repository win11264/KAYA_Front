import React from "react";

const SubmitProduct = ({ cart, setCart, product }) => {
  const handleAddCart = (item) => {
    const idx = cart.findIndex((x) => x.id === item.id);
    const newCart = [...cart];
    if (idx > -1) {
      newCart[idx] = { ...newCart[idx], qty: newCart[idx].qty + 1 };
    } else {
      newCart.push({ ...item, qty: 1 });
    }
    setCart(newCart);
    console.log("idx", idx);
    console.log("newCart", newCart);
  };
  return (
    <div
      className='w-100 bg-white d-flex justify-content-center'
      style={{ height: "60px" }}>
      <button
        type='button'
        className='btn btn-warning d-flex justify-content-center m-2'
        style={{ width: "150px" }}
        onClick={() => handleAddCart(product)}>
        <p>Add to Cart</p>
        <i class='bi bi-cart-fill mx-2'></i>
      </button>
      <button
        type='button'
        className='btn btn-success d-flex justify-content-center m-2'
        style={{ width: "150px" }}>
        <p>Buy Now</p>
        <i class='bi bi-cash-coin mx-2'></i>
      </button>
    </div>
  );
};

export default SubmitProduct;
