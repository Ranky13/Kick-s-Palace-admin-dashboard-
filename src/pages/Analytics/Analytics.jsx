import React from 'react';
import Cards from '../../components/Cards/Cards';
import './Analytics.css';


function Analytics() {
  return (
    <div className="analytics-page">
      <div className="navBar">
        <h2>Business Analytics</h2>
      </div>
      <div className="card-widget">
        < Cards />

      </div>
    </div>
  );
}

export default Analytics;