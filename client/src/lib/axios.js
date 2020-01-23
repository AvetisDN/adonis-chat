import axios from 'axios/index'

import { getHostname } from '../utils/data';

const instance = axios.create({
  baseURL: `${getHostname()}${process.env.REACT_APP_API_URL}`
});

instance.interceptors.response.use((response) => {
  if (response.data) return response.data;
  return response
}, (error) => {
  return Promise.reject(error)
});

export default instance
