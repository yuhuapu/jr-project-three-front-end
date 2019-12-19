import { get, post } from './axios';

const API_TUTOR_URL = '/tutors';
const getApiTutorsUrlWithName = name => `${API_TUTOR_URL}/${name}`;

export const createTutor = tutor => {
    return post(API_TUTOR_URL, tutor).then(res => res.data.data);
};

export const fetchTutors = () => {
  return get(API_TUTOR_URL);
};

export const fetchTutorsByName = name => {
  const url = getApiTutorsUrlWithName(name);
  console.log('fetch tutors by name');
  return get(url);
};
