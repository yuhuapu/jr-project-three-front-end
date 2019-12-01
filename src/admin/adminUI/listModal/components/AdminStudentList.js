import React from 'react';
import Navigation from '../../../../UI/Navigation';
import Footer from '../../../../UI/Footer';
import StudentForm from './StudentForm';
import DashMenu from '../../DashMenu';
import PageNumber from './PageNumber';
import { ButtonText } from "../../menuButton/ButtonText";

const AdminStudentList = () => {
        return (
            <div className="row" >
                <div className="col-md-2" />
                <div className="col-md-8" >
                    <Navigation />
                    <DashMenu 
                        menuText = {ButtonText.studentText} 
                        styleText = {ButtonText.styleText[1]} 
                    />
                    <StudentForm />
                    <PageNumber />
                    <Footer />
                </div>
                <div className="col-md-2" />
            </div>
        );
}

export default AdminStudentList;