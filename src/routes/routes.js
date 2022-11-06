import { createBrowserRouter } from "react-router-dom";
import AddProduct from "../components/AddProduct";
import Home from "../components/Home";
import Main from "../layout/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/products"),
      },
      {
        path: "/addproduct",
        element: <AddProduct></AddProduct>,
      },
    ],
  },
]);
