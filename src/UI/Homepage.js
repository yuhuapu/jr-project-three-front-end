import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";

import Navigation from "./Navigation";
import Footer from "../UI/Footer";
import Main from "../UI/Main";
import Signup from "../signup/Signup";
import Login from "../login/Login";

const Homepage = () => {
  const [shouldLoginDisplay, setShouldLoginDisplay] = useState(false);

  return (
    <div className="row">
      <div className="col-sm-2" />
      <div className="col-sm-8">
        <Navigation
          setShouldLoginDisplay={setShouldLoginDisplay}
        />
        <Switch>
          <Route path="/signup" component={Signup} />
          <Route path="/" component={Main} />
        </Switch>
        <Footer />
      </div>
      <div className="col-sm-2" />
      <Login
        shouldLoginDisplay={shouldLoginDisplay}
        setShouldLoginDisplay={setShouldLoginDisplay} 
      />
    </div>
  );
};

export default Homepage;
