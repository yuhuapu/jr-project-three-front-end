import React from "react";
import { Route, Switch } from "react-router-dom";

import Navigation from '../UI/Navigation';
import Footer from "../UI/Footer";
import Main from '../UI/Main';
import Signup from '../signup/Signup';
import Login from '../login/Login';

const Hompage = () => {
    return (
        <div>
            <Navigation />
            <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
            </Switch>
            <Footer />
        </div>
    );
}

export default Hompage;