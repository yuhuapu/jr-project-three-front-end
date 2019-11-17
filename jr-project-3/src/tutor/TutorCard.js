import React from 'react';
// Need to change the way picture of tutor is included in the card
import tutorImg from "../resource/img/tutor.jpg";

function TutorCard() {
    return (
        <div className="card">
            <img src = {tutorImg} className = "card-img" alt = "tutor" />
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