import React from 'react';

import AddCourse from './AddCourse';
import AddStudent from './AddStudent';
import AddTutor from './AddTutor';
import AddTutorList from './AddTutorList';
import AddStudentList from './AddStudentList';
import AddCourseList from './AddCourseList';
import EditCourse from '../editModal/EditCourse';

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

        case "Course List":
            return <AddCourseList 
            onCloseButtonClick={props.onCloseButtonClick}
            handleCourseIDs={props.handleCourseIDs}
            courseNames={props.courseNames}
            setCourseNames={props.setCourseNames}
            setCourseNumber={props.setCourseNumber}
            />

        case "Edit Course":
            return <EditCourse 
            onCloseButtonClick={props.onCloseButtonClick}
            />
        default:
            break;
    }
}

export default SwitchAddForm;
