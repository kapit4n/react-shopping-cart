import React from "react";
import { connect } from "react-redux";
import HomeProducts from "../components/HomeProducts";
import { addToCart } from "../actions";
import ProductCard from "../components/ProductCard";

class Home extends React.Component {
  render() {
    return (
      <HomeProducts>
        {this.props.products.map(product => (
          <ProductCard
            addToCart={() => this.props.addToCart(product)}
            product={product}
            key={product.id}
          />
        ))}
      </HomeProducts>
    );
  }
}

function mapStateToProps(state, ownProps) {
  if (state) {
    return { products: state.products.todoApp.products };
  }
  return { products: [] };
}

export default connect(
  mapStateToProps,
  { addToCart }
)(Home);
