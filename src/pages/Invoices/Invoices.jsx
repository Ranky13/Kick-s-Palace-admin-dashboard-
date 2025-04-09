import React from 'react'
import { MdSearch } from 'react-icons/md';
import './Invoices.css'
const Invoices = () => {

    const invoices = [
      { id: 'INV-001', name: 'john Doe',             date: 'Jan 12, 2025',  total: '650.10',  status: 'on pre-order (not paid)'},
      { id: 'INV-002', name: 'Eden Hazard',          date: 'Oct 15, 2025',  total: '239.10',  status: 'Payment accepted'},
      { id: 'INV-003', name: 'Lily Van',             date: 'Jan 11, 2025',  total: '2310.00', status: 'Payment error'},
      { id: 'INV-004', name: 'Mark Zui',             date: 'Sep 21, 2025',  total: '339.13',  status: 'Delivered'},
      { id: 'INV-005', name: 'Alan Poe',             date: 'Aug 06, 2025',  total: '100.00',  status: 'Preparing the order'},
      { id: 'INV-006', name: 'Williams Buffey',      date: 'Feb 22, 2025',  total: '255.12',  status: 'Shipped'},
      { id: 'INV-007', name: 'Zack Doughlas',        date: 'Jan 17, 2025',  total: '210.00',  status: 'on pre-order (not paid)'},
      { id: 'INV-008', name: 'Orion Slade',          date: 'Nov 20, 2025',  total: '200.00',  status: 'Payment error'},
      { id: 'INV-009', name: 'Audrey HeafINV',       date: 'Jul 10, 2025',  total: '300.00',  status: 'on pre-order (not paid)'},
      { id: 'INV-010', name: 'Brantley Mell',        date: 'Jun 13, 2025',  total: '400.00',  status: 'Remita payment accepted'},
      { id: 'INV-011', name: 'Dominique Enriques',   date: 'Dec 12, 2025',  total: '500.00',  status: 'Awaiting Paypal payment'},
      { id: 'INV-012', name: 'Cartle Gemson',        date: 'Jan 30, 2025',  total: '600.00',  status: 'Payment accepted'},
      { id: 'INV-013', name: 'Lily Vein',            date: 'Feb 14, 2025',  total: '700.00',  status: 'Preparing the order'},
      { id: 'INV-014', name: 'Bashir Rokeeb',        date: 'Apr 12, 2025',  total: '800.00',  status: 'Shipped'},
      { id: 'INV-015', name: 'Ranky Tech',           date: 'Mar 21, 2025',  total: '900.00',  status: 'Payment accepted'}
    ];

    const getStatusClass = (status) => {
      switch (status) {
        case 'on pre-order (not paid)':     return 'on-pre-order-not-paid';
        case 'Payment accepted':            return 'Payment-accepted';
        case 'Shipped':                     return 'status-shipped';
        case 'Preparing the order':         return 'Preparing-the-order';
        case 'Remita payment accepted':     return 'Remita-payment-accepted';
        case 'Awaiting Paypal payment':     return 'Awaiting-Paypal-payment';
        case 'Payment error':               return 'Payment-error';
        case 'Delivered':                   return 'Delivered';
        default:                            return '';
      }
    };



  return (
    <div className='invoice-container'>
     
      
      <div className="top-bar">
        <div className="sort-by">
            <div className="left-option">
              <select name="" id="">
                <option value="">sort by</option>
              </select>
            </div>
            <div className='middle-option'>
              <select name="" id="">
                <option value="">10</option>
              </select>
            </div>
           <div className="search-box">
              <input type="text" placeholder="Search..." />
              <button>
                <MdSearch size={20}/>
              </button>
              </div>
        </div>
          <div className="Actions">
            <button>Actions</button>
          </div>
      </div>

        <div className="invoice-table">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>ISSUED DATE</th>
                <th>TOTAL</th>
                <th>STATUS</th>
              </tr>
            </thead>
            <tbody>
                {invoices.map((invoice, id) => (
                    <tr key={id}>
                        <td data-label="ID" className='invoiceNumber'>{invoice.id}</td>
                        <td data-label="Name">{invoice.name}</td>
                        <td data-label="Date">{invoice.date}</td>
                        <td data-label="Total">${invoice.total}</td>
                        <td data-label="Status">
                          <span className={`status ${getStatusClass(invoice.status)}`}>
                            {invoice.status}
                          </span>
                        </td>                 
                </tr>
                
              ))}
            </tbody>
          </table>
        </div>
    </div>
  )
}

export default Invoices
