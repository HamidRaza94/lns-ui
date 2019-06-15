import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  Grid,
  Button
} from '@material-ui/core';

import { SVG } from '../../../../components';
import { content } from '../../../../cms/home';

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
            {content.heading}
          </Typography>
        </Grid>
        <Typography component="p">{content.description}</Typography>
        <Typography variant="h6" component="h3" style={{ marginTop: 15 }}>
          {content.biologueHeading}
        </Typography>
        <List dense={true} disablePadding={true}>
          {content.biologues.map((biologue, index) => {
            if (index < 6) {
              return (
                <ListItem>
                  <SVG variant="yes" style={{ width: 20, height: 20 }} />
                  <ListItemText style={{ fontSize: 13 }} primary={biologue} />
                </ListItem>
              );
            }

            return (<></>);
          })}
        </List>
        <Button variant="contained" style={{ backgroundColor: '#cfcfcf' }}>
          {content.button.text} ->
        </Button>
      </Paper>
    </div>
  );
}

Content.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Content);
