import React from 'react';
import './NavBar.css';
import {Filters} from './Filters';

export const NavBar = ({applyFilterForElements}) => (
    <React.Fragment>
        <ul className="nav-bar-menu">
        <li>
            <button className="completed" onClick={() => applyFilterForElements(Filters.COMPLETED)}> 
                done tasks 
            </button>
        </li>
        <li>
            <button className="panding" onClick={() => applyFilterForElements(Filters.ACTIVE)}>
                in progress tasks
            </button>
        </li>
        <li>
            <button className="total" onClick={() => applyFilterForElements(Filters.ALL)}>
                all progress tasks
            </button>
        </li>
    </ul>
    </React.Fragment>
);
