import { get, post, put, del } from './axios';

const API_STUDENT_URL = '/students';
const getApiStudentsUrlWithName = name => `${API_STUDENT_URL}/${name}`;
const getApiStudentUrlWithId = id => `${API_STUDENT_URL}/${id}`;

export const createStudent = course => {
    return post(API_STUDENT_URL, course).then(res => res.data.data);
};

export const fetchStudents = () => {
  return get(API_STUDENT_URL);
};

export const fetchStudentById = id => {
  const url = getApiStudentUrlWithId(id);
  return get(url)
};

export const fetchStudentsByName = name => {
  const url = getApiStudentsUrlWithName(name);
  return get(url)
};

export const updateStudent = (id, student) => {
  const url = getApiStudentUrlWithId(id);
  return put(url, student)
};

export const deleteStudentById = id => {
  const url = getApiStudentUrlWithId(id);
  return del(url);
};
