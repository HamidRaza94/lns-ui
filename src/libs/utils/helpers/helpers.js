import { jwtDecode } from 'jwt-decode';

export function getRandomNumber(max) {
  return Math.floor((Math.random() * max));
}

export function getNextRoundRobin(total, current) {
  return (current < total - 1) ? (current + 1) : 0;
}

export function capitalizeAll(str) {
  return str.toUpperCase();
}

export function capitalizeFirst(str){
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function filtering(data, filterBy, matchBy) {
  return data.filter(item => item[filterBy].includes(matchBy));
}

export function responseHandler(response) {
  const { status, data } = response;

  if (status === 200) {
    return data
  }

  return data;
}

export const formattedDataToTable = (data) => {
  return data.map((item) => {
    const arr = [];

    for (const key in item) {
      arr.push(item[key]);
    }

    return arr;
  })
}

export const bytesToSize = (bytes) => {
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  if (bytes === 0) return '0 Byte';
  const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
  return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
}

const ACCESS_TOKEN = 'accessToken';

export const setAccessToken = (accessToken) => {
  sessionStorage.setItem(ACCESS_TOKEN, accessToken);
};

export const getAccessToken = () => sessionStorage.getItem(ACCESS_TOKEN);

export const removeAccessToken = () => sessionStorage.removeItem(ACCESS_TOKEN);

export const getUser = () => {
  const accessToken = sessionStorage.getItem(ACCESS_TOKEN);

  if (accessToken) {
    const decodedToken = jwtDecode(accessToken);

    const { firstName, lastName, username, role } = decodedToken;

    return { firstName, lastName, username, role };
  }

  return null;
}
