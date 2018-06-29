import React from 'react';
// React.createElement(Todo, {id: 1, task: 'text'})
// <Todo id={1} task="text"/>
export const Todo = ({id, task, isCompleted, onClick}) => (
    <li>
        <button
            className={isCompleted ? 'isCompleted' : 'isInCompleted'}
            onClick={onClick}
        >
            {task}
        </button>
    </li>
);
