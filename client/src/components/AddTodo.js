import React, {Component} from 'react';
import {Button} from 'react-bootstrap';

export class AddTodo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ''
        };
    }

    render() {
        return (
            <div>
                <div>
                {/*<input*/}
                        {/*type="text"*/}
                        {/*value={this.state.value}*/}
                        {/*onChange={this.handleChange}*/}
                    {/*/>*/}
                </div>
                <Button  onClick = {this.props.onClicked } className="pull-right" bsStyle={'primary'}>Add todos</Button>
            </div>
        );
    }
}
