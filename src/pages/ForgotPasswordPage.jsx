import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/ForgotPasswordPage.css';
import logo from '../assets/logo.png';
import emailIcon from '../assets/emailShape.svg';
import backIcon from '../assets/back.svg';
import darkModeIcon from '../assets/iconamoon_mode-dark-light.svg';

const ForgotPasswordPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode', isDarkMode);
  };

  return (
    <div className="forgot-password-container">
      {/* Left Section with Background */}
      <div className="left-section"></div>

      {/* Right Section with Form */}
      <div className="right-section">
        {/* Dark Mode Toggle Button */}
        <div className="dark-mode-toggle" onClick={toggleDarkMode}>
          <img src={darkModeIcon} alt="Toggle Dark Mode" />
        </div>

        {/* Back Button */}
        <div className="back-button">
          <Link to="/">
            <img src={backIcon} alt="Back" />
            <span>Back to Login</span>
          </Link>
        </div>

        <div className="forgot-password-content">
          <img src={logo} alt="Logo" className="logo" />
          <h2 className="forgot-password-title">Forgot Password?</h2>
          <p className="forgot-password-subtitle">
            Enter your email to reset your password. We’ll send a reset link if the email is registered with us.
          </p>

          <div className="input-group">
            <img src={emailIcon} alt="Email Icon" />
            <input type="email" placeholder="Email address" />
          </div>

          <button className="reset-btn">Send Reset Link</button>

          <p className="login-text">
            Remembered your password? <Link to="/">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
