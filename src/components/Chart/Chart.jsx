import React from 'react';
import './Chart.css';

function Charts() {
  // Sample data for the chart
  const salesData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Sales',
        data: [5000, 8000, 6000, 9000, 12000, 10000],
        backgroundColor: 'rgba(52, 152, 219, 0.2)',
        borderColor: 'rgba(52, 152, 219, 1)',
        borderWidth: 2,
        tension: 0.4,
        fill: true
      }
    ]
  };

  
  const maxValue = Math.max(...salesData.datasets[0].data);
  
  return (
    <div className="chart-container">
      <div className="chart-header">
        <h3>Sales Overview</h3>
        <select>
          <option>Last 6 Months</option>
          <option>Last Year</option>
        </select>
      </div>
      <div className="chart">
        {salesData.labels.map((month, index) => {
          const height = (salesData.datasets[0].data[index] / maxValue) * 100;
          return (
            <div key={month} className="chart-bar-container">
              <div className="chart-bar" style={{ height: `${height}%` }}></div>
              <span>{month}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Charts;