import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Homepage from '../UI/Homepage';
import AdminLogin from '../login/AdminLogin';
import Admin from "../admin/Admin";
import AddCourse from "../UI/adminUI/addModal/AddCourse";

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/admin" component={AdminLogin} />
                <Route exact path="/admin/dashboard" component={Admin} />
                <Route exact path="/admin/dashboard/addcourse" component={AddCourse} />
                <Route path="/" component={Homepage} />
            </Switch>
        </Router>
    );
};

export default Routes;


