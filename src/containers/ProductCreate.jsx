import React from "react";
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import * as productAction from "../actions";
import ProductCreateComp from "../components/ProductCreate"

class ProductCreate extends React.Component {
    render() {
        return <ProductCreateComp />;
    }
}

function mapStateToProps(state, ownProps) {
    const { productCreate } = state.products.todoApp;
    return { productCreate };
}

function mapDispathProps(dispatch) {
    return { actions: bindActionCreators(productAction, dispatch) };
}

export default connect(mapStateToProps, mapDispathProps)(ProductCreate);
