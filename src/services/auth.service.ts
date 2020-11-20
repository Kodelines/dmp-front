import axios from 'axios';
import { history } from 'utils/history';

export const TOKEN_KEY = 'jwt';
export const USER_KEY = 'user';

const API_URL = 'http://178.128.161.183:9091/api/v1';

axios.defaults.withCredentials = true;
axios.interceptors.response.use(
  req => req,
  error => Promise.reject(error),
);

const login = authParams => axios.post(API_URL + 'agent/signin/', authParams);

const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
  history.push('/');
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
