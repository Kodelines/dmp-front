import axios from 'axios';

export const TOKEN_KEY = 'jwt';
export const USER_KEY = 'user';

const API_URL = 'https://lily.loca.lt';

axios.interceptors.response.use(
  response => response,
  error => Promise.reject(error),
);

const login = authParams => axios.post(API_URL + '/agent/signin', authParams);

const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
};

const getToken = () =>
  localStorage.getItem(TOKEN_KEY)
    ? JSON.parse(localStorage.getItem(TOKEN_KEY)!!)
    : null;

const isLoggedIn = () => {
  if (localStorage.getItem(TOKEN_KEY)) {
    return true;
  }
  return false;
};

export default {
  login,
  logout,
  getToken,
  isLoggedIn,
};
