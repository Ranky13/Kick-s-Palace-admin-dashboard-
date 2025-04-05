import React from 'react'
import './TopCustomers.css';

const TopCustomers = () => {

    const customers = [
        { user: 'john Doe',         mail: 'jo******@gmail.com',    Orders: '67'},
        { user: 'Eden Hazard',      mail: 'Ed******@yahoo.com',    Orders: '63'},
        { user: 'Lily Van',         mail: 'Li******@gmail.com',    Orders: '52'},
        { user: 'Mark Zuckerberg',  mail: 'Ma******@email.com',    Orders: '50'},
        { user: 'Alan Poe',         mail: 'Al******@hotmail.com',  Orders: '46'},
        { user: 'Williams Buffey',  mail: 'wi******@email.com',    Orders: '45'},
        { user: 'Zack Doughlas',    mail: 'Za******@outlook.com',  Orders: '30'}
    ];




  return (
    <div className='top-customers'>
        <div className="top-customers-heading">
        <h3>Top Customers</h3>
        <p>View All</p>
        </div>
        <div className="customers-list">
            {customers.map((customer, index) => (
                <div key={index} className="TopCustomers-details">
                    <div className="customers-info">
                        <h4>{customer.user}</h4>
                        <p>{customer.mail}</p>
                    </div>
                    <div className="customers-orders">
                        <h4>Orders:  <span>{customer.Orders}</span></h4>
                    </div>
                </div>
            ))}
        </div>
      
    </div>
  )
}

export default TopCustomers
