import React from 'react';

function TutorCard() {
    return (
        <div className="card bg-warning">
            <div className="card-body text-center">
                <h4 className="card-title">Tutor Name</h4>
                <p className="card-text">Specialize</p>
                <p className="card-text">Phone Number</p>
                <p className="card-text">Email Address</p>
            </div>
        </div>
    );
}

export default TutorCard;