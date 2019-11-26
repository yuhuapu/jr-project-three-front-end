import React from 'react';

import "../../styles/dashMenu.scss";

import MenuButton from '../../../adminUI/menuButton/MenuButton';

function CourseMenu(props) {
    return (
        <div className="dash-menu">
            <div className="row">
                <h5 className="col-md">{props.menuText[0]}</h5>
            </div>
            <div className="menu-container">
                <div className="row">
                    <div className="col-md-4" >
                        <div className="menu-button" >
                            <MenuButton
                                menuText = {props.menuText[1]}
                            />
                        </div>
                    </div>
                    <div className="col-md-4" >
                        <div className="menu-button-unactive" >
                            <MenuButton 
                            menuText = {props.menuText[2]} 
                            />
                        </div>
                    </div>
                    <div className="col-md-4" >
                        <div className="menu-button-unactive" >
                            <MenuButton 
                                menuText = {props.menuText[3]}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CourseMenu;