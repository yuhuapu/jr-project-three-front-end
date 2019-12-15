import React from 'react';
import './styles/login.scss';
import loginIcon from "../resource/img/login-icon.png";

const Login = props => {
    if (!props.shouldLoginDisplay) {
        return null;
    } else {
        return (
            <div className="login-modal">
                <div className="login-container">
                    <div className="row">
                    <div className = "col-sm-2" />
                    <form className="col-sm-8" >
                        <img src={loginIcon} className="form-icon" alt="loginIcon" />
                        <h4>Login</h4>
                    </form>
                    </div>
                </div>
            </div>
            /*
            <form className="container">
                <div className="form-group">
                    <label for="email">Email Address:</label>
                    <input type="email" className="form-control" id="email" />
                </div>
                <div className="form-group">
                    <label for="pwd">Password:</label>
                    <input type="passward" className="form-control" id="pwd" />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
            */
        );
    }


}

export default Login;