import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { SnackBarContext } from './contexts';
import defaultValues from './defaultValues';
import { SnackBar } from '../components';

const SnackBarProvider = ({ children }) => {
  const [open, setOpen] = useState(defaultValues.snackBar.open);
  const [message, setMessage] = useState(defaultValues.snackBar.message);
  const [variant, setVariant] = useState(defaultValues.snackBar.variant);

  const openSnackBar = (values) => {
    setOpen(true);
    setMessage(values.message);
    setVariant(values.variant);
  }

  const closeSnackBar = (_, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  }

  return (
    <SnackBarContext.Provider value={{ openSnackBar }}>
      {children}
      <SnackBar
        open={open}
        message={message}
        variant={variant}
        handleClose={closeSnackBar}
      />
    </SnackBarContext.Provider>
  )
}

SnackBarProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default SnackBarProvider;
