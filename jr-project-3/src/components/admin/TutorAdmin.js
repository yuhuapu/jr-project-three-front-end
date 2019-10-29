import React from 'react';
import TutorCard from './TutorCard';

function TutorAdmin () {
    return(
        <div className="card-deck">
            <TutorCard />
            <TutorCard />
            <TutorCard />
            <TutorCard />
        </div>
    );
}

export default TutorAdmin;