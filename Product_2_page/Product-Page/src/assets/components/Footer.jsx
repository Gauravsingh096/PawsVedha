import React from 'react';
import './Footer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter,faFacebookF,faSquareInstagram,faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
  return (
    <footer>
      <div className="newsletter">
      <form>
          <input type="email" placeholder="Your email address" required />
          <button type="submit">Sign Up</button>
        </form>
        <h2>Sign Up For Newsletters</h2>
        <p>Get E-mail updates about our latest shop and <span className="special-offers">special offers</span>.</p>
      </div>
      <div className="footer-content">
        <div className="contact-info">
          <h3>Get In Touch</h3>
          <p><span className="icon">&#9993;</span> E-mail: pawsveda@gmail.com</p>
          <p><span className="icon">&#9742;</span> Phone No.: +91 7584935608</p>
          <p><span className="icon">&#128339;</span> Hours: 10:00-19:00, Mon-Sun</p>
        </div>
        <div className="support">
          <h3>Support</h3>
          <ul>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Customer Services</a></li>
            <li><a href="#">FAQ's</a></li>
          </ul>
        </div>
        <div className="quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Blogs</a></li>
          </ul>
        </div>
        <div className="shipping-returns">
          <h3>Shipping & Returns</h3>
          <ul>
            <li><a href="#">Track Your Order</a></li>
            <li><a href="#">Shipping Policy</a></li>
            <li><a href="#">Return Policy</a></li>
            <li><a href="#">Cancellation Policy</a></li>
          </ul>
        </div>
      </div>
      <div className="social-handles">
        <h3>Our Handles</h3>
        <a href="#"> <FontAwesomeIcon icon={faTwitter} /></a>
        <a href="#"><FontAwesomeIcon icon={faSquareInstagram} /></a>
        <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
        <a href="#"><FontAwesomeIcon icon={faWhatsapp} /></a>
        <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 PawsVeda - All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;