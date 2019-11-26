import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Homepage from '../UI/Homepage';
import AdminLogin from '../login/AdminLogin';
import Admin from "../admin/Admin";
<<<<<<< HEAD
import AdminCourseList from "../course/adminCourse/components/AdminCourseList";
=======
import AddCourse from "../UI/adminUI/addModal/AddCourse";
<<<<<<< HEAD
>>>>>>> add course form structure completed
=======
import AddTutor from "../UI/adminUI/addModal/AddTutor";
import AddStudent from "../UI/adminUI/addModal/AddStudent";
>>>>>>> Add forms completed with minor differences to the design, pop up not completed, need to be improved

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
<<<<<<< HEAD
>>>>>>> add course form structure completed
=======
                <Route exact path="/admin/dashboard/addstudent" component={AddStudent} />
                <Route exact path="/admin/dashboard/addtutor" component={AddTutor} />
>>>>>>> Add forms completed with minor differences to the design, pop up not completed, need to be improved
                <Route path="/" component={Homepage} />
            </Switch>
        </Router>
    );
};

export default Routes;


