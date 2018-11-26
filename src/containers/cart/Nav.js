import React from "react";
import { connect } from "react-redux";
import NavComponent from "../../components/cart/NavComponent";
import { searchProducts } from "../../actions";

class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: ""
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
        updateInput={this.updateInput}
      />
    );
  }
}

function mapStateToProps(state, ownProps) {
  if (state) {
    return { products: state.products.todoApp.products };
  }
  return { products: [] };
}

export default connect(
  mapStateToProps,
  { searchProducts }
)(Nav);
