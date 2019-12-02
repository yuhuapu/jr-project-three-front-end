import axios from 'axios';

axios.defaults.baseURL = 'https://jr-project-three-back-end.herokuapp.com/api/v1';

export const post = (url, data, config = {}) =>
    axios.post(url, data, config);

