import React from 'react';

import AddCourse from './AddCourse';
import AddStudent from './AddStudent';
import AddTutor from './AddTutor';
// import TutorList from './TutorList';

const SwitchAddForm = props => {
    const shouldDisplay = props.shouldDisplay;
    const courseStates = props.courseStates;
    const handleCourseInput = props.handleCourseInput;
    const handleCreate = props.handleCreate;
    
    if (!shouldDisplay) return null;
    
    switch (props.addFormType) {
        case "Add Course":
            return <AddCourse 
                onCloseButtonClick = {props.onCloseButtonClick}
                courseStates = {courseStates}
                handleCourseInput = {handleCourseInput}
                handleCreate = {handleCreate}
            />;

        case "Add Student":
            return <AddStudent onCloseButtonClick = {props.onCloseButtonClick}/>;

        case "Add Tutor":
            return <AddTutor onCloseButtonClick = {props.onCloseButtonClick}/>;

        // case "Tutor List":
        //     return <TutorList onCloseButtonClick = {props.onCloseButtonClick} />;
        default:
            break;
    }
}

export default SwitchAddForm;
