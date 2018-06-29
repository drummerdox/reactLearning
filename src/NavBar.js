import React from 'react';
import './NavBar.css';

export class NavBar  extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ''
        };
    }

    filterElements = (event) => {
        this.props.applyFilterForElements(event);
     };

    render() {
        return (
            <React.Fragment>
                <ul className="nav-bar-menu">
                <li>
                    <button className="completed" onClick={() => this.filterElements('completed')}> done tasks </button>
                </li>
                <li>
                    <button className="panding" onClick={() => this.filterElements('active')}>in progress tasks</button>
                </li>
                <li>
                    <button className="total" onClick={() => this.filterElements('all')}>all progress tasks</button>
                </li>
            </ul>
            </React.Fragment>
        );
    }
}
