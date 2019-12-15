import React from "react";

import { fetchTutorById } from "../../../../utils/api/tutor";
import { fetchStudentById } from "../../../../utils/api/student";
import { fetchCourseById } from "../../../../utils/api/course";

import "../styles/searchModel.scss";
import Search from "../../../../resource/img/search.svg";

function SearchBar(props) {
  const { input,searchName } = props;
  const { setUsers,setCourses,setInput,setShouldSearch } = props;

  return (
    <form className="search-container">
      <div className="col-8 hint">Key Word:</div>
      <div className="row">
        <input
          name="search"
          type="text"
          className="col-11 search-bar"
          value={input}
          onChange={event => setInput(event.target.value)}
        />
        <div
          onClick={() => {
            if (searchName === "Student") {
              fetchStudentById(`${input}`).then(res =>
                setUsers(res.data)
              );
            } else if (searchName === "Tutor") {
              fetchTutorById(`${input}`).then(res =>
                setUsers(res.data)
              );
            } else if (searchName === "Course") {
              fetchCourseById(`${input}`).then(res =>
                setCourses(res.data)
              );
            }
            setShouldSearch(true);

          }}
        >
          <img src={Search} className="search-icon" alt="search-icon" />
        </div>
      </div>
    </form>
  );
}

export default SearchBar;
