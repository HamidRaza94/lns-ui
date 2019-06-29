import axios from 'axios';

import { config } from '../config';

const { SERVER_URL } = config;

const connection = async (method, route, data) => (
  await axios({
    method,
    url: `${SERVER_URL}/${route}`,
    data,
  })
)

const secureConnection = async (method, route, data) => (
  await axios({
    method,
    url: `${SERVER_URL}/${route}`,
    data,
  })
);

export { connection, secureConnection }
