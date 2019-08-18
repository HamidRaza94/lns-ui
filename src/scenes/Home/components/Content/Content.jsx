import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, Paper, Typography, Grid } from '@material-ui/core';

import { SVG } from '../../../../components';
import { content } from '../../../../cms/home';
import styles from './style';

const Content = ({ classes }) => (
  <div>
    <Paper className={classes.root} elevation={1} square>
      <Grid container>
        <SVG
          variant="bookmark"
          style={{ fill: '#864fa6', width: 45, height: 45 }}
        />
        <Typography variant="h5" component="h3">{content.heading}</Typography>
      </Grid>
      <Typography component="p">{content.description}</Typography>
    </Paper>
  </div>
)

Content.propTypes = {
  classes: PropTypes.object.isRequired,
}

Content.defaultProps = {
  classes: {},
}

export default withStyles(styles)(Content);
