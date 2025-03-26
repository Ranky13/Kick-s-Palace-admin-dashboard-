import React from 'react';
import './Cards.css';

function Cards() {
  const cardData = [
    { title: "Total Sales", value: "$12,345", change: "+12%", icon: "fas fa-dollar-sign" },
    { title: "Total Orders", value: "1,234", change: "+5%", icon: "fas fa-shopping-cart" },
    { title: "Total Customers", value: "5,678", change: "+8%", icon: "fas fa-users" },
    { title: "Total Products", value: "1,024", change: "+3%", icon: "fas fa-box" }
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
    </div>
  );
}

export default Cards;