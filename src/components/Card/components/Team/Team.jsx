import React from 'react';
import { withStyles } from '@material-ui/core';

import styles from './style';
import { SVG } from '../../../SVG';

const Team = props => {
  const {
    classes,
    name,
    image,
    backgroundImage,
    jobTitle,
    facebook,
    whatsapp,
    twitter
  } = props;

  return (
    <div className={classes.card}>
      <img src={backgroundImage} alt={name} className={classes.cardImg} />
      <img src={image} alt={name} className={classes.profileImg} />
      <h1 className={classes.card_h1}>{name}</h1>
      <p className={classes.jobTitle}>{jobTitle}</p>
      {/* <p className={classes.about}>{about}</p> */}
      {/* <h4 className={classes.btn}>Contact</h4> */}
      <ul className={classes.socialMedia}>
        {facebook && (
          <li>
            <SVG variant="facebook" />
          </li>
        )}
        {whatsapp && (
          <li>
            <SVG variant="whatsapp" />
          </li>
        )}
        {twitter && (
          <li>
            <SVG variant="twitter" />
          </li>
        )}
      </ul>
    </div>
  );
};

export default withStyles(styles)(Team);
