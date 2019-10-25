import React from 'react';
import { withStyles } from '@material-ui/core';

import styles from './style';
import { ButtonDefaultProps, ButtonPropTypes } from '../../libs/utils/props';

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

Button.defaultProps = ButtonDefaultProps;
Button.propTypes = ButtonPropTypes;

export default withStyles(styles)(Button);
