import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, Stepper, Step, StepLabel, Button, Typography } from '@material-ui/core';

import styles from './style';
import { QontoConnector, QontoStepIcon } from '../../Stepper/Stepper';
import { form } from '../../../cms';

const FormPage = ({ classes, formTitle, steps, activeStep, stepContent, handleNext, handleBack }) => (
  <div className={classes.root}>
    <Typography variant="h4" align="center">{formTitle}</Typography>

    <Stepper alternativeLabel className={classes.stepper} activeStep={activeStep} connector={<QontoConnector />}>
      {steps.map(label => (
        <Step key={label}>
          <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>

    <div>
      <div className={classes.form}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {stepContent}
        </div>
      </div>
      <div className={classes.button}>
        <Button
          disabled={activeStep === 0}
          onClick={handleBack}
          className={classes.backButton}
        >
          {form.button.back}
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleNext}
        >
          {activeStep === steps.length - 1 ? form.button.finish : form.button.next}
        </Button>
      </div>
    </div>
  </div>
)

FormPage.propTypes = {
  classes: PropTypes.object.isRequired,
  formTitle: PropTypes.string.isRequired,
  steps: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeStep: PropTypes.number.isRequired,
  stepContent: PropTypes.object.isRequired,
  handleNext: PropTypes.func.isRequired,
  handleBack: PropTypes.func.isRequired,
}

FormPage.defaultProps = {
  classes: {},
  formTitle: '',
  steps: [''],
  activeStep: 0,
  stepContent: null,
  handleNext: () => {},
  handleBack: () => {},
}

export default withStyles(styles)(FormPage);
