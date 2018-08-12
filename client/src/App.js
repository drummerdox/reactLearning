import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import UUID from 'uuid-js' ;
import {TodoList} from './TodoList';
import {AddTodo} from './AddTodo';
import { NavBar } from './NavBar';
import { Filters } from './Filters';
import { DataPicker } from './DataPicker';

//import {Router} from './Router';
//import {Route} from './Route';

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

const Index = ({changeRoute}) => (
    <React.Fragment>
        <div>Index</div>
        <button onClick={() => {
            changeRoute('/info')
        }}>
            Info
        </button>
    </React.Fragment>
);
const Info = ({changeRoute}) => (
    <React.Fragment>
        <div>Info</div>
        <a href="#" onClick={evt => {
            evt.preventDefault();
            changeRoute('/index')
        }}>Index</a>
    </React.Fragment>
);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      filter: Filters.ALL
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
  };

  static isParamsSetted(param) {
      if(param) {
        //validation
        return param;
      }
  }

  createTodo = (value) => {
    //this.isParamsSetted(value) &&

    this.setState(
    {
    todos: [...this.state.todos, {
        id: UUID.create(1).toString(),
        task: value,
        isCompleted: false
    }]
    });

    this.postCall();
  };

  deleteTodo = (id) => {
    const newTodos = this.state.todos.filter(todo => id !== todo.id);
    this.setState({todos: newTodos});
  };

  datePickerOnSelect = (event, ui) => {
      console.log('DOM changed!', event);
      this.createTodo(event);
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ todos: res.todos }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/getTodos');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  postCall = async () => {
      fetch('/api/setTodos',{method: 'POST', body: JSON.stringify({todos: this.state.todos}), headers: {"Content-Type": "application/json"}
      }).then(function(response){return response.json()
      });
  };


    //
    // render() {
    //     const todos = filterTodos({
    //         todos: this.state.todos,
    //         filter: this.state.filter
    //     });
    //
    //     return (
    //         <Router>
    //             {({route, changeRoute}) => (
    //                 <React.Fragment>
    //                     <Route
    //                         changeRoute={changeRoute}
    //                         currentRoute={route}
    //                         route={'/index'}
    //                         component={Index}
    //                     />
    //                     <Route
    //                         changeRoute={changeRoute}
    //                         currentRoute={route}
    //                         route={'/info'}
    //                         component={Info}
    //                     />
    //                 </React.Fragment>
    //             )}
    //         </Router>
    //     );
    // }

  render() {
    const todos = filterTodos({
      todos: this.state.todos,
      filter: this.state.filter
    });


    return (
      <div className="App">
          <div className="container">
               <NavBar
                   applyFilterForElements = {filter => this.setState({filter}) }
               />
          <table className="table">
              <thead>
              <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
              </tr>
              <tr>
                  <td>
                           <TodoList
                               todos={todos}
                               onClick={this.handleOnClick}
                               handleDelete={this.deleteTodo}
                          />

                  </td>
              </tr>
              </thead>
              <tbody>

              </tbody>
        </table>
      </div>
      </div>
    );
  }
}

export default App;

//
// <div id="items">
//     <h2>Список задач</h2>
//     <DataPicker
//         onChange={this.datePickerOnSelect}
//     />
// <DataPicker
//    onChange={this.datePickerOnSelect}
// />
//     <AddTodo
//         onCreateClick={this.createTodo}
//     />
//     <TodoList
//         todos={todos}
//         onClick={this.handleOnClick}
//         handleDelete={this.deleteTodo}
//     />
// </div>