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
            filteredTasks: '',
            filter: ''
        };

        this.state.filteredTasks = this.state.tasks;
    }
    
    createTask = task => this.setState({tasks: Model.createTask(this.state.tasks, task)});

    editTask = (task) => this.setState({tasks: Model.editTask(this.state.tasks, task)});

    deleteTodo = (id) => this.setState({tasks: Model.deleteTask(this.state.tasks, id)});

    filterTodo = (task) => {
        if (task === 'active') {
            this.setState({filteredTasks: this.state.tasks.filter(task => task.isCompleted === false)});
        } else if (task === 'completed') {
            this.setState({filteredTasks: this.state.tasks.filter(task => task.isCompleted === true)});
        } else {
            this.setState({filteredTasks: this.state.tasks});
        }

    }

    render() {
        return (
            <Router>
                <div className="App">
                    <div className="container">
                        <TasksScreen
                            onAdd={this.createTask}
                            onEdit={this.editTask}
                            tasks={this.state.filteredTasks}
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
