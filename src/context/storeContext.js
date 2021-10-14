import axios from "axios";
import { createContext, useState, useEffect } from "react";

const StoreListContext = createContext();

function StoreListContextProvider({ children }) {
  const [storeList, setStoreList] = useState([]);

  useEffect(() => {
    axios
      .get("/store")
      .then(res => {
        setStoreList(res.data.store);
        console.log("context Store", storeList);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <StoreListContext.Provider value={{ storeList, setStoreList }}>
      {children}
    </StoreListContext.Provider>
  );
}

export { StoreListContext, StoreListContextProvider };
