import { get, post, put, del } from './axios';

const API_COURSE_URL = '/courses';

export const createCourse = course => {
    return post(API_COURSE_URL, course).then(res => res.data.data);
};