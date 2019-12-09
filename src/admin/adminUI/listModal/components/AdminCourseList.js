import React, { useState,useEffect } from 'react';
import { fetchCourses } from "../../../../utils/api/course";


import Navigation from '../../../../UI/Navigation';
import Footer from '../../../../UI/Footer';
import CourseForm from './CourseForm';
import DashMenu from '../../DashMenu';
import PageNumber from './PageNumber';
import SwitchAddForm from "../../addModal/SwitchAddForm";
import { ButtonText } from "../../menuButton/ButtonText";

const AdminCourseList = () => {
    const [shouldDisplay, setShouldDisplay] = useState(false);
    const [addFormType, setAddFormType] = useState("");
    const [courses, setCourses] = useState([]);
    const [searchName, setSearchName] = useState("");
  
    useEffect(() => {
        fetchCourses().then(res => setCourses(res.data));
        setSearchName("Course");
    }, []);

    return (
        <div className="row main-container" >
            <div className="col-md-2" />
            <div className="col-md-8" >
                <Navigation />
                <DashMenu
                    menuText={ButtonText.courseText}
                    styleText={ButtonText.styleText[1]}
                    setShouldDisplay={setShouldDisplay}
                    setAddFormType={setAddFormType}
                />
                <CourseForm 
                    courses={courses} 
                    searchName={searchName} 
                />
                <PageNumber />
                <Footer />
            </div>
            <div className="col-md-2" />
            <SwitchAddForm
                shouldDisplay={shouldDisplay}
                onCloseButtonClick={setShouldDisplay}
                addFormType={addFormType}
            />
        </div>
    );
}

export default AdminCourseList;