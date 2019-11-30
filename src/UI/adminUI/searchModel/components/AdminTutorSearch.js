import React from 'react';
import Navigation from '../../../Navigation';
import CourseMenu from '../../listModel/components/CourseMenu';
import TutorForm from '../../listModel/components/TutorForm';
import PageNumber from '../../listModel/components/PageNumber';
import Footer from '../../../Footer';
import SearchBar from './SearchBar';


import { ButtonText } from "../../menuButton/ButtonText";

const AdminTutorSearch = () => {
        return (
            <div className="row" >
                <div className="col-md-2" />
                <div className="col-md-8" >
                    <Navigation />
                    <CourseMenu menuText = {ButtonText.tutorText} />
                    <SearchBar />
                    <TutorForm />
                    <PageNumber />
                    <Footer /> 
                </div>
                <div className="col-md-2" />
            </div>
        );
}

export default AdminTutorSearch;