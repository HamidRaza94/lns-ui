import React, { Component } from 'react';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';
import SearchIcon from '@material-ui/icons/Search';
import AssignmentIcon from '@material-ui/icons/Assignment';
import {
  withStyles,
  Paper,
  TextField,
  Button,
  Fab,
} from '@material-ui/core';

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

  // componentDidUpdate = () => {
  //   console.log('state222 >', this.state);
  // }

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
        {/* <Paper className={classes.root}>
          <Fab variant="extended" color="primary" aria-label="add" className={classes.margin}>
            <SearchIcon className={classes.extendedIcon} />
            Search Your Complaint
          </Fab> */}
          <Fab variant="extended" color="primary" aria-label="add" className={classes.margin}>
            <AssignmentIcon className={classes.extendedIcon} />
            Registered Member Lodge Here!
          </Fab>
        {/* </Paper> */}

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
