import React, { useState } from 'react'
import './styles.css';
const NewTransaction = ({ onAddTransaction }) => {
    const [id, setId] = useState(1);
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const addTransaction = () => {
        if (!description || !amount) {
            console.log("invalid details");
        }
        const newTransaction = {
            id: id,
            description,
            amount: Number(amount),
        }
        onAddTransaction(newTransaction);
        setDescription('');
        setAmount('')
        setId(id + 1);
    }
    const handleChange = (event) => {
        const val = event.target.value;
        if (event.target.name == "description") {
            setDescription(val)
        }
        else {
            setAmount(val);
        }
    }
    return (
        <div className="NewTransaction">
            <h1>NewTransaction</h1>
            <p>Note : +amount means income and -amount means expenditure</p>
            <label htmlFor="description">Enter Description</label>
            <input type="text" name="description" value={description} onChange={handleChange} />
            <label htmlFor="amount">Enter Amount</label>
            <input type="text" name="amount" value={amount} onChange={handleChange} />
            <button onClick={addTransaction}>Add Transaction</button>
        </div>
    )
}

export default NewTransaction