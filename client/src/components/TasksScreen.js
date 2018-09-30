import React from 'react';
import {About} from './About';
import {NoMatch} from './NoMatch';
import {Home} from './Home';
import {MenageTodo} from './MenageTodo';
import {Switch, Route, withRouter} from 'react-router-dom';

export const TasksScreen = withRouter(({tasks, onAdd, onEdit, onDelete, onFilter, history}) => (
    <Switch>
        <Route
            exact path={'/'}
            component={props =>
                <Home
                    tasks={tasks}
                    onFilter={onFilter}
                    history={history}
                />
            }
        />
        <Route path={'/about'} component={About}/>
        <Route path="/add" component={() =>
            <MenageTodo 
            onSave={todo => {
                onAdd(todo);
                history.push('/');
            }}
            />}
        />
        <Route path="/edit/:id" component={props => {
            return <MenageTodo
                task={tasks.find(task => task.id === props.match.params.id)}
                onSave={todo => {
                    onEdit({...todo, id: props.match.params.id});
                    history.push('/');
                }}
                onDel = {todo => {
                    onDelete(todo);
                    history.push('/');
                }}
            />
        }}
        />
        <Route component={NoMatch}/>
    </Switch>
));
