import React from 'react';
import PropTypes from 'prop-types';

import { SnackBar } from '../SnackBar';
import { withSnackBar } from '../../contexts';

const SuccessSnackBar = ({ showSnackBar, snackBarMsg, handleClose, variant }) => (
  <SnackBar
    message={snackBarMsg}
    open={showSnackBar}
    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
    variant={variant}
    autoHideDuration={3000}
    onClose={handleClose}
    close
  />
)

SuccessSnackBar.propTypes = {
  showSnackBar: PropTypes.bool.isRequired,
  snackBarMsg: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired,
}

export default withSnackBar(SuccessSnackBar);
