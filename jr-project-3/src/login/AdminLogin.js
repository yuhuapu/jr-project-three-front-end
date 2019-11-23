import React from "react";
import "./styles/adminLogin.scss";
import { Link } from "react-router-dom";

import loginIcon from "../resource/img/login-icon.png";

const AdminLogin = () => {
    return (
        <div className = "row" >
            <div className = "col-sm-2" />
            <form className="form col-sm-8" >
                <img src={loginIcon} className="form-icon" alt="loginIcon" />
                <h4 className >Admin Login</h4>
                <div className="form-group">
                    <input type="email" className="form-control" id="email" placeholder="Username" />
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" id="pwd" placeholder="Password" />
                </div>
                {/* link to dashboard for developing purpose only */}
                <Link to="/admin/dashboard" >
                    <button type="submit" >Login</button>
                </Link>
            </form>
            <div className = "col-sm-2" />
        </div>
    );
}

export default AdminLogin;