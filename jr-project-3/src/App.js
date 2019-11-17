import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navigation from './UI/Navigation';
import Main from './UI/Main';
import Footer from './UI/Footer';
import Admin from './admin/Admin';
import Signup from './signup/Signup';
import Login from './login/Login';


class App extends React.Component {
  render() {
    return (
      <Router>
        <Navigation />
          <Switch>
            <Route path = "/" exact component={Main} />
            <Route path = "/signup" component = {Signup}/>
            <Route path = "/login" component={Login} />
            {/*This link is set to be testing the static page for admin page*/}
            <Route path = "/admin" component={Admin} />
          </Switch>
        <Footer />        
      </Router>
    );
  }
}

export default App;
