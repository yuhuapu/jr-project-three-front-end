import React, { useState, useEffect } from 'react';
import { fetchCourses } from "../../../../utils/api/course";

import AdminNav from '../../AdminNav';
import Footer from '../../../../UI/Footer';
import CourseForm from './CourseForm';
import DashMenu from '../../DashMenu';
import PageNumber from './PageNumber';
import SwitchAddForm from "../../addModal/SwitchAddForm";
import { ButtonText } from "../../menuButton/ButtonText";

const AdminCourseList = props => {
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
                <AdminNav />
                <DashMenu
                    menuText={ButtonText.courseText}
                    styleText={ButtonText.styleText[1]}
                    setShouldDisplay={setShouldDisplay}
                    setAddFormType={setAddFormType}
                />
                <CourseForm
                    courses={courses}
                    searchName={searchName}
                    setShouldDisplay={setShouldDisplay}
                    setAddFormType={setAddFormType}
                />
                <PageNumber />
                <Footer />
            </div>
            <SwitchAddForm
                shouldDisplay={shouldDisplay}
                onCloseButtonClick={setShouldDisplay}
                addFormType={addFormType}
            />
        </div>
    );
}

export default AdminCourseList;