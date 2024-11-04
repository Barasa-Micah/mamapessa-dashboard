import React, { useState } from 'react';
import '../styles/CustomerPage.css';
import filtersIcon from '../assets/filtersbars.svg';
import customersIcon from '../assets/customers.svg';

const CustomerPage = ({ isDarkMode }) => {
  const [customers] = useState([
    { id: '#AGH321', name: 'Ethan Mwai', loans: 3, savings: 'Ksh. 12,450.00', lastActive: 'Yesterday', type: 'Individual', status: 'Active' },
    { id: '#BDK452', name: 'Nia Karanja', loans: 1, savings: 'Ksh. 52,760.00', lastActive: 'Today', type: 'Business', status: 'Active' },
    { id: '#CDF652', name: 'Omar Wanjiru', loans: 2, savings: 'Ksh. 5,890.00', lastActive: '3 days ago', type: 'Individual', status: 'Inactive' },
    { id: '#EFD543', name: 'Sophia Mugo', loans: 6, savings: 'Ksh. 102,300.00', lastActive: 'Today', type: 'Business', status: 'Active' },
    { id: '#FGH354', name: 'David Otieno', loans: 4, savings: 'Ksh. 15,600.00', lastActive: 'Yesterday', type: 'Individual', status: 'Active' },
    { id: '#GHI765', name: 'Amara Mwangi', loans: 7, savings: 'Ksh. 200,560.00', lastActive: '2 days ago', type: 'Business', status: 'Inactive' },
    { id: '#HJI876', name: 'James Kariuki', loans: 0, savings: 'Ksh. 42,780.00', lastActive: 'Today', type: 'Individual', status: 'Active' },
    { id: '#IJK987', name: 'Amina Nyambura', loans: 5, savings: 'Ksh. 73,210.00', lastActive: 'Today', type: 'Business', status: 'Inactive' },
    { id: '#JKL098', name: 'Kevin Njoroge', loans: 2, savings: 'Ksh. 9,890.00', lastActive: '5 days ago', type: 'Individual', status: 'Active' },
    { id: '#KLM109', name: 'Lara Kamau', loans: 3, savings: 'Ksh. 33,460.00', lastActive: 'Today', type: 'Business', status: 'Inactive' },
    { id: '#LMN210', name: 'Brian Ouma', loans: 8, savings: 'Ksh. 104,220.00', lastActive: 'Yesterday', type: 'Individual', status: 'Active' },
    { id: '#MNO321', name: 'Ivy Waithera', loans: 2, savings: 'Ksh. 28,470.00', lastActive: '3 days ago', type: 'Business', status: 'Inactive' },
    { id: '#NOP432', name: 'Chris Mwangi', loans: 9, savings: 'Ksh. 150,780.00', lastActive: 'Today', type: 'Individual', status: 'Active' },
    { id: '#OPQ543', name: 'Rose Kendi', loans: 5, savings: 'Ksh. 68,390.00', lastActive: '2 days ago', type: 'Business', status: 'Inactive' },
    { id: '#PQR654', name: 'Isaac Kirui', loans: 4, savings: 'Ksh. 25,000.00', lastActive: 'Today', type: 'Individual', status: 'Active' },
    { id: '#QRS765', name: 'Alice Nduta', loans: 6, savings: 'Ksh. 91,320.00', lastActive: '5 days ago', type: 'Business', status: 'Inactive' },
    { id: '#RST876', name: 'Faith Njeri', loans: 1, savings: 'Ksh. 7,150.00', lastActive: 'Yesterday', type: 'Individual', status: 'Active' },
    { id: '#STU987', name: 'Michael Obare', loans: 3, savings: 'Ksh. 33,000.00', lastActive: 'Today', type: 'Business', status: 'Inactive' },
    { id: '#TUV098', name: 'Diana Wafula', loans: 7, savings: 'Ksh. 140,860.00', lastActive: '3 days ago', type: 'Individual', status: 'Active' },
    { id: '#UVW109', name: 'George Mwangi', loans: 5, savings: 'Ksh. 82,130.00', lastActive: 'Today', type: 'Business', status: 'Inactive' }
]);

    
    // Header Filters
  const [statusFilter, setStatusFilter] = useState('All');
  const [savingsFilter, setSavingsFilter] = useState('All');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="customer-page">
      <header className="customer-header">
        {/* Search Bar */}
        {/* <div className="search-container">
            <input
            type="text"
            placeholder="Search customer..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div> */}

        {/* Filters */}
        <div className="filters-container">
            <div className="filter-item">
            <label>Status:</label>
            <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
                <option value="All">All</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
            </select>
            </div>

            <div className="filter-item">
            <label>Savings:</label>
            <select value={savingsFilter} onChange={(e) => setSavingsFilter(e.target.value)}>
                <option value="All">All</option>
                <option value=">10000">> 10,000</option>
                <option value=">50000">> 50,000</option>
            </select>
            </div>

            <div className="filter-item">
            <label>Date From:</label>
            <input type="date" value={dateFrom} onChange={(e) => setDateFrom(e.target.value)} />
            </div>

            <div className="filter-item">
            <label>Date To:</label>
            <input type="date" value={dateTo} onChange={(e) => setDateTo(e.target.value)} />
            </div>

            <div className="filter-item">
            <button className="all-filters-button">
                <img src={filtersIcon} alt="Filter Icon" className="filter-icon" /> All Filters
            </button>
            </div>


            <div className="filter-item">
            <label>Sort by:</label>
            <select>
                <option value="Last active">Last active</option>
                <option value="Total loans">Total loans</option>
                <option value="Total savings">Total savings</option>
            </select>
            </div>
        </div>
        </header>


      {/* Customer Table */}
      <table className="customer-table">
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>Customer ID</th>
            <th>Customer</th>
            <th>Total Loans</th>
            <th>Total Savings</th>
            <th>Last Active</th>
            <th>Customer Type</th>
            <th>Account Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, index) => (
            <tr key={index}>
              <td>
                <input type="checkbox" />
              </td>
              <td>{customer.id}</td>
              <td>
                <div className="customer-name">
                  <img src={customersIcon} alt="profile" className="profile-pic" />
                  {customer.name}
                </div>
              </td>
              <td>{customer.loans}</td>
              <td>{customer.savings}</td>
              <td>{customer.lastActive}</td>
              <td>{customer.type}</td>
              <td className={`status ${customer.status.toLowerCase()}`}>{customer.status}</td>
              <td>
                <button className="more-options">...</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerPage;
