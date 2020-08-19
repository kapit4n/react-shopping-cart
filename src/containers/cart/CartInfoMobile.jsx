import React from "react";
import { connect } from "react-redux";
import { removeFromCart } from "../../actions";
import { checkoutCart } from "../../actions";

class CartInfoMobile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { display: true };
    this.toogle = this.toogle.bind(this);
  }

  toogle() {
    this.setState({ display: !this.state.display })
  }

  render() {
    return (
      <div className="card-info-mobile">
        <button onClick={this.toogle}>Cart Info</button>
        <div style={{ border: "5px solid green", display: this.state.display ? 'block' : 'none' }}>
          <div>TotalM: {this.props.cartInfo.total}</div>
          <div>
            <button
              className="btn btn-outline-success"
              onClick={() =>
                this.props.checkoutCart(this.props.cartInfo.products)
              }
            >
              CHECKOUT
          </button>
          </div>

          <table className="table">
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
