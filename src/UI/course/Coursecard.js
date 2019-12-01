import React from 'react';
// need to change the way image is imported
import programming from '../../resource/img/programming-html.jpg';

import './styles/courseCardStyle.scss';

function Coursecard() {
    return (
        <div className= "card">
            <img src = {programming} className = "card-img" alt = "courses" />
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