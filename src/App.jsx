import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import ProductList from "./containers/products/ProductList";
import Product from "./containers/products/Product";
import ProductCreate from "./containers/products/ProductCreate";
import Home from "./containers/cart/Home";
import Nav from "./containers/cart/Nav";

class App extends Component {
  render() {
    return (
      <div className="App row">
        <Nav> </Nav>

        <div className="row" style={{ backgroundColor: '#cfe0e8', margin: 0, width: '100%' }}>
          <div className="col-md-12" style={{}}>
            <Route exact path="/" component={Home} />
            <Route path="/products" component={ProductList} />
            <Route exact path="/productShow/:id" component={Product} />
            <Route exact path="/productCreate" component={ProductCreate} />
          </div>
        </div>

        <footer class="site-footer">
          <div class="container">
            <div class="row">
              <div class="col-sm-12 col-md-6">
                <h6>About</h6>
                <p class="text-justify">Code Shopping <i>CODE WANTS TO BE SIMPLE
                  </i> is an initiative  to help the upcoming programmers with the code.
                  .</p>

              </div>

              <div class="col-xs-6 col-md-3">
                <h6>Categories</h6>
                <ul class="footer-links">
                  <li><a href="http://localhost:3000/features/">Features Products</a></li>
                </ul>
              </div>

              <div class="col-xs-6 col-md-3">
                <h6>Quick Links</h6>
                <ul class="footer-links">
                  <li><a href="http://localhost:3000/about">About Us</a></li>
                  <li><a href="http://localhost:3000//contact/">Contact Us</a></li>
                </ul>
              </div>
            </div>
            <hr />
          </div>
          <div class="container">
            <div class="row">
              <div class="col-md-8 col-sm-6 col-xs-12">
                <p class="copyright-text">Copyright &copy; 2020 All Rights Reserved by <a href="#"> Code</a>.
            </p>
              </div>

              <div class="col-md-4 col-sm-6 col-xs-12">
                <ul class="social-icons">
                  <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
                  <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
                  <li><a class="dribbble" href="#"><i class="fa fa-dribbble"></i></a></li>
                  <li><a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
