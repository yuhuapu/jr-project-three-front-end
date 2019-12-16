import React from 'react';

import AddCourse from './AddCourse';
import AddStudent from './AddStudent';
import AddTutor from './AddTutor';
import AddTutorList from './AddTutorList';
import AddStudentList from './AddStudentList';

const SwitchAddForm = props => {
    const shouldDisplay = props.shouldDisplay;

    if (!shouldDisplay) return null;

    switch (props.addFormType) {
        case "Add Course":
            return <AddCourse
                onCloseButtonClick={props.onCloseButtonClick}
                adminRestProps={props.adminRestProps}
            />;

        case "Add Student":
            return <AddStudent
                onCloseButtonClick={props.onCloseButtonClick}
                adminRestProps={props.adminRestProps}
            />;

        case "Add Tutor":
            return <AddTutor
                onCloseButtonClick={props.onCloseButtonClick}
                adminRestProps={props.adminRestProps}
            />;

        case "Tutor List":
            return <AddTutorList
                onCloseButtonClick={props.onCloseButtonClick}
                handleTutorIDs={props.handleTutorIDs}
                tutorNames={props.tutorNames}
                setTutorNames={props.setTutorNames}
                setTutorNumber={props.setTutorNumber}
            />;

        case "Student List":
            return <AddStudentList
                onCloseButtonClick={props.onCloseButtonClick}
                handleStudentIDs={props.handleStudentIDs}
                studentNames={props.studentNames}
                setStudentNames={props.setStudentNames}
                setStudentNumber={props.setStudentNumber}
            />
        default:
            break;
    }
}

export default SwitchAddForm;
