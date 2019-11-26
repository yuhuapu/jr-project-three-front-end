import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Homepage from '../UI/Homepage';
import AdminLogin from '../login/AdminLogin';
import Admin from "../admin/Admin";
import AdminCourseList from "../course/adminCourse/components/AdminCourseList";

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/admin" component={AdminLogin} />
                <Route exact path="/admin/dashboard" component={Admin} />
                <Route path="/admin/dashboard/courselist" component={AdminCourseList} />
                <Route path="/" component={Homepage} />
            </Switch>
        </Router>
    );
};

export default Routes;


