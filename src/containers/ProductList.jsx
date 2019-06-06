import React from "react";
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import { removeProduct } from "../actions";
import { addProduct } from "../actions";
import { showProduct } from "../actions";
import ProductListTable from "../components/ProductListTable";

class ProductList extends React.Component {
    render() {
        return <ProductListTable products={this.props.products} removeProduct={this.props.removeProduct} addProduct={this.props.addProduct} showProduct={this.props.showProduct} />;
    }
}

function mapStateToProps(state, ownProps) {
    return { products: state.products.todoApp.products }
}

export default connect(mapStateToProps, { removeProduct, addProduct, showProduct })(ProductList);
