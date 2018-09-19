import React, {Component} from 'react';
import {TodoList} from "./TodoList";
import {AddTodo} from "./AddTodo";
import {Table} from 'react-bootstrap';
import {Button} from 'react-bootstrap';

export class Home extends Component {
    onHandleClick = () => {
        this.props.history.push('/add');
    };

    render() {
        return (
            <React.Fragment>
                <TodoList
                    todos={this.props.tasks}
                />
                
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

                                    <th>{this.props.id}</th>
                                    <th>{this.props.task}</th>
                                    <th>{this.props.isCompleted ? 'Completed' : 'Incompleted'}</th>
                                    <th>
                                        <Link 
                                            //{...this.props}
                                            to = {'/edit/' + this.props.id } 
                                            task = {task}
                                            params = {task}
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
