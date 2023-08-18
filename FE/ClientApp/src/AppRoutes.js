import CustomerLogin from "./components/CustomerLogin.js";
import { Expert } from "./components/Expert.js";
import ExpertDetails from "./components/ExpertDetails.js";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import ProductDetails from "./components/ProductDetails.js";

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
  }
];

export default AppRoutes;
