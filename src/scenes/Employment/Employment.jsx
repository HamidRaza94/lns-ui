import React, { Component } from 'react';
import {
  withStyles,
  Button,
  Typography,
  TextField,
  Radio,
  RadioGroup,
  FormLabel,
  FormControlLabel,
  FormControl,
} from '@material-ui/core';

import styles from './style';
import { employment } from '../../cms';
import { capitalizeAll } from '../../libs/utils/helpers';
import { connection } from '../../libs/server';
import { donateSchema } from './validation';
import { SEX, MARITAL_STATUS } from '../../cms/constants';

class Employment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        name: '',
        fatherName: '',
        sex: '',
        maritalStatus: '',
        dateOfBirth: '',
        aadhaar: '',
        pan: '',
        address: '',
        phone: '',
        place: '',
      },
    };
  }

  handleSubmitData = async () => {
    try {
      const response = await connection('post', 'donate', this.state.data);
      // console.log('.....<<<<', response);
      alert(response.data.message);
      this.handleResetState();
    } catch (err) {
      console.log(err.message);
      alert(err.message);
    }
  }

  handleChange = field => e => {
    let data;

    if (field === 'pan') {
      data = capitalizeAll(e.target.value);
    } else {
      data = e.target.value;
    }

    this.setState({
      data: {
        [field]: data
      },
    });
  }

  handleIsValid = () => {  
    return donateSchema.isValidSync(this.state.data, { abortEarly: false });
  }

  handleResetState = () => {
    this.setState({
      data: {
        name: '',
        fatherName: '',
        sex: '',
        maritalStatus: '',
        dateOfBirth: '',
        aadhaar: '',
        pan: '',
        address: '',
        phone: '',
        place: '',
      },
    });
  }

  render() {
    const { classes } = this.props;
    const {
      data: {
        name,
        fatherName,
        sex,
        maritalStatus,
        dateOfBirth,
        aadhaar,
        pan,
        address,
        phone,
        place,
      },
    } = this.state;

    return (
      <div className={classes.root}>
        <Typography variant="h4" align="center">
          {employment.title}
        </Typography>
        <div className={classes.row} style={{ padding: '10px 0px' }}>
          <TextField
            id="name"
            // error={hasErrors.name}
            // helperText={getErrors.name}
            label="Name"
            value={name}
            margin="dense"
            fullWidth
            className={classes.padding}
            onChange={this.handleChange('name')}
            // onBlur={this.handleValidation('name')}
          />

          <TextField
            id="fatherName"
            // error={hasErrors.fatherName}
            // helperText={getErrors.fatherName}
            label="Father Name"
            value={fatherName}
            margin="dense"
            fullWidth
            onChange={this.handleChange('fatherName')}
          />
        </div>

        <FormControl component="fieldset" style={{ padding: '10px 0px' }}>
          <FormLabel component="legend">Sex</FormLabel>
          <RadioGroup
            aria-label="position"
            name="position"
            value={sex}
            onChange={this.handleChange('sex')}
            row
          >
            {SEX.map(item => (
              <FormControlLabel
                key={item}
                value={item}
                control={<Radio color="primary" />}
                label={item}
              />
            ))}
          </RadioGroup>
        </FormControl>

        <FormControl component="fieldset" style={{ padding: '10px 0px' }}>
          <FormLabel component="legend">Marital Status</FormLabel>
          <RadioGroup
            aria-label="position"
            name="position"
            value={maritalStatus}
            onChange={this.handleChange('maritalStatus')}
            row
          >
            {MARITAL_STATUS.map(item => (
              <FormControlLabel
                key={item}
                value={item}
                control={<Radio color="primary" />}
                label={item}
              />
            ))}
          </RadioGroup>
        </FormControl>

        <TextField
          id="address"
          // error={hasErrors.address}
          // helperText={getErrors.address}
          label="Address"
          multiline
          value={address}
          onChange={this.handleChange('address')}
          // margin="dense"
          fullWidth
        />

        <div className={classes.row} style={{ padding: '10px 0px' }}>
          <TextField
            id="phone"
            // error={hasErrors.phone}
            // helperText={getErrors.phone}
            label="Phone"
            value={phone}
            onChange={this.handleChange('phone')}
            type="number"
            // margin="dense"
            className={classes.padding}
            fullWidth
          />

          <TextField
            id="dateOfBirth"
            // error={hasErrors.dateOfBirth}
            // helperText={getErrors.dateOfBirth}
            label="Date Of Birth"
            value={dateOfBirth}
            type="date"
            fullWidth
            className={classes.padding}
            onChange={this.handleChange('dateOfBirth')}
            InputLabelProps={{
              shrink: true
            }}
          />

          <TextField
            id="aadhaar"
            // error={hasErrors.aadhaar}
            // helperText={getErrors.aadhaar}
            label="Aadhar"
            value={aadhaar}
            onChange={this.handleChange('aadhaar')}
            type="number"
            fullWidth
          />
        </div>

        <div className={classes.row} style={{ padding: '10px 0px' }}>
          <TextField
            id="aadhaar"
            // error={hasErrors.name}
            // helperText={getErrors.name}
            label="Aadhaar"
            value={aadhaar}
            margin="dense"
            fullWidth
            className={classes.padding}
            onChange={this.handleChange('aadhaar')}
            // onBlur={this.handleValidation('name')}
          />

          <TextField
            id="pan"
            // error={hasErrors.fatherName}
            // helperText={getErrors.fatherName}
            label="PAN"
            value={pan}
            margin="dense"
            fullWidth
            onChange={this.handleChange('pan')}
          />
        </div>

        <TextField
          id="place"
          label="Place"
          value={place}
          margin="dense"
          onChange={this.handleChange('place')}
        />

        <div className={classes.button}>
          <Button variant="contained" color="primary">
            {employment.buttonLabel}
          </Button>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Employment);
