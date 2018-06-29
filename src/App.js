import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UUID from 'uuid-js' ;
import {TodoList} from './TodoList';
import {AddTodo} from './AddTodo';

const FILTER_ALL = 'all';
const FILTER_ACTIVE = 'active';
const FILTER_COMPLETED = 'completed';

let createTodos = () => [
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
];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: createTodos(),
      value: ''
  }
  }

  handleOnClick = (id) => {
    const index = this.state.todos.findIndex(todo => todo.id === id);

    this.setState({
        todos: [
            ...this.state.todos.slice(0, index),
            {
                ...this.state.todos[index],
                isCompleted: !this.state.todos[index].isCompleted
            },
            ...this.state.todos.slice(index + 1)
        ]
    });
  }

  handleChange(e) {
    let text = e.target.value;
    this.setState({
      value: text
    });
  }

  createTodo = (value) => this.setState({
    todos: [...this.state.todos, {
        id: UUID.create(1).toString(),
        task: value,
        isCompleted: false
    }]
  });

  applyFilter(todos, filter) {
    switch (todos) {
        case FILTER_COMPLETED:
            return todos.filter(todo => todos.isCompleted === true);

        case FILTER_ACTIVE:
            return todos.filter(item => todos.isCompleted !== true);

        default:
            return todos;
    }
  }
  
  render() {
    return (
      <div className="App">
      <div id="items">
          <h2>Список задач</h2>
          <AddTodo onCreateClick={this.createTodo}/>
          <TodoList todos={this.state.todos} onClick={this.handleOnClick}/>
      </div>
      </div>
    );
  }
}

export default App;
