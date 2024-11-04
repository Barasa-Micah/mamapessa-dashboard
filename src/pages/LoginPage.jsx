import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/LoginPage.css';
import logo from '../assets/logo.png';
import emailIcon from '../assets/emailShape.svg';
import lockIcon from '../assets/lock Shape.svg';
import googleIcon from '../assets/Google.svg';
import backIcon from '../assets/back.svg';
import hideIcon from '../assets/hide icon.svg';
import darkModeIcon from '../assets/iconamoon_mode-dark-light.svg'; // Add your icon path here
import captchaImage from '../assets/pngwing.png'

const LoginPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode', isDarkMode);
  };

  return (
    <div className="login-container">
      {/* Left Section with Background Image */}
      <div className="left-section"></div>

      {/* Right Section with Login Form */}
      <div className="right-section">
        {/* Dark Mode Toggle Button */}
        <div className="dark-mode-toggle" onClick={toggleDarkMode}>
          <img src={darkModeIcon} alt="Toggle Dark Mode" />
        </div>

        <div className="back-button">
          <img src={backIcon} alt="Back" />
          <span>Back</span>
        </div>
        <div className="login-content">
          <img src={logo} alt="MamaPessa Logo" className="logo" />
          <h2 className="login-title">Login to Dashboard</h2>
          <p className="login-subtitle">Enter your account information</p>

          <div className="input-group">
            <img src={emailIcon} alt="Email Icon" />
            <input type="email" placeholder="Email address" />
          </div>

          <div className="input-group">
            <img src={lockIcon} alt="Password Icon" />
            <input type="password" placeholder="Password" />
            <img src={hideIcon} alt="Hide Password Icon" className="hide-icon" />
          </div>

          <div className="forgot-password">
            <Link to="/forgot-password">Forgot password?</Link>
          </div>

          <button className="login-btn">Sign in</button>

          <div className="or-section">
            <span>OR</span>
          </div>

          <button className="google-btn">
            <img src={googleIcon} alt="Google" />
            Login with Google
          </button>

          <p className="signup-text">
            Don't have an account yet? <Link to="/register">Sign up</Link>
          </p>

          {/* CAPTCHA Section */}
          <div className="captcha-section">
            <input type="checkbox" id="not-robot" />  
            <p>I am not a robot  </p>
            <img src={captchaImage} alt="CAPTCHA" className="captcha-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
