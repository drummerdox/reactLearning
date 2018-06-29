import React from 'react';

export class AddTodo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ''
        };

        // this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (e) => this.setState({
        value: e.target.value
    });

    render() {
        return (
            <React.Fragment>
                <button onClick={() => this.props.onCreateClick(this.state.value)}>
                    Create new
                </button>
                <input
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange}
                />
            </React.Fragment>
        );
    }
}
