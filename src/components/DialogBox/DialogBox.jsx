import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  makeStyles,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  CircularProgress,
} from '@material-ui/core';

import style from './style';

const useStyles = makeStyles(style);

const DialogBox = ({
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
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const classes = useStyles();

  const handleClick = actionCall => () => {
    setIsLoading(true);
    actionCall();
    setIsLoading(false);
  }

  return (
    <Dialog open={open} onClose={() => setIsLoading(false)} aria-labelledby="dialog-title" fullWidth={fullWidth}>
      <DialogTitle id="dialog-title">{title}</DialogTitle>
      <DialogContent>
        {content}
        {children}
      </DialogContent>
      <DialogActions>
        {disagreeButtonLabel && (
          <Button
            id="button-disagree"
            disabled={disableDisagreeButton}
            onClick={handleClick(disagreeButtonAction)}
            variant="contained"
            color="secondary"
          >
            {disagreeButtonLabel}
          </Button>
        )}
        <Button
          id="button-agree"
          disabled={disableAgreeButton}
          onClick={handleClick(agreeButtonAction)}
          variant="contained"
          color="primary"
          className={classes.footerPrimaryButton}
        >
          {isLoading ? <CircularProgress className={classes.circular} size={20} thickness={8} /> : agreeButtonLabel}
        </Button>
      </DialogActions>
    </Dialog>
  );
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