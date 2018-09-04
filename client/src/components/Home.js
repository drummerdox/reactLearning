import React, {Component} from 'react';
import {Button, Grid, Jumbotron} from 'react-bootstrap';
import {TodoList} from "./TodoList";
import {AddTodo} from "./AddTodo";
import UUID from 'uuid-js' ;
import {BrowserRouter as Router, Route, Switch, hashHistory} from 'react-router-dom';

export class Home extends Component {
    constructor(props) {
        super(props);

    
        this.state = {
            todos: [
                {
                    id: UUID.create(1).toString(),
                    task: 'wash dishes',
                    isCompleted: false,
                    styleColor: 'isInCompleted',
                },
                {
                    id: UUID.create(1).toString(),
                    task: 'clean teeth',
                    isCompleted: false,
                    styleColor: 'isInCompleted',
                }
            ]
        }
    }

    handleClick = () => {
        this.setState(prevState => ({
            todos: !prevState.todos
        }));
    };

    onHandleClick = () => {
        this.props.history.push('/add');
    }

    render() {
        const todos = this.state.todos;

        return (
            <React.Fragment>
                <TodoList
                    todos = {todos}
                    onClick = {this.handleClick}
                />
                <AddTodo
                    onClicked = {this.onHandleClick}
                 />
            </React.Fragment>
        );
    }
}

export default Home;
