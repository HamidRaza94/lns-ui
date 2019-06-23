import React, { Component } from 'react';
import {
  withStyles,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@material-ui/core';

// import {
//   CommunicationDetailDefaultProps,
//   CommunicationDetailPropTypes
// } from '../../../../lib/utils/props';
import { STATES } from '../../../../cms/constants';
import styles from './style';

class CommunicationDetail extends Component {
  handleChange = field => e => {
    this.props.onChange(field, e.target.value);
  }

  render() {
    const {
      classes,
      email,
      phone,
      policeStation,
      state,
      pincode,
      address,
    } = this.props;

    return (
      <>
        <TextField
          id="email"
          label="Email"
          type="email"
          name="email"
          value={email}
          margin="dense"
          onChange={this.handleChange('email')}
        />

        <TextField
          id="phone"
          label="Phone"
          value={phone}
          onChange={this.handleChange('phone')}
          type="number"
          margin="dense"
        />

        <TextField
          id="policeStation"
          label="Police Station"
          value={policeStation}
          margin="dense"
          onChange={this.handleChange('policeStation')}
        />

        <FormControl>
          <InputLabel htmlFor="state-select">State</InputLabel>
          <Select
            value={state}
            onChange={this.handleChange('state')}
            inputProps={{
              name: 'state',
              id: 'state-select'
            }}
          >
            {STATES.map(item => (
              <MenuItem value={item}>{item}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <TextField
          id="pincode"
          label="Pincode"
          value={pincode}
          onChange={this.handleChange('pincode')}
          type="number"
          margin="dense"
        />

        <TextField
          id="address"
          label="Address"
          multiline
          value={address}
          onChange={this.handleChange('address')}
          margin="dense"
        />
      </>
    );
  }
}

// PersonalDetail.defaultProps = CommunicationDetailDefaultProps;
// PersonalDetail.propTypes = CommunicationDetailPropTypes;

export default withStyles(styles)(CommunicationDetail);
