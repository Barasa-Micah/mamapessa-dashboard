import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/RegisterPage.css';
import logo from '../assets/logo.png';
import emailIcon from '../assets/emailShape.svg';
import lockIcon from '../assets/lock Shape.svg';
import fullNameIcon from '../assets/emailShape.svg'; // Add an icon for the full name
import googleIcon from '../assets/Google.svg';
import backIcon from '../assets/back.svg';
import hideIcon from '../assets/hide icon.svg';
import darkModeIcon from '../assets/iconamoon_mode-dark-light.svg';
import registerLeftImage from '../assets/registerleft.PNG';
import captchaImage from '../assets/pngwing.png'

const RegisterPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode', isDarkMode);
  };

  return (
    <div className="register-container">
      {/* Left Section with Background Image */}
      <div className="left-section" style={{ backgroundImage: `url(${registerLeftImage})` }}></div>

      {/* Right Section with Register Form */}
      <div className="right-section">
        {/* Dark Mode Toggle Button */}
        <div className="dark-mode-toggle" onClick={toggleDarkMode}>
          <img src={darkModeIcon} alt="Toggle Dark Mode" />
        </div>

        <div className="back-button">
          <img src={backIcon} alt="Back" />
          <span>Back</span>
        </div>
        
        <div className="register-content">
          <img src={logo} alt="MamaPessa Logo" className="logo" />
          <h2 className="register-title">Register to gain access to MamaPesa Dashboard</h2>
          <p className="register-subtitle">Enter your account information</p>

          <div className="input-group">
            <img src={fullNameIcon} alt="Full Name Icon" />
            <input type="text" placeholder="Full name..." />
          </div>

          <div className="input-group">
            <img src={emailIcon} alt="Email Icon" />
            <input type="email" placeholder="Email address..." />
          </div>

          <div className="input-group">
            <img src={lockIcon} alt="Password Icon" />
            <input type="password" placeholder="Password..." />
            <img src={hideIcon} alt="Hide Password Icon" className="hide-icon" />
          </div>

          <div className="remember-me">
            <input type="checkbox" id="rememberMe" />
            <label htmlFor="rememberMe">Remember me</label>
          </div>

          <button className="register-btn">Sign up</button>

          <div className="or-section">
            <span>OR</span>
          </div>

          <button className="google-btn">
            <img src={googleIcon} alt="Google" />
            Login with Google
          </button>

          <p className="signin-text">
            Already have an account? <Link to="/">Sign in</Link>
          </p>

          <div className="captcha-section">
              <input type="checkbox" id="not-robot" />
              <label htmlFor="not-robot">I am not a robot</label>
              <img src={captchaImage} alt="CAPTCHA" className="captcha-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
