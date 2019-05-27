import React from 'react';
import PropTypes from 'prop-types';

import styles from './style';

const { baseStyle, buttonStyle } = styles;

const Button = props => {
  const { color, disabled, style, value, ...rest } = props;

  return (
    <div style={{ ...baseStyle }}>
      <button
        type="button"
        disabled={disabled}
        style={{ ...buttonStyle, ...style, color }}
        {...rest}
      >
        {value}
      </button>
    </div>
  );
};

Button.defaultProps = {
  color: 'default',
  disabled: false,
  style: {}
};

Button.propTypes = {
  color: PropTypes.string,
  disabled: PropTypes.bool,
  style: PropTypes.objectOf(PropTypes.string),
  value: PropTypes.string.isRequired
};

export default Button;
