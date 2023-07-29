import React, { useState } from 'react'

import NewTransaction from './NewTransaction';
import TransactionHistory from './TransactionHistory';
import Balance from './Balance';
import './styles.css';
const ExpenseBox = () => {

    const [transactionList, setTransactionList] = useState([]);

    const handleAddTransaction = (newTransaction) => {
        setTransactionList([...transactionList, newTransaction])
    }
    return (
        <div className="expensebox">
            <div className="right_expensebox">
                <Balance transactionList={transactionList} />
                <NewTransaction onAddTransaction={handleAddTransaction} />
            </div>
            <div className="left_expensebox"><TransactionHistory transactionList={transactionList} /></div>

        </div>

    )
}

export default ExpenseBox