import React, { useState } from 'react'
import './styles.css';
const NewTodo = ({ addTodo }) => {

    const [val, setVal] = useState('');
    const [id, setId] = useState(1);
    const handleChange = (event) => {
        let value = event.target.value;
        setVal(value);
    }

    const handleClick = () => {
        const newTodo = {
            id: id,
            value: val,
        };
        addTodo(newTodo);
        setVal('');
        setId(id + 1);
    }
    return (
        <div className="todoform">
            <h1>Todo App</h1>
            <input type="text" value={val} onChange={handleChange} />
            <button onClick={handleClick}>Add</button>
        </div>
    )
}

export default NewTodo