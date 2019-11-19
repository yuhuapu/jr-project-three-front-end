import React from "react";
import { Route, Switch } from "react-router-dom";

import Navigation from '../UI/Navigation';
import Footer from "../UI/Footer";
import Main from '../UI/Main';
import Signup from '../signup/Signup';
import Login from '../login/Login';

const Homepage = () => {
    return (
        <div>
            <Navigation />
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
                <Route path="/" component={Main} />
            </Switch>
            <Footer />
        </div>
    );
}

export default Homepage;