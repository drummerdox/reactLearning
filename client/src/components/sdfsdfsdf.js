import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Jumbotron, Grid, Button} from 'react-bootstrap';
import AddTodo from "./AddTodo";
import List from "./List";
import UUID from 'uuid-js' ;

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
            items: []
        };
    }

    onChange = (event) => {
        this.setState({term: event.target.value});
    };

    onSubmit = (event) => {
        event.preventDefault();
        this.setState({
            term: '',
            items: [...this.state.items, this.state.term]
        });
    };

    render() {
        return (
            <div>
                <form className="Home" onSubmit={this.onSubmit}>
                    <input value={this.state.term} onChange={this.onChange}/>
                    <button>Submit</button>
                </form>
                <List items={this.state.items}/>
            </div>
        );
    }
}