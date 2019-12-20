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

import AdminProtectedRoute from './components/AdminProtectedRoute';
import ProtectedRoute from './components/ProtectedRoute';

import Student from '../student/Student';
import Tutor from '../tutor/Tutor';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/admin" component={AdminLogin} />
                <AdminProtectedRoute exact path="/admin/dashboard" component={Admin} />
                <AdminProtectedRoute exact path="/admin/dashboard/courselist" component={AdminCourseList} />
                <AdminProtectedRoute exact path="/admin/dashboard/tutorlist" component={AdminTutorList} />
                <AdminProtectedRoute exact path="/admin/dashboard/studentlist" component={AdminStudentList} />
                <AdminProtectedRoute exact path="/admin/dashboard/addcourse" component={AddCourse} />
                <AdminProtectedRoute exact path="/admin/dashboard/addstudent" component={AddStudent} />
                <AdminProtectedRoute exact path="/admin/dashboard/addtutor" component={AddTutor} />
                <AdminProtectedRoute exact path="/admin/dashboard/coursesearch" component={AdminCourseSearch} />
                <AdminProtectedRoute exact path="/admin/dashboard/studentsearch" component={AdminStudentSearch} />
                <AdminProtectedRoute exact path="/admin/dashboard/tutorsearch" component={AdminTutorSearch} />

                <Route exact path="/" component={Homepage} />
                <ProtectedRoute exact path="/student" component={Student} />
                <ProtectedRoute exact path="/tutor" component={Tutor} />
            </Switch>
        </Router>
    );
};

export default Routes;


