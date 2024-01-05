import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import ForgotPassword from "../Pages/ForgotPassword";
import HomePage from "../Pages/HomePage";
import AboutUs from "../Pages/AboutUs";
import Products from "../Pages/Products";
import Reviews from "../Pages/Reviews";
import Cart from "../Pages/Cart";
import Recipes from "../Pages/Recipes";

const Router = createBrowserRouter([
    
    {
      path: "/",
      element: <HomePage/>,
    },
    {
      path: "/login",
      element: <Login/>
    },
    {
      path:"/signup",
      element:<SignUp/>
    },
    {
      path:"/forgotpassword",
      element:<ForgotPassword/>
    },
    {
      path:"/aboutus",
      element:<AboutUs/>
    },
    {
      path:"/products",
      element:<Products/>
    },
    {
      path:"/reviews",
      element:<Reviews/>
    },
    {
      path:"/cart",
      element:<Cart/>
    }, {
      path:"/recipes",
      element:<Recipes/>
    },
    
    
    {
      path:"/*",
      element: <div>Page isn't done yet</div>
    },
   
    
    
]);

export default Router
