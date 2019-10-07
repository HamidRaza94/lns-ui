import React, { Component } from 'react';
import {
  withStyles,
  Paper,
  Typography,
  TextField,
  Button,
  FormControlLabel,
  Switch,
} from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';

import style from './style';
import { DialogBox, IncidentDetail } from '../../../../components';
import { connection } from '../../../../lib/server';
import { API_METHOD, SERVER_ROUTE } from '../../../../lib/extra/constants';

class FormForMember extends Component {
  constructor(props) {
    super(props);

    this.state = {
      icon: 'none',
      isMember: false,
      isDialogBoxOpen: false,
      enrollmentId: '',
      enrollmentName: '',
      dialogBoxTitle: 'Grievance Form',
    }
  }

  componentDidUpdate = () => {
    console.log('state222 >', this.state);
  }

  checkMember = () => {
    const { isMember } = this.state;

    if (isMember) {
      this.setState({
        enrollmentId: '',
        isMember: false,
      });
    } else {
      this.setState({ isDialogBoxOpen: true });
    }
  }

  handleDisagreeDialogBox = () => {
    this.setState({
      enrollmentId: '',
      isDialogBoxOpen: false,
    });
  }

  handleCheckMember = () => {
    const { enrollmentId } = this.state;

    if (enrollmentId) {
      connection(API_METHOD.get, `${SERVER_ROUTE.enrollment}/${enrollmentId}`)
      .then(res => {
        console.log('response is ', res);
        this.setState({
          // isDialogBoxOpen: false,
          enrollmentName: res.data.data.name,
          dialogBoxTitle: `Grievance Form | ${res.data.data.name}`,
          isMember: true,
          icon: true,
        });

        const { snackBarStateUpdater } = this.props;
        snackBarStateUpdater({
          showSnackBar: true,
          variant: 'success',
          snackBarMsg: `Enrollment Name is ${res.data.data.name}`,
        });
      })
      .catch(error => {
        const { snackBarStateUpdater } = this.props;
        snackBarStateUpdater({
          showSnackBar: true,
          variant: 'error',
          snackBarMsg: 'Enrollment ID does not exist',
        });
        this.setState({ icon: false });
      });
    } else {
      this.setState({
        isDialogBoxOpen: false,
        isMember: false,
      });
    }
  }

  handleEnrollmentId = e => {
    this.setState({
      enrollmentId: e.target.value,
      enrollmentName: '',
    })
  }

  render() {
    const { isMember, isDialogBoxOpen, enrollmentId, icon } = this.state;
    const { classes } = this.props;

    return (
      <>
        <Paper style={{
          margin: '20px 200px',
          padding: 15,
        }}>
          <FormControlLabel
            control={
              <Switch
                checked={isMember}
                onChange={this.checkMember}
                value="isMember"
                color="primary"
              />
            }
            label="Are you member of Lok Niyay Sansthan"
          />
        </Paper>

        <DialogBox
          open={isDialogBoxOpen}
          title={this.state.dialogBoxTitle}
          agreeButtonLabel='Okay'
          disagreeButtonLabel='Cancel'
          agreeButtonAction={this.handleAgreeDialogBox}
          disagreeButtonAction={this.handleDisagreeDialogBox}
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <TextField
              id="enrollmentId"
              label="Enrollment Id"
              value={enrollmentId}
              fullWidth
              margin="dense"
              className={classes.field}
              onChange={this.handleEnrollmentId}
            />

            {icon !== 'none' && ( icon ? <CheckCircleIcon style={{ color: 'green' }} /> : <CancelIcon style={{ color: 'red' }} />)}
          </div>

          <Button onClick={this.handleCheckMember}>Check Enrollment ID</Button>

          <IncidentDetail
            onChange={this.props.onChange}
            data={this.props.incidentDetailData}
          />
        </DialogBox>
      </>
    );
  }
}

export default withStyles(style)(FormForMember);
