import React, {Component} from 'react';
import {Todos} from './Todos';
import {bsClass, Grid, Jumbotron, Table} from 'react-bootstrap';

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
                        <tr>
                            <Todos
                                key={todo.id}
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
