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
  const { classes, title, isLoading, value, style } = props;
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card} style={{ ...style.card }}>
      <Typography
        className={classes.title}
        style={{ ...style.title }}
        variant="h5"
      >
        {title}
      </Typography>
      <CardContent className={classes.content}>
        {isLoading ? (
          <CircularProgress />
        ) : value.length ? (
          value.map(item => (
            <Typography gutterBottom style={{ ...style.value }}>
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
          style={{ ...style.button }}
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
