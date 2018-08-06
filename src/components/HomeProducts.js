import React from 'react';
import ProductCard from "./ProductCard"

const HomeProducts = ({products}) => {
    return <div>{products.map(product => <ProductCard product={product}></ProductCard>)}</div>
}

export default HomeProducts;
