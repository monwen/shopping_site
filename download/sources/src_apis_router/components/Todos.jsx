import React, { useEffect, useState } from 'react';
import useGetApi from './useGetApi';

const Todos = props => {

    const [todos, setTodos] = useState([]);

    const getApi = useGetApi();

    useEffect(() => {
        // props.getApi('todos');
        getApi("todos").then(response => {
            setTodos(response.data);
        })
        return () => {
            // props.clearState();
            setTodos([]);
        }
    },[]);

    return (
        <ul>
            {todos.map(todo => {
                return <li key={todo.id}>
                    {todo.title}, {(todo.completed) ? "Completed" : "Not Completed"}
                </li>
            })}
        </ul>
    );
};

export default Todos;