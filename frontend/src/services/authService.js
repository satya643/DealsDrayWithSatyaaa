//define api routes for call login and register api
import axios from 'axios';

export const login = (Credentials) => {
    return axios.post(`https://${process.env.REACT_APP_BASE_URL}/api/auth/login`, Credentials);
};

export const register = (userData) => {
    return axios.post(`https://${process.env.REACT_APP_BASE_URL}/api/auth/register`, userData)
};
