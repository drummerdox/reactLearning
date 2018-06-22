import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const todos = [
  {
    id: 1,
    task: 'finish task',
    isCompleted: false
  },
  {
    id: 2,
    task: 'test task',
    isCompleted: false
  }
];

class TodoList extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to my TODO list</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: todos
    }
  }

  handleOnClick = (todoItem) => {
    this.setState({
      todos: this.state.todos.map((item) => {
        let answer = item;
        if (item.id === todoItem.id) {
            answer = {
              ...item,
              isCompleted: !item.isCompleted
            }
        }
        return answer;
      })
    }
   );
  }

  render() {
    const todoList = (
      <ul>
        { todos.map((todo, key) => {
          console.log(todo);
          return <li key={key}><button onClick={(event) => {this.handleOnClick(todo)}}>{todo.task}</button></li>
        } ) }
      </ul>
    );
    console.log(todoList);
    return (
      <div className="App">
      <div id="items">
      <h2>Список телефонов</h2>
      {todoList}
      </div>
      </div>
    );
  }
}

export default App;
