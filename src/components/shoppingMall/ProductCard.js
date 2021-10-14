import axios from "axios";
import React, { useContext, useEffect } from "react";

const ProductCard = ({ product, store }) => {
  const storeName = store.find(item => item.id === product.storeId);

  const nameMatch = storeName?.name;

  return (
    <div
      style={{ height: "150px", width: "330px" }}
      className="bg-white d-flex rounded-2 my-2 shadow-sm"
    >
      <img
        src={product.image}
        className="h-100 pro1 rounded-start"
        style={{ width: "50%" }}
      ></img>
      <div className="h-100 bg-success rounded-end" style={{ width: "50%" }}>
        <div
          className="w-100 h-100 bg-white ps-3 d-flex
        flex-column justify-content-center rounded-end"
        >
          <p className="fs-5 fw-bold">{product.name}</p>
          <p className="fs-6 text-warning" style={{ marginTop: "-15px" }}>
            {nameMatch}
          </p>

          <p className="fs-5 fw-bold text-dark" style={{ marginTop: "-5px" }}>
            {product.price} KYC
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
