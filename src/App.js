import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import DashboardPage from './pages/DashboardPage';
import CustomerPage from './pages/CustomerPage';
import StatusPage from './pages/StatusPage';
import ReviewPage from './pages/ReviewPage';
import AdminPage from './pages/AdminPage';
import ComparePerformancePage from './pages/ComparePerformancePage'
import SettingsPage from './pages/SettingsPage'
import HelpPage from './pages/HelpPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/dashboard" element={<LoginPage />} /> {/* Default to login page */}
          <Route path="/register" element={<RegisterPage />} /> {/* Register page route */}
          <Route path="/forgot-password" element={<ForgotPasswordPage />} /> {/* Forgot Password page route */}
          <Route path="/" element={<DashboardPage />} /> {/* Dashboard page route */}
          <Route path="/customers" element={<CustomerPage />} /> {/* Customer page route */}
          <Route path="/status" element={<StatusPage />} /> {/* Status page route */}
          <Route path="/review" element={<ReviewPage />} /> {/* Review page route */}
          <Route path="/admin" element={<AdminPage />} /> {/* Admin page route */}
          <Route path="/compare-performance" element={<ComparePerformancePage />} /> {/* Compare Performance page route*/}
          <Route path="/settings" element={<SettingsPage />} /> {/* Settings page route */}
          <Route path="/help" element={<HelpPage />} /> {/* Help page route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
