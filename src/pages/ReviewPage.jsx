import React, { useState } from 'react';
import '../styles/ReviewPage.css';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import filtersIcon from '../assets/filtersbars.svg';
import reviewsIcon from '../assets/reviews.svg';

// Dummy data for the trend graph and sentiment analysis
const trendData = [
  { month: 'Jan', positive: 50, neutral: 20, negative: 10 },
  { month: 'Feb', positive: 60, neutral: 15, negative: 5 },
  { month: 'Mar', positive: 70, neutral: 10, negative: 8 },
  { month: 'Apr', positive: 65, neutral: 12, negative: 5 },
  { month: 'May', positive: 80, neutral: 10, negative: 3 },
];

const sentimentData = [
  { name: 'Positive', value: 60 },
  { name: 'Neutral', value: 25 },
  { name: 'Negative', value: 15 },
];

// Dummy data for the review table
const reviews = [
  { id: 1, date: '2023-07-01', reviewer: 'Alice', rating: 5, sentiment: 'Positive', feedback: 'Excellent service and support.' },
  { id: 2, date: '2023-06-15', reviewer: 'Bob', rating: 3, sentiment: 'Neutral', feedback: 'Good, but can improve in certain areas.' },
  { id: 3, date: '2023-06-10', reviewer: 'Charlie', rating: 2, sentiment: 'Negative', feedback: 'Not satisfied with the response time.' },
  { id: 4, date: '2023-06-05', reviewer: 'David', rating: 4, sentiment: 'Positive', feedback: 'Quick and effective support.' },
  { id: 5, date: '2023-05-29', reviewer: 'Eva', rating: 3, sentiment: 'Neutral', feedback: 'Average experience.' },
  { id: 6, date: '2023-05-20', reviewer: 'Frank', rating: 1, sentiment: 'Negative', feedback: 'Very poor response and delay.' },
  { id: 1, date: '2023-07-01', reviewer: 'Alice', rating: 5, sentiment: 'Positive', feedback: 'Excellent service and support.' },
  { id: 2, date: '2023-06-15', reviewer: 'Bob', rating: 3, sentiment: 'Neutral', feedback: 'Good, but can improve in certain areas.' },
  { id: 3, date: '2023-06-10', reviewer: 'Charlie', rating: 2, sentiment: 'Negative', feedback: 'Not satisfied with the response time.' },
  { id: 4, date: '2023-06-05', reviewer: 'David', rating: 4, sentiment: 'Positive', feedback: 'Quick and effective support.' },
  { id: 5, date: '2023-05-29', reviewer: 'Eva', rating: 3, sentiment: 'Neutral', feedback: 'Average experience.' },
  { id: 6, date: '2023-05-20', reviewer: 'Frank', rating: 1, sentiment: 'Negative', feedback: 'Very poor response and delay.' },
  { id: 1, date: '2023-07-01', reviewer: 'Alice', rating: 5, sentiment: 'Positive', feedback: 'Excellent service and support.' },
  { id: 2, date: '2023-06-15', reviewer: 'Bob', rating: 3, sentiment: 'Neutral', feedback: 'Good, but can improve in certain areas.' },
  { id: 3, date: '2023-06-10', reviewer: 'Charlie', rating: 2, sentiment: 'Negative', feedback: 'Not satisfied with the response time.' },
  { id: 4, date: '2023-06-05', reviewer: 'David', rating: 4, sentiment: 'Positive', feedback: 'Quick and effective support.' },
  { id: 5, date: '2023-05-29', reviewer: 'Eva', rating: 3, sentiment: 'Neutral', feedback: 'Average experience.' },
  { id: 6, date: '2023-05-20', reviewer: 'Frank', rating: 1, sentiment: 'Negative', feedback: 'Very poor response and delay.' },
  // Add more dummy reviews as needed
];

const ReviewPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 10;
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);

  const paginateReviews = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Paginated data for reviews
  const currentReviews = reviews.slice((currentPage - 1) * reviewsPerPage, currentPage * reviewsPerPage);

  return (
    <div className="review-page">
      <header className="review-header">
        <div className="summary-cards">
          <div className="card positive">
            <h4>Total Positive</h4>
            <p>60%</p>
          </div>
          <div className="card neutral">
            <h4>Total Neutral</h4>
            <p>25%</p>
          </div>
          <div className="card negative">
            <h4>Total Negative</h4>
            <p>15%</p>
          </div>
        </div>
        <div className="filters-container">
          <div className="filter-item">
            <label>Date From:</label>
            <input type="date" />
          </div>
          <div className="filter-item">
            <label>Date To:</label>
            <input type="date" />
          </div>
          <div className="filter-item">
            <button className="all-filters-button">
              <img src={filtersIcon} alt="Filter Icon" className="filter-icon" /> All Filters
            </button>
          </div>
        </div>
      </header>

      {/* Trend Graph */}
      <section className="trend-graph">
        <h3>Review Trend Over Time</h3>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={trendData}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="positive" stroke="#28a745" />
            <Line type="monotone" dataKey="neutral" stroke="#ffc107" />
            <Line type="monotone" dataKey="negative" stroke="#dc3545" />
          </LineChart>
        </ResponsiveContainer>
      </section>

      {/* Sentiment Analysis */}
      <section className="sentiment-analysis">
        <h3>Sentiment Analysis</h3>
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie data={sentimentData} dataKey="value" cx="50%" cy="50%" outerRadius={60}>
              {sentimentData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={index === 0 ? "#28a745" : index === 1 ? "#ffc107" : "#dc3545"} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </section>

      {/* Review Table */}
      <section className="review-table-section">
        <h3>Customer Reviews</h3>
        <table className="review-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Reviewer</th>
              <th>Rating</th>
              <th>Sentiment</th>
              <th>Feedback</th>
            </tr>
          </thead>
          <tbody>
            {currentReviews.map((review) => (
              <tr key={review.id} className={review.sentiment.toLowerCase()}>
                <td>{review.date}</td>
                <td>{review.reviewer}</td>
                <td>{'⭐'.repeat(review.rating)}</td>
                <td className={`sentiment ${review.sentiment.toLowerCase()}`}>{review.sentiment}</td>
                <td>{review.feedback}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              className={`page-button ${currentPage === i + 1 ? 'active' : ''}`}
              onClick={() => paginateReviews(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ReviewPage;
