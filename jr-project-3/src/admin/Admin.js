import React from 'react';
import Navigation from '../UI/Navigation';
import Footer from '../UI/Footer';
import DashMenu from '../UI/adminUI/DashMenu';

const Admin = (props) => {
        return (
            <div className="row" >
                <div className="col-md-2" />
                <div className="col-md-8" >
                    <Navigation />
                    <DashMenu menuText = {props.menuText.courseText} />
                    <DashMenu menuText = {props.menuText.studentText} />
                    <DashMenu menuText = {props.menuText.tutorText} />
                    <Footer />
                </div>
                <div className="col-md-2" />
            </div>
        );
}

export default Admin;