function getRandomNumber(max) {
  return Math.floor((Math.random() * max));
}

function getNextRoundRobin(total, current) {
  return (current < total - 1) ? (current + 1) : 0;
}

function capitalizeAll(str) {
  return str.toUpperCase();
}

function capitalizeFirst(str){
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function filtering(data, filterBy, matchBy) {
  return data.filter(item => item[filterBy].includes(matchBy));
}

function responseHandler(response) {
  const { status, data } = response;

  if (status === 200) {
    return data
  }

  return data;
}

const formattedDataToTable = (data) => {
  return data.map((item) => {
    const arr = [];

    for (const key in item) {
      arr.push(item[key]);
    }

    return arr;
  })
}

const bytesToSize = (bytes) => {
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  if (bytes === 0) return '0 Byte';
  const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
  return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
}

export {
  getRandomNumber,
  getNextRoundRobin,
  capitalizeAll,
  capitalizeFirst,
  filtering,
  responseHandler,
  formattedDataToTable,
  bytesToSize,
};
