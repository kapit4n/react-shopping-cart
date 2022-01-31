import React from "react";
import { connect } from "react-redux";
import NavComponent from "../../components/cart/NavComponent";
import { searchProducts } from "../../actions";

class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: "",
      total: props.total,
    };

    this.updateInput = this.updateInput.bind(this);
    this.handleSubmitSearch = this.handleSubmitSearch.bind(this);
  }

  updateInput(event) {
    this.setState({ searchText: event.target.value });
  }

  handleSubmitSearch() {
    this.props.searchProducts(this.state.searchText);
  }

  render() {
    return (
      <NavComponent
        searchProducts={this.handleSubmitSearch}
        total={this.props.total}
        products={this.props.products}
        updateInput={this.updateInput}
      />
    );
  }
}

function mapStateToProps(state, ownProps) {
  if (state) {
    return {
      total: state.products.todoApp.cartInfo.total,
      products: state.products.todoApp.cartInfo.products
    };
  }
  return { total: 0 };
}

export default connect(
  mapStateToProps,
  { searchProducts }
)(Nav);
