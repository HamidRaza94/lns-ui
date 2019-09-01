import React from 'react';
import PropTypes from 'prop-types';
import {
  withStyles,
  makeStyles,
  StepConnector,
} from '@material-ui/core';
import clsx from 'clsx';
import Check from '@material-ui/icons/Check';

import styles from './style';

const { stepConnector, stepIcon } = styles;

const QontoConnector = withStyles(stepConnector)(StepConnector);

const useQontoStepIconStyles = makeStyles(stepIcon);

const QontoStepIcon = (props) => {
  const classes = useQontoStepIconStyles();
  const { active, completed } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}
    >
      {completed ? <Check className={classes.completed} /> : <div className={classes.circle} />}
    </div>
  );
}

QontoStepIcon.propTypes = {
  active: PropTypes.bool,
  completed: PropTypes.bool,
};

export { QontoConnector, QontoStepIcon }
