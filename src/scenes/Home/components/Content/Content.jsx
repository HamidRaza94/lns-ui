import React from 'react';
import { makeStyles, Paper, Typography, Grid } from '@material-ui/core';

import { SVG } from '../../../../components';
import { home } from '../../../../cms';
import styles from './style';

const useStyles = makeStyles(styles);

const Content = () => {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.root} elevation={1} square>
        <Grid container>
          <SVG
            variant="bookmark"
            style={{ fill: '#864fa6', width: 45, height: 45 }}
          />
          <Typography variant="h5" component="h3">{home.heading}</Typography>
        </Grid>
        <Typography component="p">{home.description}</Typography>
      </Paper>
    </div>
  );
}

export default Content;
