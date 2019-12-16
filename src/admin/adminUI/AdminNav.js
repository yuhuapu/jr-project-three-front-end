import React from 'react';
import { Link } from "react-router-dom";
import zerkAdminLogo from "../../resource/img/zerk-admin-logo.png";
import greetingLogo from "../../resource/img/greeting.png";
import "./styles/adminNav.scss";

const AdminNav = () => {
    return (
        <nav className="navbar navbar-expand-xl|lg|md|sm">
            <Link to="/admin/dashboard">
                <img src = {zerkAdminLogo} className = "admin-logo" alt = "zerk admin logo" />
            </Link>

            <img src = {greetingLogo} className = "greeting-logo" alt = "greeting logo"/>

        </nav>
    );
}

export default AdminNav;