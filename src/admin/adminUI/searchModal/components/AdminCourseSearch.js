import React from 'react';
import Navigation from '../../../../UI/Navigation';
import DashMenu from '../../DashMenu';
import CourseForm from '../../listModal/components/CourseForm';
import PageNumber from '../../listModal/components/PageNumber';
import Footer from '../../../../UI/Footer';
import SearchBar from './SearchBar';

import { ButtonText } from "../../menuButton/ButtonText";

const AdminCourseSearch = () => {
        return (
            <div className="row" >
                <div className="col-md-2" />
                <div className="col-md-8" >
                    <Navigation />
                    <DashMenu 
                        menuText = {ButtonText.courseText} 
                        styleText = {ButtonText.styleText[1]} 
                    />
                    <SearchBar />
                    <CourseForm />
                    <PageNumber />
                    <Footer /> 
                </div>
                <div className="col-md-2" />
            </div>
        );
}

export default AdminCourseSearch;