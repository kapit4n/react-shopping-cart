import React from "react";
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import { removeFromCart } from "../actions";

class CartInfo extends React.Component {
    render() {
      return <div>
                <table className="table">
                  <tr>
                    <th>Index</th>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Action</th>
                  </tr>
                  <tbody>
                  {this.props.cartInfo.products.map((product, index) => {
                    return <tr>
                        <td>{index}</td>
                        <td>{product.name}</td>
                        <td>{product.quantity}</td>
                        <td>
                          <button class="btn" onClick={() => this.props.removeFromCart(product)}>
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