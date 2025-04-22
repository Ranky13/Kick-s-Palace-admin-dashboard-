import React from 'react'
import { MdPeople, MdPersonOff, MdPerson, MdPeopleAlt, MdReceipt, MdMessage, MdVisibility } from 'react-icons/md';
import './Customers.css';
import { IoMdEye } from 'react-icons/io';

const Customers = () => {

  const customersData = [
    {title: 'All Customers', value: '+2.63k', change: '+34.3%', icon: <MdPeople size={30}/>},
    {title: 'Active Customers', value: '+1.81k', change: '+14.8%', icon: <MdPerson size={30}/>},
    {title: 'Inactive Customers', value: '+820', change: '-26.5%', icon: <MdPersonOff size={30}/>},
    {title: 'Pending Receipt', value: '+20', change: '+6.5%', icon: <MdReceipt size={30}/>},
    {title: 'Recent Customers', value: '+300', change: '+60.3%', icon: <MdPeopleAlt size={30}/>}
  ]
  const customersList = [
    { customersName: 'Micheal A Miner',
      CustomerID: '123456',
      TotalAmount: '1,350', 
      TotalOrder: '12', 
      firstOrder: '21-Jul-2023', 
      lastOrder: '10-Jun-2024', 
      PaymentMethod: 'Mastercard', 
      Action: ( <><MdVisibility className='visibility'/><MdMessage className='messg'/></>)
    },

    { customersName: 'Thomas T Brose',
      CustomerID: '134389',
      TotalAmount: '1,000', 
      TotalOrder: '8', 
      firstOrder: '21-Jan-2024', 
      lastOrder: '10-Feb-2025', 
      PaymentMethod: 'Paypal', 
      Action: ( <><MdVisibility className='visibility'/><MdMessage className='messg'/></>)
    },

    { customersName: 'Joel K Hall',
      CustomerID: '113460',
      TotalAmount: '4,214', 
      TotalOrder: '22', 
      firstOrder: '21-Sep-2023', 
      lastOrder: '10-Mar-2024', 
      PaymentMethod: 'Verve', 
      Action: ( <><MdVisibility className='visibility'/><MdMessage className='messg'/></>)
    },

    { customersName: 'Lily W.Wilson',
      CustomerID: '873549',
      TotalAmount: '7,836', 
      TotalOrder: '20', 
      firstOrder: '11-feb-2022', 
      lastOrder: '03-Aug-2024', 
      PaymentMethod: 'Visa', 
      Action: ( <><MdVisibility className='visibility'/><MdMessage className='messg'/></>)
    },

    { customersName: 'Radoph Hueber',
      CustomerID: '547829',
      TotalAmount: '2,418', 
      TotalOrder: '13', 
      firstOrder: '21-Nov-2023', 
      lastOrder: '10-May-2025', 
      PaymentMethod: 'Bank Transfer', 
      Action: ( <><MdVisibility className='visibility'/><MdMessage className='messg'/></>)
    },

    { customersName: 'James Ericoson',
      CustomerID: '90765',
      TotalAmount: '1,350', 
      TotalOrder: '17', 
      firstOrder: '11-Dec-2023', 
      lastOrder: '10-Apr-2025', 
      PaymentMethod: 'Paypal', 
      Action: ( <><MdVisibility className='visibility'/><MdMessage className='messg'/></>)
    },

    { customersName: 'Breel Lyon',
      CustomerID: '123455',
      TotalAmount: '350', 
      TotalOrder: '1', 
      firstOrder: '31-Dec-2024', 
      lastOrder: '28-Feb-2025', 
      PaymentMethod: 'Visa', 
      Action: ( <><MdVisibility className='visibility'/><MdMessage className='messg'/></>)
    },

    { customersName: 'Rokeeb Bashir',
      CustomerID: '123456',
      TotalAmount: '1,350', 
      TotalOrder: '12', 
      firstOrder: '01-12-2020', 
      lastOrder: '10-Apr-2025', 
      PaymentMethod: 'Verve', 
      Action: ( <><MdVisibility className='visibility'/><MdMessage className='messg'/></>)
    },

    { customersName: 'Miner Bred',
      CustomerID: '190856',
      TotalAmount: '1,700', 
      TotalOrder: '12', 
      firstOrder: '21-12-23', 
      lastOrder: '10-03-24', 
      PaymentMethod: 'Mastercard', 
      Action: ( <><MdVisibility className='visibility'/><MdMessage className='messg'/></>)
    },

    { customersName: 'John Metsis',
      CustomerID: '234567',
      TotalAmount: '6,000', 
      TotalOrder: '12', 
      firstOrder: '31-Oct-2021', 
      lastOrder: '10-Dec-2024', 
      PaymentMethod: 'Mastercard', 
      Action: ( <><MdVisibility className='visibility'/><MdMessage className='messg'/></>)
    }
  ];

  return (
    <div className='customers-page'>
      <div className="customers-cards">
        {customersData.map((CD, index) => (
        <div className="customers-Card" key={index}>
            <div className="customers-icon">
              {CD.icon}
            </div>
            <div className="customers-card-info">
              <h3>{CD.title}</h3>
              <div className="percentage">
                <p className='value'>{CD.value}</p>
                <p className={CD.change.startsWith('+') ? 'C-positive' : 'C-negative'}>
                  {CD.change}
                </p>
              </div>
            </div>
        </div>
        ))}
      </div>
      <div className="customers-lists">
      <h4>All Customers list</h4>
        <div className="customers-table">
          <table>
            <thead>
              <tr>
                <th>Customers Id</th>
                <th>Customers Name</th>
                <th>Total Amount</th>
                <th>Total Orders</th>
                <th>First Order</th>
                <th>Last Order</th>
                <th>Payment Method</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {customersList.map((list) =>(
                <tr key={list.CustomerID}>
                  <td data-label='ID'>#{list.CustomerID}</td>
                  <td data-label='Name'>{list.customersName}</td>
                  <td data-label='TotalAmount'>${list.TotalAmount}</td>
                  <td data-label='TotalOrder'>{list.TotalOrder}</td>
                  <td data-label='FirstOrder '>{list.firstOrder}</td>
                  <td data-label='LastOrder'>{list.lastOrder}</td>
                  <td data-label='PaymentMethod'>{list.PaymentMethod}</td>
                  <td data-label='Actions' className='list-action'>{list.Action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Customers
