import axios from 'axios';

import { config } from '../config';

const { SERVER_URL } = config;

const connection = async (method, api, data) => (
  await axios({
    method,
    url: `${SERVER_URL}/${api}`,
    data,
  })
);

const secureConnection = async (method, api, data) => (
  await axios({
    method,
    url: `${SERVER_URL}/${api}`,
    data,
  })
);

export { connection, secureConnection }
