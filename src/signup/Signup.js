import React, { useState, useEffect } from "react";
import { createStudent } from "../utils/api/student";
import { createTutor } from '../utils/api/tutor';
import signupIcon from "../resource/img/signup.svg";
import "./styles/signup.scss";

const Signup = props => {
  const { setShouldSignupDisplay } = props;

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
    courses: [],
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
      setSignupStates({ ...signupStates, mobile: event.target.value })
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

  const chooseRole = event => {
    event.target.className = "";

    event.target.className = "role-selected";
    if (event.target.id === "Student") {
      document.getElementById("Tutor").className = "role-not-selected";
    } else {
      document.getElementById("Student").className = "role-not-selected";
    }
    setSignupStates({ ...signupStates, role: event.target.id });
    event.preventDefault();
  };

  const signupUser = event => {
    setSignupStates({ ...signupStates, isLoading: true });
    event.preventDefault();
  };

  function signupStudent () {
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
    createStudent(student).then(data => {

      setSignupStates({
        ...signupStates,
        role: "",
        isLoading: false
      });

      setShouldSignupDisplay(false);
    });
  }

  function signupTutor() {
    const tutor = {
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

    createTutor(tutor).then(data => {
      setSignupStates({
        ...signupStates,
        role: "",
        isLoading: false
      });

      setShouldSignupDisplay(false);     
    });
  }

  useEffect(() => {
    if (signupStates.isLoading) {
       if (signupStates.role === "Student") {
         signupStudent();
       } else if (signupStates.role === "Tutor") {
         signupTutor();
       }
    }
  }, [signupStates, props]);

  if (!props.shouldSignupDisplay) {
    return null;
  } else {
    const overlay = signupStates.isLoading ? "overlay" : "";
    const spinner = signupStates.isLoading ? "spinner-border" : "";

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
                  <select onChange={handleChange} className="form-control" name="gender">
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
              <div className="row">
                <div className="col-md-12">
                  <textarea name="note" className="description-box" onChange={handleChange} placeholder="Note" />
                </div>
              </div>
              <div className="options">
                <button
                  id="Student"
                  className="role-not-selected"
                  onClick={chooseRole}
                >
                  I am a student
              </button>
                <button
                  id="Tutor"
                  className="role-not-selected"
                  onClick={chooseRole}
                >
                  I am a tutor
              </button>
              </div>
              <div id="signup">
                <button onClick={signupUser}>Sign Up</button>
              </div>
              <div className="spinner-location">
                <div className={spinner}></div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
};

export default Signup;
