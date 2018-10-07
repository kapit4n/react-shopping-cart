import React from "react";

const ProductCard = ({addToCart, product}) => {
  return <div className="card" style={{ width: "12rem", display: "inline-block", borderWidth: "5px", borderStyle: "solid" }}>
      <img className="card-img-top" src="https://comps.canstockphoto.com/product-stock-illustration_csp28697982.jpg" alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title" style={{ position: "absolute", top: "1px", color: "black", fontSize: "32px", background: "darkgrey", left: "0" }}>
          {product.name}
        </h5>
        <button onClick={addToCart} className="btn btn-primary">
          Add to Cart
        </button>
      </div>
    </div>;
}

export default ProductCard;
