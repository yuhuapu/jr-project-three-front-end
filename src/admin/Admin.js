import React, { useState } from 'react';
import Navigation from '../UI/Navigation';
import Footer from '../UI/Footer';
import DashMenu from './adminUI/DashMenu';
import { ButtonText } from "./adminUI/menuButton/ButtonText"
import { createCourse } from '../utils/api/course';

import SwitchAddForm from "./adminUI/addModal/SwitchAddForm";

const Admin = props => {
    const [shouldDisplay, setShouldDisplay] = useState(false);
    const [addFormType, setAddFormType] = useState('');
    const [courseStates, setCourseStates] = useState({
       code: '',
       courseName: '',
       starDate: '',
       endDate: '',
       description: '',
       studentId: [],
       tutorId: [], 
    });

    const handleCourseInput = event => {
        const key = event.target.name;
        const value = event.target.value;
        setCourseStates({...courseStates, [key]: value});
    };

    const handleCreate = event => {
        event.preventDefault();
        const course = {...courseStates};
        createCourse(course).then(() => {
            props.history.push('/admin/dashboard/courselist');
        });
    };

    

    return (
        <div className="row" >
            <div className="col-md-2" />
            <div className="col-md-8 main-container" >
                <Navigation />
                <DashMenu
                    menuText={ButtonText.courseText}
                    styleText={ButtonText.styleText[0]}
                    setShouldDisplay={setShouldDisplay}
                    setAddFormType={setAddFormType}
                />
                <DashMenu
                    menuText={ButtonText.studentText}
                    styleText={ButtonText.styleText[0]}
                    setShouldDisplay={setShouldDisplay}
                    setAddFormType={setAddFormType}
                />
                <DashMenu
                    menuText={ButtonText.tutorText}
                    styleText={ButtonText.styleText[0]}
                    setShouldDisplay={setShouldDisplay}
                    setAddFormType={setAddFormType}
                />
                <Footer />
            </div>
            <SwitchAddForm
                shouldDisplay={shouldDisplay}
                onCloseButtonClick={setShouldDisplay}
                addFormType={addFormType}
                courseStates={courseStates}
                handleCourseInput={handleCourseInput}
                handleCreate = {handleCreate}
            />
        </div>
    );
}

export default Admin;