import axios from 'axios';

export const fetchTutors = () => {
    const url = `https://jr-project-three-back-end.herokuapp.com/api/v1/tutors`;
    return axios(url);
};

export const fetchTutorById = id => {
    const url = `https://jr-project-three-back-end.herokuapp.com/api/v1/tutors/${id}`;
    return axios(url);
};