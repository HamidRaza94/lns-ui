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
    .then((response) => { resolve(response) })
    .catch(({ response }) => { reject(response) });
  })
);

const secureConnection = async (method, route, data) => (
  new Promise((resolve, reject) => {
    axios({
      method,
      url: `${SERVER_URL}/${route}`,
      data,
    })
    .then((response) => { resolve(response) })
    .catch(({ response }) => { reject(response) });
  })
);

export { connection, secureConnection }
