import React from 'react';
import { withStyles } from '@material-ui/core';

import styles from './style';
import { Card } from '../../components';
import { BACKGROUND_FOLDER, TEAM_FOLDER } from '../../config';

const teams = [
  {
    name: 'Ashraf Ali Khilji',
    image: `${TEAM_FOLDER}/ashraf_ali_khilji.jpg`,
    backgroundImage: `${BACKGROUND_FOLDER}/1.jpg`,
    jobTitle: 'protector',
    facebook: 'fb.com',
    whatsapp: 'w.com',
    twitter: 't.com'
  },

  {
    name: 'Md Naseem Saifi',
    image: `${TEAM_FOLDER}/md_naseem_saifi.jpg`,
    backgroundImage: `${BACKGROUND_FOLDER}/1.jpg`,
    jobTitle: 'Central Deputy Director',
    facebook: 'fb.com',
    whatsapp: 'w.com',
    twitter: 't.com'
  }
];

const CentralBoard = props => {
  const { classes } = props;

  return (
    // <div className={classes.root}>
    //   <h1 className={classes.heading}>Meet the Team</h1>
    <div className={classes.cardWrapper}>
      {teams.map(
        ({
          name,
          image,
          backgroundImage,
          jobTitle,
          facebook,
          whatsapp,
          twitter
        }) => (
          <Card
            variant="team"
            name={name}
            image={image}
            backgroundImage={backgroundImage}
            jobTitle={jobTitle}
            facebook={facebook}
            whatsapp={whatsapp}
            twitter={twitter}
          />
        )
      )}
    </div>
    // </div>
  );
};

export default withStyles(styles)(CentralBoard);
