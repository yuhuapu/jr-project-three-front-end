import CourseList from "../../../resource/img/course-list.png";
import AddCourse from '../../../resource/img/add-course.png';
import Studentlist from '../../../resource/img/student-list.png';
import AddStudent from '../../../resource/img/add-student.png';
import TutorList from '../../../resource/img/tutor-list.png';
import AddTutor from '../../../resource/img/add-tutor.png';
import Search from '../../../resource/img/search.png';

const changeImg = (props) => {
    // const courseList = CourseList;
    // const addCourse = AddCourse;
    // const studentList = Studentlist;
    // const addStduent = AddStudent;
    // const tutorList = TutorList;
    // const addTutor = AddTutor;
    // const search = Search;

    switch (props) {
        case "Course List":
            return CourseList;

        case "Add Course":
            return AddCourse;

        case "Student List":
            return Studentlist;

        case "Add Student":
            return AddStudent;

        case "Tutor List":
            return TutorList;

        case "Add Tutor":
            return AddTutor;

        case "Search":
            return Search;

        default:
            break;
    }
}

export default changeImg;