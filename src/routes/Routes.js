import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Homepage from '../UI/Homepage';
import AdminLogin from '../login/AdminLogin';
import Admin from "../admin/Admin";
import AdminCourseList from "../admin/adminUI/listModal/components/AdminCourseList";
import AdminTutorList from "../admin/adminUI/listModal/components/AdminTutorList";
import AdminStudentList from "../admin/adminUI/listModal/components/AdminStudentList";


import AddCourse from "../admin/adminUI/addModal/AddCourse";
import AddTutor from "../admin/adminUI/addModal/AddTutor";
import AddStudent from "../admin/adminUI/addModal/AddStudent";

import AdminCourseSearch from "../admin/adminUI/searchModal/components/AdminCourseSearch";
import AdminStudentSearch from "../admin/adminUI/searchModal/components/AdminStudentSearch";
import AdminTutorSearch from "../admin/adminUI/searchModal/components/AdminTutorSearch";

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/admin" component={AdminLogin} />
                <Route exact path="/admin/dashboard" component={Admin} />
                <Route exact path="/admin/dashboard/courselist" component={AdminCourseList} />
                <Route exact path="/admin/dashboard/tutorlist" component={AdminTutorList} />
                <Route exact path="/admin/dashboard/studentlist" component={AdminStudentList} />
                <Route exact path="/admin/dashboard/addcourse" component={AddCourse} />
                <Route exact path="/admin/dashboard/addstudent" component={AddStudent} />
                <Route exact path="/admin/dashboard/addtutor" component={AddTutor} />
                <Route exact path="/admin/dashboard/coursesearch" component={AdminCourseSearch} />
                <Route exact path="/admin/dashboard/studentsearch" component={AdminStudentSearch} />
                <Route exact path="/admin/dashboard/tutorsearch" component={AdminTutorSearch} />


                <Route path="/" component={Homepage} />
        
            </Switch>
        </Router>
    );
};

export default Routes;


