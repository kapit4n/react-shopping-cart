import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import ProductList from "./containers/ProductList";
import Product from "./containers/Product";
import Home from "./containers/cart/Home";
import Nav from "./containers/cart/Nav"
import CartInfo from "./containers/cart/CartInfo"

class App extends Component {
  render() {
    return <div className="App row">
      <header className="App-header col-md-12">
          <Nav>
            <Link to="products">
              <button>Go to Products</button>
            </Link>
          </Nav>
        </header>
      <div className="col-md-9" style={{ marginTop: "20px" }}>
          <Route exact path="/" component={Home} />
          <Route path="/products" component={ProductList} />
          <Route exact exact path="/productShow/:id" component={Product} />
        </div>
        <div className="col-md-3">
        <div style={{marginTop: "20px"}}>
            <CartInfo></CartInfo>
          </div>
        </div>
      </div>;
  }
}

export default App;
