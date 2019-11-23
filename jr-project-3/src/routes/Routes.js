import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Homepage from '../UI/Homepage';
import AdminLogin from '../login/AdminLogin';
import Admin from "../admin/Admin";

const Routes = (props) => {
    return (
        <Router>
            <Switch>
                <Route exact path="/admin" component={AdminLogin} />
                <Route exact path="/admin/dashboard" 
                    render = {() => (<Admin menuText = {props.menuText} />)}
                />
                <Route path="/" component={Homepage} />
            </Switch>
        </Router>
    );
};

export default Routes;


