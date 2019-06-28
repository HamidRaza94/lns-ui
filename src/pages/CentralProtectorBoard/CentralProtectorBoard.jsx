import React from 'react';
import { withStyles } from '@material-ui/core';

import styles from './style';
import { Card } from '../../components';
import { teams } from '../../cms';

const CentralProtectorBoard = props => {
  const { classes } = props;

  return (
    <div className={classes.root}>      
      {teams.protector.map(team => (
        <Card variant="team" data={team} />
      ))}
    </div>
  );
};

export default withStyles(styles)(CentralProtectorBoard);
