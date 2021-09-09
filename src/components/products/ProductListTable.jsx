import React from "react"
import { Link } from "react-router-dom";

const ProductListTable = ({ products, removeProduct, addProduct, showProduct }) => {
  return <div>
    <div style={{ width: '100%', display: 'flex', margin: '1rem 0', flexDirection: 'flex-start' }}>
      <Link to={"/productCreate"}> <button> CREATE </button> </Link>

    </div>
    <table className="table">
      <thead>
        <tr>
          <th>Index</th>
          <th>Product Name</th>
          <th>Action</th>
        </tr>
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
          <button style={{ marginLeft: '1rem' }} onClick={() => removeProduct(product)}>DELETE</button>
        </td>
      </tr>)}
    </table>
  </div>;
};

export default ProductListTable;