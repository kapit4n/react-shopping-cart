import React from "react"

const ProductListTable = ({ products }) => {
  return <div>
      <table>
        <thead>
          <th>Index</th>
          <th>Product Name</th>
          <th>Action</th>
        </thead>
        {products.map((product, index) => <tr>
            {" "}
            <td>{index}</td> <td>product</td>
            <td>
              <a href={"/productShow"}>SHOW</a> |                             
              <a href={"/productShow"}>DELETE</a>
            </td>
          </tr>)}
      </table>
    </div>;
};

export default ProductListTable;