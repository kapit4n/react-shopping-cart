import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductList from "./containers/ProductList";
import Product from "./containers/Product";
import Home from "./containers/Home";
import Nav from "./components/Nav"

class App extends Component {
  render() {
    return <div className="App row">
      <header className="App-header col-md-12">
          <Nav></Nav>
        </header>
        <div className="col-md-12">
          <Route exact path="/" component={Home} />
          <Route path="/products" component={ProductList} />
          <Route exact exact path="/productShow" component={Product} />
        </div>
      </div>;
  }
}

export default App;
