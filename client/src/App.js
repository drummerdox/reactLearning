import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import './App.css';
import Home from "./components/Home";
import About from "./components/About";
import NoMatch from "./components/NoMatch";
import {MenageTodo} from './components/MenageTodo';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tasks: [
                {
                    id: 1,
                    task: 'wash dishes',
                    isCompleted: false,
                    data: '01-01-2018'
                },
                {
                    id: 2,
                    task: 'clean teeth',
                    isCompleted: true,
                    data: '02-02-2018'
                }
            ]
        }
    }
    
    createTask = (task) => {
        console.log('app');
        console.log(task);

        const tasks = [...this.state.tasks, task];

        this.setState(state => ({tasks}));

        console.log(this.state.tasks);
    };

    taskEdit = (id) => {
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

    deleteTodo = (id) => {
        const newTask = this.state.tasks.filter(task => id !== task.id);
        this.setState({tasks: newTask});
      };

    render() {
        return (
            <Router>
                <div className="App">
                    <div className="container">
                        <Switch>
                            <Route 
                                exact path={'/'} 
                                component ={
                                    () => <Home tasks={this.state.tasks} />
                                }
                            />
                            <Route path={'/about'} component={About}/>
                            <Route path="/add" component={() => 
                                <MenageTodo 
                                    onAddButtonClick={task => this.setState({tasks: this.state.tasks.concat(task)})} 
                                />} 
                            />
                            <Route path="/edit/:id" component={props => 
                                <MenageTodo 
                                    task={this.state.tasks.find(task => task.id === 1)}
                                    creatTask = {this.createTask}  
                                />
                            } 
                            />
                            <Route component={NoMatch}/>
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
