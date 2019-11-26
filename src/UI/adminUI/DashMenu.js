import React from 'react';
import { Link } from "react-router-dom";

import "../styles/dashMenu.scss";

import MenuButton from './menuButton/MenuButton';

function DashMenu(props) {
    return (
        <div className="dash-menu">
            <div className="row">
                <h5 className="col-md">{props.menuText[0]}</h5>
            </div>

            <div className="menu-container">
                <div className="row">
                    <div className="col-md-4" >
<<<<<<< HEAD
                        <div className="menu-button" >
                            <MenuButton
                                menuText = {props.menuText[1]}
                            />
                        </div>
=======
                        <Link>
                            <MenuButton
                                menuText={props.menuText[1]}
                            />
                        </Link>
>>>>>>> add course form structure completed
                    </div>

                    <div className="col-md-4" >
<<<<<<< HEAD
<<<<<<< HEAD
                        <div className="menu-button" >
                            <MenuButton 
                            menuText = {props.menuText[2]} 
                            />
                        </div>
=======
                        <Link to="/admin/dashboard/addcourse">
=======
                        <Link to= {"/admin/dashboard/" + props.menuText[2].toLowerCase().replace(' ','')} >
>>>>>>> Add forms completed with minor differences to the design, pop up not completed, need to be improved
                            <MenuButton
                                menuText={props.menuText[2]}
                            />
                        </Link>
>>>>>>> add course form structure completed
                    </div>

                    <div className="col-md-4" >
<<<<<<< HEAD
                        <div className="menu-button" >
                            <MenuButton 
                                menuText = {props.menuText[3]}
                            />
                        </div>
=======
                        <Link>
                            <MenuButton
                                menuText={props.menuText[3]}
                            />
                        </Link>
>>>>>>> add course form structure completed
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashMenu;