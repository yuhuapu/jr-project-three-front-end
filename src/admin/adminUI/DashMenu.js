import React from 'react';
import { NavLink } from "react-router-dom";


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

                        <div className="menu-button" >
                            <NavLink to={"/admin/dashboard/" + props.menuText[1].toLowerCase().replace(' ', '')}
                                className={props.styleText} activeClassName="chosen">

                                <MenuButton
                                    menuText={props.menuText[1]}
                                />
                            </NavLink>
                        </div>

                    </div>

                    <div className="col-md-4" >
                        <div className="menu-button" >
                            <div
                                onClick={() => {
                                    props.setShouldDisplay(true);
                                    props.setAddFormType(props.menuText[2])
                                }}
                                className={props.styleText}>
                                <MenuButton
                                    menuText={props.menuText[2]}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4" >
                        <div className="menu-button" >
                            <NavLink to={"/admin/dashboard/" + props.menuText[3].toLowerCase().replace(' ', '')}
                                className={props.styleText} activeClassName="chosen">
                                <MenuButton
                                    menuText={props.menuText[3]}
                                />
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}





export default DashMenu;