import React from "react";
import { container } from "../styles/styles";

const AddProduct = () => {
  //submit handler
  const addProductHandler = event => {
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

    console.log(product);
  };

  return (
    <div className={container}>
      <h1 className="text-xl text-center">Add product</h1>
      {/* form */}
      <form onSubmit={addProductHandler} className="mx-auto w-11/12">
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
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Category:</span>
            </label>
            <select name="category" className="select select-bordered w-full">
              <option disabled selected>
                Choose category
              </option>
              <option value="dairy">Dairy</option>
              <option value="vagetable">Vegetable</option>
            </select>
          </div>
          <div className="form-control w-full mx-auto">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="number"
              name="price"
              placeholder="Enter price here"
              className="input input-bordered "
            />
          </div>
          <div className="form-control w-full mx-auto">
            <label className="label">
              <span className="label-text">Stock:</span>
            </label>
            <input
              type="number"
              name="stock"
              placeholder="Enter stock here"
              className="input input-bordered "
            />
          </div>
          <div className="form-control w-full mx-auto"></div>
        </div>
        <button
          type="submit"
          className="btn btn-primary uppercase mt-5 w-3/5 md:w-1/5 block mx-auto"
        >
          Add product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
