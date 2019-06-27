import React from 'react';
import { withStyles } from '@material-ui/core';

import styles from './style';
import { Card } from '../../components';
import { teams } from '../../cms';

const CentralBoard = props => {
  const { classes } = props;

  return (
    <div className={classes.root}>      
      {teams.map(team => (
        <Card variant="team" data={team} />
      ))}
    </div>
  );
};

export default withStyles(styles)(CentralBoard);
