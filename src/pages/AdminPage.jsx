import React, { useState } from 'react';
import '../styles/AdminPage.css';
import searchIcon from '../assets/searchicon.svg';
import addUserIcon from '../assets/addUserIcon.png';
import settingsIcon from '../assets/Settings.svg';
import editIcon from '../assets/pen.svg';
import disableIcon from '../assets/slash-circle.svg';
import deleteIcon from '../assets/trashuser.svg';
import privilegeIcon from '../assets/addadmin.svg';

const admins = [
  { id: '#OGH367', name: 'Kelvin Mulama', status: 'Logged in', isAdmin: true, isSuperAdmin: true },
  { id: '#ODSJIC', name: 'Micah Barasa', status: 'You', isAdmin: true, isSuperAdmin: false },
  { id: '#0IWE4N', name: 'Liam Beka', status: 'Logged in', isAdmin: false, isSuperAdmin: true },
  { id: '#K34MDF', name: 'Liam Beka', status: 'Logged in', isAdmin: false, isSuperAdmin: false },
];

const AdminPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentDropdown, setCurrentDropdown] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false); // Simulate user role for privilege button
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility state

  const filteredAdmins = admins.filter((admin) =>
    admin.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleDropdown = (id) => {
    setCurrentDropdown(currentDropdown === id ? null : id);
  };

  const handleRequestPrivileges = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="admin-page">
      <div className="header-container">
        <header className="admin-header">
          <h2>User Management</h2>
          <p>Permissions & Accounts + User management</p>
        </header>
        <div className="top-bar">
          <div className="search-container">
            <img src={searchIcon} alt="Search" className="search-icon" />
            <input
              type="text"
              placeholder="Search user..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          {isAdmin ? (
            <button className="add-user-btn">
              <img src={addUserIcon} alt="Add User" />
              Add user
            </button>
          ) : (
            <button className="request-privileges-btn" onClick={handleRequestPrivileges}>
              Request privileges
            </button>
          )}
        </div>
      </div>

      <table className="admin-table">
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>User ID</th>
            <th>Users</th>
            <th>Super Admin Role</th>
            <th>System Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredAdmins.map((admin) => (
            <tr key={admin.id} className={admin.isSuperAdmin ? 'highlight-row' : ''}>
              <td>
                <input type="checkbox" />
              </td>
              <td>{admin.id}</td>
              <td>
                <div className="admin-name">
                  <img src={settingsIcon} alt="Profile" className="profile-pic" />
                  {admin.name}
                </div>
              </td>
              <td className="status">{admin.isSuperAdmin ? 'Yes' : '-'}</td>
              <td>{admin.status}</td>
              <td>
                <div className="action-dropdown">
                  <button
                    className="dropdown-btn"
                    onClick={() => toggleDropdown(admin.id)}
                  >
                    <img src={settingsIcon} alt="Actions" />
                  </button>
                  {currentDropdown === admin.id && (
                    <div className="dropdown-content">
                      <div className="dropdown-item">
                        <img src={editIcon} alt="Edit" />
                        <span>Edit</span>
                      </div>
                      <div className={`dropdown-item ${admin.isAdmin ? '' : 'disabled'}`}>
                        <img src={privilegeIcon} alt="Privileges" />
                        <span>Add Admin privileges</span>
                      </div>
                      <div className={`dropdown-item ${admin.isAdmin ? '' : 'disabled'}`}>
                        <img src={disableIcon} alt="Disable" />
                        <span>Disable user</span>
                      </div>
                      <div className={`dropdown-item ${admin.isAdmin ? '' : 'disabled'}`}>
                        <img src={deleteIcon} alt="Delete" />
                        <span>Delete user</span>
                      </div>
                    </div>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Privilege Request Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Request Privileges</h3>
            <p>Please confirm your request to gain additional admin privileges.</p>
            <div className="modal-actions">
              <button className="confirm-btn" onClick={closeModal}>Confirm</button>
              <button className="cancel-btn" onClick={closeModal}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPage;
