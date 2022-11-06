import React, { useEffect, useState } from "react";
import { container } from "../styles/styles";
import ProductTableRow from "./ProductTableRow";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const deleteProductHandler = id => {
    fetch(`http://localhost:5000/products/${id}`, {
      method: "DELETE",
    })
      .then(res => res.json())
      .then(data => {
        if (data.acknowledged || data.deletedCount > 0) {
          const remaining = products.filter(product => product._id !== id);

          setProducts(remaining);

          alert("successfully deleted");
        }
      });
  };

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
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {products?.map(product => (
              <ProductTableRow
                key={product._id}
                product={product}
                index={products.indexOf(product)}
                deleteProductHandler={deleteProductHandler}
              ></ProductTableRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
