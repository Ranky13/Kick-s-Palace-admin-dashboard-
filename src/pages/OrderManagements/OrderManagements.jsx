import React from 'react'
import './OrderManagements.css';

const OrderManagements = () => {
  const ordersManagement = [
    { id: '#ORD-001', customer: 'John Doe',                 date: '2025-05-01',   amount: '$120',   status: 'Completed' },
    { id: '#ORD-002', customer: 'Jane Smith',               date: '2025-05-02',   amount: '$85',    status: 'Processing' },
    { id: '#ORD-003', customer: 'Eden Hazard',              date: '2025-05-03',   amount: '$230',   status: 'Completed' },
    { id: '#ORD-004', customer: 'Lily Van',                 date: '2025-05-03',   amount: '$65',    status: 'Pending' },
    { id: '#ORD-005', customer: 'Brantley Mell',            date: '2025-05-04',   amount: '$150',   status: 'Completed' },
    { id: '#ORD-006', customer: 'John Douglas',             date: '2025-04-05',   amount: '$250',   status: 'Failed' },
    { id: '#ORD-007', customer: 'Dominique Enriques',       date: '2025-05-01',   amount: '$120',   status: 'Completed' },
    { id: '#ORD-008', customer: 'Orion Slade',              date: '2025-05-02',   amount: '$85',    status: 'Processing' },
    { id: '#ORD-009', customer: 'Robert Johnson',           date: '2025-05-03',   amount: '$230',   status: 'Completed' },
    { id: '#ORD-010', customer: 'Emily Davis',              date: '2025-05-03',   amount: '$65',    status: 'Pending' },
    { id: '#ORD-011', customer: 'Michael Wilson',           date: '2025-05-04',   amount: '$150',   status: 'Completed' },
    { id: '#ORD-012', customer: 'Bashir Rokeeb',            date: '2025-04-05',   amount: '$250',   status: 'Failed' },
    { id: '#ORD-013', customer: 'Mark Zui',                 date: '2025-05-01',   amount: '$120',   status: 'Completed' },
    { id: '#ORD-014', customer: 'Zack Doughlas',            date: '2025-05-02',   amount: '$85',    status: 'Processing' },
    { id: '#ORD-015', customer: 'Cartle Gemson',            date: '2025-05-03',   amount: '$230',   status: 'Completed' },
    { id: '#ORD-016', customer: 'Lily Vein',                date: '2025-05-03',   amount: '$65',    status: 'Pending' },
    { id: '#ORD-017', customer: 'Alan Poe',                 date: '2025-05-04',   amount: '$150',   status: 'Completed' },
    { id: '#ORD-018', customer: 'Ranky Tech',               date: '2025-04-05',   amount: '$250',   status: 'Failed' },
  ];
  const getOrderStatusClass = (status) => {
    switch (status) {
      case 'Completed': return 'status-completed';
      case 'Processing': return 'status-processing';
      case 'Pending': return 'status-pending';
      case 'Failed': return 'status-failed';
      default: return '';
    }
  };

  return (
    <div className='Order-Managements'>
      <div className="order-navbar">
        <h2>Orders</h2>
        <input type="text" placeholder='search' />
        <div className="notification-icon"></div>
      </div>

      <div className="order-top-bar">
        <div className="order-sort-by">
            <div className="order-left-option">
              <select name="" id="">
                <option value="">sort by</option>
              </select>
            </div>
            <div className='order-middle-option'>
              <select name="" id="">
                <option value="">10</option>
              </select>
            </div>
            <div className="ordersearch">
              <input type="text" placeholder='search' />
            </div>
        </div>
          o<div className="order-Actions">
            <button>Actions</button>
          </div>
      </div>

      <div className="orders-table">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>CUSTOMERS</th>
                <th>DATE</th>
                <th>AMOUNT</th>
                <th>STATUS</th>
              </tr>
            </thead>
            <tbody>
                {ordersManagement.map((orders, id) => (
                    <tr key={id}>
                        <td className="orderNumber">{orders.id}</td>
                        <td>{orders.customer}</td>
                        <td>{orders.date}</td>
                        <td>{orders.amount}</td>
                        <td><span className={`status ${getOrderStatusClass(orders.status)}`}>{orders.status}</span></td>                  
                </tr>
                
              ))}
            </tbody>
          </table>
        </div>
    </div>
  )
}

export default OrderManagements
