import React from "react";

const ProductCard = ({addToCart, product}) => {
  return <div class="card" style={{ width: "12rem", display: "inline-block", "border-width": "5px", "border-style": "solid" }}>
      <img class="card-img-top" src="https://comps.canstockphoto.com/product-stock-illustration_csp28697982.jpg" alt="Card image cap" />
      <div class="card-body">
        <h5 class="card-title" style={{ position: "absolute", top: "1px", color: "black", "font-size": "32px", background: "darkgrey", left: "0" }}>
          {product}
        </h5>
        <button onClick={addToCart} class="btn btn-primary">
          Add to Cart
        </button>
      </div>
    </div>;
}

export default ProductCard;
