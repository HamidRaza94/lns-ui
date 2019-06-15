function capitalizeAll(str) {
  return str.toUpperCase();
}

function capitalizeFirst(str){
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export { capitalizeAll, capitalizeFirst };
