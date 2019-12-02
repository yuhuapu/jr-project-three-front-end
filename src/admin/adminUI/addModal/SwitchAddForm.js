import React from 'react';

import AddCourse from './AddCourse';
import AddStudent from './AddStudent';
import AddTutor from './AddTutor';

const SwitchAddForm = props => {
    const shouldDisplay = props.shouldDisplay;
    
    if (!shouldDisplay) return null;
    
    switch (props.addFormType) {
        case "Add Course":
            return <AddCourse onCloseButtonClick = {props.onCloseButtonClick} />;

        case "Add Student":
            return <AddStudent onCloseButtonClick = {props.onCloseButtonClick}/>;

        case "Add Tutor":
            return <AddTutor onCloseButtonClick = {props.onCloseButtonClick}/>;

        default:
            break;
    }
}

export default SwitchAddForm;
