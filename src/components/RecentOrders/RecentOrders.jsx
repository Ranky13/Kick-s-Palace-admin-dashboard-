import React from 'react';
import './RecentOrders.css';

function RecentOrders() {
  const orders = [
    { id: '#ORD-001', customer: 'John Doe', date: '2023-05-01', amount: '$120', status: 'Completed' },
    { id: '#ORD-002', customer: 'Jane Smith', date: '2023-05-02', amount: '$85', status: 'Processing' },
    { id: '#ORD-003', customer: 'Robert Johnson', date: '2023-05-03', amount: '$230', status: 'Completed' },
    { id: '#ORD-004', customer: 'Emily Davis', date: '2023-05-03', amount: '$65', status: 'Pending' },
    { id: '#ORD-005', customer: 'Michael Wilson', date: '2023-05-04', amount: '$150', status: 'Completed' },
    { id: '#ORD-006', customer: 'John Douglas', date: '2023-04-05', amount: '$250', status: 'Failed' },
  ];

  const getStatusClass = (status) => {
    switch (status) {
      case 'Completed': return 'status-completed';
      case 'Processing': return 'status-processing';
      case 'Pending': return 'status-pending';
      case 'Failed': return 'status-failed';
      default: return '';
    }
  };

  return (
    <div className="recent-orders">
      <h3>Recent Orders</h3>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index}>
              <td>{order.id}</td>
              <td>{order.customer}</td>
              <td>{order.date}</td>
              <td>{order.amount}</td>
              <td><span className={`status ${getStatusClass(order.status)}`}>{order.status}</span></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecentOrders;