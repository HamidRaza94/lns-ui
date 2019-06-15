import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
  withStyles,
  Snackbar,
  SnackbarContent,
  IconButton,
} from '@material-ui/core';
import {
  CheckCircle,
  Warning,
  Error,
  Info,
  Close,
} from '@material-ui/icons';


import styles from './styles';

export const SnackBarContext = React.createContext();

class SnackBarProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      message: '',
      status: '',
    };
  }

  getIcon = (status) => {
    const { classes } = this.props;
    switch (status) {
    case 'success': return (<CheckCircle className={classNames(classes.icon, classes.iconVariant)} />);
    case 'Warning': return (<Warning className={classNames(classes.icon, classes.iconVariant)} />);
    case 'error': return (<Error className={classNames(classes.icon, classes.iconVariant)} />);
    case 'info': return (<Info className={classNames(classes.icon, classes.iconVariant)} />);
    default: return null;
    }
  }

  openSnackBar = (message, status) => {
    this.setState({
      message,
      status,
      open: true,
    });
  }

  closeSnackBar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({ open: false });
  };

  render() {
    const { open, message, status } = this.state;
    const { classes, children } = this.props;
    return (
      <>
        <SnackBarContext.Provider value={this.openSnackBar}>
          { children }
        </SnackBarContext.Provider>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={open}
          autoHideDuration={5000}
          onClose={this.closeSnackBar}
        >
          <SnackbarContent
            className={classNames(classes[status], classes.margin)}
            aria-describedby="query-snackbar"
            message={(
              <span id="query-snackbar" className={classes.message}>
                {this.getIcon(status)}
                {message}
              </span>
            )}
            action={[
              <IconButton
                key="close"
                aria-label="Close"
                color="inherit"
                className={classes.close}
                onClick={this.closeSnackBar}
              >
                <Close className={classes.icon} />
              </IconButton>,
            ]}
          />
        </Snackbar>
      </>
    );
  }
}
SnackBarProvider.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  children: PropTypes.node.isRequired,
};

export default withStyles(styles)(SnackBarProvider);
