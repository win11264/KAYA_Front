import axios from "axios";
import { createContext, useState, useEffect } from "react";

const ProductListContext = createContext();

function ProductListContextProvider({ children }) {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    axios
      .get("/product")
      .then((res) => {
        console.log(res.data);
        setProductList(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <ProductListContext.Provider value={{ productList, setProductList }}>
      {children}
    </ProductListContext.Provider>
  );
}

export { ProductListContext, ProductListContextProvider };
