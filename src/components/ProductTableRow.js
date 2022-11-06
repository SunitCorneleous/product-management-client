import React from "react";

const ProductTableRow = ({ product, index, deleteProductHandler }) => {
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{product.name}</td>
      <td>{product.category}</td>
      <td>
        <span className="text-green-700 font-bold">{product.price}</span>
      </td>
      <td>
        <span className="text-orange-600 font-bold">{product.stock}</span> units
      </td>
      <td>
        <button
          onClick={() => deleteProductHandler(product._id)}
          className="btn bg-red-600 border-0 hover:bg-red-500"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ProductTableRow;
