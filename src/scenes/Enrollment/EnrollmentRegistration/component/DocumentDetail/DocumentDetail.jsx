import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, TextField, Button, Typography } from '@material-ui/core';
import classNames from 'classnames';

import styles from './style';

function bytesToSize(bytes) {
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  if (bytes === 0) return '0 Byte';
  const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
  return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
}

class DocumentDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photo: '',
      sign: '',
      photoPreview: null,
      signPreview: null,
    }
  }

  static getDerivedStateFromProps({ data: { photo, sign } }) {
    if (photo && sign) {
      return {
        photo: (photo.name + ` (${bytesToSize(photo.size)})`),
        sign: (sign.name + ` (${bytesToSize(sign.size)})`),
        photoPreview: URL.createObjectURL(photo),
        signPreview: URL.createObjectURL(sign),
      }
    }

    if (photo) {
      return { photo: (photo.name + ` (${bytesToSize(photo.size)})`), photoPreview: URL.createObjectURL(photo) }
    }

    if (sign) {
      return { sign: (sign.name + ` (${bytesToSize(sign.size)})`), signPreview: URL.createObjectURL(sign) }
    }
  }

  handleChange = field => e => {
    this.props.onChange('documentDetailData', field, e.target.value);
  }

  handleFileChange = field => e => {
    this.setState({ [field]: (e.target.files[0].name + ` (${bytesToSize(e.target.files[0].size)})`) });
    this.props.onChange('documentDetailData', field, e.target.files[0]);
  }

  render() {
    const { photo, sign, photoPreview, signPreview } = this.state;
    const {
      classes,
      data: {
        aadhaar,
        pan,
      },
    } = this.props;

    return (
      <>
        <div className={classNames(classes.row, classes.spaceBetween)}>
          <TextField
            id="aadhaar"
            type="number"
            label="Aadhar"
            value={aadhaar}
            margin="dense"
            fullWidth
            onChange={this.handleChange('aadhaar')}
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

          {photoPreview && <img alt="Pic" src={photoPreview} width={100} heigh={100} />}
        </div>

        <Typography>Note: Maximum File Size is 160 kb and Supported File is .jpg, .jpeg, .png</Typography>

        <div className={classNames(classes.row, classes.flexStart)}>
          <Button variant="contained" component="label" style={{ marginRight: 10 }}>
            Upload Signature
            <input type="file" onChange={this.handleFileChange('sign')} style={{ display: "none" }} />
          </Button>

          <Typography>{sign}</Typography>

          {signPreview && <img alt="Sign" src={signPreview} width={50} height={100} />}
        </div>

        <Typography>Note: Maximum File Size is 160 kb and Supported File is .jpg, .jpeg, .png</Typography>
      </>
    );
  }
}

DocumentDetail.propTypes = {
  classes: PropTypes.object.isRequired,
  aadhaar: PropTypes.number.isRequired,
  pan: PropTypes.string.isRequired,
}

DocumentDetail.defaultProps = {
  classes: {},
  aadhaar: null,
  pan: '',
}

export default withStyles(styles)(DocumentDetail);
