import React, {Component} from 'react';
import {TodoList} from "./TodoList";
import {AddTodo} from "./AddTodo";
import UUID from 'uuid-js';

export class Home extends Component {
    constructor(props) {
        super(props);

        const {tasks} =  this.props;
        
        this.state = {
            todos: tasks
        }
    }

    handleClick = () => {
        console.log(712678162378);

        
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
