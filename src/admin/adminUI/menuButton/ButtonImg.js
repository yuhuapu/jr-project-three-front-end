import CourseList from "../../../resource/img/course-list.svg";
import AddCourse from '../../../resource/img/add-course.svg';
import Studentlist from '../../../resource/img/student-list.svg';
import AddStudent from '../../../resource/img/add-student.svg';
import TutorList from '../../../resource/img/tutor-list.svg';
import AddTutor from '../../../resource/img/add-tutor.svg';
import Search from '../../../resource/img/search.svg';

function ButtonImg(props) {

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

        case "Tutor Search":
            return Search;
        
        case "Student Search":
            return Search;
        
        case "Course Search":
            return Search;
        default:
            break;
    }
}

export default ButtonImg;