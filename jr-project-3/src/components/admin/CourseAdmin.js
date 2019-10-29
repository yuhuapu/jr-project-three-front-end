import React from 'react';
import Coursecard from '../Coursecard';

function CourseAdmin() {
    return (
        <div className="card-deck">
            <Coursecard />
            <Coursecard />
            <Coursecard />
            <Coursecard />
        </div>
    );
}

export default CourseAdmin;