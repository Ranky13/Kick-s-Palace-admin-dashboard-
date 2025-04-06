import React from 'react';
import { 
  MdAttachMoney, MdShoppingCart, MdPeople, MdInventory, MdLocalShipping } from 'react-icons/md';
import './Cards.css';

function Cards() {
  const cardData = [
    { 
    title: "Total Sales", 
    value: "$12,345", 
    change: "+12%", 
    icon: <MdAttachMoney size={20} className="text-green-500" /> 
  },
  { 
    title: "Total Orders", 
    value: "1,234", 
    change: "+5%", 
    icon: <MdShoppingCart size={20} className="text-blue-500" /> 
  },
  { 
    title: "Total Customers", 
    value: "5,678", 
    change: "+8%", 
    icon: <MdPeople size={20} className="text-purple-500" /> 
  },
  { 
    title: "Total Products", 
    value: "1,024", 
    change: "+3%", 
    icon: <MdInventory size={20} className="text-orange-500" /> 
  },
  { 
    title: "Current Orders", 
    value: "93", 
    change: "-9%", 
    icon: <MdLocalShipping size={20} className="text-red-500" /> 
  }
  ];

  return (
    <div className="cards">
      {cardData.map((card, index) => (
        <div className="card" key={index}>
          <div className="card-icon">
            <i className={card.icon}></i>
          </div>
          <div className="card-info">
            <h3>{card.title}</h3>
            <h2>{card.value}</h2>
            <p className={card.change.startsWith('+') ? 'positive' : 'negative'}>
              {card.change} from last month
            </p>
          </div>
        </div>
      ))}
      <div className="staffs">
        <div className="staff-icon">

        </div>
        <div className="staffs-number">
          <h4>Staffs</h4>
          <h2>13</h2>
        </div>
        <div className="developers-number">
            <h4>Developers</h4>
            <h2>5</h2>
        </div>
      </div>
    </div>
  );
}

export default Cards;