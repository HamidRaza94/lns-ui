import React from 'react';
import PropTypes from 'prop-types';

import { SnackBar } from '../SnackBar';
import { withSnackBar } from '../../contexts';

const SuccessSnackBar = ({ showSnackBar, variant, snackBarMsg, handleClose }) => (
  <SnackBar
    open={showSnackBar}
    variant={variant}
    message={snackBarMsg}
    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
    autoHideDuration={3000}
    onClose={handleClose}
    close
  />
)

SuccessSnackBar.propTypes = {
  showSnackBar: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired,
  snackBarMsg: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired,
}

export default withSnackBar(SuccessSnackBar);
