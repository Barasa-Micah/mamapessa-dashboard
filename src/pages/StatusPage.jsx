import React, { useState } from 'react';
import '../styles/StatusPage.css';
import filtersIcon from '../assets/filtersbars.svg';
import statusIcon from '../assets/status1.png';

const StatusPage = () => {
  const [statusRecords] = useState([
    { id: '#A12BCD', name: 'Akinyi Owino', payment: 'Ksh. 8,500', balance: 'Ksh. 2,300.00', datePaid: '20 May, 2023', status: 'Pending' },
    { id: '#B34EFG', name: 'Wanjiku Kamau', payment: 'Ksh. 12,000', balance: 'Ksh. 1,500.00', datePaid: '18 June, 2023', status: 'Cleared' },
    { id: '#C56HIJ', name: 'Naliaka Wekesa', payment: 'Ksh. 20,000', balance: 'Ksh. 5,000.00', datePaid: '22 June, 2023', status: 'Pending' },
    { id: '#D78KLM', name: 'Atieno Omondi', payment: 'Ksh. 14,000', balance: 'Ksh. 3,200.00', datePaid: '24 May, 2023', status: 'Pending' },
    { id: '#E90NOP', name: 'Njoki Mwangi', payment: 'Ksh. 18,500', balance: 'Ksh. 0.00', datePaid: '15 June, 2023', status: 'Cleared' },
    { id: '#F12QRS', name: 'Achieng Otieno', payment: 'Ksh. 10,000', balance: 'Ksh. 2,800.00', datePaid: '12 May, 2023', status: 'Pending' },
    { id: '#G34TUV', name: 'Wairimu Karanja', payment: 'Ksh. 16,500', balance: 'Ksh. 1,300.00', datePaid: '10 June, 2023', status: 'Cleared' },
    { id: '#H56WXY', name: 'Kendi Muthoni', payment: 'Ksh. 22,000', balance: 'Ksh. 4,500.00', datePaid: '5 July, 2023', status: 'Pending' },
    { id: '#I78ZAB', name: 'Mumbi Njenga', payment: 'Ksh. 15,000', balance: 'Ksh. 3,000.00', datePaid: '2 June, 2023', status: 'Cleared' },
    { id: '#J90CDE', name: 'Nyambura Njoroge', payment: 'Ksh. 9,500', balance: 'Ksh. 1,200.00', datePaid: '29 April, 2023', status: 'Pending' },
    { id: '#K12FGH', name: 'Nduta Kariuki', payment: 'Ksh. 11,000', balance: 'Ksh. 2,700.00', datePaid: '15 May, 2023', status: 'Cleared' },
    { id: '#L34IJK', name: 'Kagendo Wachira', payment: 'Ksh. 19,000', balance: 'Ksh. 2,900.00', datePaid: '19 June, 2023', status: 'Pending' },
    { id: '#M56LMN', name: 'Chebet Kipkorir', payment: 'Ksh. 13,000', balance: 'Ksh. 2,600.00', datePaid: '28 June, 2023', status: 'Cleared' },
    { id: '#N78OPQ', name: 'Jemimah Wafula', payment: 'Ksh. 25,000', balance: 'Ksh. 5,000.00', datePaid: '12 May, 2023', status: 'Pending' },
    { id: '#O90RST', name: 'Kanini Mwangi', payment: 'Ksh. 7,800', balance: 'Ksh. 900.00', datePaid: '18 July, 2023', status: 'Cleared' },
    { id: '#P12UVW', name: 'Muthoni Thiong\'o', payment: 'Ksh. 28,000', balance: 'Ksh. 6,000.00', datePaid: '22 May, 2023', status: 'Pending' },
    { id: '#Q34XYZ', name: 'Chesang Chemutai', payment: 'Ksh. 10,000', balance: 'Ksh. 1,500.00', datePaid: '25 April, 2023', status: 'Cleared' },
    { id: '#R56ABC', name: 'Njeri Wairimu', payment: 'Ksh. 30,000', balance: 'Ksh. 2,000.00', datePaid: '30 June, 2023', status: 'Pending' },
    { id: '#S78DEF', name: 'Nasimiyu Namukabo', payment: 'Ksh. 24,000', balance: 'Ksh. 3,500.00', datePaid: '2 July, 2023', status: 'Cleared' },
    { id: '#T90GHI', name: 'Tabitha Naliaka', payment: 'Ksh. 18,200', balance: 'Ksh. 4,000.00', datePaid: '1 June, 2023', status: 'Pending' }
]);


  const [statusFilter, setStatusFilter] = useState('All');
  const [paymentFilter, setPaymentFilter] = useState('All');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="status-page">
      <header className="status-header">
        <div className="search-container">
            <input
              type="text"
              placeholder="Search customer..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>

        <div className="filters-container">
            <div className="filter-item">
              <label>Status:</label>
              <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
                  <option value="All">All</option>
                  <option value="Pending">Pending</option>
                  <option value="Cleared">Cleared</option>
              </select>
            </div>

            <div className="filter-item">
              <label>Payment:</label>
              <select value={paymentFilter} onChange={(e) => setPaymentFilter(e.target.value)}>
                  <option value="All">All</option>
                  <option value=">5000">> 5,000</option>
                  <option value=">10000">> 10,000</option>
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
                  <option value="Date Asc">Date Asc</option>
                  <option value="Date Desc">Date Desc</option>
              </select>
            </div>
        </div>
      </header>

      <table className="status-table">
        <thead>
          <tr>
            <th><input type="checkbox" /></th>
            <th>Customer ID</th>
            <th>Customer</th>
            <th>Payment</th>
            <th>Balance</th>
            <th>Date Paid</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {statusRecords.map((record, index) => (
            <tr key={index} className={`${record.status.toLowerCase()}-row`}>
              <td><input type="checkbox" /></td>
              <td>{record.id}</td>
              <td>
                <div className="status-name">
                  <img src={statusIcon} alt="profile" className="profile-pic" />
                  {record.name}
                </div>
              </td>
              <td>{record.payment}</td>
              <td>{record.balance}</td>
              <td>{record.datePaid}</td>
              <td className={`status ${record.status.toLowerCase()}`}>{record.status}</td>
              <td><button className="more-options">...</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StatusPage;
