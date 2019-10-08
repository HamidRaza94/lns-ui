import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { SnackBarContext } from './contexts';

export class SnackBarProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSnackBar : false,
      snackBarMsg : '',
      variant : 'success',
    }
  }

  snackBarStateUpdater = (updatedState) => {
    this.setState({ ...updatedState });
  };

  handleSnackBarClose = () => {
    this.setState({ showSnackBar: false, snackBarMsg: '' })
  }

  render() {
    const { children } = this.props;

    return (
      <>
        <SnackBarContext.Provider
          value={{
            ...this.state,
            snackBarStateUpdater: this.snackBarStateUpdater,
            handleClose: this.handleSnackBarClose,
          }}
        >
          {children}
        </SnackBarContext.Provider>
      </>
    );
  }
}
SnackBarProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

const withSnackBar = (WrappedComponent) => {
  const WrapSnackBarConsumer = props => (
    <SnackBarContext.Consumer>
      {({ showSnackBar, snackBarMsg, snackBarStateUpdater, handleClose, variant }) => {
        const snackBarProps = { showSnackBar, snackBarMsg, snackBarStateUpdater, handleClose, variant }
        return <WrappedComponent {...snackBarProps} {...props} />;
      }}
    </SnackBarContext.Consumer>
  )

  return WrapSnackBarConsumer;
};

export default withSnackBar;
