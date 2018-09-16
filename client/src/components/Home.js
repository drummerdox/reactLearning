import React, {Component} from 'react';
import {TodoList} from "./TodoList";
import {AddTodo} from "./AddTodo";

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

                <AddTodo
                    onClicked={this.onHandleClick}
                />
            </React.Fragment>
        );
    }
}

export default Home;
