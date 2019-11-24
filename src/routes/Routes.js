import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Homepage from '../UI/Homepage';
import AdminLogin from '../login/AdminLogin';
import Admin from "../admin/Admin";
<<<<<<< HEAD
import AdminCourseList from "../course/adminCourse/components/AdminCourseList";
=======
import AddCourse from "../UI/adminUI/addModal/AddCourse";
>>>>>>> add course form structure completed

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/admin" component={AdminLogin} />
                <Route exact path="/admin/dashboard" component={Admin} />
<<<<<<< HEAD
                <Route path="/admin/dashboard/courselist" component={AdminCourseList} />
=======
                <Route exact path="/admin/dashboard/addcourse" component={AddCourse} />
>>>>>>> add course form structure completed
                <Route path="/" component={Homepage} />
            </Switch>
        </Router>
    );
};

export default Routes;


