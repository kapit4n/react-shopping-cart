import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductList from "./containers/ProductList";
import Product from "./containers/Product";
import Home from "./containers/Home";

class App extends Component {
  render() {
    return <div className="App">
        <header className="App-header">
          <span className="input-group-btn">
            <Link to="/" replace>
              Home
            </Link> |
            <Link to="/productShow" replace>
              Product
            </Link> |
            <Link to="/products">Products</Link>
          </span>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/products" component={ProductList} />
          <Route exact exact path="/productShow" component={Product} />
        </div>
      </div>;
  }
}

export default App;
