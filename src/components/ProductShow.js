import React from "react";

const ProductShow = ({ product, productId }) => {
    return <div class="card container" style={{ "border-width": "5px", "border-style": "solid" }}>
        <dl>
          <dt>Name</dt>
          <dd>{product}</dd>
          <dt>Image</dt>
          <dd>
            <img src="https://comps.canstockphoto.com/product-stock-illustration_csp28697982.jpg" />
          </dd>
          
          <dt>Details</dt>
          <dd>
            <ul>
                <li>Product Detail 1</li>
            </ul>
          </dd>

        </dl>
      </div>;
}

export default ProductShow;
