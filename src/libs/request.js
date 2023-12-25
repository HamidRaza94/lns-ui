import axios from 'axios';

import config from '../config';
import { API_METHOD, ENDPOINTS } from '../libs/extra/constants';

const { lnsServiceUrl } = config;

let axiosInstance;

const initializeAxios = () => {
  axiosInstance = axios.create({
    baseURL: lnsServiceUrl,
  });
};

const request = async (method, endpoint, { data = {}, params = {} } = {}) => {
  try {
    const response = await axiosInstance({ method, url: endpoint, params, data });

    if (response?.data?.data) {
      return response.data.data;
    }

    if (response?.data) {
      return response.data;
    }

    return response;
  } catch (err) {
    throw new Error(err);
  }
};

export default request;
export { initializeAxios, API_METHOD, ENDPOINTS };
