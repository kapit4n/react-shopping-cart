import React from "react"
import { Link } from "react-router-dom";

const ProductListTable = ({ products, removeProduct, addProduct, showProduct }) => {
  return <div>
    <button onClick={() => addProduct("New Product")}>ADD</button>
    <table class="table">
      <thead>
        <th>Index</th>
        <th>Product Name</th>
        <th>Action</th>
      </thead>
      {products.map((product, index) => <tr>
        {" "}
        <td>{index}</td> <td>{product.name}</td>
        <td>
          <Link to={"/productShow/" + index}>
            <button onClick={() => showProduct(product)} >
              SHOW
              </button>
          </Link>
          |<button onClick={() => removeProduct(product)}>DELETE</button>
        </td>
      </tr>)}
    </table>
  </div>;
};

export default ProductListTable;