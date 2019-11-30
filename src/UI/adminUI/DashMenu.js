import React from 'react';
import { Link } from "react-router-dom";


import "./styles/dashMenu.scss";

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
                        <div className="menu-button-unactive menu-button" >
                        <Link to= {"/admin/dashboard/" + props.menuText[1].toLowerCase().replace(' ','')} >
                            <MenuButton
                                menuText = {props.menuText[1]}
                            />
                        </Link>    
                        </div>
                    </div>

                    <div className="col-md-4" >
                        <div className="menu-button-unactive menu-button" >
                        <Link to= {"/admin/dashboard/" + props.menuText[2].toLowerCase().replace(' ','')} >
                            <MenuButton
                                menuText={props.menuText[2]}
                            />
                        </Link>
                        </div>
                    </div>

                    <div className="col-md-4" >
                        <div className="menu-button-unactive menu-button" >
                            <Link to= {"/admin/dashboard/" + props.menuText[3].toLowerCase().replace(' ','')} >
                                <MenuButton 
                                    menuText = {props.menuText[3]}
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
   
}





export default DashMenu;