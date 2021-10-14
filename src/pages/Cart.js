import React, { useContext, useState } from "react";
import CartCard from "../components/cart/CartCard";
import CartSum from "../components/cart/CartSum";
import { CartContext } from "../context/cartContext";
import { ProductListContext } from "../context/productContext";
import { StoreListContext } from "../context/storeContext";
const Cart = () => {
  const { cart, setCart } = useContext(CartContext);
  const { storeList } = useContext(StoreListContext);

  console.log("cart in cart", cart);

  const itemPrices = cart.reduce((a, c) => a + c.price * c.qty, 0);

  return (
    <div
      className='w-100 bg-sucess d-flex flex-column justify-content-center align-items-center'
      style={{}}>
      <div className=' w-100 bg-dark mb-2' style={{ height: "50px" }}>
        <p className='fs-5 pt-2 fw-bold text-center text-white'>
          Shopping Cart
        </p>
      </div>
      {cart.length === 0 && <div>Cart is Empty</div>}

      {cart.map((item) => {
        console.log("product in cart", item);
        return (
          <CartCard
            key={item.id}
            item={item}
            cart={cart}
            setCart={setCart}
            store={storeList}
          />
        );
      })}
      <CartSum itemPrices={itemPrices} />
    </div>
  );
};

export default Cart;
