import React from 'react';
import { withStyles } from '@material-ui/core';

import styles from './style';
import { Card } from '../../components';
import { teams } from '../../cms';

const CentralBoard = props => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <div className={classes.cardWrapper}>
        {teams.map(team => (
          <Card
            variant="team"
            name={team.name}
            image={team.image}
            backgroundImage={team.backgroundImage}
            jobTitle={team.jobTitle}
            facebook={team.facebook}
            whatsapp={team.whatsapp}
            twitter={team.twitter}
          />
        ))}
      </div>
    </div>
  );
};

export default withStyles(styles)(CentralBoard);
