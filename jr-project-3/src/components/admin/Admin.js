import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import CourseAdmin from './CourseAdmin';
import StudentAdmin from './StudentAdmin';
import TutorAdmin from './TutorAdmin';

function Admin() {
    return (
        <Router>
            <div className="row">
                <div className="col-2 text-center">
                    <nav className="navbar bg-light">
                        <h2 className="navbar-brand">Admin Menu</h2>
                        <ul className="navbar-nav">
                            <Link to = "/admin/course">
                                <li className="nav-item">
                                    <p className="nav-link">Course Admin</p>
                                </li>
                            </Link>

                            <Link to = "/admin/student">
                                <li className="nav-item">
                                    <p className="nav-link">Student Admin</p>
                                </li>
                            </Link>

                            <Link to = "/admin/tutor">
                                <li className="nav-item">
                                    <p className="nav-link">Tutor Admin</p>
                                </li>
                            </Link>

                        </ul>
                    </nav>
                </div>
                <div className="col-10">
                    <Switch>
                        <Route path="/admin/course" component={CourseAdmin} />
                        <Route path="/admin/student" component={StudentAdmin} />
                        <Route path="/admin/tutor" component={TutorAdmin} />
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default Admin;