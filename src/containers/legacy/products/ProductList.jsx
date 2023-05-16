import React from "react";
import { connect } from 'react-redux';
import { showProduct, addProduct, removeProduct } from "../../../actions";
import ProductListTable from "../../../components/legacy/products/ProductListTable";

class ProductList extends React.Component {
  render() {
    return <>
      <ProductListTable
        products={this.props.products}
        removeProduct={this.props.removeProduct}
        addProduct={this.props.addProduct}
        showProduct={this.props.showProduct} />;
    </>
  }
}

function mapStateToProps(state, ownProps) {
  return { products: state.products.products }
}

export default connect(mapStateToProps, { removeProduct, addProduct, showProduct })(ProductList);
