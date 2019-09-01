import React, { Component } from 'react';
import { withStyles, TextField, Button, Typography } from '@material-ui/core';
import classNames from 'classnames';

// import {
//   DocumentDetailDefaultProps,
//   DocumentDetailPropTypes
// } from '../../../../lib/utils/props';
import styles from './style';

class DocumentDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photo: '',
      sign: '',
    }
  }
  handleChange = field => e => {
    this.props.onChange('documentDetailData', field, e.target.value);
  }

  handleFileChange = field => e => {
    this.setState({ [field]: e.target.files[0].name });
    this.props.onChange(field, e.target.files[0]);
  }

  render() {
    const {
      classes,
      data: {
        aadhaar,
        pan,
      },
    } = this.props;
    const { photo, sign } = this.state;

    return (
      <>
        <div className={classNames(classes.row, classes.spaceBetween)}>
          <TextField
            id="aadhaar"
            label="Aadhar"
            value={aadhaar}
            onChange={this.handleChange('aadhaar')}
            type="number"
            margin="dense"
            fullWidth
            className={classes.padding}
          />

          <TextField
            id="pan"
            label="PAN"
            value={pan}
            margin="dense"
            fullWidth
            onChange={this.handleChange('pan')}
          />
        </div>

        <div className={classNames(classes.row, classes.flexStart)}>
          <Button variant="contained" component="label" style={{ marginRight: 10 }}>
            Upload Photo
            <input type="file" onChange={this.handleFileChange('photo')} style={{ display: "none" }} />
          </Button>

          <Typography>{photo}</Typography>
        </div>

        <div className={classNames(classes.row, classes.flexStart)}>
          <Button variant="contained" component="label" style={{ marginRight: 10 }}>
            Upload Signature
            <input type="file" onChange={this.handleFileChange('sign')} style={{ display: "none" }} />
          </Button>

          <Typography>{sign}</Typography>
        </div>
      </>
    );
  }
}

export default withStyles(styles)(DocumentDetail);
