import React from 'react';
import './Products.css'
import {MdArrowRight, MdAdd, MdEditSquare, MdPerson, MdDelete} from 'react-icons/md';

function Products() {

  const productCategoryData = [
    { id: '#001', icon: <MdPerson/>, category: 'Puma Sneakers',           description: 'Both Men and Female Sneakers',  status: 'In Stock',       action: ( <><MdEditSquare className='edit-button'/><MdDelete className='delete-button'/></> )},
    { id: '#002', icon: <MdPerson/>, category: 'Reeboks Sneakers',        description: 'Both Men and Female Sneakers',  status: 'In Stock',       action: ( <><MdEditSquare className='edit-button'/><MdDelete className='delete-button'/></> )},
    { id: '#003', icon: <MdPerson/>, category: 'New Balance Sneakers',    description: 'Both Men and Female Sneakers',  status: 'Low',            action: ( <><MdEditSquare className='edit-button'/><MdDelete className='delete-button'/></> )},
    { id: '#004', icon: <MdPerson/>, category: 'Louis Vulton Sneakers',   description: 'Both Men and Female Sneakers',  status: 'In Stock',       action: ( <><MdEditSquare className='edit-button'/><MdDelete className='delete-button'/></> )},
    { id: '#005', icon: <MdPerson/>, category: 'Nike Sneakers',           description: 'Both Men and Female Sneakers',  status: 'Out of Stock',   action: ( <><MdEditSquare className='edit-button'/><MdDelete className='delete-button'/></> )},
    { id: '#006', icon: <MdPerson/>, category: 'Boots',                   description: 'Both Men and Female Boots',     status: 'In Stock',       action: ( <><MdEditSquare className='edit-button'/><MdDelete className='delete-button'/></> )},
    { id: '#007', icon: <MdPerson/>, category: 'Kid Sneakers',            description: 'Both Male and Female Sneakers', status: 'Out of Stock',   action: ( <><MdEditSquare className='edit-button'/><MdDelete className='delete-button'/></> )}
  ];

  const getStockStatus = (stock) => {
    switch (stock) {
      case 'In Stock':      return 'in-stock';
      case 'Out of Stock':  return 'out-of-stock';
      case 'Low':           return 'low';
      default:              return '';
    }
  };


  return (
    <div className="Product-Page">
      <div className="product-header">
          <h2>Categories</h2>
        <div className="navigation">
          <p style={{display: 'flex' }}>Dashboard <MdArrowRight size={20}/><span> Categories</span></p>
          <div className="button">
            <button><MdAdd size={20} fontWeight={900}/> Add Category</button>
          </div>
        </div>
      </div>
      <div className="product-top-bar">
        <div className="product-status">
          <h4>All</h4>
          <h4>Active</h4>
          <h4>Inactive</h4>
        </div>
        <div className="second-block">
          <div className="product-search-box">
            <input type="text" placeholder='search by name'/>
          </div>
          <div className="Action-buttons">
            <button className='clear'>Clear</button>
            <button className='export'>Export</button>
          </div>
        </div>
      </div>
      <div className="productlist">
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Img</th>
              <th>Category</th>
              <th>Description</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {productCategoryData.map((data, id) => (
              <tr key={id}>
                <td data-label="ID">{data.id}</td>
                <td data-label="Img" className=''>{data.icon}</td>
                <td data-label="Category" className='category'>{data.category}</td>
                <td data-label="Description">{data.description}</td>
                <td data-label="Status">
                  <span className={`stock-status ${getStockStatus(data.status)}`}>
                    {data.status}
                  </span>
                </td>
                <td data-label="Action" className='action-icon'>{data.action}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  </div>
  );
}

export default Products;