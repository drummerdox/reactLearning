import React from 'react';
import {Todo} from './Todo';

export const TodoList = ({todos, onClick}) => (
    <ul>
        {todos.map(todo =>
            <Todo key={todo.id} {...todo} onClick={() => onClick(todo.id)}/>)}
    </ul>
);

/*

export const TodoList = props => {

const todos = props.todos;
const onClick = props.onClick;

// const {todos, onClick} = props;

return (
    <ul>
        {todos.map(todo =>
            <Todo key={todo.id} {...todo} onClick={() => onClick(todo.id)}/>)}
    </ul>
);

}

 */
