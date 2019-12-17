import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";

import Navigation from "./Navigation";
import Footer from "../UI/Footer";
import Main from "../UI/Main";
import Signup from "../signup/Signup";
import Login from "../login/Login";
import "../login/styles/login.scss";

const Homepage = props => {
  const [shouldLoginDisplay, setShouldLoginDisplay] = useState(false);
console.log(props.history);
  return (
    <div>
      <div className="row">
      <div className="col-sm-2" />
      <div className="col-sm-8">
        <Navigation setShouldLoginDisplay={setShouldLoginDisplay} />

        <Main />

        <Footer />
      </div>
      <div className="col-sm-2" />
      </div>
      <Login
        history={props.history}
        shouldLoginDisplay={shouldLoginDisplay}
        setShouldLoginDisplay={setShouldLoginDisplay}
      />
    </div>
  );
};

export default Homepage;
