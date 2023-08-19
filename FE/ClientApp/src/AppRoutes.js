import CustomerLogin from "./components/CustomerLogin.js";
import CustomerRegistration from "./components/CustomerRegistration.js";
import { Expert } from "./components/Expert.js";
import ExpertDetails from "./components/ExpertDetails.js";
import { FetchData } from "./components/FetchData";
import ForgotPassword from "./components/ForgotPassword.js";
import { Home } from "./components/Home";
import ProductDetails from "./components/ProductDetails.js";
import ProductsByCat from "./components/ProductsByCat.js";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/counter',
    element: <Expert />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
  },
  {
    path: '/customerlogin',
    element: <CustomerLogin></CustomerLogin>
  },
  {
    path: '/products/:pid',
    element: <ProductDetails></ProductDetails>
  },
  {
    path: '/experts/:expid',
    element: <ExpertDetails></ExpertDetails>
  },
  {
    path: '/category-products/:catid',
    element: <ProductsByCat></ProductsByCat>
  },
  {
    path: '/customer-registration',
    element: <CustomerRegistration></CustomerRegistration>
  },
  {
    path: '/forgot-password/:email',
    element: <ForgotPassword></ForgotPassword>
  }
];

export default AppRoutes;
