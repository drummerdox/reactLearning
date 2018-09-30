import React, {Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import {TasksScreen} from './components/TasksScreen';
import * as Model from './tasksModel';
import { Filters } from './Filters';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tasks: Model.generateSampleTasks(),
            filter: 'all'
        };
    }
    
    createTask = (task) => this.setState({tasks: Model.createTask(this.state.tasks, task)});

    editTask = (task) => this.setState({tasks: Model.editTask(this.state.tasks, task)});

    deleteTodo = (id) => this.setState({tasks: Model.deleteTask(this.state.tasks, id)});

    filterTodo = (task) => {
        console.log(task);

        if (task === 'active') {
            return this.state.tasks.filter(task => task.isCompleted === false);
            
        } else if (task === 'completed') {
            return this.state.tasks.filter(task => task.isCompleted === true);
            
        } else {
            return this.state.tasks;
          
        }

    }

    render() {
        const tasks = this.filterTodo();
       
        return (
            <Router>
                <div className="App">
                    <div className="container">
                        <TasksScreen
                            onAdd={this.createTask}
                            onEdit={this.editTask}
                            tasks={tasks}
                            onDelete={this.deleteTodo}
                            onFilter={this.filterTodo}
                        />
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
