import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navigation from './components/Navigation';
import Main from './components/Main';
import Footer from './components/Footer';
import Admin from './components/admin/Admin';
import Signup from './components/Signup';


class App extends React.Component {
  render() {
    return (
      <Router>
        <Navigation />
          <Switch>
            <Route path = "/" exact component={Main} />
            <Route path = "/signup" component = {Signup}/>

            {/* The link below need to be changed*/}
            <Route path = "/admin" component={Admin} />
          </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
