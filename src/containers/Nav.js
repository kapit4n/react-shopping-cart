import React from "react";
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import NavComponent from "../components/NavComponent"
import { searchProducts } from "../actions";

class Nav extends React.Component {
    render() {
        return <NavComponent searchProducts={this.props.searchProducts}>
        </NavComponent>;
    }
}

function mapStateToProps(state, ownProps) {
    if (state) {
        return { products: state.products.todoApp.products };
    }
    return { products: [] }
}

export default connect(
  mapStateToProps,
  { searchProducts }
)(Nav);