import React, { useContext } from "react";
import PopularCard from "../home/PopularCard";
import ProductCard from "./ProductCard";
import { ProductListContext } from "../../context/productContext";
import { StoreListContext } from "../../context/storeContext";
import { Link } from "react-router-dom";

const AllProduct = () => {
  const { productList, setProductList } = useContext(ProductListContext);
  const { storeList } = useContext(StoreListContext);

  const storeCheck = storeList.map(item => {
    return item.id;
  });

  const check = productList.filter(item => storeCheck.includes(item.storeId));
  console.log(`check`, check);

  console.log(`storeList`, storeList);

  console.log(`productList`, productList);

  console.log(`storeCheck`, storeCheck);
  return (
    <div className="w-100 bg-white">
      {/* <div
        className="w-100 bg-dark d-flex justify-content-center align-items-center"
        style={{ height: "50px" }}
      >
        <label className="text-white fw-bold mx-2" for="cars">
          Filter By :
        </label>
        <select
          id="filter"
          name="filter"
          className="rounded mx-2"
          style={{ width: "80px", fontSize: "14px" }}
        >
          <option value="name">Name</option>
          <option value="price">Price</option>
          <option value="sale">Sale</option>
          <option value="date">Date</option>
        </select>
      </div> */}
      <div className="w-100 d-flex justify-content-center align-items-center flex-column pt-4">
        {check.map(product => {
          return (
            <Link
              to={{
                pathname: "/productdetail",
                state: { key: product.id, product: product, store: storeList },
              }}
            >
              <ProductCard
                key={product.id}
                product={product}
                store={storeList}
              />
            </Link>
          );
        })}
        {/* <p
          className='pt-2 fw-bold text-center text-secondary'
          style={{ fontSize: "12px" }}>
          - See more -
        </p> */}
      </div>
    </div>
  );
};

export default AllProduct;
