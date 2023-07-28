import React, { useState } from 'react'
import './styles.css';
const Balance = ({ transactionList }) => {
    const totalBalance = transactionList.reduce((total, transaction) => total + transaction.amount, 0);
    const income = transactionList.filter(transaction => transaction.amount > 0).reduce((total, transaction) => total + transaction.amount, 0);

    const expense = transactionList.filter(transaction => transaction.amount < 0).reduce((total, transaction) => total + transaction.amount, 0);
    return (
        <div className="balance_box">
            <div className="totalamout">{`Current Balance : ${totalBalance}`}</div>
            <div className="details">
                <div className="income" style={{ color: 'green' }} >{income}</div>
                <div className="expense" style={{ color: 'red' }}>{expense}</div>
            </div>
        </div>
    )
}

export default Balance