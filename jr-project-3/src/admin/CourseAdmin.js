import React from 'react';
import Coursecard from '../course/Coursecard';

function CourseAdmin() {
    return (
        <div className="card-deck">
            <Coursecard />
            <Coursecard />
            <Coursecard />
        </div>
    );
}

export default CourseAdmin;