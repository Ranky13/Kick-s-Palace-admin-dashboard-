import React from 'react';
import './TopProducts.css';

function TopProducts() {
  const products = [
    { name: 'Wireless Headphones', sales: 120, revenue: '$12,000' },
    { name: 'Smart Watch', sales: 85, revenue: '$8,500' },
    { name: 'Bluetooth Speaker', sales: 65, revenue: '$6,500' },
    { name: 'Laptop Backpack', sales: 50, revenue: '$5,000' },
    { name: 'Phone Charger', sales: 45, revenue: '$900' }
  ];

  // Find max sales for percentage calculation
  const maxSales = Math.max(...products.map(p => p.sales));

  return (
    <div className="top-products">
      <h3>Top Selling Products</h3>
      <div className="products-list">
        {products.map((product, index) => (
          <div key={index} className="product-item">
            <div className="product-info">
              <h4>{product.name}</h4>
              <p>{product.sales} sold ({product.revenue})</p>
            </div>
            <div className="progress-bar">
              <div 
                className="progress" 
                style={{ width: `${(product.sales / maxSales) * 100}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopProducts;