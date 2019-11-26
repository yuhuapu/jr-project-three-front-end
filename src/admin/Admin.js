import React from 'react';
import Navigation from '../UI/Navigation';
import Footer from '../UI/Footer';
import DashMenu from '../UI/adminUI/DashMenu';
import { ButtonText } from "../UI/adminUI/menuButton/ButtonText"

<<<<<<< HEAD

const Admin = () => {
=======
class Admin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowed: false
        }
    }

    render() {
>>>>>>> Add forms completed with minor differences to the design, pop up not completed, need to be improved
        return (
            <div>
                <div className="row" >
                    <div className="col-md-2" />
                    <div className="col-md-8" >
                        <Navigation />
                        <DashMenu 
                            menuText={ButtonText.courseText}
                        />
                        <DashMenu 
                            menuText={ButtonText.studentText}
                        />
                        <DashMenu 
                            menuText={ButtonText.tutorText}
                        />
                        <Footer />
                    </div>
                    <div className="col-md-2" />
                </div>
            </div>
        );
    }
}

export default Admin;