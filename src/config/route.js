import Home from "../pages/Home";
import LoginRegister from "../pages/LoginRegister";
import Exchange from "../pages/Exchange";
import ShoppingMall from "../pages/ShoppingMall";
import ProductDetail from "../pages/ProductDetail";
import Cart from "../pages/Cart";
import Payment from "../pages/Payment";
import UserProfile from "../pages/UserProfile";
import ContactUs from "../pages/ContactUs";
import BackHome from "../pages/backyard/BackHome";
import BackExc from "../pages/backyard/BackExc";
import BackPartner from "../pages/backyard/BackPartner";
import BackProduct from "../pages/backyard/BackProduct";
import BackPromo from "../pages/backyard/BackPromo";
import BackUser from "../pages/backyard/BackUser";

const route = {
  user: {
    route: [
      {
        path: "/",
        component: Home,
      },
      {
        path: "/Exchange",
        component: Exchange,
      },
      {
        path: "/mall",
        component: ShoppingMall,
      },
      {
        path: "/product",
        component: ProductDetail,
      },
      {
        path: "/cart",
        component: Cart,
      },
      {
        path: "/payment",
        component: Payment,
      },
      {
        path: "/user",
        component: UserProfile,
      },
      {
        path: "/contactus",
        component: ContactUs,
      },
    ],
    redirect: "/",
  },
  guest: {
    route: [
      {
        path: "/",
        component: Home,
      },
      {
        path: "/Exchange",
        component: Exchange,
      },
      {
        path: "/mall",
        component: ShoppingMall,
      },
      {
        path: "/product",
        component: ProductDetail,
      },
      {
        path: "/contactus",
        component: ContactUs,
      },
      {
        path: "/loginregister",
        component: LoginRegister,
      },
    ],
    redirect: "/loginregister",
  },
  admin: {
    route: [
      {
        path: "/",
        component: Home,
      },
      {
        path: "/Exchange",
        component: Exchange,
      },
      {
        path: "/mall",
        component: ShoppingMall,
      },
      {
        path: "/product",
        component: ProductDetail,
      },
      {
        path: "/cart",
        component: Cart,
      },
      {
        path: "/payment",
        component: Payment,
      },
      {
        path: "/user",
        component: UserProfile,
      },
      {
        path: "/contactus",
        component: ContactUs,
      },
      {
        path: "/backhome",
        component: BackHome,
      },
      {
        path: "/backExc",
        component: BackExc,
      },
      {
        path: "/backPartner",
        component: BackPartner,
      },
      {
        path: "/backProduct",
        component: BackProduct,
      },
      {
        path: "/backPromo",
        component: BackPromo,
      },
      {
        path: "/backuser",
        component: BackUser,
      },

      //       import BackHome from "../pages/backyard/BackHome";
      // import BackExc from "../pages/backyard/BackExc";
      // import BackPartner from "../pages/backyard/BackPartner";
      // import BackProduct from "../pages/backyard/BackProduct";
      // import BackPromo from "../pages/backyard/BackPromo";
      // import BackUser from "../pages/backyard/BackUser";
    ],
    redirect: "/backhome",
  },
};

export default route;
