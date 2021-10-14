import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/authContext";
import { WasteListContextProvider } from "./context/wasteContext";
import { CartContextProvider } from "./context/cartContext";
import { ProductListContextProvider } from "./context/productContext";
import { StoreListContextProvider } from "./context/storeContext";
import { UserDetailContextProvider } from "./context/userDetailContext";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <StoreListContextProvider>
        <CartContextProvider>
          <ProductListContextProvider>
            <WasteListContextProvider>
              <AuthContextProvider>
                {/* <UserDetailContextProvider> */}
                <App />
                {/* </UserDetailContextProvider> */}
              </AuthContextProvider>
            </WasteListContextProvider>
          </ProductListContextProvider>
        </CartContextProvider>
      </StoreListContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
