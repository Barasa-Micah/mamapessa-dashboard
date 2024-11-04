import React, { useState } from 'react';
import '../styles/DashboardPage.css';
import CustomerPage from './CustomerPage.jsx';
import StatusPage from './StatusPage.jsx'; 
import ReviewPage from './ReviewPage.jsx';
import AdminPage from './AdminPage.jsx'
import SettingsPage from './SettingsPage.jsx';
import ComparePerformancePage from './ComparePerformancePage.jsx';
import HelpPage from './HelpPage';
import {
  LineChart, Line, PieChart, Pie, Cell, Tooltip, BarChart, Bar, ResponsiveContainer, XAxis, YAxis
} from 'recharts';
import logo from '../assets/logo.png';
import dashboardIcon from '../assets/dashboardoutlineicon.svg';
import customersIcon from '../assets/customers.svg';
import statusIcon from '../assets/status.svg';
import reviewsIcon from '../assets/reviews.svg';
import adminsIcon from '../assets/Admins.png';
import comparePerformanceIcon from '../assets/compareperformance.svg';
import settingsIcon from '../assets/Settings.svg';
import searchIcon from '../assets/searchicon.svg';
import logoutIcon from '../assets/logout.svg';
import helpIcon from '../assets/help.svg';
import editIcon from '../assets/pen.svg';
import notificationIcon from '../assets/notificationbell.svg';
import menuIcon from '../assets/hide icon.svg';
import totalSavingsIcon from '../assets/nimbus_money.svg';
import businessRegisteredIcon from '../assets/Businessregisteredcase.svg';
import sitevisitors from '../assets/sitevisitors.svg';
import darkmodeIcon from '../assets/iconamoon_mode-dark-light.svg'

// Dummy data for charts
const lineData = [
  { month: 'Jan', savings: 200 },
  { month: 'Feb', savings: 300 },
  { month: 'Mar', savings: 150 },
  { month: 'Apr', savings: 400 },
  { month: 'May', savings: 300 },
  { month: 'Jun', savings: 350 },
  { month: 'Jul', savings: 500 },
];

const activityData = [
  { month: 'Jan', activity: 100 },
  { month: 'Feb', activity: 200 },
  { month: 'Mar', activity: 150 },
  { month: 'Apr', activity: 250 },
  { month: 'May', activity: 300 },
  { month: 'Jun', activity: 350 },
  { month: 'Jul', activity: 400 },
];

const loanData = [
  { month: 'Jan', loan: 100 },
  { month: 'Feb', loan: 200 },
  { month: 'Mar', loan: 150 },
  { month: 'Apr', loan: 250 },
  { month: 'May', loan: 300 },
  { month: 'Jun', loan: 350 },
  { month: 'Jul', loan: 400 },
];

const pieData = [
  { name: 'New', value: 62 },
  { name: 'Active', value: 23 },
  { name: 'Inactive', value: 13 },
];

const subscriptionData = [
  { name: 'Subscribed', value: 40 },
  { name: 'Others', value: 60 },
];

const DashboardPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [currentView, setCurrentView] = useState('dashboard');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark-mode", !isDarkMode);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleNavigationClick = (view) => {
    setCurrentView(view);
  };

  return (
    <div className={`dashboard-container ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
      {/* Sidebar */}
      <aside className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
        <div className="logo-section">
          <img src={logo} alt="MamaPesa Logo" className="logo" />
          {/* {isSidebarOpen && <h2 className="logo-text">MamaPesa</h2>} */}
          {isSidebarOpen}
        </div>
        <nav className="nav-links">
          <div className={`nav-item ${currentView === 'dashboard' ? 'active' : ''}`} onClick={() => handleNavigationClick('dashboard')}>
            <img src={dashboardIcon} alt="Dashboard" />
            {isSidebarOpen && <span>Dashboard</span>}
          </div>
          <div className={`nav-item ${currentView === 'customers' ? 'active' : ''}`} onClick={() => handleNavigationClick('customers')}>
            <img src={customersIcon} alt="Customers" />
            {isSidebarOpen && <span>Customers</span>}
          </div>
          <div className={`nav-item ${currentView === 'status' ? 'active' : ''}`} onClick={() => handleNavigationClick('status')}>
            <img src={statusIcon} alt="Status" />
            {isSidebarOpen && <span>Status</span>}
          </div>
          <div className={`nav-item ${currentView === 'reviews' ? 'active' : ''}`} onClick={() => handleNavigationClick('reviews')}>
            <img src={reviewsIcon} alt="Reviews" />
            {isSidebarOpen && <span>Reviews</span>}
          </div>
          <div className={`nav-item ${currentView === 'admins' ? 'active' : ''}`} onClick={() => handleNavigationClick('admins')}>
            <img src={adminsIcon} alt="Admins" />
            {isSidebarOpen && <span>Admins</span>}
          </div>
        </nav>
        <div className="support-section">
          <div className={`nav-item ${currentView === 'comparePerformance' ? 'active' : ''}`} onClick={() => handleNavigationClick('comparePerformance')}>
            <img src={comparePerformanceIcon} alt="Compare Performance" />
            {isSidebarOpen && <span>Compare Performance</span>}
          </div>
          <div className={`nav-item ${currentView === 'settings' ? 'active' : ''}`} onClick={() => handleNavigationClick('settings')}>
            <img src={settingsIcon} alt="Settings" />
            {isSidebarOpen && <span>Settings</span>}
          </div>
        </div>
        <div className={`nav-item ${currentView === 'help' ? 'active' : ''}`} onClick={() => handleNavigationClick('help')}>
          <div className="nav-item">
            <img src={helpIcon} alt="Help" />
            {isSidebarOpen && <span>Help</span>}
          </div>
          <div className="nav-item">
            <img src={logoutIcon} alt="Logout" />
            {isSidebarOpen && <span>Logout</span>}
          </div>
        </div>
      </aside>

      {/* Toggle Button */}
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        <img src={menuIcon} alt="Toggle Sidebar" />
      </button>

      {/* Main Content */}
      <main className="main-content">
        {/* Header */}
        <header className="header">
          <div className="search-bar">
            <img src={searchIcon} alt="Search" className="search-icon" />
             {/* Conditional placeholder based on currentView */}
            <input
              type="text"
              placeholder={currentView === 'customers' ? "Search customer..." : "Search..."}
            />
          </div>

          <div className="header-icons">
            <img src={darkmodeIcon} alt="Dark Mode Toggle" className="icon" onClick={toggleDarkMode} /> {/* Dark mode icon */}
            <img src={notificationIcon} alt="Notifications" className="icon" />
            <img src={editIcon} alt="Edit" className="icon" />

            <div className="vertical-divider"></div> {/* Divider between icons and profile section */}

            <div className="profile-section">
              <span className="greeting">Hello, <strong>Micah</strong></span>
              <img src={customersIcon} alt="Profile" className="profile-img" /> {/* Replace with actual profile image */}
            </div>
          </div>
        </header>
        
        <hr className="dashboard-separator" />
        
        {/* Dashboard Overview */}
        {currentView === 'dashboard' ? (
        <>
          {/* Dashboard Overview */}
          <section className="dashboard-overview">
            <div className="dashboard-content">
              <h1>Dashboard</h1>
              <p>Hi, Kelvin. Welcome back to MamaPesa Admin!</p>
            </div>
            <div className="overview-cards">
            <div className="card total-savings">
                <div className="icon-wrapper savings-icon-bg">
                    <img src={totalSavingsIcon} alt="Total Savings" className="card-icon" />
                </div>
                <div className="card-content">
                    <div className="card-content-text">
                        <p>Total savings</p>
                        <h3>Ksh.1,745,800</h3>
                        <span>This Month</span>
                    </div>
                </div>
                <div className="percentage">+10%</div>
            </div>


              <div className="card business-registered">
                <div className="icon-wrapper business-icon-bg">
                  <img src={businessRegisteredIcon} alt="Business Registered" className="card-icon" />
                </div>
                <div className="card-content">
                  <p>Business registered</p>
                  <h3>1,490</h3>
                  <span>This Month</span>
                </div>
                <div className="percentage">+4%</div>
              </div>

              <div className="card site-visitors">
                <div className="icon-wrapper visitors-icon-bg">
                  <img src={sitevisitors} alt="Site Visitors" className="card-icon" />
                </div>
                <div className="card-content">
                  <p>Site Visitors</p>
                  <h3>2,000</h3>
                  <span>This Month</span>
                </div>
                <div className="percentage">+13%</div>
              </div>

              <div className="card site-visitors">
                <div className="icon-wrapper visitors-icon-bg">
                  <img src={sitevisitors} alt="Site Visitors" className="card-icon" />
                </div>
                <div className="card-content">
                  <p>Groups</p>
                  <h3>1,478</h3>
                  <span>This Month</span>
                </div>
                <div className="percentage">+19%</div>
              </div>
            </div>
          </section>

          {/* Additional Insights */}
          <section className="additional-insights">
            <div className="insight-card total-customers">
              <h4>Total customers</h4>
              <h3>4,209</h3>
              <ResponsiveContainer width="100%" height={150}>
                <PieChart>
                  <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50}>
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={index === 0 ? "#5B1400" : index === 1 ? "#B23816" : "#E5E5E5"} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="legend">
                <div><span style={{ backgroundColor: '#5B1400', borderRadius: '50%', display: 'inline-block', width: '10px', height: '10px', marginRight: '5px' }}></span> 62% New</div>
                <div><span style={{ backgroundColor: '#B23816', borderRadius: '50%', display: 'inline-block', width: '10px', height: '10px', marginRight: '5px' }}></span> 23% Active</div>
                <div><span style={{ backgroundColor: '#E5E5E5', borderRadius: '50%', display: 'inline-block', width: '10px', height: '10px', marginRight: '5px' }}></span> 13% Inactive</div>
              </div>
            </div>

            <div className="insight-card subscriptions">
              <h4>Subscriptions</h4>
              <h3>302</h3>
              <ResponsiveContainer width="100%" height={150}>
                <PieChart>
                  <Pie data={subscriptionData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50}>
                    {subscriptionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={index === 0 ? "#B23816" : "#E5E5E5"} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="legend">
                <div><span style={{ backgroundColor: '#B23816', borderRadius: '50%', display: 'inline-block', width: '10px', height: '10px', marginRight: '5px' }}></span> 40% Subscribed</div>
                <div><span style={{ backgroundColor: '#E5E5E5', borderRadius: '50%', display: 'inline-block', width: '10px', height: '10px', marginRight: '5px' }}></span> 60% Others</div>
              </div>
            </div>

            <div className="insight-card savings-overview">
              <h4>Savings overview</h4>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={lineData} margin={{ top: 20, right: 20, left: 20, bottom: 10 }}>
                  <defs>
                    <linearGradient id="savingsGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#5B1400" stopOpacity={0.4} />
                      <stop offset="100%" stopColor="#5B1400" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="month" tick={{ fill: '#666', dy: 10 }} />
                  <YAxis tick={{ fill: '#666' }} tickFormatter={(value) => `${value}k`} />
                  <Line type="monotone" dataKey="savings" stroke="#5B1400" strokeWidth={2} fill="url(#savingsGradient)" />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="insight-card customer-activity">
              <h4>Overall Customers Activity</h4>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={activityData} margin={{ top: 20, right: 20, left: 20, bottom: 10 }}>
                  <defs>
                    <linearGradient id="activityGradient" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#E5E5E5" stopOpacity={0.4} />
                      <stop offset="50%" stopColor="#B23816" stopOpacity={0.7} />
                      <stop offset="100%" stopColor="#5B1400" stopOpacity={1} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="month" tick={{ fill: '#666', dy: 10 }} />
                  <YAxis tick={{ fill: '#666' }} tickFormatter={(value) => `${value}k`} />
                  <Line type="monotone" dataKey="activity" stroke="url(#activityGradient)" strokeWidth={3} dot={false} />
                  <Tooltip />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="insight-card loan-overview">
              <h4>Customers' loan overview</h4>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={loanData} margin={{ top: 20, right: 20, left: 20, bottom: 10 }}>
                  <defs>
                    <linearGradient id="loanGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#5B1400" stopOpacity={1} />
                      <stop offset="50%" stopColor="#5B1400" stopOpacity={0.5} />
                      <stop offset="100%" stopColor="#E5E5E5" stopOpacity={0.2} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="month" tick={{ fill: '#666' }} />
                  <YAxis tick={{ fill: '#666' }} tickFormatter={(value) => `${value}k`} />
                  <Bar dataKey="loan" fill="url(#loanGradient)" barSize={20} radius={[10, 10, 0, 0]} />
                  <Tooltip />
                </BarChart>
              </ResponsiveContainer>  
            </div>
          </section>
        </>
      )  : currentView === 'customers' ? (
          <CustomerPage />
      ) : currentView === 'status' ? (
          <StatusPage />
      ) : currentView === 'reviews' ? (  // Add this condition
          <ReviewPage />  // Display ReviewPage when 'reviews' view is selected
      ) : currentView === 'admins' ? (
        <AdminPage />  // Display AdminPage when 'admins' view is selected
      ) : currentView === 'comparePerformance' ? (  // Add this condition
        <ComparePerformancePage />  // Render ComparePerformancePage when selected
      ) : currentView === 'settings' ? (
        <SettingsPage />  // Render SettingsPage when selected
      )  : currentView === 'help' ? (
        <HelpPage />  // Render SettingsPage when selected
      ): null}
      </main>
    </div>
  );
};

export default DashboardPage;
