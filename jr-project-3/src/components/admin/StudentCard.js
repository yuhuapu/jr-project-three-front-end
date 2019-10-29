import React from 'react';

function StudentCard() {
    return (
        <div className="card bg-primary">
            <div className="card-body text-center">
                <h4 className="card-title">Student Name</h4>
                <p className="card-text">Major</p>
                <p className="card-text">Phone Number</p>
                <p className="card-text">Email Address</p>
            </div>
        </div>
    );
}

export default StudentCard;