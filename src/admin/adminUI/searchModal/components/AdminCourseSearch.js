import React, { useState } from 'react';
import Navigation from '../../../../UI/Navigation';
import DashMenu from '../../DashMenu';
import CourseForm from '../../listModal/components/CourseForm';
import PageNumber from '../../listModal/components/PageNumber';
import Footer from '../../../../UI/Footer';
import SearchBar from './SearchBar';
import SwitchAddForm from "../../addModal/SwitchAddForm";
import { ButtonText } from "../../menuButton/ButtonText";

const AdminCourseSearch = () => {
    const [shouldDisplay, setShouldDisplay] = useState(false);
    const [addFormType, setAddFormType] = useState("");

    return (
        <div className="row main-container" >
            <div className="col-md-2" />
            <div className="col-md-8" >
                <Navigation />
                <DashMenu
                    menuText={ButtonText.courseText}
                    styleText={ButtonText.styleText[1]}
                    setShouldDisplay={setShouldDisplay}
                    setAddFormType={setAddFormType}
                />
                <SearchBar />
                <CourseForm />
                <PageNumber />
                <Footer />
            </div>
            <div className="col-md-2" />
            <SwitchAddForm
                shouldDisplay={shouldDisplay}
                onCloseButtonClick={setShouldDisplay}
                addFormType={addFormType}
            />
        </div>
    );
}

export default AdminCourseSearch;