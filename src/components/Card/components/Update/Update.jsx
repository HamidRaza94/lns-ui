import React from 'react';
import PropTypes from 'prop-types';
import {
  withStyles,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  CircularProgress
} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

import styles from './style';

function Update(props) {
  const { classes, data } = props;
  const { title, isLoading, value } = data;
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card}>
      <Typography
        className={classes.title}
        variant="h5"
      >
        {title}
      </Typography>
      <CardContent className={classes.content}>
        {isLoading ? (
          <CircularProgress />
        ) : value.length ? (
          value.map(item => (
            <Typography gutterBottom>
              {bull}
              {item}
            </Typography>
          ))
        ) : (
          `No ${title} Here !`
        )}
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
        >
          More {title}
          <SendIcon className={classes.rightIcon} />
        </Button>
      </CardActions>
    </Card>
  );
}

Update.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Update);
