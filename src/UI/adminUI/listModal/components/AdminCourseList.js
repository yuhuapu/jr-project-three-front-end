import React from 'react';
import Navigation from '../../../Navigation';
import Footer from '../../../Footer';
import CourseForm from './CourseForm';
import DashMenu from '../../DashMenu';
import PageNumber from './PageNumber';
import { ButtonText } from "../../menuButton/ButtonText";

const AdminCourseList = () => {
        return (
            <div className="row" >
                <div className="col-md-2" />
                <div className="col-md-8" >
                    <Navigation />
                    <DashMenu 
                        menuText = {ButtonText.courseText} 
                        styleText = {ButtonText.styleText[1]} 
                    />
                    <CourseForm />
                    <PageNumber />
                    <Footer />
                </div>
                <div className="col-md-2" />
            </div>
        );
}

export default AdminCourseList;