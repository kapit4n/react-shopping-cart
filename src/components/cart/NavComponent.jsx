import React from "react";
import { Link } from "react-router-dom";
import Modal from 'react-modal';

const NavComponent = ({ total, products }) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }


  return (
    <div style={{ width: '100%', backgroundColor: '#87bdd8' }}>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <h2>Shopping cart</h2>
        <div>
          <ol>
            {products.map(p => (<li>{p.name}</li>))}
          </ol>
        </div>
        <button onClick={closeModal}>close</button>
      </Modal>

      <div style={{ width: '100%', display: 'flex' }}>
        <span style={{ padding: '1rem', color: 'black' }}>Cart</span>
        <div style={{ cursor: 'pointer' }} onClick={openModal}>
          <img src="https://findicons.com/files/icons/1579/devine/256/cart.png" height={20} alt="Cart Info Code" />
          <span style={{ padding: '0.3rem', color: 'black' }}>(${total})</span>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg" style={{
        justifyContent: 'space-between', width: '100%', display: 'flex', backgroundColor: '#b7d7e8', color: 'black'
      }}>
        < a className="navbar-brand" href="#" style={{ color: 'black' }}>
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
            <ul className="navbar-nav mr-auto" style={{ marginLeft: '1rem' }}>
              <li className="nav-item active" style={{ marginLeft: '1rem' }}>
                <Link to="/">
                  Home
              </Link>
              </li>
              <li className="nav-item" style={{ marginLeft: '1rem' }}>
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
