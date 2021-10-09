import "./App.css";
import { useContext } from "react";
import { AuthContext } from "./context/authContext";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Container from "./components/overviews/Container";
import Home from "./pages/Home";
import Header from "./components/overviews/Header";
import Footer from "./components/overviews/Footer";
import LoginRegister from "./pages/LoginRegister";
import Exchange from "./pages/Exchange";
import ShoppingMall from "./pages/ShoppingMall";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Payment from "./pages/Payment";
import UserProfile from "./pages/UserProfile";
import ContactUs from "./pages/ContactUs";
import BackHome from "./pages/backyard/BackHome";
import { useState } from "react";
import BackPromo from "./pages/backyard/BackPromo";
import BackPartner from "./pages/backyard/BackPartner";
import BackProduct from "./pages/backyard/BackProduct";
import BackExc from "./pages/backyard/BackExc";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <>
      <Switch>
        <Container>
          <Header />
          {/* Frontyard */}

          {!user ? (
            <>
              <Route exact path='/loginregister' component={LoginRegister} />
              <Route exact path='/exchange' component={Exchange} />
              <Route exact path='/productdetail' component={ProductDetail} />
              <Route exact path='/mall' component={ShoppingMall} />
              <Route exact path='/contactus' component={ContactUs} />

              <Route exact path='/' component={Home} />
              <Redirect to='/loginregister' />
            </>
          ) : user.username === "admin01" ||
            user.username === "admin02" ||
            user.username === "admin03" ? (
            <>
              <Route exact path='/loginregister' component={LoginRegister} />
              <Route exact path='/exchange' component={Exchange} />
              <Route exact path='/productdetail' component={ProductDetail} />
              <Route exact path='/mall' component={ShoppingMall} />
              <Route exact path='/cart' component={Cart} />
              <Route exact path='/payment' component={Payment} />
              <Route exact path='/user' component={UserProfile} />
              <Route exact path='/contactus' component={ContactUs} />
              {/* Backyard */}
              <Route exact path='/backhome' component={BackHome} />
              <Route exact path='/backpromo' component={BackPromo} />
              <Route exact path='/backpartner' component={BackPartner} />
              <Route exact path='/backproduct' component={BackProduct} />
              <Route exact path='/backexc' component={BackExc} />

              <Route exact path='/' component={Home} />
            </>
          ) : (
            <>
              <Route exact path='/loginregister' component={LoginRegister} />
              <Route exact path='/exchange' component={Exchange} />
              <Route exact path='/productdetail' component={ProductDetail} />
              <Route exact path='/mall' component={ShoppingMall} />
              <Route exact path='/cart' component={Cart} />
              <Route exact path='/payment' component={Payment} />
              <Route exact path='/user' component={UserProfile} />
              <Route exact path='/contactus' component={ContactUs} />
              <Route exact path='/' component={Home} />
            </>
          )}

          <Footer />
        </Container>
      </Switch>
    </>
  );
}

export default App;
