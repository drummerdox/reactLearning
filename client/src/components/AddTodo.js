import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Jumbotron, Grid, Button} from 'react-bootstrap';
import UUID from 'uuid-js' ;

export class AddTodo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ''
        };

    }

    handleClick = (e) => {

        this.props.onClick(e);
    };

    handleChange = (e) => {
        this.props.onCreateClick(this.state.value)
    };

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
                <Button onClick = {this.handleClick} bsStyle={'primary pull-left'}>Add todos</Button>
            </div>
        );
    }
}
