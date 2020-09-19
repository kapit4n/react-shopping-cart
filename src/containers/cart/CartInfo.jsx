import React from "react";
import { connect } from 'react-redux';
import { removeFromCart } from "../../actions";
import { checkoutCart } from "../../actions";

class CartInfo extends React.Component {
  render() {
    return <div className="card-info">
      {this.props.cartInfo.products.map((product, index) => {
        return (<div key={index} style={{ width: '100%', display: 'flex', margin: '0.2rem 0', backgroundColor: ' #cfe0e8' }}>
          <img style={{ width: 100 }} src={product.img} alt="Product Info" />
          <div style={{ display: 'flex', flexDirection: 'column', padding: '0.5rem', width: '100%' }}>
            <span style={{ fontWeight: 'bold' }}>{product.name}</span>
            <span>{product.quantity * product.price}</span>
            <button className="btn" onClick={() => this.props.removeFromCart(product)}> X </button>
          </div>
        </div>)
      })}
      <div>
        Total: {this.props.cartInfo.total}
      </div>
      <div>
        <button className="btn btn-outline-success" onClick={() => this.props.checkoutCart(this.props.cartInfo.products)}>CHECKOUT</button>
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