import { post } from './axios';


export const login = (email, password) => {
    const url = '/auth';
    const data = {
        email,
        password
    };
    return post(url, data).then(response => response.data.token);
};