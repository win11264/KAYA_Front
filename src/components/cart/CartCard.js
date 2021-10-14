import React, { useContext } from "react";
import CardEdit from "./CardEdit";
import { ProductListContext } from "../../context/productContext";

const CartCard = ({ item, cart, setCart, store }) => {
  const { productList, setProductList } = useContext(ProductListContext);
  console.log("card item", item);
  console.log("cart cart", cart);
  const storeName = store.find((storeidx) => storeidx.id === item.storeId);
  const nameMatch = storeName.name;

  const handleAddCart = (item) => {
    const idx = cart.findIndex((x) => x.id === item.id);

    const newCart = [...cart];

    newCart[idx] = { ...newCart[idx], qty: newCart[idx].qty + 1 };

    console.log(idx);
    console.log(newCart);
    setCart(newCart);
  };

  const onRemove = (item) => {
    // const exist = cartItems.find(x => x.id === product.id)
    if (item.qty === 1) {
      setCart(cart.filter((x) => x.id !== item.id));
    } else {
      setCart(
        cart.map((x) => (x.id === item.id ? { ...item, qty: item.qty - 1 } : x))
      );
    }
  };

  return (
    <div
      style={{ height: "150px", width: "330px" }}
      className='bg-white d-flex rounded-2 my-2 shadow-sm'>
      <img
        src={item.image}
        className='h-100 rounded-start'
        style={{ width: "50%" }}
      />
      <div className='h-100 bg-success rounded-end' style={{ width: "50%" }}>
        <div
          className='w-100 h-100 bg-white ps-3 d-flex
    flex-column justify-content-center rounded-end'>
          <p className='fs-5 fw-bold'>{item.name}</p>
          <p className='fs-6 text-warning' style={{ marginTop: "-15px" }}>
            {nameMatch}
          </p>

          <p className='fs-5 fw-bold text-dark' style={{ marginTop: "-5px" }}>
            {item.qty * item.price}
          </p>
          <CardEdit
            add={handleAddCart}
            remove={onRemove}
            item={item}
            store={store}
          />
        </div>
      </div>
    </div>
  );
};

export default CartCard;
