import React from "react";
import { connect } from "react-redux";
import { removeFromCart } from "../../actions";
import { checkoutCart } from "../../actions";

class CartInfoMobile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {display: false};
  }
  render() {
    return (
      <div className="card-info-mobile">
        <div>Total: {this.props.cartInfo.total}</div>
        <div>
          <button
            onClick={() =>
              this.props.checkoutCart(this.props.cartInfo.products)
            }
          >
            CHECKOUT
          </button>
        </div>

        <table className="table" style={{ border: "5px solid green", display: this.state.display? 'block': 'none' }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Qty</th>
              <th>Price</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.cartInfo.products.map((product, index) => {
              return (
                <tr key={index}>
                  <td>{product.name}</td>
                  <td>{product.quantity}</td>
                  <td>{product.price}</td>
                  <td>
                    <button
                      className="btn"
                      onClick={() => this.props.removeFromCart(product)}
                    >
                      X
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return { cartInfo: state.products.todoApp.cartInfo };
}

export default connect(
  mapStateToProps,
  { removeFromCart, checkoutCart }
)(CartInfoMobile);
