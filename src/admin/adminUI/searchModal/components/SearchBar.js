import React from "react";

import { fetchTutorById } from "../../../../utils/api/tutor";
import { fetchStudentById } from "../../../../utils/api/student";
import { fetchCourseById } from "../../../../utils/api/course";

import "../styles/searchModel.scss";
import Search from "../../../../resource/img/search.svg";

function SearchBar(props) {
  return (
    <form className="search-container">
      <div className="col-8 hint">Key Word:</div>
      <div className="row">
        <input
          name="search"
          type="text"
          className="col-11 search-bar"
          value={props.input}
          onChange={event => props.setInput(event.target.value)}
        />
        <div
          onClick={() => {
            if (props.searchName === "Student") {
              fetchStudentById(`${props.input}`).then(res =>
                props.setUsers(res.data)
              );
            } else if (props.searchName === "Tutor") {
              fetchTutorById(`${props.input}`).then(res =>
                props.setUsers(res.data)
              );
            } else if (props.searchName === "Course") {
              fetchCourseById(`${props.input}`).then(res =>
                props.setCourses(res.data)
              );
            }
            props.setShouldSearch(true);
          }}
        >
          <img src={Search} className="search-icon" alt="search-icon" />
        </div>
      </div>
    </form>
  );
}

export default SearchBar;
