import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faStore, faPaw, faInfoCircle, faCartShopping, faUserCircle, faSearch, faMicrophone, faStar } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <img src="./images/Screenshot 2024-05-13 010213.png" className="logi" alt="PAWS VEDA Logo" />
        </div>
        <div className="add-icon">
          <p><b>P</b></p>
          <span style={{ fontSize: "20px" }}>&#128062;</span>
          <p><b>aws </b></p>
          <p><b>Veda</b></p>
        </div>
        <div className="nav-search">
          <FontAwesomeIcon icon={faSearch} style={{ margin: "0 10px", color: "gray" }} />
          <input placeholder="Search" className="search-input" />
          <FontAwesomeIcon icon={faMicrophone} style={{ margin: "0 10px", color: "gray" }} />
        </div>
        <div className="icon">
          <ul>
            <li><FontAwesomeIcon icon={faCartShopping} aria-hidden="true" /><span className="">Shopping Cart</span></li>
            <li><FontAwesomeIcon icon={faUserCircle} aria-hidden="true" /><span className="">User Profile</span></li>
          </ul>
        </div>
      </nav>
      <div className="header1">
        <a className="h" href="#home"><FontAwesomeIcon icon={faHome} /> Home</a>
        <a className="h" href="#shop"><FontAwesomeIcon icon={faStore} /> Shop</a>
        <a className="h" href="#PetCare"><FontAwesomeIcon icon={faPaw} /> Pet Care</a>
        <a className="h" href="#pet-accessories"><FontAwesomeIcon icon={faStar} /> Pet Accessories</a>
        <a className="h" href="#about"><FontAwesomeIcon icon={faInfoCircle} /> About</a>
      </div>
    </header>
  );
};

export default Header;
