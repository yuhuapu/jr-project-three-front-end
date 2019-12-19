import React, { useState, useEffect } from "react";
import { createStudent } from "../utils/api/student";
import signupIcon from "../resource/img/signup.svg";
import "./styles/signup.scss";

const Signup = props => {
  const [signupStates, setSignupStates] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    rePassword: "",
    dateOfBirth: "",
    gender: "",
    mobile: "",
    note: "",
    courses: "",
    role: "",
    isLoading: false,
    isErrShowing: false,
    history: props.history,
    location: props.location
  });

  const handleChange = event => {
    const key = event.target.name;
    const value = event.target.value;
    setSignupStates({ ...signupStates, [key]: value });
  };

  const validateMobileInput = event => {
    const re = /^[0-9\b]+$/;

    // if value is not blank, then test the regex

    if (event.target.value === '' || re.test(event.target.value)) {
       setSignupStates({...signupStates, mobile: event.target.value})
    }    
  }
  const closeModal = () => {
    setSignupStates({
      ...signupStates,
      role: "",
      isLoading: false,
      isErrShowing: false
    });
    props.setShouldSignupDisplay(false);
    document.body.style.overflow = "";
  };

  const signupUser = event => {
    setSignupStates({ ...signupStates, isLoading: true });
    event.preventDefault();
  };

  useEffect(() => {
    if (signupStates.isLoading) {
      const student = {
        firstName: signupStates.firstName,
        lastName: signupStates.lastName,
        email: signupStates.email,
        password: signupStates.password,
        dateOfBirth: signupStates.dateOfBirth,
        gender: signupStates.gender,
        mobile: signupStates.mobile,
        note: signupStates.note,
        courses: signupStates.courses
      };
      createStudent(student).then(data => console.log(data));
    }
  }, [signupStates, props]);

  if (!props.shouldSignupDisplay) {
    return null;
  } else {
    const overlay = signupStates.isLoading ? "overlay" : "";

    return (
      <div className="signup-modal">
        <form className="signup-container">
          <div className={`${overlay}`}>
            <span className="closeButton" onClick={closeModal}>
              x
            </span>
            <img src={signupIcon} className="form-icon" alt="signupIcon" />
            <h5>Sign Up</h5>
            <div className="content">
              <div className="row form-group">
                <div className="col-md-6">
                  <input
                    name="firstName"
                    type="text"
                    onChange={handleChange}
                    className="form-control"
                    placeholder="First name"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    name="lastName"
                    type="text"
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Last name"
                  />
                </div>
              </div>
              <div className="form-group">
                <input
                  name="email"
                  type="email"
                  onChange={handleChange}
                  className="form-control"
                  id="email"
                  placeholder="Email"
                />
              </div>
              <div className="form-group">
                <input
                  name="password"
                  type="password"
                  onChange={handleChange}
                  className="form-control"
                  id="pwd"
                  placeholder="Password"
                />
              </div>
              <div className="form-group">
                <input
                  name="rePassword"
                  type="password"
                  onChange={handleChange}
                  className="form-control"
                  id="repwd"
                  placeholder="Please confim your password"
                />
              </div>
              <div className="form-group">
                <input
                  name="dateOfBirth"
                  type="text"
                  onChange={handleChange}
                  className="form-control"
                  id="dateOfBirth"
                  placeholder="Day/Month/Year"
                  onFocus={e => (e.target.type = "date")}
                />
              </div>

              <div className="row form-group">
                <div className="col-md-6">
                  <select className="form-control" name="gender">
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>
                <div className="col-md-6">
                    <input
                      name="mobile"
                      type="text"
                      onChange={validateMobileInput}
                      value={signupStates.mobile}
                      className="form-control"
                      id="mobile"
                      placeholder="mobile"
                    />
                </div>
              </div>

              <div id="signup">
                <button onClick={signupUser}>Sign Up</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
};

export default Signup;
