import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, hashHistory} from 'react-router-dom';
import './App.css';
import Home from "./components/Home";
import About from "./components/About";
import NoMatch from "./components/NoMatch";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <div className="container">
                        <Switch>
                            <Route exact path={'/'} component={Home}/>
                            <Route path={'/about'} component={About}/>
                            <Route component={NoMatch}/>
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
