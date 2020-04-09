import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import ProductList from "./containers/ProductList";
import Product from "./containers/Product";
import Home from "./containers/cart/Home";
import Nav from "./containers/cart/Nav";
import CartInfo from "./containers/cart/CartInfo";

class App extends Component {
  render() {
    return (
      <div className="App row">

        {/* <div className="col-md-4 card-info-mobile">
          <div style={{ marginTop: "20px" }}>
            <CartInfoMobile />
          </div>
        </div> */}
        <Nav> </Nav>
        <div style={{ width: "100%", height: '100px', zIndex: '-4' }}>
          <img style={{ width: "100%", objectFit: 'cover', marginTop: '-10rem' }} src="https://di-uploads-pod19.dealerinspire.com/universitycjdr/uploads/2019/08/2018-Jeep-Wrangler-Unlimited-banner.png" />
        </div>

        <div className="row" style={{ backgroundColor: '#e6f0ff', margin: 0 }}>
          <div className="col-md-4">
            <div style={{ marginTop: "20px", boxShadow: '4px 5px 20px -7px rgba(117,77,117,1)' }}>
              <CartInfo />
            </div>
          </div>
          <div className="col-md-8" style={{ marginTop: "20px" }}>
            <Route exact path="/" component={Home} />
            <Route path="/products" component={ProductList} />
            <Route exact exact path="/productShow/:id" component={Product} />
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
