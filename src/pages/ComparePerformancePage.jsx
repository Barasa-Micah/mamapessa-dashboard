import React, { useState } from 'react';
import '../styles/ComparePerformancePage.css';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer,
  BarChart, Bar, PieChart, Pie, Cell
} from 'recharts';
import pdfIcon from '../assets/Settings.svg';

// Data for charts
const performanceData = [
  { month: 'Jan', sales: 300, growth: 5 },
  { month: 'Feb', sales: 350, growth: 8 },
  { month: 'Mar', sales: 420, growth: 10 },
  { month: 'Apr', sales: 450, growth: 7 },
  { month: 'May', sales: 500, growth: 15 },
  { month: 'Jun', sales: 600, growth: 20 },
  { month: 'Jul', sales: 650, growth: 18 },
];

const trafficSourceData = [
  { name: 'Organic', value: 45 },
  { name: 'Paid', value: 25 },
  { name: 'Referral', value: 15 },
  { name: 'Direct', value: 15 },
];

const regionPerformance = [
  { region: 'Nairobi', performance: 85 },
  { region: 'Central', performance: 70 },
  { region: 'Rift Valley', performance: 60 },
  { region: 'Western', performance: 50 },
  { region: 'Coast', performance: 65 },
  { region: 'Eastern', performance: 55 },
  { region: 'Nyanza', performance: 75 },
  { region: 'North Eastern', performance: 45 },
];

const ComparePerformancePage = () => {
  const [dateRange, setDateRange] = useState({ from: '', to: '' });
  const [filteredData, setFilteredData] = useState(performanceData);
  const [comments, setComments] = useState('');

  const handleFilter = () => {
    alert('Filters applied');
  };

  const downloadReport = (type) => {
    alert(`Report downloaded as ${type}`);
  };

  return (
    <div className="compare-performance-page">
      <header className="page-header">
        <h2>Compare Performance</h2>
        <p>Analyze metrics, trends, and performance goals</p>
      </header>

      <div className="filters-section">
        <div className="date-filters">
          <label>Date From:</label>
          <input type="date" value={dateRange.from} onChange={(e) => setDateRange({ ...dateRange, from: e.target.value })} />
          <label>Date To:</label>
          <input type="date" value={dateRange.to} onChange={(e) => setDateRange({ ...dateRange, to: e.target.value })} />
          <button className="apply-filter-btn" onClick={handleFilter}>Apply Filters</button>
        </div>
        <div className="download-btns">
          <button onClick={() => downloadReport('PDF')}>Download PDF</button>
          <button onClick={() => downloadReport('CSV')}>Export CSV</button>
          <button onClick={() => downloadReport('Excel')}>Export Excel</button>
        </div>
      </div>

      <section className="kpi-summary">
        <div className="kpi-card">
          <p>Total Sales</p>
          <h3>$500,000</h3>
          <div className="progress-bar">
            <div className="progress" style={{ width: '70%' }}></div>
          </div>
          <span>70% of target</span>
        </div>
        <div className="kpi-card">
          <p>Customer Growth</p>
          <h3>20%</h3>
          <div className="progress-bar">
            <div className="progress" style={{ width: '20%' }}></div>
          </div>
          <span>20% of target</span>
        </div>
      </section>

      <section className="performance-trends">
        <h3>Monthly Performance Trends</h3>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={filteredData}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="sales" stroke="#B23816" />
          </LineChart>
        </ResponsiveContainer>
      </section>

      <section className="benchmarking-section">
        <h3>Benchmarking</h3>
        <p>Compare against previous periods</p>
      </section>

      <section className="conversion-funnel">
        <h3>Conversion Funnel</h3>
        <p>Track conversion rates through each stage</p>
      </section>

      <div className="charts-section">
        <div className="traffic-sources">
          <h3>Traffic Sources</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie data={trafficSourceData} dataKey="value" cx="50%" cy="50%" outerRadius={80}>
                {trafficSourceData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={index === 0 ? "#5B1400" : index === 1 ? "#B23816" : "#FFC107"} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="regional-performance">
          <h3>Regional Performance</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={regionPerformance}>
              <XAxis dataKey="region" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="performance" fill="#B23816" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <section className="comments-section">
        <h3>Comments & Observations</h3>
        <textarea
          placeholder="Add your observations here..."
          value={comments}
          onChange={(e) => setComments(e.target.value)}
          className="comments-box"
        ></textarea>
      </section>
    </div>
  );
};

export default ComparePerformancePage;
