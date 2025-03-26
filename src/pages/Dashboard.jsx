import React from 'react';
import Cards from '../components/Cards/Cards';
import Charts from '../components/Chart/Chart';
import RecentOrders from '../components/RecentOrders/RecentOrders';
import TopProducts from '../components/TopProducts/TopProducts';

function Dashboard() {
  return (
    <div className="content">
      <Cards />
      <div className="data-section">
        <Charts />
        <RecentOrders />
      </div>
      <TopProducts />
    </div>
  );
}

export default Dashboard;