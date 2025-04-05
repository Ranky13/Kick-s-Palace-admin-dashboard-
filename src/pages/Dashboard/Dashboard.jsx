import React from 'react';
import './Dashboard.css'
import Cards from '../../components/Cards/Cards';
import Charts from '../../components/Chart/Chart';
import RecentOrders from '../../components/RecentOrders/RecentOrders';
import TopProducts from '../../components/TopProducts/TopProducts';
import CustomersStatistics from '../../components/CustomersStatistics/CustomersStatistics';
import TopCustomers from '../../components/TopCustomers/TopCustomers';
import StocksReports from '../../components/StocksReports/StocksReports';
import RecentTransactions from '../../components/RecentTransactions/RecentTransactions';

function Dashboard() {
  return (
    <div className="content">
      <Cards />
      <div className="data-section">
        <Charts />
        <CustomersStatistics />
      </div>
      
      {/* Bottom Row: Two Equal Columns */}
      <div className="bottom-section">
        <div className="bottom-1">
          <TopProducts />
        </div>
        <div className="bottom-2">
        <RecentOrders />
        </div>
        <div className="bottom-3">
        < TopCustomers />
        </div>
      </div>
      <div className="middle-row">
        <div className="middle-row-1">
        < StocksReports />
        </div>
        <div className="middle-row-2">
        < RecentTransactions />
        </div>
      </div>
    </div>
  );
}


export default Dashboard;