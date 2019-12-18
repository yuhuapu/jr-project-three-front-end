import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from 'react-router'
import zerkAdminLogo from "../../resource/img/zerk-admin-logo.png";
import greetingLogo from "../../resource/img/greeting.png";
import "../../UI/styles/navigationStyle.scss";
import "./styles/adminNav.scss";
import { deleteToken } from '../../utils/authentication';
import { HOME_PAGE_URL } from '../../routes/URLMap';

const logout = history => {
    deleteToken();
    history.push(HOME_PAGE_URL);
}

const AdminNav = ({history}) => {
  return (
    <nav className="navbar navbar-expand-xl|lg|md|sm">
      <Link to="/admin/dashboard">
        <img src={zerkAdminLogo} className="admin-logo" alt="zerk admin logo" />
      </Link>

      <div>
      <img src={greetingLogo} className="greeting-logo" alt="greeting logo" />
      <Link to="/">
        <button onClick={()=>logout(history)} className="nav-button">
          <p>Log out</p>
        </button>
      </Link>
      </div>

    </nav>
  );
};

export default withRouter(AdminNav);
