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

    onSubmit = (e) => {
        if (!this.state.value.trim()) {
            return;
        }

        this.props.onCreateClick(this.state.value)
    };

    render() {
        return (
            <React.Fragment>
                <button 
                onClick={this.onSubmit}
                disabled={!this.state.value.trim()}>
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
