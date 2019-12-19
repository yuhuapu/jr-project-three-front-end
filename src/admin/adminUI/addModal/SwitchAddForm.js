import React from 'react';

import AddCourse from './AddCourse';
import AddStudent from './AddStudent';
import AddTutor from './AddTutor';
import AddTutorList from './AddTutorList';
import AddStudentList from './AddStudentList';
import AddCourseList from './AddCourseList';
import EditCourse from '../editModal/EditCourse';
import EditStudent from '../editModal/EditStudent';
import EditTutor from '../editModal/EditTutor';

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
                addedTutors={props.addedTutors}
                setAddedTutors={props.setAddedTutors}
                setTutorNumber={props.setTutorNumber}
            />;

        case "Student List":
            return <AddStudentList
                onCloseButtonClick={props.onCloseButtonClick}
                handleStudentIDs={props.handleStudentIDs}
                addedStudents={props.addedStudents}
                setAddedStudents={props.setAddedStudents}
                setStudentNumber={props.setStudentNumber}
            />

        case "Course List":
            return <AddCourseList
                onCloseButtonClick={props.onCloseButtonClick}
                handleCourseIDs={props.handleCourseIDs}
                addedCourses={props.addedCourses}
                setAddedCourses={props.setAddedCourses}
                setCourseNumber={props.setCourseNumber}
            />

        case "Edit Course":
            return <EditCourse
                onCloseButtonClick={props.onCloseButtonClick}
                courseToUpdate={props.courseToUpdate}
            />

        case "Edit Student":
            return <EditStudent
                onCloseButtonClick={props.onCloseButtonClick}
                studentToUpdate={props.studentToUpdate}
            />

        case "Edit Tutor":
            return <EditTutor
                onCloseButtonClick={props.onCloseButtonClick}
                tutorToUpdate={props.tutorToUpdate}
            />
        default:
            break;
    }
}

export default SwitchAddForm;
