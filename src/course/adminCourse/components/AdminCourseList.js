import React from 'react';
import Navigation from '../../../UI/Navigation';
import Footer from '../../../UI/Footer';
import CourseForm from './CourseForm';
import CourseMenu from './CourseMenu';
import PageNumber from './PageNumber';
import { ButtonText } from "../../../UI/adminUI/menuButton/ButtonText";

import '../../styles/courseCardStyle.scss';

const AdminCourseList = () => {
        return (
            <div className="row" >
                <div className="col-md-2" />
                <div className="col-md-8" >
                    <Navigation />
                    <CourseMenu menuText = {ButtonText.courseText} />
                    <CourseForm />
                    <PageNumber />
                    <Footer />
                </div>
                <div className="col-md-2" />
            </div>
        );
}

export default AdminCourseList;