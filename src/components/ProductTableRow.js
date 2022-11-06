import React from "react";

const ProductTableRow = ({ product, index }) => {
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
    </tr>
  );
};

export default ProductTableRow;
