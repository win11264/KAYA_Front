import "./App.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Container from "./components/overviews/Container";
import Home from "./pages/Home";
import Header from "./components/overviews/Header";
import Footer from "./components/overviews/Footer";
import Hamburger from "./components/overviews/Hamburger";
import LoginRegister from "./pages/LoginRegister";
import Exchange from "./pages/Exchange";
import ShoppingMall from "./pages/ShoppingMall";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Payment from "./pages/Payment";
import UserProfile from "./pages/UserProfile";
import ContactUs from "./pages/ContactUs";
import BackHome from "./pages/BackHome";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Container>
            <Header />
            <Hamburger />
            <Route exact path='/loginregister' component={LoginRegister} />
            <Route exact path='/exchange' component={Exchange} />
            <Route exact path='/productdetail' component={ProductDetail} />
            <Route exact path='/mall' component={ShoppingMall} />
            <Route exact path='/cart' component={Cart} />
            <Route exact path='/payment' component={Payment} />
            <Route exact path='/user' component={UserProfile} />
            <Route exact path='/contactus' component={ContactUs} />

            <Route excat path='/backhome' component={BackHome} />

            <Route exact path='/' component={Home} />

            <Footer />
          </Container>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
