import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  withStyles,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@material-ui/core';

import styles from '../style';
import { communicationDetail } from '../../../cms';
import { STATES } from '../../../libs/extra/constants';

class CommunicationDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: true,
      phone: true,
      policeStation: true,
      state: true,
      pincode: true,
      address: true,
    }
  }

  static getDerivedStateFromProps({ fields }) {
    if (fields && fields.length) {
      const whichOneIsExist = {
        email: false,
        phone: false,
        policeStation: false,
        state: false,
        pincode: false,
        address: false,
      }

      fields.forEach((field) => {
        whichOneIsExist[field] = true;
      });

      return whichOneIsExist;
    }
  }

  handleChange = field => e => {
    this.props.onChange('communicationDetailData', field, e.target.value);
  }

  render() {
    const { classes, data } = this.props;
    const {
      email,
      phone,
      policeStation,
      state,
      pincode,
      address,
    } = this.state;

    return (
      <div className={classes.root}>
        {phone && (
          <TextField
            id="phone"
            type="number"
            label={communicationDetail.phone.label}
            value={data.phone}
            fullWidth
            margin="dense"
            className={classes.field}
            onChange={this.handleChange('phone')}
          />
        )}

        {email && (
          <TextField
            id="email"
            type="email"
            label={communicationDetail.email.label}
            value={data.email}
            fullWidth
            margin="dense"
            className={classes.field}
            onChange={this.handleChange('email')}
          />
        )}

        {address && (
          <TextField
            id="address"
            label={communicationDetail.address.label}
            value={data.address}
            fullWidth
            margin="dense"
            className={classes.field}
            onChange={this.handleChange('address')}
          />
        )}

        {policeStation && (
          <TextField
            id="policeStation"
            label={communicationDetail.policeStation.label}
            value={data.policeStation}
            fullWidth
            margin="dense"
            className={classes.field}
            onChange={this.handleChange('policeStation')}
          />
        )}

        {state && (
          <FormControl fullWidth className={classes.field}>
            <InputLabel htmlFor="state-select">
              {communicationDetail.state.label}
            </InputLabel>
            <Select
              value={data.state}
              onChange={this.handleChange('state')}
              inputProps={{
                name: 'state',
                id: 'state-select'
              }}
            >
              {STATES.map(item => <MenuItem key={item} value={item}>{item}</MenuItem>)}
            </Select>
          </FormControl>
        )}

        {pincode && (
          <TextField
            id="pincode"
            label={communicationDetail.pincode.label}
            type="number"
            value={data.pincode}
            fullWidth
            className={classes.field}
            onChange={this.handleChange('pincode')}
          />
        )}
      </div>
    );
  }
}

CommunicationDetail.propTypes = {
  classes: PropTypes.object.isRequired,
  email: PropTypes.string,
  phone: PropTypes.number,
  policeStation: PropTypes.string,
  state: PropTypes.string,
  pincode: PropTypes.number,
  address: PropTypes.string,
  fields: PropTypes.arrayOf(PropTypes.string),
}

CommunicationDetail.defaultProps = {
  classes: {},
}

export default withStyles(styles)(CommunicationDetail);
