import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  CircularProgress,
} from '@material-ui/core';

class DialogBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    };
  }

  handleClick = actionCall => () => {
    this.setState({
      isLoading: true,
    }, () => {
      actionCall();
      this.handleClose();
    });
  }

  handleClose = () => {
    this.setState({ isLoading: false });
  }

  render() {
    const { isLoading } = this.state;
    const {
      open,
      fullWidth,
      title,
      content,
      children,
      agreeButtonLabel,
      disagreeButtonLabel,
      agreeButtonAction,
      disagreeButtonAction,
      disableAgreeButton,
      disableDisagreeButton,
    } = this.props;

    return (
      <Dialog open={open} onClose={this.handleClose} aria-labelledby="dialog-title" fullWidth={fullWidth}>
        <DialogTitle id="dialog-title">{title}</DialogTitle>
        <DialogContent>
          {content}
          {children}
        </DialogContent>
        <DialogActions>
          {disagreeButtonLabel && (
            <Button id="button-disagree" disabled={disableDisagreeButton} onClick={this.handleClick(disagreeButtonAction)} color="primary">
              {disagreeButtonLabel}
            </Button>
          )}
          <Button id="button-agree" disabled={disableAgreeButton} onClick={this.handleClick(agreeButtonAction)} color="primary">
            {isLoading ? <CircularProgress size={20} thickness={8} /> : agreeButtonLabel}
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

DialogBox.propTypes = {
  open: PropTypes.bool.isRequired,
  fullWidth: PropTypes.bool,
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  children: PropTypes.node,
  agreeButtonLabel: PropTypes.string.isRequired,
  disagreeButtonLabel: PropTypes.string,
  agreeButtonAction: PropTypes.func,
  disagreeButtonAction: PropTypes.func,
  disableAgreeButton: PropTypes.bool,
  disableDisagreeButton: PropTypes.bool,
};

DialogBox.defaultProps = {
  open: false,
  content: '',
  fullWidth: true,
  children: '',
  disagreeButtonLabel: '',
  agreeButtonAction: () => {},
  disagreeButtonAction: () => {},
  disableAgreeButton: false,
  disableDisagreeButton: false,
}

export default DialogBox;