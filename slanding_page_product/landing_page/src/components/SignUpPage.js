import React from 'react';
import './SignupPage.css'; 



const SignupPage = () => {
  return (
    <div className="signup-page">
      {/* <div className="left-section">
        <img src={logo} alt="Logo" className="logo" />
        <h1>PawsVeda</h1>
        <img src={catImage} alt="Cat" className="cat-image" />
      </div> */}
      <div className="right-section">
        <div className="card">
          <a href="/" className="back-link">Back</a>
          <h1>Create your account</h1>
          <label htmlFor="name">What is your name:</label>
          <input type="text" id="name" />
          <label htmlFor="email">What's your email:</label>
          <input type="email" id="email" />
          <label htmlFor="contact">Enter your contact number:</label>
          <input type="text" id="contact" />
          <label htmlFor="password">Create a password:</label>
          <input type="password" id="password" />
          <label htmlFor="confirm-password">Confirm password:</label>
          <input type="password" id="confirm-password" />
          <button type="submit" className="signup-button">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
