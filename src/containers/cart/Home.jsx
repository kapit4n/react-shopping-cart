import React from "react";
import { connect } from "react-redux";
import HomeProducts from "../../components/cart/HomeProducts";
import { addToCart, displayCartInfo, hideCartInfo, displayFilters, hideFilters, searchProducts } from "../../actions";
import ProductCard from "../../components/cart/ProductCard";
import CartInfo from "../../containers/cart/CartInfo";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchText: '' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ searchText: event.target.value });
  }

  render() {
    return (
      <HomeProducts>
        <div className="row" style={{ backgroundColor: 'rgb(240, 240, 245)', margin: 0, width: '100%' }}>
          <div className="col-md-4">
            <div>
              {this.props.display ? (
                <button onClick={this.props.hideCartInfo}>Hide Cart</button>
              ) : (
                  <button onClick={this.props.displayCartInfo}>Display Cart</button>
                )}
                
              {this.props.displayFiltersBox ? (
                <button onClick={this.props.hideFilters}>Hide Filters</button>
              ) : (
                  <button onClick={this.props.displayFilters}>Display Filters</button>
                )}

            </div>

            {this.props.display && (
              <div style={{ marginTop: "1rem", boxShadow: '4px 5px 20px -7px rgba(117,77,117,1)' }}>
                <CartInfo />
              </div>
            )}
          </div>
          <div className="col-md-8">
            <div>
              <div style={{ display: 'flex' }}>
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search by"
                  aria-label="Search"
                  onChange={this.handleChange}
                  value={this.state.searchText}
                  style={{ marginLeft: '1rem', margin: '1rem' }}
                />
                <button
                  className="btn btn-outline-success"
                  onClick={() => this.props.searchProducts(this.state.searchText)}
                  style={{ margin: '1rem' }}
                >
                  Search
                    </button>
              </div>
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
      products: state.products.todoApp.products,
      display: state.products.todoApp.cartInfo.display,
      displayFiltersBox: state.products.todoApp.filters.display,
    };
  }
  return { products: [] };
}

export default connect(
  mapStateToProps,
  { addToCart, displayCartInfo, hideCartInfo, displayFilters, hideFilters, searchProducts }
)(Home);
