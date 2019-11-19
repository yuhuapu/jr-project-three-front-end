import React from "react";
import "./styles/adminLogin.scss";

import loginIcon from "../resource/img/login-icon.png";

const AdminLogin = () => {
    return (
        <form className="form" >
            <img src={loginIcon} className="form-icon" alt="loginIcon" />
            <h4 className >Admin Login</h4>
            <div className="form-group">
                <input type="email" className="form-control" id="email" placeholder="Username" />
            </div>
            <div className="form-group">
                <input type="password" className="form-control" id="pwd" placeholder="Password" />
            </div>
            <button type="submit" >Login</button>
        </form>
    );
}

export default AdminLogin;