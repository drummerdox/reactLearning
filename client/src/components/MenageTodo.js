import React, {Component} from 'react';
import { Button, FormGroup, FormControl, ControlLabel} from 'react-bootstrap';

export class MenageTodo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ''
        };
    }

    handleChange = (e) => {
        this.setState({ value: e.target.value });
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
                        value={this.state.value}
                        placeholder="Enter text"
                        onChange={this.handleChange}
                    />
                    
                    <ControlLabel>Select</ControlLabel>
                    <FormControl componentClass="select" placeholder="select">
                        <option value="completed">Сompleted</option>
                        <option value="incompleted">Incompleted</option>
                    </FormControl>

                    <ControlLabel>Expire date</ControlLabel>
                    <FormControl
                        type="text"
                        value={this.state.value}
                        placeholder="Enter text"
                        onChange={this.handleChange}
                    />
                    </FormGroup>
                </form>
                <Button 
                    onClick = {this.props.onClicked } 
                    className="pull-right" 
                    bsStyle={'primary'}
                >
                    Add todos
                </Button>
            </div>
        );
    }
}
