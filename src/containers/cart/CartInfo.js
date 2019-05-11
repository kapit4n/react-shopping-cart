import React from "react";
import { connect } from 'react-redux';
import { removeFromCart } from "../../actions";
import { checkoutCart } from "../../actions";

class CartInfo extends React.Component {
    render() {
      return <div>
                <table className="table" style={{border: "5px solid red"}}>
                  <thead>
                  <tr>
                    <th>Name</th>
                    <th>Qty</th>
                    <th>Price</th>
                    <th></th>
                  </tr>
                  </thead>
                  <tbody>
                  {this.props.cartInfo.products.map((product, index) => {
                    return <tr key={index}>
                        <td>{product.name}</td>
                        <td>{product.quantity}</td>
                        <td>{product.price}</td>
                        <td>
                          <button className="btn" onClick={() => this.props.removeFromCart(product)}>
                            X
                          </button>
                        </td>
                      </tr>;
                    })}
                  </tbody>
                </table>
                <div>
                  Total: {this.props.cartInfo.total}
                </div>
                <div>
                  <button onClick={() => this.props.checkoutCart(this.props.cartInfo.products)}>CHECKOUT</button>
                </div>
            </div>
    }
}

function mapStateToProps(state, ownProps) {
  return { cartInfo: state.products.todoApp.cartInfo };
}


export default connect(
  mapStateToProps,
  { removeFromCart, checkoutCart }
)(CartInfo);