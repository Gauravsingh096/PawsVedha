// import React from 'react';
// import './LoginPage.css';
// import LogoImage from './images/logo.jpg'; 
// import GoogleIcon  from './images/google.png';
// import FacebookIcon from './images/fb.png';
// import TwitterIcon from './images/twitter.png';
// import dogImage from './images/dog.jpg';

// const LoginPage = () => {
//   return (
//     <div className="container">
//       <div className="login-box">
//         <div className="form-section">
//           <div className="logo">
  
//             <img src={LogoImage} alt="Dog" className="logo-image" />
//             <h1>PawsVeda</h1>
//           </div>
//           <label>Enter username:</label>
//           <input type="text" placeholder="Username" className="input" />
//           <label>Enter password:</label>
//           <input type="password" placeholder="Password" className="input" />
//           <div className="remember-me">
//             <input type="checkbox" id="rememberMe" />
//             <label htmlFor="rememberMe">Remember Me</label>
//           </div>
//           <a href="#forgot-password" className="forgot-password">Forgot Password?</a>
//           <button className="login-button">Login</button>
//           <hr className="divider" />
//           <div className="social-login">
//             <GoogleIcon />
//             <FacebookIcon />
//             <TwitterIcon />
//           </div>
//           <a href="#sign-up" className="sign-up">SIGN UP</a>
//         </div>
//         <img src={dogImage} alt="Dog" className="dog-image" />
//       </div>
//     </div>
//   );
// };

// export default LoginPage;


import React from 'react';
import './LoginPage.css';
import LogoImage from './images/logo.jpg'; 
import GoogleIcon from './images/google.png';
import FacebookIcon from './images/fb.png';
import TwitterIcon from './images/twitter.png';
import DogImage from './images/dog2.png';

const LoginPage = () => {
  return (
    <div className="container">
      <div className="login-box">
        <div className="form-section">
          <div className="logo">
            <img src={LogoImage} alt="Logo" className="logo-image" />
            <h1>PawsVeda</h1>
          </div>
          <label><b>Enter username:</b></label>
          <input type="text" placeholder="Username" className="input" />
          <label><b>Enter password:</b></label>
          <input type="password" placeholder="Password" className="input" />
          <div className="remember-me">
            <input type="checkbox" id="rememberMe" />
            <label htmlFor="rememberMe">Remember Me</label>
          </div>
          <a href="#forgot-password" className="forgot-password">Forgot Password?</a>
          <button className="login-button">Login</button>
          <hr className="divider" />
          <div className="social-login">
            <img src={GoogleIcon} alt="Google" className="social-icon" />
            <img src={FacebookIcon} alt="Facebook" className="social-icon" />
            <img src={TwitterIcon} alt="Twitter" className="social-icon" />
          </div>
          <a href="#sign-up" className="sign-up">SIGN UP</a>
        </div>
        <img src={DogImage} alt="Dog" className="dog-image" />
      </div>
    </div>
  );
};

export default LoginPage;

