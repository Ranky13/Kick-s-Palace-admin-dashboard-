import React from 'react'
import './StocksReports.css';

const StocksReports = () => {

    const Stocksreports = [
        { products: 'Nike Air Max',    price: '120',    stocks: '9' },
        { products: 'Reebok Legend',   price: '58',     stocks: '40' },
        { products: 'New Balance',     price: '210',    stocks: '30' },
        { products: 'Louis Vuilton',   price: '110',    stocks: '20' },
        { products: 'Puma Vintage',    price: '100',    stocks: '10' },
        { products: 'NB FuelCell',     price: '100',    stocks: '1' }
    ];


  return (
    <div className='stockReports'>
      <div className="stock-headings">
        <h3>Stocks Report</h3>
        <p>View All</p>
      </div>
      <table>
        <thead>
          <tr>
            <th>Products</th>
            <th>Price</th>
            <th>Stocks</th>
          </tr>
        </thead>
        <tbody>
          {Stocksreports.map((report, index) => (
            <tr key={index}>
                  <td>{report.products}</td>
                  <td>${report.price}</td>
                  <td className={parseInt(report.stocks) <= 10 ? 'negative' : 'positive'}>{report.stocks}</td>
            </tr>
          ))}
        </tbody>
      </table>
        
    </div>
  )
}

export default StocksReports
