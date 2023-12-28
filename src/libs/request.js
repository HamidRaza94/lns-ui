import axios from 'axios';

import config from '../config';
import { API_METHOD, ENDPOINTS } from '../libs/extra/constants';
import { getAccessToken, removeAccessToken } from '../libs/utils/helpers';

const { lnsServiceUrl } = config;

let axiosInstance;

const initializeAxios = () => {
  axiosInstance = axios.create({
    baseURL: lnsServiceUrl,
  });
};

const request = async (method, endpoint, { data = {}, params = {}, secure = false } = {}) => {
  try {
    const options = {};

    if (secure) {
      options.headers = { Authorization: `Bearer ${getAccessToken()}` }
    }

    const response = await axiosInstance({
      method,
      url: endpoint,
      params,
      data,
      ...options,
    });

    if (response?.data?.data) {
      return response.data.data;
    }

    if (response?.data) {
      return response.data;
    }

    return response;
  } catch (err) {
    if (err.response) {
      if (err.response.data && (err.response.data.error === '301' || err.response.data.error === '302')) {
        removeAccessToken();
        window.location.reload();
      }

      throw err.response.data
    }
    
    if (err.request) {
      throw err.request;
    }

    throw new Error({
      message: err.message,
    });
  }
};

export default request;
export { initializeAxios, API_METHOD, ENDPOINTS };
