import React from 'react';

const HomeProducts = ({products}) => {
    return <div>{products.map(product => <h1>{product}</h1>)}</div>
}

export default HomeProducts;