import React from "react";
import { connect } from "react-redux";
import HomeProducts from "../../components/cart/HomeProducts";
import { addToCart } from "../../actions";
import ProductCard from "../../components/cart/ProductCard";

class Home extends React.Component {
  render() {
    return (
      <HomeProducts>
        <h2>Products</h2>
        <div style={{ marginTop: '1rem' }}>
          {this.props.products.map(product => (
            <ProductCard
              addToCart={() => this.props.addToCart(product)}
              product={product}
              key={product.id}
            />
          ))}
        </div>
      </HomeProducts>
    );
  }
}

function mapStateToProps(state, ownProps) {
  if (state) {
    return {
      products: state.products.todoApp.products
    };
  }
  return { products: [] };
}

export default connect(
  mapStateToProps,
  { addToCart }
)(Home);
