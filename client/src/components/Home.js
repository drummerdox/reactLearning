import React, {Component} from 'react';
import {Table} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export class Home extends Component {
    onHandleClick = () => {
        this.props.history.push('/add');
    };

    render() {
        return (
            <React.Fragment>
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
                            this.props.tasks.map(todo => (
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
                    onClick = {this.onHandleClick } 
                    className="pull-right" 
                    bsStyle={'primary'}>
                    Add todos
                </Button>
            </React.Fragment>
        );
    }
}

export default Home;
