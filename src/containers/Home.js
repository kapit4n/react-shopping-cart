import React from "react";
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';  
import * as productAction from "../actions";
import HomeProducts from "../components/HomeProducts"

class Home extends React.Component {
    render() {
        return <HomeProducts products={this.props.products}></HomeProducts>
    }
}

function mapStateToProps(state, ownProps) {
    return { products: state.products}
}

function mapDispathProps(dispatch) {
    return { actions: bindActionCreators(productAction, dispatch) };
}

export default connect(mapStateToProps, mapDispathProps)(Home);