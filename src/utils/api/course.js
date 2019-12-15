import { get, post } from './axios';

const API_COURSE_URL = '/courses';
const getApiCourseUrlWithId = id => `${API_COURSE_URL}/${id}`;

export const createCourse = course => {
    return post(API_COURSE_URL, course).then(res => res.data.data);
};

export const fetchCourses = () => {
  return get(API_COURSE_URL);
};

export const fetchCourseById = id => {
  const url = getApiCourseUrlWithId(id);
  return get(url)
};
