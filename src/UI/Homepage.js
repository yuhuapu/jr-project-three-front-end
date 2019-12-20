import React, { useState } from "react";

import Navigation from "./Navigation";
import Footer from "../UI/Footer";
import Main from "../UI/Main";
import Signup from "../signup/Signup";
import Login from "../login/Login";
import "../login/styles/login.scss";

const Homepage = props => {
  const [shouldLoginDisplay, setShouldLoginDisplay] = useState(false);
  const [shouldSignupDisplay, setShouldSignupDisplay] = useState(false);

  return (
    <div>
      <div className="row">
        <div className="col-sm-2" />
        <div className="col-sm-8">
          <Navigation
            setShouldLoginDisplay={setShouldLoginDisplay}
            setShouldSignupDisplay={setShouldSignupDisplay}
          />

          <Main />

          <Footer />
        </div>
        <div className="col-sm-2" />
      </div>
      <Login
        history={props.history}
        location={props.location}
        shouldLoginDisplay={shouldLoginDisplay}
        setShouldLoginDisplay={setShouldLoginDisplay}
      />
      <Signup
        history={props.history}
        location={props.location}
        shouldSignupDisplay={shouldSignupDisplay}
        setShouldSignupDisplay={setShouldSignupDisplay}
      />
    </div>
  );
};

export default Homepage;
