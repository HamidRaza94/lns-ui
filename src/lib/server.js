import axios from 'axios';

import { config } from '../config';

const { SERVER_URL } = config;

const connection = (method, route, data) => (
  new Promise((resolve, reject) => {
    axios({
      method,
      url: `${SERVER_URL}/${route}`,
      data,
    })
    .then(response => resolve(response))
    .catch(error => reject(error));
  })
);

const secureConnection = (method, route, data) => (
  new Promise((resolve, reject) => {
    axios({
      method,
      url: `${SERVER_URL}/${route}`,
      data,
    })
    .then(response => resolve(response))
    .catch(error => reject(error));
  })
);

export { connection, secureConnection }
