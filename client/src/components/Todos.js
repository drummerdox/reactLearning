import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export class Todos extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ''
        };
    }

    handleChangez = (event) => {
        // this.props.handleDelete(event.target.value);
     };

     
    render() {
        const task = this.props;
        console.log(task);
        
        return (
            <React.Fragment>
                <th>{this.props.id}</th>
                <th>{this.props.task}</th>
                <th>{this.props.isCompleted ? 'Completed' : 'Incompleted'}</th>
                <th>
                    <Link 
                        //{...this.props}
                        to = {'/edit/' + this.props.id } 
                        task = {task}
                        params = {task}
                        >
                    {'edit'}
                    </Link> 
                </th> 
            </React.Fragment>
        );
    }
}

