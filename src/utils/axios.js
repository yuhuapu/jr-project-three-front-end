import axios from 'axios';

export const getInfo = field=> {
    const url = `https://jr-project-three-back-end.herokuapp.com/api/v1/${field}`;
    return axios(url);
};