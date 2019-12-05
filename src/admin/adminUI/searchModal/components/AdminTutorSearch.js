import React, { useState,useEffect } from 'react';
import {getInfo} from '../../../../utils/axios.js';

import Navigation from '../../../../UI/Navigation';
import DashMenu from '../../DashMenu';
import StudentTutorForm from '../../listModal/components/StudentTutorForm';
import PageNumber from '../../listModal/components/PageNumber';
import Footer from '../../../../UI/Footer';
import SearchBar from './SearchBar';
import { ButtonText } from "../../menuButton/ButtonText";
import SwitchAddForm from "../../addModal/SwitchAddForm";

const AdminTutorSearch = () => {
    const [shouldDisplay, setShouldDisplay] = useState(false);
    const [addFormType, setAddFormType] = useState("");
    const [students, setStudents] = useState([]);
    const [input, setInput]=useState([]);
    const [shouldSearch, setShouldSearch] = useState(false);
    const [searchField,setSearchField] = useState("");
    const [searchName,setSearchName] = useState("");



	useEffect(()=> {
		getInfo('tutors')
            .then(res => setStudents(res.data));
            setSearchField("tutors");
            setSearchName("Tutor");

    },[]);

    return (
        <div className="row" >
            <div className="col-md-2" />
            <div className="col-md-8" >
                <Navigation />
                <DashMenu
                    menuText={ButtonText.tutorText}
                    styleText={ButtonText.styleText[1]}
                    setShouldDisplay={setShouldDisplay}
                    setAddFormType={setAddFormType}
                />
               <SearchBar
                   setInput={setInput}
                   input={input}
                   handleSearch={setStudents}
                   shouldSearch = {shouldSearch}
                   setShouldSearch = {setShouldSearch}
                   setStudents = {setStudents}    
                   searchField = {searchField}     
                />
                <StudentTutorForm 
                    students={students}
                    shouldSearch = {shouldSearch}
                    searchName = {searchName}

                />                
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

export default AdminTutorSearch;