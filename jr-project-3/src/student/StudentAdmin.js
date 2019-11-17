import React from 'react';
import StudentCard from './StudentCard';

function StudentsAdmin () {
    return(
        <div className="card-deck">
            <StudentCard />
            <StudentCard />
            <StudentCard />
            <StudentCard />
        </div>
    );
}

export default StudentsAdmin;