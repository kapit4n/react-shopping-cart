import React from "react";
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import * as productsAction from "../actions";

class ProductList extends React.Component {
    render() {
        return this.props.products;
    }
}

function mapStateToProps(state, ownProps) {
    return { products: state.products }
}

function mapDispathProps(dispatch) {
    return { actions: bindActionCreators(productsAction, dispatch) };
}

export default connect(mapStateToProps, mapDispathProps)(ProductList);
