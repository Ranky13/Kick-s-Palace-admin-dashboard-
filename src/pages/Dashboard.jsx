import React from 'react';
import './Dashboard.css'
import Cards from '../components/Cards/Cards';
import Charts from '../components/Chart/Chart';
import RecentOrders from '../components/RecentOrders/RecentOrders';
import TopProducts from '../components/TopProducts/TopProducts';
import CustomersStatistics from '../components/CustomersStatistics/CustomersStatistics';

function Dashboard() {
  return (
    <div className="content">
      {/* Top Row: Summary Cards */}
      <Cards />
      
      {/* Middle Row: Main Chart + Recent Orders */}
      <div className="data-section">
        <Charts />
        <CustomersStatistics />
        
      </div>
      
      {/* Bottom Row: Two Equal Columns */}
      <div className="bottom-section">
        <div className="bottom-left">
          <TopProducts />
        </div>
        <div className="bottom-right">
        <RecentOrders />
          
        </div>
      </div>
    </div>
  );
}

export default Dashboard;