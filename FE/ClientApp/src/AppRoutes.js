import CustomerLogin from "./components/CustomerLogin.js";
import { Expert } from "./components/Expert.js";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";

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
  }

];

export default AppRoutes;
