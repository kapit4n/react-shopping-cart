import React from "react";
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';  
import * as productAction from "../actions";

class Home extends React.Component {
    render() {
        return this.props.product;
    }
}

function mapStateToProps(state, ownProps) {
    return { product: state.product}
}

function mapDispathProps(dispatch) {
    return { actions: bindActionCreators(productAction, dispatch) };
}

export default connect(mapStateToProps, mapDispathProps)(Home);