import React from 'react';

import AddCourse from './AddCourse';
import AddStudent from './AddStudent';
import AddTutor from './AddTutor';

const SwitchAddForm = props => {
    switch (props) {
        case "Add Course":
            return <AddCourse />;

        case "Add Student":
            return <AddStudent />;

        case "Add Tutor":
            return <AddTutor />;

        default:
            break;
    }
}

export default SwitchAddForm;
