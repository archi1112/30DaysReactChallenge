import React from 'react'
import './styles.css';
const TransactionHistory = ({ transactionList }) => {
    return (
        <div className="transaction_box">
            <h1>Transaction History</h1>
            <ul>
                {transactionList.map((transaction) => (
                    <li key={transaction.id}>
                        <div className="transaction_item" style={{ border: transaction.amount >= 0 ? '2px solid green' : '2px solid red', color: 'black' }}>{transaction.description}: ${transaction.amount}</div>
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default TransactionHistory