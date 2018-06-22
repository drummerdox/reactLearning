import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let todos = [
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
            isCompleted: !item.isCompleted
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
    let text = this.state.value;
    let newTodo = {
      id: this.state.todos.length + 1,
      task: text,
      isCompleted: false
    };
    
    todos = this.state.todos.concat([newTodo]);

    this.setState({ 
      todos
    })
  }

  render() {
    const todoList = (
      <ul>
        { todos.map((todo, key) => {
          return <li key={key}>
          <button onClick={ (event) => {this.handleOnClick(todo)}}>{todo.task}</button>
          </li>
        } ) }
      </ul>
    );
    return (
      <div className="App">
      <div id="items">
      <h2>Список задач</h2>
        <button onClick={this.createTodo.bind(this)}>Create new</button>
        <input type="text" value={this.state.value} onChange={this.handleChange.bind(this)} />
        {todoList}
      </div>
      </div>
    );
  }
}

export default App;
