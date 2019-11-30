import React from 'react';
import Navigation from '../../../Navigation';
import CourseMenu from '../../listModel/components/CourseMenu';
import CourseForm from '../../listModel/components/CourseForm';
import PageNumber from '../../listModel/components/PageNumber';
import Footer from '../../../Footer';
import SearchBar from './SearchBar';




import { ButtonText } from "../../menuButton/ButtonText";

const AdminCourseSearch = () => {
        return (
            <div className="row" >
                <div className="col-md-2" />
                <div className="col-md-8" >
                    <Navigation />
                    <CourseMenu menuText = {ButtonText.courseText} />
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