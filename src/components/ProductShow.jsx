import React from "react";

const ProductShow = ({ product, productId }) => {
  return <div class="card container" style={{ "border-width": "5px", "border-style": "solid" }}>
    <dl>
      <dt>Name</dt>
      <dd>{product.name}</dd>
      <dt>Image</dt>
      <dd>
        <img src={product.img} style={{ width: '400px' }} />
      </dd>

      <dt>Details</dt>
      <dd>
        <ul>
          <li>{product.description} </li>
        </ul>
      </dd>

    </dl>
  </div>;
}

export default ProductShow;
