import React from 'react'
import './RecentTransactions.css'

const RecentTransactions = () => {
  const Transactions = [
    { Banks: 'paytm',               details: 'starbucks',              amounts: '-$20' },
    { Banks: 'Paypal',              details: 'Client Payments',        amounts: '+$800' },
    { Banks: 'Stripe',              details: 'Ordered iPhone 14',      amounts: '-$300' },
    { Banks: 'Razorpay',            details: 'Refund',                 amounts: '+$2000' },
    { Banks: 'Bank of America',     details: 'Staff Salaries',         amounts: '-$1200' },
    { Banks: 'Venmo',               details: 'Store Redevelopments',   amounts: '+$2000' },
  ]


  return (
    <div className='Recent-transactions'>
      <div className="transactions-headlines">
        <h3>Recent Transactions</h3>
        <p>View All</p>
      </div>
      <div className="transaction-details">
      {Transactions.map((transaction, index) => (
            <div key={index} className="transactions-list">
              <div className="transact-banks">
                <h4>{transaction.Banks}</h4>
                <p>{transaction.details}</p>
              </div>
              <div className="amounts">
                <h4 className={transaction.amounts.startsWith('+') ? 'positive' : 'negative'}>{transaction.amounts}</h4>
              </div>
          
            </div>
          ))}
        
        <div className="">
          
        </div>
      </div>
    </div>
  )
}

export default RecentTransactions
