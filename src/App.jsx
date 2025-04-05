import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './pages/Dashboard/Dashboard';
import Products from './pages/Products/Products';
import Customers from './pages/Customers/Customers';
import Analytics from './pages/Analytics/Analytics';
import Discounts from './pages/Discounts/Discounts';
import Settings from './pages/Settings/Settings';
import OrderManagements from './pages/OrderManagements/OrderManagements';
import Invoices from './pages/Invoices/Invoices';
import UserManagements from './pages/UserManagements/UserManagements';
import Profile from './pages/profile/profile';
import './App.css';

function App() {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main-content">
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/products" element={< Products />} />
          <Route path="/customers" element={< Customers />} />
          <Route path="/analytics" element={< Analytics />} />
          <Route path="/discounts" element={< Discounts />} />
          <Route path="/settings" element={< Settings />} />
          <Route path="/OrderManagements" element={< OrderManagements />} />
          <Route path="/UserManagements" element={< UserManagements />} />
          <Route path="/Invoice" element={ < Invoices />} />
          <Route path="/Profile" element={< Profile />} />
        </Routes>
      </div>
      
    </div>
  );
}

export default App;