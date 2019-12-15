import React, { useState } from 'react';
import AdminNav from './adminUI/AdminNav';
import Footer from '../UI/Footer';
import DashMenu from './adminUI/DashMenu';
import { ButtonText } from "./adminUI/menuButton/ButtonText"

import SwitchAddForm from "./adminUI/addModal/SwitchAddForm";

const Admin = props => {
    const [shouldDisplay, setShouldDisplay] = useState(false);
    const [addFormType, setAddFormType] = useState('');
    const [adminRestProps] = useState(props);
    return (
        <div className="row" >
            <div className="col-md-2" />
            <div className="col-md-8 main-container" >
                <AdminNav />
                <DashMenu
                    menuText={ButtonText.courseText}
                    styleText={ButtonText.styleText[0]}
                    setShouldDisplay={setShouldDisplay}
                    setAddFormType={setAddFormType}
                />
                <DashMenu
                    menuText={ButtonText.studentText}
                    styleText={ButtonText.styleText[0]}
                    setShouldDisplay={setShouldDisplay}
                    setAddFormType={setAddFormType}
                />
                <DashMenu
                    menuText={ButtonText.tutorText}
                    styleText={ButtonText.styleText[0]}
                    setShouldDisplay={setShouldDisplay}
                    setAddFormType={setAddFormType}
                />
                <Footer />
            </div>
            <SwitchAddForm
                shouldDisplay={shouldDisplay}
                onCloseButtonClick={setShouldDisplay}
                addFormType={addFormType}
                adminRestProps={adminRestProps}
            />
        </div>
    );
}

export default Admin;