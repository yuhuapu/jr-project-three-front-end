import React from 'react';
import Navigation from '../../../../UI/Navigation';
import DashMenu from '../../DashMenu';
import StudentForm from '../../listModal/components/StudentForm';
import PageNumber from '../../listModal/components/PageNumber';
import Footer from '../../../../UI/Footer';
import SearchBar from './SearchBar';


import { ButtonText } from "../../menuButton/ButtonText";

const AdminStudentSearch = () => {
        return (
            <div className="row" >
                <div className="col-md-2" />
                <div className="col-md-8" >
                    <Navigation />
                    <DashMenu 
                        menuText = {ButtonText.studentText} 
                        styleText = {ButtonText.styleText[1]} 
                    />
                    <SearchBar />
                    <StudentForm />
                    <PageNumber />
                    <Footer /> 
                </div>
                <div className="col-md-2" />
            </div>
        );
}

export default AdminStudentSearch;