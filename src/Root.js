import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from './App'
import ProductList from "./containers/ProductList";
import Product from "./containers/Product";
import Home from "./containers/Home";

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <App>        
      </App>
    </Router>
  </Provider>
);

Root.propTypes = {
    store: PropTypes.object.isRequired
}

export default Root
