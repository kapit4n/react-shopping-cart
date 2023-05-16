import React from 'react';
import styles from './ProductsList.module.css'


export default function ProductsList() {

  const [products, setProducts] = React.useState(["Hello World Shopping Cart"]);

  return (
    <div className={styles.productsList}>
      <h1>
        Shopping Cart
      </h1>
      {products.map(product => (
        <div>
          {product}
        </div>
      ))}
    </div>
  )
}
