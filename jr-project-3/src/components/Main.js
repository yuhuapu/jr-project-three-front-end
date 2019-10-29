import React from 'react';
import Coursecard from './Coursecard'

function Main() {
    return (
        <main>
            <div className="container">
                <div className="jumbotron text-center">
                    <h1>Online Learning Management System</h1>
                </div>

                <div className="card-deck">
                    <Coursecard />
                    <Coursecard />
                    <Coursecard />
                    <Coursecard />
                </div>
            </div>
        </main>
    );
}

export default Main;