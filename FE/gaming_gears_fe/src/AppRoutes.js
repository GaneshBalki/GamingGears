import Cart from "./components/Cart.js";
import CustomerLogin from "./components/CustomerLogin.js";
import CustomerRegistration from "./components/CustomerRegistration.js";
import DistributorHome from "./components/DistributorHome.js";
import ExpertDetails from "./components/ExpertDetails.js";
import { FetchData } from "./components/FetchData";
import ForgotPassword from "./components/ForgotPassword.js";
import { Home } from "./components/Home";
import ProductDetails from "./components/ProductDetails.js";
import ProductsByCat from "./components/ProductsByCat.js";
import SearchResults from "./components/SearchBarComponents/SearchResults.jsx";
import Expert from './components/Expert.js'

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/expert',
    element: <Expert></Expert>
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
  },
  {
    path: '/searchresult/:input',
    element: <SearchResults></SearchResults>
  },
  {
    path: '/cart',
    element: <Cart></Cart>
  },
  {
    path: '/distributor',
    element: <DistributorHome></DistributorHome>
  }
];

export default AppRoutes;
