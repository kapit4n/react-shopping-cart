import React from "react";

const ProductShow = ({ product, productId }) => {
  return <div style={{ width: '100%' }}>
    <dl style={{ textAlign: 'left' }}>
      <dt>Name</dt>
      <dd>{product.name}</dd>
      <dt>Image</dt>
      <dd>
        <img src={product.img} style={{ width: '20rem' }} alt="Product Image"/>
      </dd>
      <dt>Details</dt>
      <dd>
        {product.description}
      </dd>
    </dl>
  </div>;
}

export default ProductShow;
