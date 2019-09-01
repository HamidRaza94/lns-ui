import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles, Snackbar, IconButton, SnackbarContent } from '@material-ui/core';
import { Close, Warning, CheckCircle, Info } from '@material-ui/icons';
import ErrorIcon from '@material-ui/icons/Error';

import styles from './styles';

const variantIcon = {
  success: CheckCircle,
  warning: Warning,
  error: ErrorIcon,
  info: Info,
}

const ContentWrapper = (props) => {
  const { classes, className, message, onClose, variant, action, ...rest } = props;
  const Icon = variantIcon[variant];

  return (
    <SnackbarContent
      className={classNames(classes[variant], className)}
      aria-describedby="client-snackbar"
      message={(
        <span id="client-snackbar" className={classes.message}>
          <Icon className={classNames(classes.icon, classes.iconVariant)} />
          {message}
        </span>
      )}
      action={action}
      {...rest}
    />
  )
}

const SnackbarContentWrapper = withStyles(styles)(ContentWrapper);

ContentWrapper.propTypes = {
  open: PropTypes.bool.isRequired,
  autoHideDuration: PropTypes.number.isRequired,
  onClose: PropTypes.func.isRequired,
  ContentProps: PropTypes.element.isRequired,
  message: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
  TransitionComponent: PropTypes.element.isRequired,
  className: PropTypes.element.isRequired,
  anchorOrigin: PropTypes.element.isRequired,
  action: PropTypes.element,
  variant: PropTypes.oneOf(['success', 'warning', 'error', 'info']).isRequired,
}

const SnackBar = (props) => {
  const {
    autoHideDuration,
    onClose,
    ContentProps,
    action,
    classes,
    TransitionComponent,
    variant,
    ...rest
  } = props;

  const additionalProps = {}

  if (action !== false) {
    additionalProps.action = action || [
      <IconButton
        key="close"
        aria-label="Close"
        color="inherit"
        className={classes.close}
        onClick={onClose}
      >
        <Close />
      </IconButton>,
    ];
  }

  if ((autoHideDuration !== false)) additionalProps.autoHideDuration = autoHideDuration || 6000;
  if (TransitionComponent) additionalProps.TransitionComponent = TransitionComponent;

  let { anchorOrigin, message } = props;

  message = message || <span id="message-id">.</span>
  anchorOrigin = anchorOrigin || {
    vertical: 'bottom',
    horizontal: 'left',
  }

  return (
    <Snackbar
      id="snackbar"
      {...rest}
      {...additionalProps}
      onClose={onClose}
      anchorOrigin={anchorOrigin}
      ContentProps={ContentProps || { 'aria-describedby': 'message-id' }}
      message={message}
    >
      {variant && (
        <SnackbarContentWrapper
          onClose={onClose}
          variant={variant}
          message={message}
          {...additionalProps}
        />
      )}
    </Snackbar>
  )
}

SnackBar.propTypes = {
  open: PropTypes.bool,
  autoHideDuration: PropTypes.number,
  onClose: PropTypes.func,
  ContentProps: PropTypes.element,
  message: PropTypes.node,
  classes: PropTypes.object,
  TransitionComponent: PropTypes.element,
  className: PropTypes.element,
  anchorOrigin: PropTypes.element,
  action: PropTypes.element,
  variant: PropTypes.oneOf(['success', 'warning', 'error', 'info']),
}

SnackBar.defaultProps = {
  open: false,
  autoHideDuration: null,
  onClose: null,
  ContentProps: null,
  message: null,
  classes: null,
  TransitionComponent: null,
  className: null,
  anchorOrigin: null,
  variant: null,
}

export default withStyles(styles)(SnackBar);
