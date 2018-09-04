import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Home from "./components/Home";
import About from "./components/About";
import NoMatch from "./components/NoMatch";
import { AddTodo } from './components/AddTodo';
import { CreateTodo } from './components/CreateTodo';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <div className="container">
                        <Switch>
                            <Route exact path={'/'} component={Home}/>
                            <Route path={'/about'} component={About}/>
                            <Route path={'/add'} component={CreateTodo}/>
                            <Route component={NoMatch}/>
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
