import React from 'react';

function Coursecard() {
    return (
        <div className="card bg-info">
            <div className="card-body text-center">
                <h4 className="card-title">Course Name</h4>
                <p className="card-text">Introduction</p>
                <p className="card-text">Content</p>
                <p className="card-text">Tutors</p>
            </div>
        </div>
    );
}

export default Coursecard;