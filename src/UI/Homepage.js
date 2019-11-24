import React from "react";
import { Route, Switch } from "react-router-dom";

import Navigation from '../UI/Navigation';
import Footer from "../UI/Footer";
import Main from '../UI/Main';
import Signup from '../signup/Signup';
import Login from '../login/Login';

const Homepage = () => {
    return (
        <div className="row" >
            <div className="col-sm-2" />
            <div className="col-sm-8">
                <Navigation />
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/signup" component={Signup} />
                    <Route path="/" component={Main} />
                </Switch>
                <Footer />
            </div>
            <div className="col-sm-2" />
            </div>
            );
        }
        
export default Homepage;