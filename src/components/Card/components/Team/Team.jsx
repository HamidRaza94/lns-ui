import React from 'react';
import { withStyles, Typography } from '@material-ui/core';

import styles from './style';
import { SVG } from '../../../SVG';
import { capitalizeAll } from '../../../../lib/utils/helpers';

const Team = props => {
  const { classes, data } = props;
  const { name, image, rank, facebook, whatsapp, twitter} = data;

  return (
    <div className={classes.root}>
      <div className={classes.team}>
        <img src={image} alt="" className={classes.image} />
        <div className={classes.name}>{capitalizeAll(name)}</div>
      </div>
      <div className={classes.description}>
        <span className={classes.span}></span>
        <Typography variant="h5" className={classes.designation}>{rank}</Typography>
        <div className={classes.socialDiv}>
          { facebook && (
            <div className={classes.social}>
              <div className={classes.socialTitle}>
                <SVG variant="facebook" style={{ width: 25, height: 25 }} />
                <Typography align="left" style={{ color: 'white' }}>Facebook</Typography>
              </div>
              <Typography align="right" style={{ color: 'white' }}>{facebook}</Typography>
            </div>
          )}
          { whatsapp && (
            <div className={classes.social}>
              <div className={classes.socialTitle}>
                <SVG variant="whatsapp" style={{ width: 25, height: 25 }} />
                <Typography align="left" style={{ color: 'white' }}>Whatsapp</Typography>
              </div>
              <Typography align="right" style={{ color: 'white' }}>{whatsapp}</Typography>
            </div>
          )}
          { twitter && (
            <div className={classes.social}>
              <div className={classes.socialTitle}>
                <SVG variant="twitter" style={{ width: 25, height: 25 }} />
                <Typography align="left" style={{ color: 'white' }}>Twitter</Typography>
              </div>
              <Typography align="right" style={{ color: 'white' }}>{twitter}</Typography>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(Team);
