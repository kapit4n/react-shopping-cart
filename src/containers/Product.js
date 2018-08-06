import React from "react";
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';  
import * as productAction from "../actions";
import ProductShow from "../components/ProductShow"

class Product extends React.Component {
    render() {
        return <ProductShow product={this.props.productShow} productId={this.props.match.params.id} />;
    }
}

function mapStateToProps(state, ownProps) {
    return { productShow: state.productShow };
}

function mapDispathProps(dispatch) {
    return { actions: bindActionCreators(productAction, dispatch) };
}

export default connect(mapStateToProps, mapDispathProps)(Product);