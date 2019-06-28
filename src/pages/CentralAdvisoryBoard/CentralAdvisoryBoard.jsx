import React from 'react';
import { withStyles } from '@material-ui/core';

import styles from './style';
import { Card } from '../../components';
import { teams } from '../../cms';

const CentralAdvisoryBoard = props => {
  const { classes } = props;

  return (
    <div className={classes.root}>      
      {teams.advisory.central.map(team => (
        <Card variant="team" data={team} />
      ))}
    </div>
  );
};

export default withStyles(styles)(CentralAdvisoryBoard);
