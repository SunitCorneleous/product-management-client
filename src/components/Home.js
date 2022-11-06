import React from "react";
import { useLoaderData } from "react-router-dom";
import { container } from "../styles/styles";
import ProductTableRow from "./ProductTableRow";

const Home = () => {
  const products = useLoaderData();

  console.log(products);
  return (
    <div className={container}>
      <h1 className="text-center mb-5 text-2xl">This is home page</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Stock</th>
            </tr>
          </thead>
          <tbody>
            {products?.map(product => (
              <ProductTableRow
                key={product._id}
                product={product}
                index={products.indexOf(product)}
              ></ProductTableRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
