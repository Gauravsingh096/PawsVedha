// import React, { useState } from 'react';
import React, { useEffect, useState } from 'react';

import './PaymentPage.css';

const PaymentPage = () => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [currentStep, setCurrentStep] = useState('payment');

  useEffect(() => {
    const steps = ['cart', 'shopping', 'payment'];
    steps.forEach(step => {
      const element = document.getElementById(step);
      if (element) {
        element.checked = step === currentStep;
      }
    });
  }, [currentStep]);

  const items = [
    { id: 1, name: 'Dog Food', price: 300, shipping: 0 },
    { id: 2, name: 'Cat Toy', price: 150, shipping: 0 },
    { id: 3, name: 'Bird Cage', price: 45, shipping: 0 }
  ];

  const subtotal = items.reduce((acc, item) => acc + item.price, 0);
  const shipping = 0;
  const totalAmount = subtotal + shipping;

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  return (
    <div className="payment-page">
      <div className="header">
        <div className="cart-text">
          <h1 className="your">Your pet's</h1>
          <h1 className="shopping">shopping cart</h1>
          <h1 className="ready">Ready</h1>
          <h1 className="set">Set</h1>
          <h1 className="swag">Swag!"</h1>
        </div>
        <img className="cart-image" src="/images/dog_cart_2.png" alt="Pet Shopping Cart" />
      </div>
{/* 
      <div className="progress-bar">
        <div className="step">
          <input type="radio" name="step" className="radio1" />
          <label>Cart</label>
        </div>
        <div className="step">
          <input type="radio" name="step" className="radio1" />
          <label>Shopping</label>
        </div>
        <div className="step">
          <input type="radio" name="step" className="radio1" />
          <label>Payment</label>
        </div>
      </div> */}

<div className="progress-bar">
      <div className="step">
        <input type="radio" name="step" className="radio1" id="cart" />
        <label htmlFor="cart"><p>Cart</p></label>
      </div>
      <div className="step">
        <input type="radio" name="step" className="radio1" id="shopping" />
        <label htmlFor="shopping"><p>Shopping</p></label>
      </div>
      <div className="step">
        <input type="radio" name="step" className="radio1" id="payment" />
        <label htmlFor="payment"><p>Payment</p></label>
      </div>
    </div>
      
      

      <div className="payment-section">
        <div className="left-side">
          <h2>Payment Method</h2>
          <div className="payment-options">
            <div className="payment-option" title="Card">
              <input type="radio" name="payment" id="card" onChange={() => handlePaymentMethodChange('card')} />
              <label htmlFor="card">
                <img src="/images/card.png" alt="Card"  />
              </label>
            </div>
            <div className="payment-option">
              <input type="radio" name="payment" id="paypal" onChange={() => handlePaymentMethodChange('paypal')} />
              <label htmlFor="paypal">
                <img src="/images/paypay2048.png" alt="Paypal" />
              </label>
            </div>
            <div className="payment-option">
              <input type="radio" name="payment" id="gpay" onChange={() => handlePaymentMethodChange('gpay')} />
              <label htmlFor="gpay">
                <img src="/images/gpay1024.png" alt="GPay" />
              </label>
            </div>
            <div className="payment-option">
              <input type="radio" name="payment" id="applepay" onChange={() => handlePaymentMethodChange('applepay')} />
              <label htmlFor="applepay">
                <img src="/images/apay1024.png" alt="Apple Pay" />
              </label>
            </div>
          </div>

          {paymentMethod === 'card' && (
            <div className="payment-inputs">
              <div className="input-group">
                <label htmlFor="cardType">Card Type</label>
                <div id="cardType">
                  <select>
                    <option value="debit">Debit</option>
                    <option value="credit">Credit</option>
                  </select> 
                </div>
              </div>
              <div className="input-group">
                <label htmlFor="selectBank">Select Bank</label>
                <div id="cardType">
                  <select id='select1'>
                    <option value="bob">BOB</option>
                    <option value="pnb">PNB</option>
                    <option value="sbi">SBI</option>
                    <option value="hdfc">HDFC</option>
                    <option value="visa">Visa</option>
                    <option value="mastercard">MasterCard</option>
                  </select> 
                </div>
              </div>
              <div className="input-group">
                <label htmlFor="nameOnCard">Name on Card</label>
                <input type="text" id="nameOnCard" placeholder="Enter name on card" />
                <img src="/images/user.png" alt="User Icon" />
              </div>
              <div className="input-group">
                <label htmlFor="cardNumber">Card Number</label>
                <input type="text" id="cardNumber" placeholder="Card Number" />
                <img src="/images/card.png" alt="Card Icon" />
              </div>
              <div className="input-group">
                <label htmlFor="expiryDate">Expiry Date</label>
                <input type="text" id="expiryDate" placeholder="MM/YY" />
                <img src="/images/date.png" alt="Date Icon" />
              </div>
              <div className="input-group">
                <label htmlFor="cvv">CVV</label>
                <input type="password" id="cvv" placeholder="CVV" />
                <img src="/images/password.png" alt="Lock Icon" />
              </div>
            
            
        <div className="ext-link">
          <a className="link1" href="#">Where is Card Number ?</a>
          <a className="link2" href="#">Where is CVV ?</a>
          <a className="link3" href="#">Where is Expired Date ?</a>
        </div>


            </div>
          )}

          {paymentMethod === 'paypal' && (
            <div className="payment-inputs">
              {/* <p>Pay easily using your PayPal account.</p> */}
              <div className="input-group">
                <label htmlFor="nameOnCard">PAYPAL ID</label>
                <input type="text" id="upiid" placeholder="Enter UPI ID" />
                <img src="/images/user.png" alt="User Icon" />
              </div>
              <button className='verify1'>Verify</button>
      
              <div className="input-group">
                <label htmlFor="name">User Name</label>
                <input type="text" id="upiid" placeholder="Enter User Name" />
                <img src="/images/user.png" alt="User Icon" />
              </div>
            </div>
          )}

          {paymentMethod === 'gpay' && (
            <div className="payment-inputs">
              {/* <p>Pay easily using your Google Pay account.</p> */}
              <div className="input-group">
                <label htmlFor="nameOnCard">UPI ID</label>
                <input type="text" id="upiid" placeholder="Enter UPI ID" />
                <img src="/images/user.png" alt="User Icon" />
              </div>
              <button className='verify1'>Verify</button>

              <div className="input-group">
                <label htmlFor="name">User Name</label>
                <input type="text" id="upiid" placeholder="Enter User Name" />
                <img src="/images/user.png" alt="User Icon" />
              </div>
            </div>
          )}

          {paymentMethod === 'applepay' && (
            <div className="payment-inputs">
            {/* <p>Pay easily using your Google Pay account.</p> */}
            <div className="input-group">
              <label htmlFor="nameOnCard">APPLE ID</label>
              <input type="text" id="upiid" placeholder="Enter UPI ID" />
              <img src="/images/user.png" alt="User Icon" />
            </div>
            
            <button className='verify1'>Verify</button>

            <div className="input-group">
              <label htmlFor="name">USER NAME</label>
              <input type="text" id="upiid" placeholder="Enter User Name" />
              <img src="/images/user.png" alt="User Icon" />
            </div>
          </div>
          )}
        </div>

        <div className='sidebar'>
          <div className="right-side">
            <div className="summary">
              <div className='table'>
                <h3>Order Summary</h3>
                <h5>({items.length} items)</h5>
              </div>
              <div className='table'>
                <p className="subtotal">Subtotal:</p>
                <p className="subtotal1">Rs.{subtotal}.00</p>
              </div>
              <div className='table'>
                <p className="shipping">Shipping:</p>
                <p className="shipping1">{shipping}.00</p>
              </div>
              <div className='table'>
                <p className="total">Total:</p>
                <p className="total1">Rs.{totalAmount}.00</p>
              </div>
              <div className="pay-now-button">
                <button >
                  {paymentMethod ? `Pay with ${paymentMethod.charAt(0).toUpperCase() + paymentMethod.slice(1)}` : 'Pay Now'}
                </button>
 
              </div>
             </div>
          </div>
          <div className="additional-options">
            <div className='table'>
              <h3>Payment Accepted:</h3>
              <div className="payment-option">
                <input type="radio" name="payment" id="cod" onChange={() => handlePaymentMethodChange('CASH')} />
                <label htmlFor="cod">Cash on Delivery</label>
              </div>
            </div>
            <br/>
            <h3>Customer Services</h3>
            <br />
            <p>Contact: +912345678.</p>
          </div>

          
        </div>
        
      </div>
      

    </div>
  );
};

export default PaymentPage;
