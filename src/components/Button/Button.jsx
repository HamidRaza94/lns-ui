import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';

import styles from './style';

const Button = props => {
  const {
    classes,
    color,
    backgroundColor,
    disabled,
    style,
    value,
    ...rest
  } = props;

  return (
    <button
      type="button"
      disabled={disabled}
      className={classes.button}
      style={{ ...style, color, backgroundColor }}
      {...rest}
    >
      {value}
    </button>
  );
};

Button.defaultProps = {
  color: '',
  disabled: false,
  style: {}
};

Button.propTypes = {
  color: PropTypes.string,
  disabled: PropTypes.bool,
  style: PropTypes.objectOf(PropTypes.string),
  value: PropTypes.string.isRequired
};

export default withStyles(styles)(Button);
