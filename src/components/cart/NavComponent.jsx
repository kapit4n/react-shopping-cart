import React from "react";
import { Link } from "react-router-dom";

const NavComponent = ({ searchProducts, updateInput, total }) => {
  return (
    <div style={{ width: '100%' }}>
      <div style={{ width: '100%', display: 'flex' }}>
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search by"
          aria-label="Search"
          onChange={updateInput}
          style={{ marginLeft: '1rem', margin: '1rem' }}
        />
        <div style={{ padding: '1rem' }}>
          <button
            className="btn btn-outline-success"
            onClick={searchProducts}
          >
            Search
          </button>
        </div>
        <span style={{ padding: '1rem', color: 'black' }}>Cart</span>
        <div>
          <img src="https://findicons.com/files/icons/1579/devine/256/cart.png" height={20} />
          <span style={{ padding: '0.3rem', color: 'black' }}>(${total})</span>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg" style={{
        justifyContent: 'space-between', width: '100%', display: 'flex', backgroundColor: '#001a33', color: '#ffffff'
      }}>
        < a className="navbar-brand" href="#" style={{ color: '#ffffff' }}>
          2 Seller
      </a >
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

          <div className="form-inline my-2 my-lg-0" style={{ width: '100%', display: 'flex' }}>
            <ul class="navbar-nav mr-auto" style={{ marginLeft: '1rem' }}>
              <li class="nav-item active" style={{ marginLeft: '1rem' }}>
                <Link to="/">
                  Home
              </Link>
              </li>
              <li class="nav-item" style={{ marginLeft: '1rem' }}>
                <Link to="/products">
                  Products
              </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav >
    </div>
  );
};

export default NavComponent;
