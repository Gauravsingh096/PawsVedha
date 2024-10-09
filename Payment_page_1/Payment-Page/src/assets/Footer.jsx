import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter,faFacebookF,faSquareInstagram,faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons';
import visa from '/images/visa.png';
import unionpay from '/images/union.png';
import mastercard from '/images/master.png';
import paypal from '/images/paypal.png';
import gpay from '/images/gpay.png';
import applepay from '/images/apple.png';
import Download from '/images/play.png';
import logo from '/images/logo.png';
const Footer = () => {
  return (
    <footer>
      <div className="newsletter">
      <div className='Form'><form>
          <input type="email" placeholder="Your email address" required />
          <button type="submit">Sign Up</button>
        </form></div>
        <h2>Sign Up For Newsletters</h2>
        <p>Get E-mail updates about our latest shop and <span className="special-offers">special offers</span>.</p>
      </div>
      <div className="footer-content">
        <div className="contact-info">
          <h3>Connects</h3>
          <div className="jq1">
          <p> <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a> facebook</p>
          <p><a href="#"><FontAwesomeIcon icon={faSquareInstagram} /></a> Instagram</p>
          <p><a href="#"><FontAwesomeIcon icon={faSquareInstagram} /></a>Linkedin</p>
          <p> <a href="#"> <FontAwesomeIcon icon={faTwitter} /></a>X</p>
          </div>

        </div>
        <div className="support">
          <h3>Grow Your Business</h3>
          <ul>
            <li><a href="#">Sell product On Paws Vedas</a></li>
            <li><a href="#">Sell on PawsVedas Business</a></li>
            <li><a href="#">Self-Publish with us</a></li>
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
        <div className="payment-methods">
        <h3>PaymentMethods</h3>
        
       <div className="j1">
       <li><a href="#"><img src={visa} alt="Visa" className="payment-icon" /></a></li>
        
        
        <li><a href="#"><img src={paypal} alt="PayPal" className="payment-icon" /></a></li>

       </div>
       <div className="j2">
       <li><a href="#"><img src={unionpay} alt="UnionPay" className="payment-icon" /></a></li>
       <li><a href="#"><img src={gpay} alt="Google Pay" className="payment-icon" /></a></li>
       </div>
        <div className="j3">
        <li><a href="#"><img src={mastercard} alt="MasterCard" className="payment-icon" /></a></li>
        <li><a href="#"><img src={applepay} alt="Apple Pay" className="payment-icon" /></a></li>
        </div>
       

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
      {/* <div className="line1"> */}

      {/* </div> */}

      <hr className='my-hr'></hr>
        <div className='download'>
        <div className='img-logo'><img src={logo} alt="logo" className='logo-img' /></div>
        <div class="language-selector">
       <select>
        <option value="en">English</option>
       <option value="es">Spanish</option>
       <option value="fr">French</option>
       <option value="hi">Hindi</option>
      </select>
       </div>
        <h5>Download App</h5>
        <img src={Download} alt="Download" className='download-img' />
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 PawsVeda - All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;