import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom'; 
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
import Reviews from './components/Reviews/Reviews';
import UserManagements from './pages/UserManagements/UserManagements';
import Profile from './pages/profile/profile';
import ProductList from './pages/Products/productList';
import ProductGrid from './pages/Products/productgrid';
import AddNewProduct from './pages/Products/AddNewProduct';
import './App.css';

function App() {
  const location = useLocation();
  // const hideHeaderPaths = ['/profile', '/settings', '/discounts', '/analytics', '/products', '/customers', '/OrderManagements', '/UserManagements', '/Invoice'];

  // const shouldShowHeader = !hideHeaderPaths.includes(location.pathname);

  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main-content">
        {/* {shouldShowHeader && <Header />} */}
        <Header/>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/discounts" element={<Discounts />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/orderManagements" element={<OrderManagements />} />
          <Route path="/userManagements" element={<UserManagements />} />
          <Route path="/Invoice" element={<Invoices />} />
          <Route path='/reviews' element={<Reviews/>}/>
          <Route path="/profile" element={<Profile />} />
          <Route path='/productlist' element={< ProductList/>} />
          <Route path='/productgrid' element={< ProductGrid/>} />
          <Route path='/addNewproduct' element={< AddNewProduct/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;