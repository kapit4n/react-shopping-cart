import React from "react";
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import { removeFromCart } from "../actions";

class CartInfo extends React.Component {
    render() {
      return <div>
                <table className="table">
                  <thead>
                  <tr>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Action</th>
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
                <button ></button>
                </div>
            </div>
    }
}

function mapStateToProps(state, ownProps) {
  return { cartInfo: state.products.todoApp.cartInfo };
}


export default connect(
  mapStateToProps,
  { removeFromCart }
)(CartInfo);