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
    const [courseToUpdate, setCourseToUpdate]=useState();

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
                    setCourseToUpdate={setCourseToUpdate}
                />
                <PageNumber />
                <Footer />
            </div>
            <SwitchAddForm
                shouldDisplay={shouldDisplay}
                onCloseButtonClick={setShouldDisplay}
                addFormType={addFormType}
                courseToUpdate={courseToUpdate}
            />
        </div>
    );
}

export default AdminCourseList;