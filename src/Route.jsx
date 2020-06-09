import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignUp from './Components/form';
import Login from './Components/login';
import Dashboard from './Components/dashboard';
import PrivateRoute from './PrivateRoute';

const _ = (props) => {//Routing_Systems...
    return (
        <Switch>
            <Route path='/' exact component={props.children} />
            <Route path='/signup' component={SignUp} />
            <Route path='/login' component={Login} />
            <PrivateRoute LoggedIn={props.user} path='/dashboard' component={Dashboard} />
        </Switch>
    )
}

export default _;