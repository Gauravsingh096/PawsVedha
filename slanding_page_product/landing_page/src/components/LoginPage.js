// LoginPage.js

import React from 'react';
import './LoginPage.css'; 

const LoginPage = () => {
  return (
    <div className="login-container">
      <div className="left-section">
        <div className="logo-container">
            {/* logo image */}
          <img src="/images/Screenshot 2024-05-13 010213.png" alt="Logo" className="logo" />
          <h1 >PawsVeda</h1>
        </div>
        <div className="form-container">
            {/* form fields of input  */}
          <div className="input-group">
            <label htmlFor="username">Enter Username</label>
            <input type="text" id="username" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Enter Password</label>
            <input type="password" id="password" />
          </div>
          <div className="checkbox-group">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
            <a href="#">Forgot Password?</a>
          </div>
          <button className="login-btn">Login</button>
          <div className="social-login">
  {/* <span>Login with:</span> */}
  {/* Google Icon SVG */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    viewBox="0 0 48 48"
    className="social-icon"
  >
    <path
      fill="#4285F4"
      d="M24 9.5c3.27 0 5.64 1.3 7.07 2.4L35.2 8c-2.29-2.14-5.28-3.5-9.2-3.5C20.51 4.5 15.86 7.1 13.28 11l6.22 5.27C21.18 12.9 22.76 11 24 9.5z"
    />
    <path
      fill="#34A853"
      d="M12.17 14.72l-6.22-5.27C3.99 12.66 3 15.3 3 18c0 2.58.96 4.91 2.55 6.73l6.22-5.27C10.96 17.52 10.6 16.52 10.6 15.5c0-1 .34-2.02.91-2.92z"
    />
    <path
      fill="#FBBC05"
      d="M24 38c4.44 0 8.17-1.63 10.9-4.4l-5.5-4.67c-1.5 1.32-3.41 2.15-5.4 2.15-4.22 0-7.77-2.87-8.83-6.73l-6.22 5.27C11.02 34.95 17.13 38 24 38z"
    />
    <path
      fill="#EA4335"
      d="M43.84 20.18H24v6.34h11.4c-.9 2.66-3.5 5.42-7.4 5.42-2.42 0-4.66-1.01-6.25-2.58l-6.22 5.27C19.24 37.17 21.67 38.5 24 38.5c8 0 13.99-5.86 13.99-13.5 0-1.09-.1-2.14-.15-3.32z"
    />
  </svg>

  {/* Facebook Icon SVG */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    viewBox="0 0 48 48"
    className="social-icon"
  >
    <path
      fill="#3b5998"
      d="M24 4C12.95 4 4 12.95 4 24c0 9.6 6.99 17.53 16 19.43V30.67h-4.79v-6.01H20V20.57c0-4.71 2.83-7.33 7.11-7.33 2.04 0 4.16.35 4.16.35v4.58h-2.34c-2.3 0-3.02 1.43-3.02 2.89v3.48h5.1l-.82 6.01H26v12.76c9.01-1.9 16-9.83 16-19.43 0-11.05-8.95-20-20-20z"
    />
  </svg>
</div>

          <hr />
          {/* signup link */}
          <div className="signup-link">
            <a href="#">Sign Up</a>
          </div>
        </div>
      </div>
      <div className="right-section">
    {/* right vala dog image  */}
        <img src="/images/login_dog.png"alt="Dog" className="dog-image" />
      </div>
    </div>
  );
};

export default LoginPage;
