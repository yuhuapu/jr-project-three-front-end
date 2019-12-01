import React from 'react';
import Navigation from '../../../Navigation';
import Footer from '../../../Footer';
import TutorForm from './TutorForm';
import DashMenu from '../../DashMenu';
import PageNumber from './PageNumber';
import { ButtonText } from "../../menuButton/ButtonText";

const AdminTutorList = () => {
        return (
            <div className="row" >
                <div className="col-md-2" />
                <div className="col-md-8" >
                    <Navigation />
                    <DashMenu 
                        menuText = {ButtonText.tutorText} 
                        styleText = {ButtonText.styleText[1]} 
                    />
                    <TutorForm />
                    <PageNumber />
                    <Footer />
                </div>
                <div className="col-md-2" />
            </div>
        );
}

export default AdminTutorList;