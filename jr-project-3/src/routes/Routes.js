import React from 'react';
import { Route, Switch } from "react-router-dom";

import Main from '../UI/Main';
import Admin from '../admin/Admin';
import Signup from '../signup/Signup';
import Login from '../login/Login';


const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            {/*This link is set to be testing the static page for admin page*/}
            <Route path="/admin" component={Admin} />
        </Switch>
    );
};

export default Routes;
