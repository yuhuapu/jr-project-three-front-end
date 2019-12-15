import axios from 'axios';
import { getToken } from '../authentication';

<<<<<<< HEAD
axios.defaults.baseURL = 'http://localhost:4000/api/v1';
=======
axios.defaults.baseURL = 'https://jr-project-three-back-end.herokuapp.com/api/v1';
>>>>>>> master

const appendAuthToken = config => {
    const jwtToken = getToken();
    const Authorization = jwtToken && `Bearer ${jwtToken}`;
<<<<<<< HEAD
    return { ...config, headers: { Authorization, ...config.headers } };
}

export const get = (url, config = {}) => axios.get(url, appendAuthToken(config));

export const post = (url, data, config = {}) => axios.post(url, data, appendAuthToken(config));

export const put = (url, data, config = {}) => axios.put(url, data, appendAuthToken(config));

export const del = (url, config = {}) => axios.delete(url, appendAuthToken(config));
=======
    return {...config, headers: { Authorization, ...config.header}};
};

export const get = (url, config = {}) =>
    axios.get(url, appendAuthToken(config));

export const post = (url, data, config = {}) =>
    axios.post(url, data, appendAuthToken(config));

export const put = (url, data, config = {}) =>
    axios.put(url, data, appendAuthToken);

export const del = (url, config = {}) =>
    axios.delete(url, appendAuthToken(config));
>>>>>>> master
