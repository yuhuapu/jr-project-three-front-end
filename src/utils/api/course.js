<<<<<<< HEAD
import { get, post, put, del } from './axios';

const API_COURSE_URL = '/courses';

export const createCourse = course => {
    return post(API_COURSE_URL, course).then(res => res.data.data);
};
=======
import axios from "axios";

export const fetchCourses = () => {
  const url = `https://jr-project-three-back-end.herokuapp.com/api/v1/courses`;
  return axios(url);
};

export const fetchCourseById = id => {
  const url = `https://jr-project-three-back-end.herokuapp.com/api/v1/courses/${id}`;
  return axios(url);
};
>>>>>>> master
