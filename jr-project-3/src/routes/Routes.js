import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Homepage from '../UI/Homepage';
import AdminLogin from '../login/AdminLogin';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/admin" component={AdminLogin} />
                <Route path="/" component={Homepage} />
            </Switch>
        </Router>
    );
};

export default Routes;


