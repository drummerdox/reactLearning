import React, {Component} from 'react';
import { Button, FormGroup, FormControl, ControlLabel} from 'react-bootstrap';
import PropTypes from 'prop-types';

export class MenageTodo extends Component {
    constructor(props) {
        super(props);

        if (this.props.task) {
            this.state = {
                task: this.props.task.task || '',
                date: this.props.task.data || '',
                complition: this.props.task.isCompleted ? 'completed' : 'incompleted'
            }
        } else {
            this.state = {
                task: '',
                date: '',
                complition: 'incompleted'
            }
        }
    }

    handleChangeName = (e) => {
        this.setState({ task: e.target.task });
    }

    handleChangeDate = (e) => {
        this.setState({ date: e.target.date });
    }

    handleCreatTask = (e) => {
        this.props.onSave({
            task: this.state.task,
            isCompleted: this.state.complition === 'completed',
            data: this.state.date
        });
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
                        value={this.state.complition}
                        onChange={e => this.setState({complition: e.target.value})}
                        placeholder="Enter text"
                    />
                    </FormGroup>
                </form>
                <Button 
                    onClick = {this.handleCreatTask} 
                    className="pull-right" 
                    bsStyle={'primary'}
                >
                    {this.props.task ? 'Edit' : 'Add'}
                </Button>
            </div>
        );
    }
}

MenageTodo.propTypes = {
    onSave: PropTypes.func.isRequired,
};