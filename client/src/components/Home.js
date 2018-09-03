import React, {Component} from 'react';
import {Button, Grid, Jumbotron} from 'react-bootstrap';
import {TodoList} from "./TodoList";
import {AddTodo} from "./AddTodo";

export class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: [
                {
                    id: 1,
                    task: 'wash dishes',
                    isCompleted: false,
                    styleColor: 'isInCompleted',
                },
                {
                    id: 3,
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

    routeChange(e){
        console.log(e);
        let path = 'about';

        this.props.push(path);
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
                    onClick={this.routeChange}
                 />
            </React.Fragment>
        );
    }
}

export default Home;
