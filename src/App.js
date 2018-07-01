import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UUID from 'uuid-js' ;
import {TodoList} from './TodoList';
import {AddTodo} from './AddTodo';
import { NavBar } from './NavBar';

const FILTER_ALL = 'all';
const FILTER_ACTIVE = 'active';
const FILTER_COMPLETED = 'completed';

/* let createTodos = () => [
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
]; */

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
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

  isParamsSetted(param) {
      if(param) {
        //validation
        return param;
      }
  }

  createTodo = (value) => this.setState(
    this.isParamsSetted(value) &&
    {
    todos: [...this.state.todos, {
        id: UUID.create(1).toString(),
        task: value,
        isCompleted: false
    }]
  });

  applyFilter = (filter) => {
    let filteredTodos;
    const { todos } = this.state;

    switch (filter) {
        case 'completed':
          filteredTodos = todos.filter(todo => todo.isCompleted === true);
        case 'pending':
          filteredTodos = todos.filter(todo => todo.isCompleted !== true);
        case 'all':
          filteredTodos = todos;
        default:  
        filteredTodos = todos.filter(todo => todo.isCompleted !== true);
    }

    this.setState({todos: filteredTodos});
  }
  
  deleteTodo = (id) => {
    const newTodos = this.state.todos.filter(todo => id !== todo.id);
    this.setState({todos: newTodos});
  }

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ todos: res.todos }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/getTodos');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);
console.log(body);
    return body;
  };

  render() {
    return (
      <div className="App">
      <div id="items">
          <h2>Список задач</h2>
          <NavBar
            applyFilterForElements = {this.applyFilter}
          />
          <AddTodo onCreateClick={this.createTodo}/>
          <TodoList 
            todos={this.state.todos}
            onClick={this.handleOnClick}
            handleDelete={this.deleteTodo}
          />
      </div>
      </div>
    );
  }
}

export default App;
