import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../Pages/About";
import Home from "../Pages/Home";
import NotFound from "../Pages/NotFound";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import BlogDetailsPage from "../Pages/BlogDetailsPage";
import CreateBlog from "../Components/CreateBlog";
import LoveBlogs from "../Pages/LoveBlogs";
import ReadingHistory from "../Pages/ReadingHistory";
import Admin from "../Pages/Admin";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/about", element: <About></About> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Signup /> },
      { path: "*", element: <NotFound></NotFound> },
      {
        path: "/blog-details/:id",
        element: <BlogDetailsPage></BlogDetailsPage>,
      },
      { path: "/create-blogs", element: <CreateBlog /> },
      { path: "/love-blogs", element: <LoveBlogs /> },
      { path: "/reading-history", element: <ReadingHistory /> },
      { path: "/admin", element: <Admin /> },
    ],
  },
]);

export default routes;
