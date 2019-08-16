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

const formatedDataToTable = (data) => {
  return data.map((item) => {
    const arr = [];

    for (const key in item) {
      arr.push(item[key]);
    }

    return arr;
  })
}

export {
  getRandomNumber,
  getNextRoundRobin,
  capitalizeAll,
  capitalizeFirst,
  filtering,
  responseHandler,
  formatedDataToTable,
};
