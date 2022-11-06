import React from "react";
import { TrashIcon } from "@heroicons/react/24/solid";
import { PencilIcon } from "@heroicons/react/24/solid";

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
        <button className="btn btn-square bg-green-600 border-0 hover:bg-green-500">
          <PencilIcon className="h-6 w-6 text-white" />
        </button>
      </td>
      <td>
        <button
          onClick={() => deleteProductHandler(product._id)}
          className="btn btn-square bg-red-600 border-0 hover:bg-red-500"
        >
          <TrashIcon className="h-6 w-6 text-white" />
        </button>
      </td>
    </tr>
  );
};

export default ProductTableRow;
