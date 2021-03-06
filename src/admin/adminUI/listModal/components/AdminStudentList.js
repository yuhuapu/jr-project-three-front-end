import React, { useState, useEffect } from "react";
import {fetchStudents} from "../../../../utils/api/student";

import AdminNav from '../../AdminNav';
import Footer from "../../../../UI/Footer";
import StudentTutorForm from "./StudentTutorForm";
import DashMenu from "../../DashMenu";
import PageNumber from "./PageNumber";
import SwitchAddForm from "../../addModal/SwitchAddForm";
import { ButtonText } from "../../menuButton/ButtonText";

const AdminStudentList = () => {
  const [shouldDisplay, setShouldDisplay] = useState(false);
  const [addFormType, setAddFormType] = useState("");
  const [users, setUsers] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [studentToUpdate, setStudentToUpdate]=useState();

  useEffect(() => {
    fetchStudents().then(res => setUsers(res.data));
    setSearchName("Student");
}, []);

  return (
    <div className="row">
      <div className="col-md-2" />
      <div className="col-md-8">
        <AdminNav />
        <DashMenu
            menuText={ButtonText.studentText}
            styleText={ButtonText.styleText[1]}
            setShouldDisplay={setShouldDisplay}
            setAddFormType={setAddFormType}
        />
        <StudentTutorForm 
            users={users} 
            searchName={searchName}
            setShouldDisplay={setShouldDisplay}
            setAddFormType={setAddFormType}
            setStudentToUpdate={setStudentToUpdate} 
        />
        <PageNumber />
        <Footer />
      </div>
      <div className="col-md-2" />
      <SwitchAddForm
        shouldDisplay={shouldDisplay}
        onCloseButtonClick={setShouldDisplay}
        addFormType={addFormType}
        studentToUpdate={studentToUpdate}
      />
    </div>
  );
};

export default AdminStudentList;
