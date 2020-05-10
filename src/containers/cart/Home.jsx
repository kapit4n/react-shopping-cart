import React from "react";
import { connect } from "react-redux";
import HomeProducts from "../../components/cart/HomeProducts";
import { addToCart } from "../../actions";
import ProductCard from "../../components/cart/ProductCard";
import CartInfo from "../../containers/cart/CartInfo";

class Home extends React.Component {
  render() {
    return (
      <HomeProducts>
        <div className="row" style={{ backgroundColor: 'rgb(240, 240, 245)', margin: 0, width: '100%' }}>
          <div className="col-md-4">
            <div style={{ marginTop: "1rem", boxShadow: '4px 5px 20px -7px rgba(117,77,117,1)' }}>
              <CartInfo />
            </div>
          </div>
          <div className="col-md-8">
            <div style={{ marginTop: '2rem' }}>
              {this.props.products.map(product => (
                <ProductCard
                  addToCart={() => this.props.addToCart(product)}
                  product={product}
                  key={product.id}
                />
              ))}
            </div>
          </div>
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
