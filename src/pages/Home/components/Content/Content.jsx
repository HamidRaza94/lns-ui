import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  Grid
} from '@material-ui/core';

import { SVG } from '../../../../components';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});

function Content(props) {
  const { classes } = props;

  return (
    <div>
      <Paper className={classes.root} elevation={1} square>
        <Grid container>
          <SVG
            variant="bookmark"
            style={{ fill: '#864fa6', width: 45, height: 45 }}
          />
          <Typography variant="h5" component="h3">
            WELCOME TO PUBLIC JUSTICE INSTITUTION
          </Typography>
        </Grid>
        <Typography component="p">
          Department of Consumer Affairs is one of the two Departments under the
          Ministry of Consumer Affairs, Food &amp; Public Distribution. It was
          constituted as a separate Department in June 1997 as it was considered
          necessary to have a separate Department to give a fillip to the
          nascent consumer movement in the country.
        </Typography>
        <Typography variant="h6" component="h3" style={{ marginTop: 15 }}>
          The Department has been entrusted with the following work
        </Typography>
        <List dense={true} disablePadding={true}>
          <ListItem>
            <SVG variant="yes" style={{ width: 20, height: 20 }} />
            <ListItemText primary="Single-line item" />
          </ListItem>
        </List>
      </Paper>
    </div>
  );
}

Content.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Content);
