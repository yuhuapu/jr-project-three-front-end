import React from 'react';
import { Link } from "react-router-dom";


import "../../styles/dashMenu.scss";

import MenuButton from '../../menuButton/MenuButton';

class CourseMenu extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
          menuName: '',
        };
  }

  handleChangeMenu = (menuName) => {
    this.setState({menuName:menuName});
  }
    
    render(){
        return(
            <div className="dash-menu">
                <div className="row">
                    <h5 className="col-md">{this.props.menuText[0]}</h5>
                </div>
                <div className="menu-container">
                    <div className="row">
                        <div className="col-md-4" onClick = {() => this.handleChangeMenu(this.props.menuText[1])}>
                            <Link to= {"/admin/dashboard/" + this.props.menuText[1].toLowerCase().replace(' ','')} >
                                <div className={`menu-button-unactive ${ this.state.menuName === this.props.menuText[1]? 'menu-button' : ''}`}>
                                    <MenuButton
                                        menuText = {this.props.menuText[1]}
                                    />
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-4" >
                            <div className="menu-button-unactive" >
                                <MenuButton 
                                menuText = {this.props.menuText[2]} 
                                />
                            </div>
                        </div>
                        <div className="col-md-4" onClick = {() => this.handleChangeMenu(this.props.menuText[3])}>
                            <Link to= {"/admin/dashboard/" + this.props.menuText[3].toLowerCase().replace(' ','')} >
                                <div className={`menu-button-unactive ${ this.state.menuName === this.props.menuText[3]? 'menu-button' : ''}`}>
                                    <MenuButton
                                        menuText = {this.props.menuText[3]}
                                    />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CourseMenu;