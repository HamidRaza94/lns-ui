import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, TextField, Button, Typography } from '@material-ui/core';

import styles from '../style';
import { bytesToSize } from '../../../lib/utils/helpers'
import { documentDetail } from '../../../cms';

class DocumentDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aadhaar: true,
      pan: true,
      p: true,
      s: true,
      photo: '',
      sign: '',
      photoPreview: null,
      signPreview: null,
    }
  }

  static getDerivedStateFromProps({ fields, data: { photo, sign } }) {
    if (fields && fields.length) {
      const whichOneIsExist = {
        aadhaar: false,
        pan: false,
        p: false,
        s: false,
      }

      fields.forEach((field) => {
        whichOneIsExist[field] = true;
      });

      return whichOneIsExist;
    }

    if (photo && sign) {
      return {
        photo: (photo.name + ` (${bytesToSize(photo.size)})`),
        sign: (sign.name + ` (${bytesToSize(sign.size)})`),
        photoPreview: URL.createObjectURL(photo),
        signPreview: URL.createObjectURL(sign),
      }
    }

    if (photo) {
      return {
        photo: (photo.name + ` (${bytesToSize(photo.size)})`),
        photoPreview: URL.createObjectURL(photo),
      }
    }

    if (sign) {
      return {
        sign: (sign.name + ` (${bytesToSize(sign.size)})`),
        signPreview: URL.createObjectURL(sign),
      }
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
    const {
      aadhaar,
      pan,
      p,
      s,
      photo,
      sign,
      photoPreview,
      signPreview,
    } = this.state;
    const { classes, data } = this.props;

    return (
      <div className={classes.root}>
        {aadhaar && (
          <TextField
            id="aadhaar"
            type="number"
            label="Aadhar"
            value={data.aadhaar}
            fullWidth
            margin="dense"
            className={classes.field}
            onChange={this.handleChange('aadhaar')}
          />
        )}

        {pan && (
          <TextField
            id="pan"
            label="PAN"
            value={data.pan}
            margin="dense"
            fullWidth
            className={classes.field}
            onChange={this.handleChange('pan')}
          />
        )}

        {p && (
          <>
            <div className={classes.imageDiv}>
              <Button variant="contained" component="label" style={{ marginRight: 10 }}>
                {documentDetail.photo.label}
                <input type="file" onChange={this.handleFileChange('photo')} style={{ display: "none" }} />
              </Button>

              <Typography>{photo}</Typography>

              {photoPreview && <img alt="Pic" src={photoPreview} width={100} heigh={100} />}
            </div>

            <Typography style={{ padding: 5 }}>{documentDetail.photo.message}</Typography>
          </>
        )}

        {s && (
          <>
            <div className={classes.imageDiv}>
              <Button variant="contained" component="label" style={{ marginRight: 10 }}>
                {documentDetail.sign.label}
                <input type="file" onChange={this.handleFileChange('sign')} style={{ display: "none" }} />
              </Button>

              <Typography>{sign}</Typography>

              {signPreview && <img alt="Pic" src={signPreview} width={100} heigh={100} />}
            </div>

            <Typography style={{ padding: 5 }}>{documentDetail.sign.message}</Typography>
          </>
        )}
      </div>
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
