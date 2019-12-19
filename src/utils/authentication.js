import jwt from 'jsonwebtoken';
const JWT_KEY = 'jwt';

export const setToken = token => {
    localStorage.setItem(JWT_KEY, token);
}

export const getToken = () => {
    return localStorage.getItem(JWT_KEY);
}

export const deleteToken = () => {
    return localStorage.removeItem(JWT_KEY);
}

export const isAuthenticated = () => {
    const token = getToken();

    if (!token) return false;

    const decodedToken = jwt.decode(token);
    const expirationTime = decodedToken.exp * 1000;
    const isExpired = Date.now() - expirationTime > 0;

    return !isExpired;
}