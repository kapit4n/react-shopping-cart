import React from "react";
import { connect } from 'react-redux';
import { addProduct } from "../../actions";
import ProductCreateComp from "../../components/products/ProductCreate"

class ProductCreate extends React.Component {
    render() {
        return <ProductCreateComp addProduct={this.props.addProduct} />;
    }
}

function mapStateToProps(state) {
    const { productCreate } = state.products.todoApp;
    return { productCreate };
}

export default connect(mapStateToProps, { addProduct })(ProductCreate);
