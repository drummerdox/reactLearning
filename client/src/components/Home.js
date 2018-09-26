import React from 'react';
import {Table} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {FilterBar} from './FilterBar';

export const Home = (props) => {

    function onHandleClick() {
        props.history.push('/add');
    };

    return (
        <div>
            <div>
                <h2>Basic Table</h2>
                <FilterBar/>
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
                        props.tasks.map(todo => (
                            <tr key={todo.id}>
                                <th>{todo.id}</th>
                                <th>{todo.task}</th>
                                <th>{todo.isCompleted ? 'Completed' : 'Incompleted'}</th>
                                <th>
                                    <Link 
                                        //{...this.props}
                                        to = {'/edit/' + todo.id } 
                                        // task = {task}
                                        // params = {task}
                                        >
                                    {'edit'}
                                    </Link> 
                                </th> 
                            </tr>
                        ))
                    }
                    </tbody>
                </Table>
            </div>

            <Button 
                onClick = {onHandleClick } 
                className="pull-right" 
                bsStyle={'primary'}>
                Add todos
            </Button>
        </div>
    );
}
