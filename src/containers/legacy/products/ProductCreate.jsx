import React from "react";
import { connect } from 'react-redux';
import { addProduct } from "../../../actions";
import ProductCreateComp from "../../../components/legacy/products/ProductCreate"

class ProductCreate extends React.Component {
  render() {
    return <ProductCreateComp addProduct={this.props.addProduct} />;
  }
}

function mapStateToProps(state) {
  const { productCreate } = state.products;
  return { productCreate };
}

export default connect(mapStateToProps, { addProduct })(ProductCreate);
