import React from "react";
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import * as productAction from "../actions";

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
                      <td>{product}</td>
                      <td>{index*2}</td>
                      <td><button class="btn">X</button></td>
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

function mapDispathProps(dispatch) {
    return { actions: bindActionCreators(productAction, dispatch) };
}

export default connect(
  mapStateToProps,
  mapDispathProps
)(CartInfo);