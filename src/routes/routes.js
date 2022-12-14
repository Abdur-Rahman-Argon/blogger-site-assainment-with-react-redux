import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../Pages/About";
import Home from "../Pages/Home";
import NotFound from "../Pages/NotFound";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/about", element: <About></About> },
      { path: "*", element: <NotFound></NotFound> },
      // { path: "/", element: <Home></Home> },
    ],
  },
]);

export default routes;
