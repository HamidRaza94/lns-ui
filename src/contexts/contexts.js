import React from 'react';

const defaultState = {
  showSnackBar : false,
  snackBarMsg : '',
  variant : 'success',
};

const SnackBarContext = React.createContext(defaultState);

export { SnackBarContext }
