import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const FILTER_ALL = 'all';
const FILTER_ACTIVE = 'active';
const FILTER_COMPLETED = 'completed';

let todos = [
  {
    id: 1,
    task: 'wash dishesa',
    isCompleted: false,
    styleColor: 'isInCompleted',
  },
  {
    id: 2,
    task: 'clean teeth',
    isCompleted: false,
    styleColor: 'isInCompleted',
  }
];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: todos
    }
  }

  handleOnClick = (todoItem) => {
    const todos = this.state.todos.map((item) => {
      let answer = item;
      if (item.id === todoItem.id) {
          answer = {
            ...item,
            isCompleted: !item.isCompleted,
            styleColor: item.isCompleted == true ? 'isCompleted' : 'isInCompleted',
          }
      }
      return answer;
    })

    this.setState({ 
      todos
    }
   );
  }

  handleChange(e) {
    let text = e.target.value;
    this.setState({
      value: text
    });
  }

  createTodo() {
    let newTodo = {
      id: this.state.todos.length + 1,
      task: this.state.value,
      isCompleted: false
    };
    
    todos = this.state.todos.concat([newTodo]);

    this.setState({ 
      todos
    })
  }

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
    const todoList = (
      <ul>
        { todos.map((todo, key) => {
          return <li key={key}>
            <button className={todo.styleColor} onClick={ (event) => {this.handleOnClick(todo)}}>{todo.task}</button>
          </li>
        } ) }
      </ul>
    );
    return (
      <div className="App">
      <div id="items">
      <h2>Список задач</h2>
        <button className={this.state.isCompleted} onClick={this.createTodo.bind(this)}>Create new</button>
        <input type="text" value={this.state.value} onChange={this.handleChange.bind(this)} />
        {todoList}
      </div>
      </div>
    );
  }
}

export default App;
