import React from "react";

const ProductCard = ({ addToCart, product }) => {
  return <div className="card product-card" style={{
    borderWidth: "5px", borderStyle: "solid",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
  }}>
    <img className="card-img-top" src={product.img} alt="Card image cap" />
    <div className="card-body">
      <h5 className="card-title" style={{ position: "absolute", top: "1px", color: "black", fontSize: "18px", background: "darkgrey", left: "0", opacity: 0.8 }}>
        {product.name}
      </h5>
      <button onClick={addToCart} className="btn btn-primary">
        Add to Cart
        </button>
    </div>
  </div>;
}

export default ProductCard;
