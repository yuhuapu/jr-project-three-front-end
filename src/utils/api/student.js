import axios from 'axios';

export const fetchStudents = () => {
    const url = `https://jr-project-three-back-end.herokuapp.com/api/v1/students`;
    return axios(url);
};

export const fetchStudentById = id => {
    const url = `https://jr-project-three-back-end.herokuapp.com/api/v1/students/${id}`;
    return axios(url);
};