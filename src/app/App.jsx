import Header from './Header';
import BodyCart from './BodyCart';
import ProductsList from './ProductsList';
import ProductsSuggested from './ProductsSuggested';

import './App.css'

export const App = () => {
  return (
    <div className="app">
      <Header />
      <BodyCart>
        <ProductsList></ProductsList>
        <ProductsSuggested></ProductsSuggested>
      </BodyCart>
    </div>
  )
}

export default App
