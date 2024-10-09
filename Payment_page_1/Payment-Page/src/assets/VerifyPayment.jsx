import React from 'react';
import { FaCheckCircle, FaRupeeSign, FaMobileAlt, FaArrowCircleRight, FaInfoCircle } from 'react-icons/fa';
import './VerifyPayment.css';

const VerifyPayment = () => {
  return (
    <div className="container">
      <div className="noteBox">
      <FaInfoCircle size={16}  style={{ color: 'blue' }}/>
        <p className="noteText">
          Note: Please do not press back button or close the screen until the payment is complete
        </p>
      </div>
      <h2>Complete your payment</h2>
      <div className="iconic">
        <FaRupeeSign size={28} />
        <FaArrowCircleRight size={28} />
        <FaMobileAlt size={28}/>
      </div>


      <div className="instructions">
        
        <div className="instruction">
          <FaArrowCircleRight size={24} />
          <p>Go to UPI ID linked mobile app or Click on the notification from your UPI ID linked mobile app</p>
        </div>

        <div className="instruction">
          <FaRupeeSign size={24} />
          <p>Check pending transactions</p>
        </div>
        <div className="instruction">
          <FaCheckCircle size={24}  style={{ color: 'green' }}/>
          <p>Complete the payment by selecting the bank and entering UPI PIN</p>
        </div>
        <div className="instruction1">
          <FaInfoCircle size={18}  style={{ color: 'blue' }} />
          <p>If you have entered the UPI ID of friends or family, they will need to authorize the payment from their UPI App</p>
        </div>
      </div>
      <p className="expireText">This page will automatically expire in 10 mins.</p>
      <div className="progressBar">
        <div className="progress"></div>
      </div>
    </div>
  );
};

export default VerifyPayment;
