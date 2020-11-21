import axios from 'axios';
import authService from './auth.service';

// const API_URL = 'http://localhost:3001/api/v1';
const API_URL = 'http://178.128.161.183:9091/api/v1';

axios.interceptors.request.use(
  config => {
    const JWT = authService.getToken();
    config.headers = { Authorization: `Bearer ${JWT}` };
    return config;
  },
  error => Promise.reject(error),
);

const login = authParams => {
  return axios.post(API_URL + '/agent/signin', authParams);
};

export default {
  login,
};
