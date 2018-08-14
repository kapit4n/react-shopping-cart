import React from "react";
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import {removeProduct} from "../actions";
import ProductListTable from "../components/ProductListTable";

class ProductList extends React.Component {
    render() {
        return <ProductListTable products={this.props.products} removeProduct={this.props.removeProduct} />;
    }
}

function mapStateToProps(state, ownProps) {
    return { products: state.products.todoApp.products }
}

export default connect(mapStateToProps, { removeProduct })(ProductList);
