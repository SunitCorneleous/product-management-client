import React from "react";
import { container } from "../styles/styles";
import { useLoaderData, useNavigate } from "react-router-dom";

const UpdateProduct = () => {
  const loadedProduct = useLoaderData();
  const navigate = useNavigate();

  //update handler
  const updateProductHandler = event => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const category = form.category.value;
    const price = form.price.value;
    const stock = form.stock.value;

    const product = {
      name,
      category,
      price,
      stock,
    };

    fetch(`http://localhost:5000/products/${loadedProduct._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then(res => res.json())
      .then(data => {
        if (data.acknowledged || data.modifiedCount > 0) {
          alert("product updated");
          navigate("/");
        }
      });
  };
  return (
    <div className={container}>
      <h1 className="text-xl text-center">Add product</h1>
      {/* form */}
      <form onSubmit={updateProductHandler} className="mx-auto w-11/12">
        {/* name field */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Product Name:</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Type product name"
            className="input input-bordered"
            defaultValue={loadedProduct.name}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* category field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Category:</span>
            </label>
            <select
              name="category"
              defaultValue={loadedProduct.category}
              className="select select-bordered w-full"
            >
              <option disabled value="default">
                Choose category
              </option>
              <option value="dairy">Dairy</option>
              <option value="vagetable">Vegetable</option>
            </select>
          </div>
          {/* price field */}
          <div className="form-control w-full mx-auto">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="number"
              name="price"
              placeholder="Enter price here"
              className="input input-bordered "
              defaultValue={loadedProduct.price}
            />
          </div>
          {/* stock field */}
          <div className="form-control w-full mx-auto">
            <label className="label">
              <span className="label-text">Stock:</span>
            </label>
            <input
              type="number"
              name="stock"
              placeholder="Enter stock here"
              className="input input-bordered"
              defaultValue={loadedProduct.stock}
            />
          </div>
          <div className="form-control w-full mx-auto"></div>
        </div>
        <button
          type="submit"
          className="btn btn-primary uppercase mt-5 w-3/5 md:w-1/5 block mx-auto"
        >
          Update product
        </button>
      </form>
    </div>
  );
};

export default UpdateProduct;
