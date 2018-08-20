import React from 'react';
import {Todo} from './Todo';
import {Link, Route} from 'react-router-dom';
import {Filters} from './Filters';

const List = ({todos, handleDelete, onClick}) => (
    <ul>
        <Route path="/todos/all" render={() => <h1>All</h1>} />
        <Route path="/todos/pending" render={() => <h1>Pending</h1>} />
        <Route path="/todos/completed" render={() => <h1>Completed</h1>} />
        {
            todos.map(todo => (
                <Todo
                    key={todo.id}
                    handleDelete={handleDelete}
                    {...todo}
                    onClick={() => onClick(todo.id)}
                />
            ))
        }
    </ul>);


const filterTodos = ({filter, todos}) => {
    switch (filter) {
        case Filters.COMPLETED:
            return todos.filter(todo => todo.isCompleted === true);
        case Filters.ACTIVE:
            return todos.filter(todo => todo.isCompleted !== true);
        case Filters.ALL:
            return todos;
        default:
            return todos.filter(todo => todo.isCompleted !== true);
    }
};


export const TodoList = ({todos, handleDelete, onClick}) => (
    <div>
        <Route
            path="/todos/:filter"
            render={props =>
                console.log(props) ||
                <React.Fragment>
                    <Link to="/addTodo">Добавить новую задачу</Link>
                    <List
                        todos={filterTodos({
                            filter: props.match.params.filter,
                            todos
                        })}
                        handleDelete={handleDelete}
                        onClick={onClick}
                    />
                </React.Fragment>
            }
        />
    </div>
);

/*

export const TodoList = props => {

const todos = props.todos;
const onClick = props.onClick;

// const {todos, onClick} = props;

return (
    <ul>
        {todos.map(todo =>
            <Todo key={todo.id} {...todo} onClick={() => onClick(todo.id)}/>)}
    </ul>
);

}

 */
