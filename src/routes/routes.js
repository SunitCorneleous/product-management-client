import { createBrowserRouter } from "react-router-dom";
import AddProduct from "../components/AddProduct";
import Home from "../components/Home";
import UpdateProduct from "../components/UpdateProduct";
import Main from "../layout/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addproduct",
        element: <AddProduct></AddProduct>,
      },

      {
        path: "/products/:id",
        element: <UpdateProduct></UpdateProduct>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.id}`),
      },
    ],
  },
]);
