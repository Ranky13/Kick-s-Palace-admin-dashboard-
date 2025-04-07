import React from 'react';
import Cards from '../../components/Cards/Cards';
import TopProductsPerformance from '../../components/TopProductsPerformance/TopProductsPerformance';
import RevenueChart from '../../components/RevenueChart/RevenueChart';
import './Analytics.css';

function Analytics() {
  return (
    <div className="analytics">
      <div className="analytics-page">
        <div className="navBar">
          <h2>Business Analytics</h2>
        </div>
        <div className="card-widget">
          <Cards />
        </div>
        <div className="revenue-chart">
          <RevenueChart />
          <TopProductsPerformance />
        </div>
      </div>
    </div>
  );
}

export default Analytics;