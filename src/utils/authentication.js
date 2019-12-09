import jwt from 'jsonwebtoken';

const JWT_TOKEN_NAME = "jwt_token_jr_lms";

export const getToken = () => localStorage.getItem(JWT_TOKEN_NAME);

export const setToken = token => localStorage.setItem(JWT_TOKEN_NAME, token);

export const removeToken = () => localStorage.removeItem(JWT_TOKEN_NAME);

export const isLoggedIn = () => {
    const token = getToken();

    if (!token) return false;

    const decodedToken = jwt.decode(token);
    const expirationTime = decodedToken.exp * 1000;
    const isExpired = Date.now() - expirationTime > 0;

    return !isExpired;
}