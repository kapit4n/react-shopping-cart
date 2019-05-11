import React from "react";
import { Link } from "react-router-dom";

const NavComponent = ({ searchProducts, updateInput }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        2 Seller
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="" id="navbarSupportedContent">

        <div className="form-inline my-2 my-lg-0">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
            <Link to="/">
              Home
              </Link>
            </li>
            <li class="nav-item">
            <Link to="/products">
              Products
              </Link>
            </li>            
          </ul>
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Item Name"
            aria-label="Search"
            onChange={updateInput}
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            onClick={searchProducts}
          >
            Search
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavComponent;
