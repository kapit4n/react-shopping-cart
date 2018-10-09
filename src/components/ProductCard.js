import React from "react";

const ProductCard = ({addToCart, product}) => {
  return <div className="card" style={{ width: "12rem", display: "inline-block", borderWidth: "5px", borderStyle: "solid" }}>
      <img className="card-img-top" height="110px" src={product.img} alt="Card image cap" />
      <div className="card-body">
      <h5 className="card-title" style={{ position: "absolute", top: "1px", color: "black", fontSize: "18px", background: "darkgrey", left: "0", opacity: 0.8}}>
          {product.name}
        </h5>
        <button onClick={addToCart} className="btn btn-primary">
          Add to Cart
        </button>
      </div>
    </div>;
}

export default ProductCard;
