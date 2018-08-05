import React from "react";
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';  
import * as productAction from "../actions";
import ProductCard from "../components/ProductCard"

class Product extends React.Component {
    render() {
        return <ProductCard product={this.props.productShow} />
    }
}

function mapStateToProps(state, ownProps) {
    return { productShow: state.productShow };
}

function mapDispathProps(dispatch) {
    return { actions: bindActionCreators(productAction, dispatch) };
}

export default connect(mapStateToProps, mapDispathProps)(Product);