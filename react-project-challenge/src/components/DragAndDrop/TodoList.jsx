import React from 'react';
import './styles.css';

const TodoList = ({ list, setList }) => {
    const handleDelete = (id) => {
        const updatedList = list.filter((item) => item.id !== id);
        setList(updatedList);
    };

    return (
        <div className="list">
            <ul>
                {list.map((item) => (
                    <li key={item.id}>
                        <span className="item">{item.value}</span>
                        <button onClick={() => handleDelete(item.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
