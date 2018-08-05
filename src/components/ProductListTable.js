import React from "react"

const ProductListTable = ({ products }) => {
  return <div>
    <table>
    <thead>
      <th>Header1</th>
    </thead>
      {
        products.map((product, index) => <tr href="google"> <td>{index}</td> <td>product</td></tr> )
      }
    </table>
    </div>
};

export default ProductListTable;