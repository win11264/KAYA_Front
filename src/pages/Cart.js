import React from "react";
import CartCard from "../components/cart/CartCard";
import CartSum from "../components/cart/CartSum";

const Cart = () => {
  return (
    <div
      className='w-100 bg-sucess d-flex flex-column justify-content-center align-items-center'
      style={{}}>
      <div className=' w-100 bg-dark mb-2' style={{ height: "50px" }}>
        <p className='fs-5 pt-2 fw-bold text-center text-white'>
          Shopping Cart
        </p>
      </div>
      <CartCard />
      <CartCard />
      <CartCard />
      <CartCard />
      <CartSum />
    </div>
  );
};

export default Cart;
