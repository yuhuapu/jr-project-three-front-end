import React from 'react';
import Coursecard from './Coursecard'
import TutorCard from './admin/TutorCard';

function Main() {
    return (
        <main>
            <section>
            <div className="section-container">
                <div className="jumbotron text-center">
                    <h1>Popular Courses</h1>
                    <p>Different types of courses to catch your interest</p>
                </div>

                <div className="card-deck">
                    <Coursecard />
                    <Coursecard />
                    <Coursecard />
                </div>
            </div>
            </section>
            
            <section>
            <div className="section-container">
                <div className="jumbotron text-center">
                    <h1>Professional tutor team</h1>
                    {/* teching or teaching? */}
                    <p>Our tutors have many years of commercial and teching experience</p>
                </div>

                <div className="card-deck">
                    <TutorCard />
                    <TutorCard />
                    <TutorCard />
                    <TutorCard />
                </div>
            </div>
            </section>
        </main>
    );
}

export default Main;