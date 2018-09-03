import React, {Component} from 'react';

export class Todos extends Component {

    handleChangez = (event) => {
       // this.props.handleDelete(event.target.value);
    };

    constructor(props) {
        super(props);

        this.state = {
            value: ''
        };

        // this.handleChange = this.handleChange.bind(this);
    }

    render() {
        function Img(props) {
            return React.createElement('img', {
                // src: props.source
            })
        }

        return (
            <React.Fragment>
                <th>{this.props.id}</th>
                <th>{this.props.task}</th>
                <th>{this.props.isCompleted ? 'Completed' : 'Incompleted'}</th>
                <th>link</th>
                {/*<th>*/}
                    {/*<input*/}
                        {/*type="checkbox"*/}
                        {/*value={this.props.id}*/}
                        {/*onChange={this.handleChangez}*/}
                    {/*/>*/}
                    {/*<button*/}
                        {/*className={this.props.isCompleted ? 'Completed' : 'InCompleted'}*/}
                        {/*onClick={this.props.onClick}*/}
                    {/*>*/}
                        {/*{this.props.task}*/}
                    {/*</button>*/}

                {/*</th>*/}
            </React.Fragment>
        );
    }
}

