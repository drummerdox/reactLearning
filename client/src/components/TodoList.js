import React from 'react';
import {Todos} from './Todos';
import {Table} from 'react-bootstrap';

export const TodoList = ({todos, onClick}) => {
    return (
        <div>
            <h2>Basic Table</h2>
            <p></p>
            <Table responsive>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Status</th>
                    <th>Edit</th>
                </tr>
                </thead>
                <tbody>
                {
                    todos.map(todo => (
                        <tr key={todo.id}>
                            <Todos
                                {...todo}
                                onClick={() => onClick(todo.id)}
                            />
                        </tr>
                    ))
                }
                </tbody>
            </Table>
        </div>
    )
};
