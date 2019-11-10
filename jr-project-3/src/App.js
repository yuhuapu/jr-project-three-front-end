import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navigation from './components/Navigation';
import Main from './components/Main';
import Footer from './components/Footer';
import Admin from './components/admin/Admin';
import Signup from './components/Signup';
import Login from './components/Login';


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
