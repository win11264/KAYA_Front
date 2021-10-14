import axios from "axios";
import React, { useContext, useState } from "react";
import CartCard from "../components/cart/CartCard";
import CartSum from "../components/cart/CartSum";
import { CartContext } from "../context/cartContext";
import { ProductListContext } from "../context/productContext";
import { StoreListContext } from "../context/storeContext";
const Cart = () => {
  const { cart, setCart } = useContext(CartContext);
  const { storeList } = useContext(StoreListContext);

  const cartArray = cart.map(item => {
    return {
      productId: item.id,
      amount: item.qty,
      price: item.price,
      value: item.price * item.amount,
    };
  });
  console.log("array", cartArray);

  console.log("cart in cart", cart);

  const itemPrices = cart.reduce((a, c) => a + c.price * c.qty, 0);

  const handleConfirmOrder = async e => {
    e.preventDefault();
    const res = await axios.post("/transaction", {
      cartArray,
    });
    setCart([]);
  };

  return (
    <div
      className="w-100 bg-white d-flex flex-column justify-content-start align-items-center"
      style={{ minHeight: "712px" }}
    >
      <div className=" w-100 bg-dark mb-2" style={{ height: "50px" }}>
        <p className="fs-5 pt-2 fw-bold text-center text-white">
          Shopping Cart
        </p>
      </div>
      {cart.length === 0 && <div>Cart is Empty</div>}

      {cart.map(item => {
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
      <CartSum
        cart={cart}
        itemPrices={itemPrices}
        submit={handleConfirmOrder}
      />
    </div>
  );
};

export default Cart;
