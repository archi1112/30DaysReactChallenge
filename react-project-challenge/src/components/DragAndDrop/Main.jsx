import React, { useState } from 'react';
import NewTodo from './NewTodo';
import './styles.css';
import TodoList from './TodoList';
const Main = () => {

    const [list, setList] = useState([]);

    const handleAddTodo = (newTodo) => {
        setList([...list, newTodo])
    }
    return (
        <div class="main">
            <NewTodo addTodo={handleAddTodo} />
            <TodoList list={list} setList={setList}/></div>
    )
}

export default Main