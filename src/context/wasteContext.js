import axios from "axios";
import { createContext, useState, useEffect } from "react";

const WasteListContext = createContext();

function WasteListContextProvider({ children }) {
  const [wasteList, setWasteList] = useState([]);

  useEffect(() => {
    axios
      .get("/waste")
      .then((res) => {
        setWasteList(res.data.wastes);
        console.log("Context Waste", res.data.wastes);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <WasteListContext.Provider value={{ wasteList, setWasteList }}>
      {children}
    </WasteListContext.Provider>
  );
}

export { WasteListContext, WasteListContextProvider };
