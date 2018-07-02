import React from 'react';
// React.createElement(Todo, {id: 1, task: 'text'})
// <Todo id={1} task="text"/>

export class Todo  extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            value: ''
        };

        // this.handleChange = this.handleChange.bind(this);
    }


    handleChangez = (event) => {
        this.props.handleDelete(event.target.value);
    };

    render() {
        return (
            <React.Fragment>
                <li>
                    <p>
                    <input 
                        type="checkbox"
                        value={this.props.id}
                        onChange={this.handleChangez}
                    />
                    <button
                            className={this.props.isCompleted ? 'isCompleted' : 'isInCompleted'}
                            onClick={this.props.onClick}
                        >
                            {this.props.task}
                        </button>
                    </p>
                </li>
            </React.Fragment>
        );
    }
}
