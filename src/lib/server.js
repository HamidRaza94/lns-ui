import axios from 'axios';

import { config } from '../config';

const { SERVER_URL } = config;

const connection = async (method, route, data) => (
  new Promise((resolve, reject) => {
    axios({
      method,
      url: `${SERVER_URL}/${route}`,
      data,
    })
    .then((res) => {
      resolve(res);
    })
    .catch((error) => {
      reject({
        error,
        message: 'Server Down',
        status: 404,
      });
    });
  })
);

const secureConnection = async (method, route, data) => (
  new Promise((resolve, reject) => {
    axios({
      method,
      url: `${SERVER_URL}/${route}`,
      data,
    })
    .then((res) => {
      resolve(res);
    })
    .catch((error) => {
      reject({
        error,
        message: 'Server Down',
        status: 404,
      });
    });
  })
);

export { connection, secureConnection }
