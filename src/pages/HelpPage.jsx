import React, { useState } from 'react';
import '../styles/HelpPage.css';

const HelpPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isTroubleshootingModalOpen, setIsTroubleshootingModalOpen] = useState(false);
  const [troubleshootingStep, setTroubleshootingStep] = useState(0);
  
  const troubleshootingSteps = [
    "What issue are you facing?",
    "Have you tried restarting the application?",
    "Is your internet connection stable?",
    "Try logging out and logging in again."
  ];

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    // For demonstration, static search results
    setSearchResults([
      { title: "Changing Account Settings", category: "Guide" },
      { title: "Troubleshooting Export Issues", category: "Troubleshooting" },
      { title: "Notification Settings Overview", category: "Guide" },
    ]);
  };

  const startTroubleshooting = () => {
    setIsTroubleshootingModalOpen(true);
    setTroubleshootingStep(0); // Reset to first step
  };

  const nextStep = () => {
    if (troubleshootingStep < troubleshootingSteps.length - 1) {
      setTroubleshootingStep(troubleshootingStep + 1);
    } else {
      setIsTroubleshootingModalOpen(false);
      alert("Troubleshooting completed.");
    }
  };

  const closeModal = () => {
    setIsTroubleshootingModalOpen(false);
  };

  return (
    <div className="help-page">
      {/* Search Section */}
      <section className="help-search">
        <h2>How can we help you?</h2>
        <input
          type="text"
          placeholder="Search for help topics..."
          value={searchQuery}
          onChange={handleSearch}
        />
        <div className="search-results">
          {searchResults.map((result, index) => (
            <div key={index} className="search-result-item">
              <span className="category">{result.category}</span>
              <p>{result.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Recent Updates */}
      <section className="recent-updates">
        <h3>What's New</h3>
        <p>Stay updated with the latest changes and fixes to your dashboard.</p>
        <ul>
          <li>Enhanced password security features</li>
          <li>New dark mode theme for easier reading</li>
          <li>Improved real-time notification settings</li>
        </ul>
      </section>

      {/* Visual Guide */}
      <section className="visual-guide">
        <h3>Dashboard Visual Guide</h3>
        <img src="/assets/dashboard-guide.png" alt="Dashboard visual guide" />
        <p>Hover over sections for details about each feature.</p>
      </section>

      {/* Recent Interactions */}
      <section className="recent-interactions">
        <h3>Your Recent Help Topics</h3>
        <ul>
          <li>How to reset my password?</li>
          <li>How to export reports?</li>
          <li>Setting up notifications</li>
        </ul>
      </section>

      {/* Guided Troubleshooting */}
      <section className="guided-troubleshooting">
        <h3>Troubleshooting Wizard</h3>
        <p>Having issues? Start with a quick troubleshooting guide.</p>
        <button onClick={startTroubleshooting}>Start Troubleshooting</button>
      </section>

      {/* Troubleshooting Modal */}
      {isTroubleshootingModalOpen && (
        <div className="troubleshooting-modal">
          <div className="modal-content">
            <h4>Troubleshooting Step {troubleshootingStep + 1}</h4>
            <p>{troubleshootingSteps[troubleshootingStep]}</p>
            <div className="modal-buttons">
              <button onClick={nextStep}>Next</button>
              <button onClick={closeModal}>Close</button>
            </div>
          </div>
        </div>
      )}

      {/* Feedback Section */}
      <section className="feedback">
        <h3>Was this page helpful?</h3>
        <button className="feedback-btn">Yes</button>
        <button className="feedback-btn">No</button>
      </section>
    </div>
  );
};

export default HelpPage;
