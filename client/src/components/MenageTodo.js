import React, {Component} from 'react';
import { Button, FormGroup, FormControl, ControlLabel} from 'react-bootstrap';
import PropTypes from 'prop-types';
import UUID from 'uuid-js';

export class MenageTodo extends Component {
    constructor(props) {
        super(props);

        console.log('menager props');
        console.log(this.props);

        this.state = {
            task: this.props.task.task,
            date: this.props.task.data,
            isCompleted: false,
            value: '',
        };
    }

    handleChange = (e) => {
        this.setState({ value: e.target.value });
    }

    handleChangeName = (e) => {
        this.setState({ task: e.target.task });
    }

    handleChangeDate = (e) => {
        this.setState({ date: e.target.date });
    }

    handleCreatTask = (e) => {
        const task = this.taskCreator();

        this.props.creatTask(task);
        
        this.props.history.push('/');
    }
    
    taskCreator = () => {
        const task = {
            id: UUID.create(1).toString(),
            task: this.state.task,
            isCompleted: true,
            data: this.state.date
        };

        return task;
    }

    render() {
        return (
            <div className='container'>
                 <h2>Todo menager</h2>
                <p></p>
                <form>
                    <FormGroup
                    controlId="formBasicText"
                    >
                    <ControlLabel>Name</ControlLabel>
                    <FormControl
                        type="text"
                        value={this.state.task}
                        placeholder="Enter text"
                        onChange={this.handleChangeName}
                    />
                    
                    <ControlLabel>Select</ControlLabel>
                    <FormControl componentClass="select" placeholder="select">
                        <option value="completed">Сompleted</option>
                        <option value="incompleted">Incompleted</option>
                    </FormControl>

                    <ControlLabel>Expire date</ControlLabel>
                    <FormControl
                        type="text"
                        value={this.state.date}
                        placeholder="Enter text"
                        onChange={this.handleChangeDate}
                    />
                    </FormGroup>
                </form>
                <Button 
                    onClick = {this.handleCreatTask} 
                    className="pull-right" 
                    bsStyle={'primary'}
                >
                    Add todos
                </Button>
            </div>
        );
    }
}

MenageTodo.propTypes = {
    handleCreatTask: PropTypes.func.isRequired,
};