import React, {Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import {TasksScreen} from './components/TasksScreen';
import * as Model from './tasksModel';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tasks: Model.generateSampleTasks()
        };
    }

    createTask = (task) => this.setState({tasks: Model.createTask(this.state.tasks, task)});

    editTask = (task) => this.setState({tasks: Model.editTask(this.state.tasks, task)});

    deleteTodo = (id) => {
        const newTask = this.state.tasks.filter(task => id !== task.id);
        this.setState({tasks: newTask});
    };

    render() {
        return (
            <Router>
                <div className="App">
                    <div className="container">
                        <TasksScreen
                            onAdd={this.createTask}
                            onEdit={this.editTask}
                            tasks={this.state.tasks}
                            onDelete={this.deleteTodo}
                        />
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
