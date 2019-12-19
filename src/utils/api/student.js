import { get, post } from './axios';

const API_STUDENT_URL = '/students';
const getApiStudentUrlWithId = id => `${API_STUDENT_URL}/${id}`;

export const createStudent = student => {
    return post(API_STUDENT_URL, student).then(res => res.data.data);
};

export const fetchStudents = () => {
  return get(API_STUDENT_URL);
};

export const fetchStudentById = id => {
  const url = getApiStudentUrlWithId(id);
  return get(url)
};
