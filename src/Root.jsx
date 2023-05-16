import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import AppLegacy from "./app-legacy/AppLegacy";
import App from "./app/App";

const displayNewApp = true

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      {displayNewApp ? <App />: <AppLegacy />}
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
