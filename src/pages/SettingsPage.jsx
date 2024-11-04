import React, { useState, useEffect } from 'react';
import '../styles/SettingsPage.css';

const SettingsPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [profileImageUrl, setProfileImageUrl] = useState(null);
  const [theme, setTheme] = useState('light');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(null);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showResetModal, setShowResetModal] = useState(false);

  // Apply dark or light mode based on `darkMode` state
  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : 'light-mode';
  }, [darkMode]);

  // Handle profile picture change
  const handleProfilePictureChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setProfileImageUrl(URL.createObjectURL(e.target.files[0]));
    }
  };

  // Password validation
  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    if (newPassword.length < 8) {
      setPasswordError('Password must be at least 8 characters long');
    } else {
      setPasswordError(null);
    }
  };

  // Reset settings to defaults
  const resetToDefaults = () => {
    setDarkMode(false);
    setPushNotifications(true);
    setTheme('light');
    setProfileImageUrl(null);
    setPassword('');
    setSaveSuccess(false);
    setShowResetModal(false); // Close modal after resetting
  };

  // Save settings with success message
  const handleSaveSettings = () => {
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000); // Hide message after 3 seconds
  };

  // Confirm account deletion
  const confirmDeleteAccount = () => {
    setShowDeleteModal(false);
    alert("Account deleted successfully!");
  };

  return (
    <div className={`settings-page ${darkMode ? 'dark-mode' : ''}`}>
      {saveSuccess && <div className="success-message">Settings updated successfully!</div>}
      
      {/* <h2>Settings</h2> */}

      {/* Account Settings */}
      <section className="settings-section">
        <h3>Account Settings</h3>

        <div className="setting-item">
          <label>Profile Picture</label>
          <div className="profile-picture">
            <img src={profileImageUrl || 'default-avatar.png'} alt="Profile" className="profile-img-preview" />
            <input type="file" accept="image/*" onChange={handleProfilePictureChange} />
          </div>
        </div>

        <div className="setting-item">
          <label>Password</label>
          <div className="password-input-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Update your password"
              value={password}
              onChange={handlePasswordChange}
            />
            <button type="button" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          {passwordError && <small className="error-message">{passwordError}</small>}
        </div>

        <button className="section-save-button" onClick={handleSaveSettings}>Save Account Settings</button>
      </section>

      {/* Preferences */}
      <section className="settings-section">
        <h3>Preferences</h3>

        <div className="setting-item">
          <label>Dark Mode</label>
          <input
            type="checkbox"
            id="darkModeToggle"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
        </div>

        <div className="setting-item">
          <label>Push Notifications</label>
          <input
            type="checkbox"
            checked={pushNotifications}
            onChange={() => setPushNotifications(!pushNotifications)}
          />
        </div>

        <button className="section-save-button" onClick={handleSaveSettings}>Save Preferences</button>
      </section>

      {/* Theme Selection */}
      <section className="settings-section">
        <h3>Theme</h3>
        <div className="theme-options">
          <button
            className={`theme-option ${theme === 'light' ? 'selected' : ''}`}
            onClick={() => setTheme('light')}
          >
            Light
          </button>
          <button
            className={`theme-option ${theme === 'dark' ? 'selected' : ''}`}
            onClick={() => setTheme('dark')}
          >
            Dark
          </button>
        </div>

        <button className="section-save-button" onClick={handleSaveSettings}>Save Theme</button>
      </section>

      {/* Reset to Default */}
      <button className="reset-button" onClick={() => setShowResetModal(true)}>Reset to Default</button>

      {/* Account Deletion */}
      <section className="settings-section account-deletion">
        <h3>Delete Account</h3>
        <p>This action is irreversible. Once you delete your account, all your data will be permanently removed.</p>
        <button className="delete-account-btn" onClick={() => setShowDeleteModal(true)}>Delete My Account</button>
      </section>

      {/* Modal for Deletion Confirmation */}
      {showDeleteModal && (
        <div className="modal">
          <div className="modal-content">
            <h4>Confirm Account Deletion</h4>
            <p>Are you sure you want to delete your account? This action cannot be undone.</p>
            <button className="modal-button confirm" onClick={confirmDeleteAccount}>
              Confirm
            </button>
            <button className="modal-button cancel" onClick={() => setShowDeleteModal(false)}>
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Modal for Reset Confirmation */}
      {showResetModal && (
        <div className="modal">
          <div className="modal-content">
            <h4>Confirm Reset</h4>
            <p>Are you sure you want to reset all settings to default? This action cannot be undone.</p>
            <button className="modal-button confirm" onClick={resetToDefaults}>
              Confirm
            </button>
            <button className="modal-button cancel" onClick={() => setShowResetModal(false)}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SettingsPage;
