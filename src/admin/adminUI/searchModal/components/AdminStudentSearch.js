import React, { useState, useEffect } from "react";
import { fetchStudents } from "../../../../utils/api/student";

import AdminNav from "../../AdminNav";
import DashMenu from "../../DashMenu";
import StudentTutorForm from "../../listModal/components/StudentTutorForm";
import PageNumber from "../../listModal/components/PageNumber";
import Footer from "../../../../UI/Footer";
import SearchBar from "./SearchBar";
import SwitchAddForm from "../../addModal/SwitchAddForm";
import { ButtonText } from "../../menuButton/ButtonText";

const AdminStudentSearch = () => {
  const [shouldDisplay, setShouldDisplay] = useState(false);
  const [addFormType, setAddFormType] = useState("");
  const [users, setUsers] = useState([]);
  const [input, setInput] = useState([]);
  const [shouldSearch, setShouldSearch] = useState(false);
  const [searchName, setSearchName] = useState("");

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
        <SearchBar
          setInput={setInput}
          input={input}
          shouldSearch={shouldSearch}
          setShouldSearch={setShouldSearch}
          setUsers={setUsers}
          searchName={searchName}
        />
        <StudentTutorForm
          users={users}
          shouldSearch={shouldSearch}
          searchName={searchName}
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
};

export default AdminStudentSearch;
